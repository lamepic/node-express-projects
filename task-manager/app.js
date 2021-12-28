require("dotenv").config();

const express = require("express");

const taskRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");

const app = express();

app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", taskRoutes);

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
