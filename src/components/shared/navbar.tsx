import React from 'react'

import {Poppins} from "next/font/google";

import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";


const poppins = Poppins({
  subsets:['latin'],
  weight:"400"
})
  

export default function Navbar() {
  return (
    <nav className="flex justify-between gap-2 items-center py-3 px-8">

      <div id="logo" className="flex items-center cursor-pointer">
        <h1 className="font-bold font-serif text-3xl text-orange-600">Rasoraj</h1>
      </div>

      <div id="menu" className='hidden md:block'>
        <ul className={`flex ${poppins.className}  text-xl gap-5 lg:gap-16 text-[#C1AC74]`}>
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">About</li>
          <li className="hover:text-orange-500 cursor-pointer">Sweets</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>
      </div>

      <div id = "menu-icons" className="flex text-xl gap-4 text-[#C1AC74]">
        <IoIosSearch className="hover:text-orange-500 cursor-pointer"/>
        <CgProfile className="hover:text-orange-500 cursor-pointer"/>      
        <HiOutlineShoppingCart className="hover:text-orange-500 cursor-pointer"/>
      </div>
    </nav>
  )
}