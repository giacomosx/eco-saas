const Company = require("../models/company");

const createCompany = async (req, res) => {
  const { name, address, vatNumber, phone, mail, password } = req.body;

  try {
    const company = new Company({
      name,
      address,
      vatNumber,
      phone,
      mail,
      password
    });

    const newCompany = await company.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCompanyInfo = async (req, res) => {
  const id = req.params.id;
  try {
    const companyInfo = await Company.findById(id).populate(['users', 'customers']);
    res.status(200).json(companyInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCompanies = async (req, res) => {
  try {
    const companyList = await Company.find();
    res.status(200).json(companyList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCompany,
  getCompanyInfo,
  getCompanies
};
