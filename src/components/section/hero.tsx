import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen w-full flex  max-xl:pt-10 justify-center xl:justify-start xl:items-center xl:pl-10  bg-red-400">
      {/* Background Image */}
      <Image
        src="https://dadus.co.in/cdn/shop/files/Mobile_-_Banner2_34f308d9-faef-4595-90e7-b78e1521f0ee.jpg?v=1691074823&width=800"
        alt="Sweet Banner"
        layout="fill" 
        objectFit="cover" 
        priority 
        className="z-0 brightness-70 xl:hidden "
      />
      <Image
        src="https://dadus.co.in/cdn/shop/files/Desktop_-_Banner1_2.jpg?v=1690874537&width=2800"
        alt="Sweet Banner"
        layout="fill" 
        objectFit="cover" 
        priority 
        className="z-0 brightness-70 xl:block hidden "
      />

      {/* Content */}
      <div className=" z-10  flex flex-col gap-4 lg:text-left px-5">
        <h2 className="text-4xl lg:text-6xl font-serif text-white xl:text-red-800">Welcome to <br />Rasoraj Sweets</h2>
        <h3 className="text-xl lg:text-2xl font-serif text-red-900 xl:text-red-900">
          Wide varieties of sweets and delicacies to choose from <br />
          Explore the deliciousness that awaits you!
        </h3>
        <button className="flex items-center font-serif gap-1 justify-center cursor-pointer border-2 px-6 py-2 rounded-sm text-white xl:text-red-700 hover:bg-red-800 hover:text-white hover:border-white">
          Shop Now <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
