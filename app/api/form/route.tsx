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


export  async function POST(req:Request){
    let dataToUpload=await req.json();
    // console.log(req.body)
    if(req.method=='POST'){
        
    await connectDB();
    const blog= mongoose.models['Users'] || mongoose.model('Users',userSchema);
        const data=new blog({
            title:dataToUpload.title,
            author:dataToUpload.name,
            date:currentDate(),
            content:dataToUpload.content
        })
        console.log(data)
        // await data.save();
      await data.save().then(()=>{
        console.log('Successfully uploaded to mongodb');
        mongoose.connection.close();
            return NextResponse.json({
            sucess:true,
        })
       }).catch((err:String)=>{console.log("problem in uploading \n " +err)})
       




    
    }
    return NextResponse.json({
        sucess:false,
    })
}