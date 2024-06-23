'use client';

import { addToCart as addToCartAction } from '@/actions/cart'
import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import toast from 'react-hot-toast';
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
      try {
        await addToCartAction(id);
        toast.success("Added to cart");
      } catch (error) {
        toast.error("Login first to perform this action");
      } finally {
      setPending(false);
      }
    }
  }
  
  return (
    <button disabled={added} onClick={addToCart} className={`w-full ${added ? 'bg-gray-500' : 'bg-[#FF7200]'} py-2 rounded font-medium text-white hover:opacity-90 transition-all duration-200 flex justify-center items-center`}>
    
    {pending ? (
      <LoaderCircle className="w-6 h-6 animate-spin" />
    ) : added ? (
      <span>Added to Cart</span>
    ) : (
      <span>Add to Cart - {currency}{price}</span>
    )}
    </button>
  )
}