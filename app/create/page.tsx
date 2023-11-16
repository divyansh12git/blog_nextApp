'use client'
import React, { useState } from 'react'



export default function Create() {
  const [data,setData]=useState({
    name:'',
    title:'',
    content:''
  });

  function handleNameChange(e:any){
    
    // console.log(e.target.value )
    setData((prevData)=>({
      ...prevData,
      name:e.target.value

    }));
  
  }
  function handleTitleChange(e:any){
    
    setData((prevData)=>({
      ...prevData,
      title:e.target.value
    }));
  
  }
  function handleContentChange(e:any){
    
    // console.log(e.target.value )
    setData((prevData)=>({
      ...prevData,
     content:e.target.value
     

    }));
  
  }
   async function handleSubmit (e:any){
    e.preventDefault();
    let bunch:Object=data;
    setData((prevData)=>({
      ...prevData,
      name:'',
      content:'',
      title:''

    }));
    console.log(bunch);
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bunch),
      });
      // console.log(response);
      // if (response.ok) {
      //   console.log('Form submitted successfully!');
      //   // Handle success, e.g., show a success message or redirect
      // } else {
      //   console.error('Form submission failed!');
      //   // Handle failure, e.g., show an error message
      // }
    } catch (error) {
      console.error('Error submitting form:', error);
    }


  }


  return (
    <div className='mt-24  flex justify-center text-lg'>
      <form action="post" className='flex flex-col w-[50%] gap-5 ' onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Your name' className="p-3  rounded-lg" onChange={handleNameChange} value={data.name} />
        <input type="text" placeholder='Title of Your Blog'className="p-3 rounded-lg" value={data.title} onChange={handleTitleChange} />
        
        <textarea name="textarea"  rows={7} placeholder='Enter Your Content ....' className="p-3 rounded-lg  resize-none" onChange={handleContentChange} value={data.content}></textarea>
       
        <button className='bg-amber-200 p-2 text-lg  rounded-full ' type='submit' > Submit</button>
      </form>
    </div>
    )
}
