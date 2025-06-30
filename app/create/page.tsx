'use client'
import React, { useState } from 'react'



export default function Create() {
  const [data, setData] = useState({
    name: '',
    title: '',
    content: ''
  });

  function handleNameChange(e: any) {

    // console.log(e.target.value )
    setData((prevData) => ({
      ...prevData,
      name: e.target.value

    }));

  }
  function handleTitleChange(e: any) {

    setData((prevData) => ({
      ...prevData,
      title: e.target.value
    }));

  }
  function handleContentChange(e: any) {

    // console.log(e.target.value )
    setData((prevData) => ({
      ...prevData,
      content: e.target.value


    }));

  }
  async function handleSubmit(e: any) {
    e.preventDefault();
    let bunch: Object = data;
    setData((prevData) => ({
      ...prevData,
      name: '',
      content: '',
      title: ''

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
    <div className="mt-24 flex justify-center text-lg text-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-2xl gap-6 bg-[#0f172a] border border-gray-800 p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
      >
        <input
          type="text"
          placeholder="Enter Your Name"
          className="bg-[#1e293b] text-white placeholder-gray-400 p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-800 transition"
          onChange={handleNameChange}
          value={data.name}
        />

        <input
          type="text"
          placeholder="Title of Your Blog"
          className="bg-[#1e293b] text-white placeholder-gray-400 p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-800 transition"
          value={data.title}
          onChange={handleTitleChange}
        />

        <textarea
          rows={7}
          placeholder="Enter Your Content..."
          className="bg-[#1e293b] text-white placeholder-gray-400 p-3 rounded-md border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-purple-800 transition"
          onChange={handleContentChange}
          value={data.content}
        ></textarea>

        <button
          type="submit"
          className="bg-purple-800 hover:bg-purple-700 text-white py-2 px-6 rounded-full font-semibold text-lg transition"
        >
          Submit
        </button>
      </form>
    </div>

  );
}
