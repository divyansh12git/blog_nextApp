import connectDB from "@/db/connect";
import userSchema from "@/db/model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



const blog= mongoose.models['Users'] || mongoose.model('Users',userSchema);
export async function GET(){
    
    await connectDB();
    let data=await blog.find().exec();
    mongoose.connection.close();
    if(data==null)
     return NextResponse.json({result:"no-data"});

    return NextResponse.json(data);
}

