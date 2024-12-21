const { body, validationResult } = require("express-validator");

const fieldsValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Insert a company name")
    .isString()
    .withMessage("Must be a string"),

  body("address")
    .trim()
    .notEmpty()
    .withMessage("Insert an address")
    .isString()
    .withMessage("Must be a string"),

  body("vatNumber")
    .trim()
    .notEmpty()
    .withMessage("Insert a VAT number")
    .isVAT("IT")
    .withMessage("Insert a valid VAT Number"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Insert a mobile phone number")
    .isMobilePhone()
    .withMessage("Must be a valid mobile phone number"),

  body("mail")
    .trim()
    .notEmpty()
    .withMessage("Insert an email")
    .isEmail()
    .withMessage("Insert a valid email"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      next({ status_code: 400, errors: errors.array() });
    }

    next();
  },
];

module.exports = fieldsValidation;
