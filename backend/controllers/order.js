import Order from "../models/Order/OrderSummary.js";

export const addOrder = async (req, res) => {
    try {
        const { userId,
            cartId,
            paymentMethod,
            deliveryAddress,
            orderStatus } = req.body;
        const newOrder = await new Order({userId,
            cartId,
            paymentMethod,
            deliveryAddress,
            orderStatus})
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getOrder = async (req, res) => {
    try {
        const userId = req.params.uid;
        const orders = await Order.find({userId:userId})
        res.status(200).json(orders)
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.oid;
        const {orderStatus} = req.body;
        const updateOrder = await Order.findByIdAndUpdate(orderId, {orderStatus:orderStatus}, {new: true});
        const savedOrder = await updateOrder.save();
        res.status(200).json(savedOrder);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}