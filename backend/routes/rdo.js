const express = require('express')
const rdo = express.Router()
const fieldsValidation = require('../middlewares/validators/rdoValidator')
const controller = require('../controllers/rdo')

rdo.route('/').get(controller.getAllRdo)
rdo.route('/:rdoId').get(controller.getRdoById)

rdo.route('/create').post(fieldsValidation, controller.createRdo)

module.exports = rdo