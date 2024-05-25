require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const server = express();

const companyRoute = require('./routes/company')
const usersRoute = require('./routes/users')
const customersRoute = require('./routes/customers')
const rdoRoute = require('./routes/rdo')

const generalErrorsHandler = require('./middlewares/errors/generalErrorsHandler')
const notFoundError = require('./middlewares/errors/notFoundError')

const sendEmail = require('./utils/sendGrid')

const PORT = process.env.PORT || 5000;
const DB_NAME = "eco-saas-test";

server.use(cors());
server.use(express.json());

server.use('/api/companies', companyRoute)
server.use('/api/users', usersRoute)
server.use('/api/customers', customersRoute)
server.use('/api/rdo', rdoRoute)

//testing email with sendgrid
//server.post('/api/sending-email', sendEmail)

server.use('/', notFoundError)
server.use(generalErrorsHandler)

startServer();

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI + DB_NAME);
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
