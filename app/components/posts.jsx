import React from "react";
import style from "@/app/components/card.module.css";
import { getData } from "@/lib/fetchData";


export default async function Display(){
    let data= await getData();
    
   
   
 
 
    return(
  <div>    
   
    {data.map((c)=>{
      return (
        <Card
        author={c.author}
        content={c.content}
        date={c.date}
        title={c.title}
        key={c._id}
         />
      )
   })}
    
     
    
    
 </div>
 );
}

const Card=(props)=>{
   return (
      <div className="mx-16">
      
      <div className="text-4xl mt-16 underline text-white" >{props.title}</div>
      <span>
      <div className="text-xl mt-2 ml-5 text-gray-100 ">-{props.author}</div>
      
      <p className="  text-md ml-7 text-gray-500">{props.date}</p>
      </span>
      <p className=" mt-5 text-md text-gray-300">{props.content}</p>
     
      </div>
   )
}