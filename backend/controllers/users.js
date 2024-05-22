const User = require("../models/users");
const Company = require("../models/company");

const createUser = async (req, res) => {
  const { name, surname, phone, mail, password, job_title, role, company } =
    req.body;

  try {
    const user = new User({
      name,
      surname,
      phone,
      mail,
      password,
      job_title,
      role,
      company,
    });

    const relatedCompany = await Company.findById(user.company);
    const newUser = await user.save();
    relatedCompany.users.push(user._id);
    relatedCompany.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).populate("company");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUser,
  getAllUsers,
};
