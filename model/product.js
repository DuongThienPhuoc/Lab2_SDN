import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    caption: String,
  },
  {
    timestamps: true,
  },
);
const commentSchema = new mongoose.Schema(
  {
    rate: {
      type: Number,
      required: true,
    },
    text: String,
    author: String,
  },
  {
    timestamps: true,
  },
);
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: [imageSchema],
    comments: [commentSchema],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
const Product = mongoose.model("Product",productSchema);
export default Product;
