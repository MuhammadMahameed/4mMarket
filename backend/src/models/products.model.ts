import { Schema, model } from "mongoose";

export interface Products{
    id:string;
    name:string;
    price:number;
    tags: string[];
    imageUrl: string;
    starts:number;
    color: string;
    description: string;
}


export const ProductsSchema = new Schema<Products>(
    {
        name: {type: String , required:true},
        price: {type: Number , required:true},
        tags: {type: [String] , required:true},
        imageUrl: {type: String , required:true},
        starts: {type: Number , required:true},
        color: {type: String , required:true},
        description: {type: String , required:true}
    },
    {
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
);


export const ProductsModel = model<Products>('products',ProductsSchema);