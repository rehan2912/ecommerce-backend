import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        products: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", WishlistSchema);
export default Wishlist;
