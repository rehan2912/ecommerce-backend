import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
    {
        totalPrice: {
            type: Number,
            default: 0,
        },
        items: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);
export default Cart;