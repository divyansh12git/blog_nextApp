'use client'
import React,{ChangeEvent, useState} from "react";
import style from "@/app/components/card.module.css";
import { getData } from "@/lib/fetchData";
import Search  from "./search_bar";


export default function Display(){
    const [blogs,setBlogs]=useState([]);
    let data=  getData() ;
    console.log(data);
    let revData=[];
    // if(data){
    //   data.reverse();
    // }


    const [searchParam,setSearchParams]=useState('');
    const handleChange=(e)=>{
      setSearchParams(e.target.value);

  }
 
  const filterData=(item)=>{
    const query = searchParam;
        if(query===""){
            return item;
        }
        else if(item.title.toLowerCase().includes(searchParam.toLowerCase())){
            return item;
        }
  }
  let finalData=revData
  const handleClick=(check)=>{
    if(check){
       finalData=revData.filter(filterData);
    }
  }
    
    return(
  <div>    
   <Search handleChange={handleChange} />
   
    {finalData.map((c)=>{
      return (
        <Card
        author={c.author}
        content={c.content}
        date={c.date}
        title={c.title}
        Key={c._id}
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