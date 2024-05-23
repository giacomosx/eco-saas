const express = require('express')
const customer = express.Router()
const controller = require('../controllers/customers')
const fieldsValidation = require('../middlewares/validators/customersValidator')

customer.route('/').get(controller.getCustomers)
customer.route('/:customerId').get(controller.getCustomer)
customer.route('/create').post(fieldsValidation, controller.createCustomer)

module.exports = customer