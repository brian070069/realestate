const express = require("express");
const { connectDb } = require("./database");
const { router: UserRouter } = require("./routes/user.routes");
const dotenv = require("dotenv");

dotenv.config();
const mongoConnectionUrl = process.env.MONGOURL;
const app = express();

app.use("/api/user", UserRouter);

const startServer = async () => {
  try {
    await connectDb(mongoConnectionUrl);
    app.listen(3000, () => {
      console.log("The server is running");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
