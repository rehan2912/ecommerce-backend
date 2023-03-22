import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        cartId: {
            type: String,
            required: true,
        },
        paymentMethod: {
            type: Object,
            default: {},
        },
        deliveryAddress: {
            type: Object,
            default: {},
        },
        orderStatus: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
export default Order;