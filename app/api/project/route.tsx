import connectDB from "@/db/connect";
import userSchema from "@/db/model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


connectDB();
const blog=mongoose.model('blog',userSchema);

export async function GET(){
    const data=await blog.find({}).exec();
    return NextResponse.json(data);
}

