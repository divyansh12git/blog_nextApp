import React from 'react';
import Link from 'next/link';
// import {FaYoutube, FaTwitter, FaGithub, FaLaptop} from 'react-icons/fa';


export default function NavBar() {
  return (
    <nav className=' p-4 sticky ' style={{backgroundColor:"#27D69F1A"}}>
        <div className=' mx-auto text-xl flex md:justify-end justify-center text-white '>
            <Link href="/" className='no-underline ml-10'>Home</Link>
            <Link href="/" className='no-underline ml-10 '>Create</Link>
            <Link href="/" className=' no-underline ml-10 '>About</Link>
            <div className='mx-10'></div>
        </div>
    </nav>
  )
}
