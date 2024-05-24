const { body, validationResult } = require("express-validator");
const Customer = require('../../models/customers')

const fieldsValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Insert a name")
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
    .withMessage("Insert a valid VAT Number")
    .custom(async value => {
      const user = await Customer.findOne({vatNumber: value});
      if (user) {
        throw new Error('Vat number already in use');
      }
    }),

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
    .withMessage("Insert a valid email")
    .custom(async value => {
      const user = await Customer.findOne({mail: value});
      if (user) {
        throw new Error('Email already in use');
      }
    }),

  body("pec")
    .trim()
    .isEmail()
    .withMessage("Insert a valid pec")
    .custom(async value => {
      const user = await Customer.findOne({pec: value});
      if (user) {
        throw new Error('Pec already in use');
      }
    })
    .optional(),

  body("SDI")
    .trim()
    .isString()
    .isLength({ min: 5, max: 5 })
    .withMessage("Insert a valid pec")
    .optional(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      next({ status_code: 400, errors: errors.array() });
    }

    next();
  },
];

module.exports = fieldsValidation;
