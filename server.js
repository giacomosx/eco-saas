require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const server = express();
const cookieParser = require("cookie-parser");


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

const authController = require('./middlewares/tokenController')

const rfqRoutes = require("./routes/rfq");
const productRoutes = require("./routes/product");

const generalErrorsHandler = require('./middlewares/errors/generalErrorsHandler')
const notFoundError = require('./middlewares/errors/notFoundError')

const PORT = process.env.PORT || 5001;
const DB_NAME = process.env.DB_NAME;

server.use(cors(corsOptions));
server.use(cookieParser());
server.use(express.json());

/*server.use('/api/auth', authRoute);*/

server.use(authController.verifyToken);

server.use('/rfq', rfqRoutes);
server.use('/product', productRoutes);
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
