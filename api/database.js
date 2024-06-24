const mongoose = require("mongoose");

const connectDb = async (url) => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  connectDb,
};
