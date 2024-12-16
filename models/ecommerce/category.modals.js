import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    created_by:{
        type: new mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

export const Category = mongoose.model("Category",categorySchema)