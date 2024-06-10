import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import type { Product } from '@/types'

export function ProductCard({ id, name, description, price, tags, image, currency }: Product) {
  return (
    <div className="rounded-lg border border-gray-300 shadow-sm mx-6 md:mx-3 p-5 flex justify-center flex-col md:w-[30rem] md:py-3" id={id}>
            <Image className="rounded-lg h-60 object-contain" width={500} height={300} src={image} />
            <div className="flex flex-col border-t border-gray-300 mt-5">
              <div className="flex flex-row items-center mt-4 justify-between">
                <h1 className="font-bold text-green-400 text-xl">{currency} {price}</h1>
                <div className="py-1 px-2 rounded-full bg-[#FF7200] text-white text-sm mx-2">
                {tags[0]}
                </div>
              </div>
              <h1 className="font-bold text-[#FF7200] text-2xl mt-2">{name}</h1>
              <p className="text-gray-700 mt-3 truncate">{description}</p>
            </div>
            <div className="flex justify-start mt-4">
              <button className="flex flex-row items-center bg-[#FF7200] text-white py-2 px-4 rounded hover:opacity-90 transition-all duration-200">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy Now
              </button>
            </div>
          </div>
  )
}