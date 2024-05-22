const {body, validationResult} = require('express-validator')

const fieldsValidation = [
    body('name')
        .isString()
        .withMessage('Must be a string')
        .notEmpty()
        .withMessage('Insert a name'),
    
    body('address')
        .isString()
        .withMessage('Must be a string')
        .notEmpty()
        .withMessage('Insert an address'),
    
    body('vatNumber')
        .isNumeric()
        .withMessage("Must be a number")
        .isLength({ min: 11, max: 11 })
        .withMessage("Insert a valid VAT Number")
        .notEmpty()
        .withMessage("Insert a VAT number"),

    body("phone")
        .isMobilePhone()
        .withMessage("Must be a valid mobile phone number")
        .notEmpty()
        .withMessage('Insert a mobile phone number'),

    body("mail")
        .isEmail()
        .withMessage("Insert a valid email")
        .notEmpty()
        .withMessage("Insert an email"),

    body("pec")
        .isEmail()
        .withMessage("Insert a valid pec")
        .optional()

    ,
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }

        next()
    }
]

module.exports = fieldsValidation