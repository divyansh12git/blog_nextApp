import React from 'react';
import Link from 'next/link';
// import {FaYoutube, FaTwitter, FaGithub, FaLaptop} from 'react-icons/fa';


export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full  ">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-center md:justify-end text-white text-lg font-medium tracking-wide">
        <Link href="/" className="ml-10 hover:text-purple-700 transition">Home</Link>
        <Link href="/create" className="ml-10 hover:text-purple-700 transition">Create</Link>
        <Link href="/about" className="ml-10 hover:text-purple-700 transition">About</Link>
      </div>
    </nav>
  );
}
