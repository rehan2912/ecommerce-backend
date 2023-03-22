import express from "express";
import { addProduct, getProduct, addReview } from "../controllers/products.js";

const router = express.Router();

router.post("/", addProduct);
router.get("/:pid", getProduct);
router.post("/reviews/:pid", addReview);

export default router;

