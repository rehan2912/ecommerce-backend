import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        categories: {
            type: Array,
            default: [{
                category: "electronics",
                subCategories: ["mobiles", "television", "refrigerator", "camera"]
            },
            {
                category: "men's clothing",
                subCategories: ["jeans", "shirts", "tshirts", "shorts", "pants", "trousers", "formals"]
            },
            {
                category: "women's clothing",
                subCategories: ["tops", "jeans", "shirts", "shorts", "pants", "trousers", "formals", "kurti", "lehenga", "dresses", "skirts"]
            },
            {
                category: "footwears",
                subCategories: ["sandals", "chappals", "shoes", "sneakers"]
            },
            {
                category: "books",
                subCategories: ["comics", "novels", "poetry", "mythological", "biography"]
            },
            {
                category: "groceries",
                subCategories: ["pulses", "vegetables", "bread", "oil", "biscuits"]
            },
            ],
        },
    },
    { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);
export default Category;
