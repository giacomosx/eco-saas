require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const companyRoute = require('./routes/company')
const usersRoute = require('./routes/users')

const PORT = process.env.PORT || 5000;
const DB_NAME = "eco-saas-test";

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api/company', companyRoute)
server.use('/api/users', usersRoute)

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
