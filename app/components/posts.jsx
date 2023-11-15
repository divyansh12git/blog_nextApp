import React from "react";
import style from "@/app/components/card.module.css";
import { getData } from "@/lib/fetchData";
// import getStaticProps from "../../lib/getdata";

export default async function Display(){
    let data= await getData();
    
   //  console.log(a);
   // let a:Array<BlogPost>=[{User:"div",Blog:"sjdksjdks",date:"121/12/12"},{User:"didwdedv",Blog:"xxxxxsjdksjedddks",date:"12ddeed1/12/12"}];
   
 
 
    return(
  <div>    
    <h1>oyi</h1>
    {data.map((c)=>{
      return (
        <Card
        author={c.content}
        content={c.author}
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
      <div >
      
      <div className="text-4xl mt-5 text-white" >{props.title}</div>
      <span>
      <div className="text-2xl mt-5 text-white ">{props.author}</div>
      <div className="mx-5"></div>
      <p className="mx-10 mt-5 text-lg text-gray-500">{props.date}</p>
      </span>
      <p className="mx-10 mt-5 text-xl text-gray-300">{props.content}</p>
     
      </div>
   )
}