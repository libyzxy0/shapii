'use client';

import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/images/shapii.png'
import { AlignJustify, ShoppingCart, X } from 'lucide-react'
import { righteous } from '@/utils/font'
import { useState } from 'react';

export function Navbar({ cart_length, admin, onToggle }: { cart_length?: number, admin?: boolean, onToggle?: (v: boolean) => void }) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
    if(admin) {
      onToggle(!open);
    }
  }
  return (
    <>
    <nav className={`h-16 w-full z-40 sticky top-0 bg-white flex items-center justify-between ${admin ? 'border-b border-gray-200' : !open ? 'border-b border-gray-200' : 'border-none'}`}>
      <div className="flex items-center mx-3 md:mx-6">
        <Image src={logo} className="w-14 h-14" alt="Logo of Shapii" />
        <h1 className={`${righteous.className} text-2xl md:text-3xl mx-2 text-[#FF7200] font-bold`}>Shapii {admin && '/ Admin'}</h1>
        
      </div>
      {cart_length != null && (
        <Link href="/cart">
        <button className={`hidden md:flex rounded-lg py-2 px-2.5 flex-row text-gray-700 font-medium ${cart_length > 0 ? 'bg-[#FF7200] text-white' : 'bg-gray-100 text-gray-700' }`}>
          <ShoppingCart className="h-5 w-5" />
          {cart_length > 0 && (
            <span className="ml-2">{cart_length}</span>
          )}
        </button>
        </Link>
        )}
       
      <div className="mx-6 flex flex-row space-x-4 md:hidden">
       
        {!admin && cart_length != null && (
        <Link href="/cart">
        <button className={`rounded-lg py-1.5 px-2 flex flex-row text-gray-700 font-medium ${cart_length > 0 ? 'bg-[#FF7200] text-white' : 'bg-gray-100 text-gray-700' }`}>
          <ShoppingCart className="h-5 w-5" />
          {cart_length > 0 && (
            <span className="ml-2">{cart_length}</span>
          )}
        </button>
        </Link>
        )}
        
        <button onClick={() => toggleMenu()}>
          {!open ? (
            <AlignJustify className="h-6 w-6 text-gray-700" />
          ) : (
            <X className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>
      {/* For big screens */} 
      {!admin && (
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
     )}
    </nav>
    {!admin && (
    <ul className={`${!open ? 'hidden' : 'visible'} z-40 md:hidden w-full fixed top-0 mt-16 border-b border-gray-200 py-5 flex flex-col bg-white text-center justify-center space-y-2`}>
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
    )}
    </>
  )
}