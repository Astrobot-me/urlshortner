import mongoose from "mongoose";


const linkSchema = new mongoose.Schema({
    urliId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        required:true
    },
    visitHistory:[
        {timestamps:{type:Date}}
    ],
    clickCount:{
        type:Number
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }

},{
    timestamps:true
})

const Link = mongoose.model("Link",linkSchema)

export default Link;