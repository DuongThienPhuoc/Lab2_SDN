import mongoose from 'mongoose';
import connectDB from '../database.js';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
const Category = mongoose.model('Category', categorySchema);
export default Category;
