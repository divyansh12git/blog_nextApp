import { NextResponse,NextRequest } from "next/server";
import connectDB from "@/db/connect";
import userSchema from "@/db/model";
import mongoose from "mongoose";


let currentDate=():String=>{
    const d=new Date()
        let day:Number=d.getDate();
        let mon:Number=d.getMonth() +1;
        let year:Number=d.getFullYear();
        let ab=`${day}/${mon}/${year}`;
        return ab;
}


const Blog= mongoose.models['blogs'] || mongoose.model('blogs',userSchema); // use model name matching your schema

export async function POST(req: Request) {
  try {
    const dataToUpload = await req.json();

    await connectDB();

    const newPost = new Blog({
      title: dataToUpload.title,
      author: dataToUpload.name,
      date: currentDate(),
      content: dataToUpload.content,
    });

    await newPost.save();

    console.log("Successfully uploaded to MongoDB");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error uploading:", err);
    return NextResponse.json({ success: false, error: err });
  }
}