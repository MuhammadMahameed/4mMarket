import { Router } from "express";
import { sample_users } from "../data";
import jwt  from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import {  User, UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST } from "../cons/http_status";


const router = Router();

router.get("/seed",asyncHandler(
  async (req,res) => {
      const usersCount = await UserModel.countDocuments();
      if(usersCount>0){
          res.send("seed is already done");
          return;
      }
   await UserModel.create(sample_users);
   res.send("seed is done")  
  }
));

router.post("/login",asyncHandler( async (req, res) => {
  const {email, password} = req.body;
  const user = await UserModel.findOne({email,password});

   if(user) {
    res.send(generateTokenReponse(user));
   }
   else{
    
     res.status(HTTP_BAD_REQUEST).send("Username or password is invalid!");
   }

}));

  const generateTokenReponse = (user : any) => {
    const token = jwt.sign({
      email:user.email, isAdmin: user.isAdmin
    },"SomeRandomText",{
      expiresIn:"30d"
    });
    
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      address: user.address,
      isAdmin: user.isAdmin,
      token: token
    };
  }


  export default router;