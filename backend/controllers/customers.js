const Customer = require("../models/customers");
const Company = require("../models/company");

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
    const newCustomer = await customer.save();
    relatedCompany.customers.push(customer._id);
    relatedCompany.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find()
    res.status(200).json(customers)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCustomer = async (req, res) => {
  const customerId = req.params.customerId

  try {
    const customer = await Customer.find({_id : customerId})
    res.status(200).json(customer)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCustomer,
  getCustomers,
  getCustomer
};
