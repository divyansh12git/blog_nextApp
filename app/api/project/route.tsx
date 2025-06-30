import connectDB from "@/db/connect";
import userSchema from "@/db/model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



const blog= mongoose.models['blogs'] || mongoose.model('blogs',userSchema);
export async function GET(){
    console.log("YO");
    try{
        await connectDB();
        let data=await blog.find().exec();
        mongoose.connection.close();
        console.log("from server: ",data);
        if(data==null)
         return NextResponse.json({result:"no-data"});
    
        return NextResponse.json(data);
    }catch(e){
        console.log(e);
        return NextResponse.json({result:"no-data"});
    }
}

