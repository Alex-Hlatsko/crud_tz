import express from 'express';
import { createProduct } from '../controllers/productController.js';
// deleteProduct, getProduct, followProduct, updateProduct, getProducts

const router = express.Router();

router.post('/', createProduct);
// router.get('/:id', getProduct);
// router.put('/:id', updateProduct);
// router.delete('/:id', deleteProduct);
// router.put('/:id/follow', followProduct);
// router.get('/', getProducts)

export default router;