const User = require("../models/user.model");
const { hashSync, compare } = require("bcrypt");
const { handleError } = require("../utils/customError.utils");
const jwt = require("jsonwebtoken");

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

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const isValidUser = await User.findOne({ email }); // check user existence
    if (!isValidUser) return next(handleError(404, "User does not exist"));

    const userHashedPassword = isValidUser.password;
    const isValidPassword = await compare(password, userHashedPassword); // validates password
    if (!isValidPassword) return next(handleError(401, "Invalid credentials"));

    const accessTokens = jwt.sign(
      { id: isValidUser._id },
      process.env.JWTSECRET
    ); //generates jwt

    const { password: pass, ...restOfUserDetails } = isValidUser._doc;
    res
      .cookie("accessToken", accessTokens, { httpOnly: true })
      .status(200)
      .json(restOfUserDetails);
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
