const express = require("express");
const company = express.Router();
const fieldsValidation = require('../middlewares/companyValidator')
const controller = require("../controllers/company");

company.route("/:id").get(controller.getCompanyInfo);
company.route("/").get(controller.getCompanies);
company.route("/").post(fieldsValidation, controller.createCompany);

module.exports = company;
