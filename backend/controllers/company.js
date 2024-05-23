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
      password,
    });

    const newCompany = await company.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCompanyInfo = async (req, res) => {
  const companyId = req.params.companyId;


  try {
    const companyInfo = await Company.findById(companyId)
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

const getCustomersByCompany = async (req, res) => {
  const companyId = req.params.companyId;

  try {
    const customers = await Company.findById(companyId)
      .select("customers")
      .populate("customers");

    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsersByCompany = async (req, res) => {
  const companyId = req.params.companyId;

  try {
    const users = await Company.findById(companyId)
      .select("users")
      .populate("users");

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRdoByCompany = async (req, res) => {
  const companyId = req.params.companyId;

  try {
    const allRdo = await Company.findById(companyId)
      .select("rdo")
      .populate("rdo");

    res.status(200).json(allRdo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCompany,
  getCompanyInfo,
  getCompanies,
  getCustomersByCompany,
  getUsersByCompany,
  getRdoByCompany
};
