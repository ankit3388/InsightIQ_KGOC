import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


const MONGO_URL = "mongodb+srv://bantiyadav16095:ghwlEsb1w5PxzFO3@cluster0.koypaa1.mongodb.net/";
const PORT = process.env.PORT || 9000;


mongoose.connect(MONGO_URL)
  .then(async () => {
    console.log("Database connected successfully");
    console.log("Hi from sever side")
    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    await mongoose.connection.db.dropDatabase();
    KPI.insertMany(kpis);
    Product.insertMany(products);
    Transaction.insertMany(transactions);

  })
  .catch((error) => console.log(`${error} did not connect`));


  app.listen(PORT, () => console.log(`Server Port sucessfull : ${PORT}`));




/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);


