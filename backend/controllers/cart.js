import Cart from "../models/Order/Cart.js";

export const addToCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const { product } = req.body
        const cartData = await Cart.findById(cartId)
        const productExist = cartData.items.find(item => item._id === product._id)
        if (productExist) {
            res.status(200).json({ msg: "Item already exist in cart" })
        }
        else {
            const newCartData = [...cartData.items, product]
            const totalPrice = newCartData.reduce((acc, product) => {
                return acc + product.price;
            }, 0);
            const updatedCart = await Cart.findByIdAndUpdate(cartId, { items: newCartData, totalPrice: totalPrice }, { new: true })
            const finalcart = await updatedCart.save();
            res.status(200).json(finalcart);
        }

    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const removeFromCart = async (req, res) => {
    try {
        const productId = req.params.pId;
        const cartId = req.params.cartId;
        const cart = await Cart.findById(cartId)
        if (cart.items.find(product => product._id === productId)) {
            const productPrice = cart.items.filter((product) => product._id === productId)
            const totalPrice = cart.totalPrice - productPrice[0].price
            const updatedCart = cart.items.filter((product) => product._id != productId)
            const newCart = await Cart.findByIdAndUpdate(cartId, { items: updatedCart, totalPrice: totalPrice }, { new: true })
            const finalcart = await newCart.save();
            res.status(200).json(finalcart);
        }
        else {
            res.status(404).json({ msg: "Product not in Cart" });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getCart = async (req, res) => {
    try {
        const cartId = req.params.cartId
        const cart = await Cart.findById(cartId)
        res.status(200).json(cart)
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}