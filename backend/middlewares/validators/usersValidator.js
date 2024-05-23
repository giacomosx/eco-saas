const { body, validationResult } = require("express-validator");

const fieldsValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Insert a name")
    .isString()
    .withMessage("Must be a string"),
  
  body("surname")
    .trim()
    .notEmpty()
    .withMessage("Insert a surname")
    .isString()
    .withMessage("Must be a string"),
    
  body("phone")
      .optional()
      .trim()
      .isMobilePhone()
      .withMessage("Insert an mobile phone"),
  
  body("mail")
    .trim()
    .notEmpty()
    .withMessage("Insert an email")
    .isEmail()
    .withMessage("Insert a valid email"),
  
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Insert a password")
    .isAlphanumeric()
    .withMessage('Must be alphanumeric')
    .isLength({min: 8})
    .withMessage('Min 8 character'),
  
  body("job_title")
    .trim()
    .notEmpty()
    .withMessage("Insert a Job Title")
    .isString()
    .withMessage("Must be a string"),
  
  body("role")
    .isString()
    .withMessage("Must be a string")
    .isIn(["admin", "user"])
    .withMessage('Role can be only "user" or "admin"')
    .notEmpty()
    .withMessage("Insert a role"),
  
  body("company")
    .trim()
    .notEmpty()
    .isMongoId()
    .withMessage("Insert a valid MongoDB Id"),
    
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    next();
  },
];

module.exports = fieldsValidation;
