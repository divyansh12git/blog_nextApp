import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    title:String,
    author:String,
    date:String,
    content:String
})

export default userSchema;