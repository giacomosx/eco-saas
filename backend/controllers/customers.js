const Customer = require("../models/customers");
const Company = require("../models/company");

const createCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);

    const relatedCompany = await Company.findById(customer.company);
    const newCustomer = await customer.save();
    relatedCompany.customers.push(customer._id);
    relatedCompany.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const editCustomer = async (req, res) => {
  const customerId = req.params.customerId;
  const customerToEdit = req.body;

  try {

    const customerExist = await Customer.findById(customerId)

    if (!customerExist) {
      throw new Error("Customer id doesn't exist")
    }

    const editedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      customerToEdit,
      { new: true }
    );
    res.status(201).json(editedCustomer);
  } catch (error) {
    res.status(404).json({status_code: 404, errors: error.message})
  }
};

const deleteCustomer = async (req, res) => {
  const customerId = req.params.customerId;

  try {
    const customer = await Customer.findById(customerId);

    if (!customer) {
      throw new Error("Customer id doesn't exist")
    }

    const relatedCompany = await Company.findById(customer.company)
    const deletedCustomer = await Customer.findByIdAndDelete(customerId);
    relatedCompany.customers.pull(customer._id);
    relatedCompany.save();

    res.status(201).json(deletedCustomer);
  } catch (error) {
    res.status(404).json({status_code: 404, message: error.message})
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCustomer = async (req, res) => {
  const customerId = req.params.customerId;

  try {
    const customer = await Customer.find({ _id: customerId });
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCustomer,
  editCustomer,
  deleteCustomer,
  getCustomers,
  getCustomer,
};
