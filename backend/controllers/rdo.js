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
    const rdoById = await Rdo.findById(rdoId);
    res.status(200).json(rdoById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRdo = async (req, res) => {
  const { prospect, state, processed_date, description, local_unit } = req.body;

  const rdo = new Rdo({
    prospect,
    state,
    processed_date,
    description,
    local_unit,
  });

  try {
    const newRdo = await rdo.save();
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
