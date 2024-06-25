const express = require("express");
const { connectDb } = require("./database");
const { router: UserRouter } = require("./routes/user.routes");
const { router: AuthRouter } = require("./routes/auth.routes");
const dotenv = require("dotenv");

dotenv.config(); // load environment variables

const mongoConnectionUrl = process.env.MONGOURL;

const app = express();

// middlewares
app.use(express.json());

// apis
app.use("/api/user", UserRouter);
app.use("/api/auth", AuthRouter);

//global error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

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
