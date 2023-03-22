import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        sku: {
            type: Number,
            required: true,
        },
        subCategory: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        discountPercentage: {
            type: Number,
            default: 0,
        },
        rating: {
            type: Number,
        },
        images: {
            type: Array,
            default: [],
        },
        thumbnail: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;