import express from 'express';
import {createProduct, deleteProduct, getProduct, getProducts, updateProduct} from '../controller/product.js';

const productRouter = express.Router();

productRouter.route('/').get(getProducts).post(createProduct);
productRouter.route(('/:id')).get(getProduct).patch(updateProduct).delete(deleteProduct);
export default productRouter;
