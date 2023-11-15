import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {User} from "@/model/user";
import connectionSrc from "@/lib/db";

export async function GET(){
    // console.log(connectionSrc);
 await mongoose.connect(connectionSrc);
    // console.log(a)
    let data=[];
    const ill=new User({
        id:1,
        User:"Divyansh",
        Blog:"difjsdkfj",
        date:"12/15/001",
        title:"Next route"
    });
    const b=new User({
        id:2,
        User:"Arin",
        Blog:"difjsdkfj",
        date:"12/15/002",
        title:"Next route"
    });
    const c=new User({
        id:3,
        User:"Saksham",
        Blog:"difjsdkfj",
        date:"12/15/003",
        title:"Next route"
    });
    
    
    try{
        console.log("Hi")
        if(User.find({})==null){
         await User.insertMany([ill,b,c]).then(
            ()=>{
                console.log("successfully uploaded");
            }
         ).catch((err)=>{
            console.log(err);
         });
        }
    data = await User.find({}).exec();
    console.log(data);

    return NextResponse.json({result:data});
    }
    catch{
        data=[{sucess:false}]
        return NextResponse.json({result:data});
    }  
}