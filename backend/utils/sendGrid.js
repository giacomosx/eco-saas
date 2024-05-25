const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (req, res, next) => {
    const msg = {
        to: "giacomo.brtl@gmail.com", 
        from: "giacomo.bartoli@me.com", 
        subject: "Test email with send grid",
        text: "and easy to do anywhere, even with Node.js",
        html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    sgMail
    .send(msg)
    .then(() => {
        res.status(201).json({message: 'Email sent'})
    })
    .catch((error) => {
        res.status(500).json(error.message);
    });
};


module.exports = sendEmail


// https://github.com/sendgrid/sendgrid-nodejs