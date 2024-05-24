const express = require('express')
const customer = express.Router()
const controller = require('../controllers/customers')
const fieldsValidation = require('../middlewares/validators/customersValidator')

customer.route('/').get(controller.getCustomers)
customer.route('/:customerId').get(controller.getCustomer)
customer.route('/create').post(fieldsValidation, controller.createCustomer)

customer.route('/edit/:customerId').put(fieldsValidation, controller.editCustomer)

customer.route('/delete/:customerId').delete(controller.deleteCustomer)

module.exports = customer