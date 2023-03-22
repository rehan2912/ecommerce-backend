import { param } from "express-validator";
import Cart from "../models/Order/Cart.js";
import Address from "../models/User/Address.js";
import User from "../models/User/User.js";

export const addUser = async (req, res) => {
    try {
        const {
            fullname,
            email,
            password
        } = req.body

        const userCart = new Cart();
        const savedCart = await userCart.save();
        const newUser = new User({
            fullname,
            email,
            password,
            cartId: savedCart.id
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (error) {
        res.status(500).json({ error: err.message });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (user.password === password) {
            return res.status(200).json(user);
        }
        else {
            return res.status(403).json("Invalid Credentials")
        }

    }
    catch (error) {
        res.status(500).json({ error: err.message });
    }

};

// export const addBankDetails = async (req, res) => {
//     try {
//         const uid = req.params.uid;
//         const { name, account_no, exp_month, exp_year, cvv } = req.body;
//         const newBank = {
//             userId: uid,
//             bank_details: [{

//             }]
//         }
//     } catch (error) {
//         res.status(500).json({ error: err.message });
//     }
// }

// export const getBankDetails = async (req, res) => {
//     try {
//         const uid = req.params.uid;

//     } catch (error) {
//         res.status(404).json({ error: err.message });
//     }
// }

export const addAddress = async (req, res) => {
    try {
        const userId = req.params.uid
        const {
            addressLine,
            landmark,
            city,
            state,
            country,
            pinCode } = req.body
        const add = Address.find({ userId: userId })
        const newAddress = {
            addressLine,
            landmark,
            city,
            state,
            country,
            pinCode
        }
        if (add) {
            const updateAddress = await Address.findByIdAndUpdate(add.id, {...add, address:newAddress });
            const savedAddress = await updateAddress.save();
            return res.status(201).json(savedAddress);
        } else {
            const updateAddress = await new Address({
                userId, address: newAddress
            })
            const savedAddress = await updateAddress.save();
            return res.status(201).json(savedAddress);
        }      
    }
    catch (error) {
    res.status(500).json({ error: error.message });
}
}

// export const getAddress = async (req, res) => {
//     try {

//     }
//     catch (error) {
//         res.status(404).json({ error: err.message });
//     }
// }