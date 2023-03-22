import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        productId: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        rating: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);
export default Review;
