import React from "react";
import style from "@/app/components/card.module.css";
import getStaticProps from "../../lib/getdata";

export default async function Display(){
    let data= await getStaticProps();
    let a=data.result;
   //  console.log(a);
    // let a:Array<BlogPost>=[{User:"div",Blog:"sjdksjdks",date:"121/12/12"},{User:"didwdedv",Blog:"xxxxxsjdksjedddks",date:"12ddeed1/12/12"}];
   
 
 
    return(
  <div>    
    <h1>oyi</h1>
    {a.map((c,i)=>{
      return (
        <Card
        User={c.User}
        Blog={c.Blog}
        date={c.date}
        title={c.title}
        key={i}
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
      <div className="text-2xl mt-5 text-white ">{props.User}</div>
      <div className="mx-5"></div>
      <p className="mx-10 mt-5 text-lg text-gray-500">{props.date}</p>
      </span>
      <p className="mx-10 mt-5 text-xl text-gray-300">{props.Blog}</p>
     
      </div>
   )
}