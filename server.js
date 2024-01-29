import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database.js';
import productRouter from './router/product.js';

dotenv.config({ path: './config.env' });
const app = express();
app.use(json());
app.use('/products', productRouter);
const port = process.env.PORT;
app.listen(port, async () => {
  await connectDB();
  console.log('App running on: http://localhost:9999');
});
