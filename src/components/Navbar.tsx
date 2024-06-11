'use client';

import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/images/shapii.png'
import { AlignJustify, ShoppingCart, X } from 'lucide-react'
import { Righteous } from 'next/font/google'
const righteous = Righteous({ subsets: ['latin'], weight: ["400"] })
import { useState } from 'react';

export function Navbar({ cart_length }: { cart_length?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <>
    <nav className={`h-16 w-full sticky top-0 bg-white flex items-center justify-between ${!open ? 'border-b border-gray-200' : 'border-none'}`}>
      <div className="flex items-center mx-3 md:mx-6">
        <Image src={logo} className="w-14 h-14" alt="Logo of Shapii" />
        <h1 className={`${righteous.className} text-2xl md:text-3xl mx-2 text-[#FF7200] font-bold`}>Shapii</h1>
      </div>
      <div className="mx-6 flex flex-row space-x-4 md:hidden">
        {cart_length != null && (
        <button className={`rounded-lg py-1.5 px-2 flex flex-row text-gray-700 font-medium ${cart_length > 0 ? 'bg-[#FF7200] text-white' : 'bg-gray-100 text-gray-700' }`}>
          <ShoppingCart className="h-5 w-5" />
          {cart_length > 0 && (
            <span className="ml-2">{cart_length}</span>
          )}
        </button>
        )}
        
        <button onClick={() => setOpen(!open)}>
          {!open ? (
            <AlignJustify className="h-6 w-6 text-gray-700" />
          ) : (
            <X className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>
      {/* For big screens */} 
      <ul className="hidden md:flex flex-row items-center space-x-4 mx-8">
       <li className="text-gray-700 text-lg font-medium hover:underline hover:text-[#FF7200] hover:cursor-pointer">
         <Link href="/">
           Home
         </Link>
       </li>
       <li className="text-gray-700 text-lg font-medium hover:underline hover:text-[#FF7200] hover:cursor-pointer">
         <Link href="/products">
           Products
         </Link>
       </li>
       <li className="text-gray-700 text-lg font-medium hover:underline hover:text-[#FF7200] hover:cursor-pointer">
         <Link href="/about">
           About Us
         </Link>
       </li>
       <li className="text-gray-700 text-lg font-medium hover:underline hover:text-[#FF7200] hover:cursor-pointer">
         <Link href="/contact">
           Contact Us
         </Link>
       </li>
      </ul>
    </nav>
    <ul className={`${!open ? 'hidden' : 'visible'} md:hidden w-full fixed top-0 mt-16 border-b border-gray-200 py-5 flex flex-col bg-white text-center justify-center space-y-2`}>
      <li className="text-gray-700 text-lg font-medium hover:underline hover:text-[#FF7200] hover:cursor-pointer">
         <Link href="/">
           Home
         </Link>
       </li>
       <li className="text-gray-700 text-lg font-medium hover:underline hover:text-[#FF7200] hover:cursor-pointer">
         <Link href="/products">
           Products
         </Link>
       </li>
       <li className="text-gray-700 text-lg font-medium hover:underline hover:text-[#FF7200] hover:cursor-pointer">
         <Link href="/about">
           About Us
         </Link>
       </li>
       <li className="text-gray-700 text-lg font-medium hover:underline hover:text-[#FF7200] hover:cursor-pointer">
         <Link href="/contact">
           Contact Us
         </Link>
       </li>
    </ul>
    </>
  )
}