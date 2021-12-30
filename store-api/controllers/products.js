const Product = require("../models/product");

const getAllProductStatic = (req, res) => {
  res.status(200).json({ msg: "All products static" });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ msg: products, nbHits: products.length });
};

module.exports = {
  getAllProductStatic,
  getAllProducts,
};
