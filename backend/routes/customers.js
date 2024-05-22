const express = require('express')
const customer = express.Router()
const controller = require('../controllers/customers')
const fieldsValidation = require('../middlewares/customersValidator')

customer.route('/:companyId/').get(controller.getCustomers)
customer.route('/create').post(fieldsValidation, controller.createCustomer)

module.exports = customer