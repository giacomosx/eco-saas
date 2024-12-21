const Company = require("../models/company");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const companyRegister = async (req, res, next) => {
    const {vatNumber, mail, password} = req.body;

    try {
        const companyVAT = await Company.findOne({vatNumber});
        if (companyVAT) {
            return res.status(400).json({message: "A company with this VAT already exist"});
        }

        const companyMail = await Company.findOne({mail});
        if (companyMail) {
            return res.status(400).json({message: "A company with this email already exist"});
        }

        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) return res.status(500).json(err);

            try {
                const newCompany = new Company({
                    ...req.body,
                    password: hash,
                });

                await newCompany.save();
                const token = await jwt.sign({ID: newCompany._id, email: mail},
                    process.env.JWT_SECRET_KEY,
                    {expiresIn: '15m'});

                req.body.token = token;

                next()
            } catch (e) {
                res.status(400).json({message: e.message});
            }
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const companyLogin = async (req, res) => {
    const {mail, password} = req.body;
    try {
        const company = await Company.findOne({mail})
        if (!company) return res.status(401).json({message: "Invalid email"});

        if (!company.confirmed) return res.status(401).json({message: "You must to verify your email first"})

        const passwordMatch = await bcrypt.compare(password, company.password)
        if (!passwordMatch) return res.status(401).json({message: "Invalid password"});

        const token = jwt.sign({companyId: company._id, mail},
            process.env.JWT_SECRET_KEY,
            {expiresIn: '3h'});

        const companyData = {
            ID: company._id,
            name: company.name,
            email: company.mail
        }

        res.status(200).json({token, companyData});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const confirmCompany = async (req, res, next) => {
    try {
        console.log(req.user);
        const companyExist = await Company.findById(req.user.ID);
        if (!companyExist) return res.status(401).json({message: "No Companies with this ID"});

        const company = await Company.findByIdAndUpdate(req.user.ID, {
            confirmed: true
        }, {new: true});

        next()

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    companyRegister,
    companyLogin,
    confirmCompany,
};
