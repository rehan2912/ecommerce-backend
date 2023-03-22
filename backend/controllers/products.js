import Product from "../models/Product/Product.js";
import Review from "../models/Product/Reviews.js";

export const addProduct = async (req, res) => {
    try {
        const { name,
            description,
            sku,
            subCategory,
            price,
            discountPercentage,
            rating,
            images,
            thumbnail } = req.body;
        const newProduct = await new Product({
            name,
            description,
            sku,
            subCategory,
            price,
            discountPercentage,
            rating,
            images,
            thumbnail
        });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct)
    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }
}


export const getProduct = async (req, res) => {
    try {
        const pid = req.params.pid;
        const product = await Product.findById(pid);
        const reviews = await Review.find({productId: pid});
        res.status(200).json({product, reviews});
    } catch (error) {
        res.status(404).json({ msg: error.message});
    }
}

export const addReview = async (req, res) => {
    try {
        const pid = req.params.pid;
        const { userId, productId, comment, rating } = req.body;
        const newReview = await new Review({
            userId, productId, comment, rating
        });
        const savedReview = await newReview.save();
        res.status(200).json(savedReview);
    } catch (error) {
        res.status(500).json({ msg: error.message});
    }
}