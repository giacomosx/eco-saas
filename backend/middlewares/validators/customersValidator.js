const {body, validationResult} = require('express-validator')

const fieldsValidation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Insert a name')
        .isString()
        .withMessage('Must be a string'),
    
    body('address')
        .trim()
        .notEmpty()
        .withMessage('Insert an address')
        .isString()
        .withMessage('Must be a string'),
    
    body('vatNumber')
        .trim()
        .notEmpty()
        .withMessage("Insert a VAT number")
        .isVAT('IT')
        .withMessage("Insert a valid VAT Number"),

    body("phone")
        .trim()
        .notEmpty()
        .withMessage('Insert a mobile phone number')
        .isMobilePhone()
        .withMessage("Must be a valid mobile phone number"),

    body("mail")
        .trim()
        .notEmpty()
        .withMessage("Insert an email")
        .isEmail()
        .withMessage("Insert a valid email"),

    body("pec")
        .trim()
        .isEmail()
        .withMessage("Insert a valid pec")
        .optional(),
   
    body("SDI")
        .trim()
        .isString()
        .isLength({min: 5, max: 5})
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