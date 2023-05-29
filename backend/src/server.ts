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
// app.get("/api/products", (req,res) => {
//     res.send(sample_products);
// });
// app.get("/api/products/search/:searchTerm", (req,res) => {
//     const searchTerm = req.params.searchTerm;
//     const products = sample_products
//     .filter(products => products.name.toLowerCase()
//     .includes(searchTerm.toLowerCase()));
//     res.send(products);
// })
// app.get("/api/products/tags", (req,res) => {
//     res.send(samble_tags);
// });
// app.get("/api/products/tag/:tagName", (req,res) => {
//     const tagName = req.params.tagName;
//     const products = sample_products
//     .filter(products => products.tags?.includes(tagName));
//     res.send(products);
// });
// app.get("/api/products/:productId", (req,res) => {
//     const productId = req.params.productId;
//     const product =sample_products.find(product => product.id == productId)
//     res.send(product);
//   });


  // app.post("/api/users/login", (req, res) => {
  //   const {email, password} = req.body;
  //   const user = sample_users.find(user => user.email === email 
  //     && user.password === password);

  //    if(user) {
  //     res.send(generateTokenReponse(user));
  //    }
  //    else{
  //      const BAD_REQUEST = 400;
  //      res.status(BAD_REQUEST).send("Username or password is invalid!");
  //    }

  // })

  // const generateTokenReponse = (user : any) => {
  //   const token = jwt.sign({
  //     email:user.email, isAdmin: user.isAdmin
  //   },"SomeRandomText",{
  //     expiresIn:"30d"
  //   });

  //   user.token = token;
  //   return user;
  // }


const port = 5000;

app.listen(port , () => {
    console.log("The Website is served on http://localhost:" + port);
});