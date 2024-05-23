const { body, validationResult } = require("express-validator");

const fieldsValidation = [
    body('prospect')
        .trim()
        .notEmpty()
        .withMessage('Insert a prospect')
        .isString()
        .withMessage('Must be a string'),
    
    body('state')
        .trim()
        .notEmpty()
        .withMessage('Insert a state')
        .isString()
        .withMessage('Must be a string')
        .isIn(['pending', 'processed', 'in_progress', 'cancelled'])
        .withMessage('Must be "pending" or "processed" or "in_progress" or "cancelled"'),
    
    body('processed_date')
        .optional()
        .isDate()
        .withMessage('Must be a valid date'),
    
    body('description')
        .trim()
        .notEmpty()
        .withMessage('Insert a description')
        .isString()
        .withMessage('Must be a string'),

    body('local_unit')
        .trim()
        .notEmpty()
        .withMessage('Insert a local unit')
        .isString()
        .withMessage('Must be a string')
  ,
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    next();
  },
];

module.exports = fieldsValidation;
