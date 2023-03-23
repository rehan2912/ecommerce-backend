import express from "express";
import { addUser, login, addAddress, getBankDetails, getAddress, updateWishlist } from "../controllers/users.js";

const router = express.Router();

/* READ */
router.post("/register", addUser);
router.post("/login", login);
router.post("/:uid/address", addAddress);
router.get("/:uid/bankDetails", getBankDetails);
router.post("/:uid/address", addAddress);
router.get("/:uid/address", getAddress);
router.patch("/:uid/wishlist", updateWishlist);

export default router;
