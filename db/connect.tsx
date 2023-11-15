import mongoose from "mongoose";

const MONGODB_URI='mongodb://127.0.0.1:27017/BlogApp';

const connectDB=async ()=>{
    try{
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDb');
    }
    catch(err){
        console.log('err in connection'+err);
    }
}

export default connectDB;