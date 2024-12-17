const express = require('express');
const rfq = express.Router();
const controller = require('../controllers/rfq');

rfq.route('/').get(controller.readAllRfq)
rfq.route('/create').post(controller.createRfq)
rfq.route('/change-status/:id').patch(controller.changeRfqStatus)


module.exports = rfq