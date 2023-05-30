
import { Router } from "express";
import { samble_tags, sample_products } from "../data";
import asyncHandler from "express-async-handler";
import { ProductsModel } from "../models/products.model";

const router = Router();

router.get("/seed",asyncHandler(
    async (req,res) => {
        const productsCount = await ProductsModel.countDocuments();
        if(productsCount>0){
            res.send("seed is already done");
            return;
        }
     await ProductsModel.create(sample_products);
     res.send("seed is done")  
    }
));

router.get("/", asyncHandler( async (req,res) => {
    const products = await ProductsModel.find();
    res.send(products);
}));

router.get("/search/:searchTerm", asyncHandler(async(req,res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const products= await ProductsModel.find({name: {$regex:searchRegex}})
    res.send(products);
}));

router.get("/tags", asyncHandler(
    async (req,res) => {
        const tags = await ProductsModel.aggregate([
            {
                $unwind:'$tags'
            },
            {
                $group:{
                    _id:'$tags',
                    count: {$sum:1}
                }
            },
            {
                $project:{
                    _id: 0,
                    name:'$_id',
                    count:'$count'
                }
            }
        ]).sort({count: -1});
        const all = {
            name : 'All',
            count: await ProductsModel.countDocuments()
        }

        tags.unshift(all);
    res.send(tags);
}));




router.get("/tag/:tagName", asyncHandler(async (req,res) => {
    const products = await ProductsModel.find({tags: req.params.tagName})
    res.send(products);
}));


router.get("/:productId", asyncHandler(async (req,res) => {
    const product = await ProductsModel.findById(req.params.productId)
     res.send(product);
   }));


  export default router;
  