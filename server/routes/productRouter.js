import express from 'express';
import { createProduct, deleteProduct, getProduct, followProduct, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/', createProduct);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.put('/:id/like', followProduct);

export default router;