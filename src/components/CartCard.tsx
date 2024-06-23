'use client';

import { Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import { righteous } from '@/utils/font'
import { changeQty } from '@/actions/cart'

type CartCardType = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  currency: string;
}

export function CartCard({
  id,
  name,
  price, 
  image, 
  quantity,
  currency
}: CartCardType) {
  
  const handleQty = async (a: string) => {
    await changeQty(id, a);
  }
  
  return (
    <div className="w-full flex flex-row border-l-4 border-[#FF7200] py-4 relative bg-gray-100 rounded md:w-[30rem] md:mx-3">
        <Image className="mx-4" height={70} width={70} src={image} alt={name} />
        <div className="flex flex-col items-start">
          <h1 className={`${righteous.className} text-xl font-bold text-[#FF7200]`}>{name}</h1>
          
          <h1 className="text-sm font-medium text-gray-700 mt-1.5">{currency} {price}</h1>
          <h1 className="text-md font-bold text-green-400 mt-1">{currency} {price * quantity}</h1>
        </div>
        <div className="absolute right-6 bottom-3 flex flex-row space-x-2">
        <button onClick={() => handleQty('decrement')} className="rounded p-0.5 text-white bg-[#FF7200] hover:opacity-90 transition-all duration-200">
          <Minus className="h-5 w-5" />
        </button>
        <span className="font-medium text-gray-800 text-xl">
          {quantity} 
        </span>
        <button onClick={() => handleQty('increment')} className="rounded px-0.5 text-white bg-[#FF7200] hover:opacity-90 transition-all duration-200">
          <Plus className="h-5 w-5" />
        </button>
        </div>
      </div>
  )
}