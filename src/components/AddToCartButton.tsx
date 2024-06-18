'use client';

import { addToCart } from '@/actions/cart'
import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'
type Props = {
  added: boolean;
  id: string;
  currency: string;
  price: string;
}

export function AddToCartButton({ added, id, currency, price }: Props) {
  const [pending, setPending] = useState(false);
  const addToCart = async () => {
    if(!added) {
      setPending(true);
      await addToCart(id);
      setPending(false);
    }
  }
  
  return (
    <button disabled={added} onClick={addToCart} className={`w-full ${added ? 'bg-gray-500' : 'bg-[#FF7200]'} py-2 rounded font-medium text-white hover:opacity-90 transition-all duration-200`}>
    
    {pending ? (
      <LoaderCircle className="w-6 h-6 animate-spin" />
    ) : added ? (
      <span>Added</span>
    ) : (
      <span>Add to Cart - {currency}{price}</span>
    )}
    </button>
  )
}