require("dotenv").config();

const express = require("express");

const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const app = express();

// express middleware
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", taskRoutes);

// error middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log("Server running..."));
  } catch (error) {
    console.log(error);
  }
};

start();
