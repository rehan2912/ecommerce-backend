import mongoose from "mongoose";

const BankSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        bank_details: {
            type: Array,
            default: [{
                name: {
                    type: String,
                    required: true
                },
                account_no: {
                    type: String,
                    required: true,
                },
                exp_month: {
                    type: String,
                    required: true
                },
                exp_year: {
                    type: String,
                    required: true
                },
                cvv: {
                    type: String,
                    required: true,
                    min: 3,
                    max: 3,
                }
            }],
        },
    },
    { timestamps: true }
);

const Bank = mongoose.model("Bank", BankSchema);
export default Bank;
