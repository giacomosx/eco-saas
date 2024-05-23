const express = require("express");
const company = express.Router();
const fieldsValidation = require('../middlewares/validators/companyValidator')
const controller = require("../controllers/company");

company.route("/").get(controller.getCompanies);
company.route("/:companyId").get(controller.getCompanyInfo);
company.route("/:companyId/customers").get(controller.getCustomersByCompany);
company.route("/:companyId/users").get(controller.getUsersByCompany);

company.route("/").post(fieldsValidation, controller.createCompany);

module.exports = company;
