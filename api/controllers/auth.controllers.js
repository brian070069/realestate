const User = require("../models/user.model");
const { hashSync } = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};
const login = (req, res) => {
  console.log(req.body);
  res.json(req.body);
};

module.exports = { register, login };
