const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company');
const companyValidator = require('../middlewares/validators/companyValidator');
const sendEmail = require('../utils/sendEmail');
const tokenController = require('../middlewares/tokenController');

router.post('/company/register', companyValidator,companyController.companyRegister, sendEmail.newCompany)
router.post('/company/login', companyController.companyLogin)
router.patch('/company/verify', tokenController.verifyToken, companyController.confirmCompany, sendEmail.confirmRegistration);

module.exports = router;