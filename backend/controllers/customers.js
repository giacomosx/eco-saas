const Customer = require("../models/customers");
const Company = require('../models/company')

const createCustomer = async (req, res) => {
  const {
    name,
    address,
    vatNumber,
    phone,
    mail,
    SDI,
    pec,
    localUnit,
    hours,
    referent,
    company,
  } = req.body;

  try {
    const customer = new Customer({
      name,
      address,
      vatNumber,
      phone,
      mail,
      SDI,
      pec,
      localUnit,
      hours,
      referent,
      company,
    });
    
    const relatedCompany = await Company.findById(customer.company);
    const newCustomer = await user.save();
    relatedCompany.customers.push(customer._id);
    relatedCompany.save();
    res.status(201).json(newCustomer)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = createCustomer