const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const newCompany = (req, res) => {
    const msg = {
        to: req.body.mail,
        from: "giacomo.bartoli@me.com",
        subject: "Your company registration is almost done",
        text: "Click on the following link to confirm your registration: http://localhost:3000/company/login?token=" + req.body.token,
        html: `Click on the following link to confirm your registration: <a href="http://localhost:3000/company/login?token=${req.body.token}">Confirm registration</a>`,
    };
    sgMail
        .send(msg)
        .then(() => {
            res.status(201).json({message: 'Email sent', token: req.body.token});
        })
        .catch((error) => {
            res.status(500).json(error.message);
        });
};

const confirmRegistration = (req, res) => {
    console.log(req.user.email);
    const msg = {
        to: req.user.email,
        from: "giacomo.bartoli@me.com",
        subject: "Welcome aboard, your company registration is done",
        text: "Company registration successfully done",
        html: `Company registration successfully done`,
    };
    sgMail
        .send(msg)
        .then(() => {
            res.status(201).json({message: 'Registration confirmed successfully'})
        })
        .catch((error) => {
            res.status(500).json(error.message);
        });
};

module.exports = {
    newCompany,
    confirmRegistration
}