import express from "express";
import { addOrder, getOrder, updateOrder } from "../controllers/order.js";

const router = express.Router();

router.post('/', addOrder);
router.get('/:uid', getOrder)
router.patch('/:oid', updateOrder)

export default router;