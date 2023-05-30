import dotenv from 'dotenv';
dotenv.config();


import express from "express";
import cors from "cors"
import { samble_tags, sample_products, sample_users } from "./data";
import jwt from 'jsonwebtoken'
import productsRouter from './routers/products.router';
import userRouter from './routers/user.router'
import { dbConnect } from './config/database.config';
dbConnect();

const app = express();

app.use(express.json());

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/products",productsRouter);
app.use("/api/users",userRouter)

const port = 5000;

app.listen(port , () => {
    console.log("The Website is served on http://localhost:" + port);
});