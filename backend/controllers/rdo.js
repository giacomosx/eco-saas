const Company = require("../models/company");
const Rdo = require("../models/rdo");

const getAllRdo = async (req, res) => {
  try {
    const allRdo = await Rdo.find();
    res.status(200).json(allRdo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRdoById = async (req, res) => {
  const rdoId = req.params.rdoId;

  try {
    const rdoById = await Rdo.findById(rdoId).populate('author');
    res.status(200).json(rdoById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRdo = async (req, res) => {
  const { prospect, state, processed_date, description, local_unit, company, author } =
    req.body;

  try {
    const rdo = new Rdo({
      prospect,
      state,
      processed_date,
      description,
      local_unit,
      company,
      author
    });

    const relatedCompany = await Company.findById(rdo.company);
    const newRdo = await rdo.save();
    relatedCompany.rdo.push(rdo._id);
    relatedCompany.save()
    res.status(201).json(newRdo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllRdo,
  getRdoById,
  createRdo,
};
