const express = require('express')
const user = express.Router()
const fieldsValidation = require('../middlewares/validators/usersValidator')
const controller = require('../controllers/users')

user.route('/').get(controller.getAllUsers)
user.route('/:id').get(controller.getUser)

user.route('/create').post(fieldsValidation,controller.createUser)

module.exports = user