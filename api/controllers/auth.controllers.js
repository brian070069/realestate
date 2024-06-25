const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.name });
  }
};
const login = (req, res) => {
  console.log(req.body);
  res.json(req.body);
};

module.exports = { register, login };
