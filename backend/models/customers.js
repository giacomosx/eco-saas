const mongoose = require("mongoose");
const customerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    vatNumber: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    SDI: {
      type: String,
      required: false,
    },
    pec: {
      type: String,
      required: false,
      unique: true,
    },
    localUnit: [
      {
        name_localUnit: { type: String, required: true },
        address: { type: String, required: true },
        referent: {
          name_referent: { type: String, required: true },
          job_title: { type: String, required: false },
          phone_referent: { type: String, required: true },
          mail_referent: { type: String, required: false},
        },
        hours: { type: String, required: false },
      },
    ],
    quotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quotes",
      },
    ],
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Projects",
      },
    ],
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
  },
  { timestamps: true, strict: true }
);

module.exports = mongoose.model("Customers", customerSchema, "customers");
