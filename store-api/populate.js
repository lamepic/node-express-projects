require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const productJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(productJson);
    console.log("Success");
    process.exit(1);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

start();
