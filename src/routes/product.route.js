import express from 'express';
import {getProduct, getProducts,postProduct, updateProduct, deleteProduct} from '../controllers/product.controller.js'
const router = express.Router();


router.get('/',getProducts);
router.post('/', postProduct);
router.get('/:id', getProduct)
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct)

export {router}