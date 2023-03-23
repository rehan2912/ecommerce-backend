import Cart from "../models/Order/Cart.js";
import Address from "../models/User/Address.js";
import User from "../models/User/User.js";
import Bank from "../models/User/Bank.js";

//SIGNUP
export const addUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        const userCart = new Cart();
        const savedCart = await userCart.save();
        const newUser = new User({
            fullname,
            email,
            password,
            cartId: savedCart.id,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//LOGIN
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (user.password === password) {
            return res.status(200).json(user);
        } else {
            return res.status(403).json("Invalid Credentials");
        }
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};

//ADD BANK DETAILS OF A USER
export const addBankDetails = async (req, res) => {
    try {
        const userId = req.params.uid;
        const { name, account_no, exp_month, exp_year, cvv } = req.body;
        const newBank = { name, account_no, exp_month, exp_year, cvv };
        const bank = await Bank.find({ userId: userId });
        if (bank.length) {
            const updateBank = await Bank.findOneAndUpdate(
                { id: bank.id },
                {
                    bank_details: [...bank[0].bank_details, newBank],
                },
                { new: true }
            );
            const savedBank = await updateBank.save();
            res.status(201).json(savedBank);
        } else {
            const updateBank = await new Bank({
                userId,
                bank_details: [newBank],
            });
            const savedBank = await updateBank.save();
            res.status(201).json(savedBank);
        }
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};

//GET BANK DETAILS OF A USER
export const getBankDetails = async (req, res) => {
    try {
        const userId = req.params.uid;
        const bank = await Bank.find({ userId: userId });
        res.status(200).json(bank);
    } catch (error) {
        res.status(404).json({ error: err.message });
    }
};

//ADD ADDRESS OF A USER
export const addAddress = async (req, res) => {
    try {
        const userId = req.params.uid;
        const { addressLine, landmark, city, state, country, pinCode } = req.body;
        const newAddress = {
            addressLine,
            landmark,
            city,
            state,
            country,
            pinCode,
        };
        const add = await Address.find({ userId: userId });
        if (add.length) {
            const updateAddress = await Address.findOneAndUpdate(
                { id: add.id },
                {
                    address: [...add[0].address, newAddress],
                },
                { new: true }
            );
            const savedAddress = await updateAddress.save();
            res.status(201).json(savedAddress);
        } else {
            const updateAddress = await new Address({
                userId,
                address: [newAddress],
            });
            const savedAddress = await updateAddress.save();
            res.status(201).json(savedAddress);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//GET ADDRESSES OF USER
export const getAddress = async (req, res) => {
    try {
        const userId = req.params.uid;
        const address = await Address.find({ userId: userId });
        res.status(200).json(address);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const updateWishlist = async (req, res) => {
    try {
      const userId = req.params.uid;
      const { productId } = req.body;
      const user = await User.findById(userId);
      let newArray = [];
      if (user.wishlist.includes(productId)) {
        newArray = user.wishlist.filter((product) => product !== productId);
      } else {
        newArray = [...user.wishlist, productId];
      }
  
      const updateUser = await User.findByIdAndUpdate(
        userId,
        { wishlist: newArray },
        { new: true }
      );
      const savedUser = await updateUser.save();
      res.status(200).json(savedUser);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };