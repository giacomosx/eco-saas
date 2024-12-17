require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const server = express();

/*const authRoute = require('./routes/auth')*/
const rfqRoutes = require("./routes/rfq");

const generalErrorsHandler = require('./middlewares/errors/generalErrorsHandler')
const notFoundError = require('./middlewares/errors/notFoundError')

const PORT = process.env.PORT || 5001;
const DB_NAME = process.env.DB_NAME;

server.use(cors());
server.use(express.json());

/*server.use('/api/auth', authRoute);*/
server.use('/rfq', rfqRoutes);
server.use('/', notFoundError)
server.use(generalErrorsHandler)

startServer();

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI + DB_NAME);
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
