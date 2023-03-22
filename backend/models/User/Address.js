import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        address: {
            type: Array,
            default: [{
                addressLine: { type: String, required: true },
                landmark: { type: String, required: true },
                city: { type: String, required: true },
                state: { type: String, required: true },
                country: { type: String, required: true },
                pinCode: { type: Number, required: true }
            }],
        },
    },
    { timestamps: true }
);

const Address = mongoose.model("Address", AddressSchema);
export default Address