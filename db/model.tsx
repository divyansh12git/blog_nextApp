import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    id:Number,
    title:String,
    author:String,
    date:String,
    content:String
})

export default userSchema;