import mongoose from "mongoose";

let connectionURI:string=process.env.MONGODB_URI || "";

const connectDB=async ()=>{
    try{
        await mongoose.connect(connectionURI);
        console.log('Connected to MongoDb');
    }
    catch(err){
        console.log('err in connection'+err);
    }
}

export default connectDB;