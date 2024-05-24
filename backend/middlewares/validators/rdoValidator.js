const { body, validationResult } = require("express-validator");

const fieldsValidation = [
  body("prospect.name")
    .trim()
    .notEmpty()
    .withMessage("Insert a prospect name")
    .isString()
    .withMessage("Must be a string"),

  body("prospect.phone")
    .optional()
    .isMobilePhone()
    .withMessage("Must be a valid mobile phone"),

  body("prospect.mail")
    .optional()
    .isEmail()
    .withMessage("Must be a valid email"),

  body("prospect.local_unit")
    .trim()
    .notEmpty()
    .withMessage("Insert a prospect local unit")
    .isString()
    .withMessage("Must be a string"),

  body("state")
    .trim()
    .notEmpty()
    .withMessage("Insert a state")
    .isString()
    .withMessage("Must be a string")
    .isIn(["pending", "processed", "in_progress", "cancelled"])
    .withMessage(
      'Must be "pending" or "processed" or "in_progress" or "cancelled"'
    ),

  body("processed_date")
    .optional()
    .isDate()
    .withMessage("Must be a valid date"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Insert a description")
    .isString()
    .withMessage("Must be a string"),

  body("company")
    .trim()
    .notEmpty()
    .withMessage("Insert a local unit")
    .isMongoId()
    .withMessage("Must be a Mongo DB id"),

  body("related_customer")
    .optional()
    .isMongoId()
    .withMessage("Must be a Mongo DB id"),

  body("related_quote")
    .optional()
    .isMongoId()
    .withMessage("Must be a Mongo DB id"),

  body("author")
    .trim()
    .notEmpty()
    .withMessage("Insert an author")
    .isMongoId()
    .withMessage("Must be a Mongo DB id"),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      next({ status_code: 400, errors: errors.array() });
    }

    next();
  },
];

module.exports = fieldsValidation;
