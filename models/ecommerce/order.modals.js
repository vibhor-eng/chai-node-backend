import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({

    productId:{
        type: new mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true,

    }

},{})

const orderSchema = new mongoose.Schema({

    orderPrice:{
        type:Number,
        require:true
    },
    customer:{
        type: new mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema]
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum: ["PENDING","CANCELLED","CONFIRMED"],
        default: "PENDING"
    }

},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)