import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
// import cartRoutes from "./routes/cart.js";
// import orderRoutes from "./routes/orders.js";

var app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(bodyParser.json());

app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/order", orderRoutes);


const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

