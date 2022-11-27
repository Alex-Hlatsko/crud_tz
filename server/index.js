import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./routes/authRouter.js";
import productRouter from "./routes/productRouter.js";
import companyRouter from "./routes/companyRouter.js";

const app = express();

dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(process.env.PORT, () => console.log("Connected ok")))
    .catch((error) => console.log(error))

app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/company', companyRouter);

