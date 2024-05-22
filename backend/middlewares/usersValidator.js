const { body, validationResult } = require("express-validator");

const fieldsValidation = [
  body("name")
    .isString()
    .withMessage("Must be a string")
    .notEmpty()
    .withMessage("Insert a name"),
  
  body("mail")
    .isEmail()
    .withMessage("Insert a valid email")
    .notEmpty()
    .withMessage("Insert an email"),
  
  body("password")
    .isAlphanumeric()
    .withMessage('Must be alphanumeric')
    .isLength({min: 8})
    .withMessage('Min 8 character')
    .notEmpty()
    .withMessage("Insert a password"),
  
  body("job_title")
    .isString()
    .withMessage("Must be a string")
    .notEmpty()
    .withMessage("Insert a Job Title"),
  
  body("role")
    .isString()
    .withMessage("Must be a string")
    .isIn(["admin", "user"])
    .withMessage('Role can be only "user" or "admin"')
    .notEmpty()
    .withMessage("Insert a role"),
  
  body("company")
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
