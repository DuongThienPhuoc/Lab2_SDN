import Product from '../model/product.js';
import Category from '../model/category.js';

const getProducts = async (req, res) => {
  try {
    const product = await Product.find().populate('category');
    res.status(200).json(product);
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id).populate('category');
    res.status(200).json(product);
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const product = await Product.create(newProduct);
    res.status(200).json({
      status: 'success',
      data: product,
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updateProduct = req.body;
    const product = await Product.findByIdAndUpdate(id, updateProduct, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(product);
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id).populate('category');
    res.status(200).json(product);
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
