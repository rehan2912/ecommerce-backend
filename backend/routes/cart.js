import express from "express";
import { addToCart, getCart, removeFromCart } from "../controllers/cart.js";

const router = express.Router();

router.get('/:cartId', getCart)
router.patch('/:cartId', addToCart)
router.patch('/remove/:cartId/:pId', removeFromCart)

export default router;