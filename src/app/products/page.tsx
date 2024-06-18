import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Search, SlidersHorizontal } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'
import { db } from '@/db/drizzle'
import { products } from '@/db/schema'

/* Force to dont csche the data from database */
export const dynamic = 'force-dynamic'

export default async function Products() {
  const productList = await db.select().from(products);
  return (
    <>
      <Navbar cart_length={0} />
      <div className="w-full flex justify-center flex-col pb-20">
      
        <div className="w-full px-6 max-w-xl mx-auto">
          <div className="flex items-center py-2.5 mt-8 px-4 rounded-lg border-[1.5px] border-gray-200 hover:border-[#FF7200]">
            <button className="text-gray-400 flex-shrink-0 flex items-center justify-center">
              <Search className="h-5 w-5" />
            </button>
            <input
              placeholder="Search products"
              className="bg-transparent border-none outline-none px-2 flex-grow w-0"
              type="text"
              name="search"
            />
            <button className="text-gray-700 flex-shrink-0 flex items-center justify-center">
              <SlidersHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>
        
         <div className="w-full flex flex-col mt-10 md:flex-row md:flex-wrap md:mx-8 space-y-5">
         
         
         {productList && productList.map((product, index) => (
          <ProductCard 
          key={index}
          id={product.id} 
          name={product.name} 
          description={product.description} 
          tags={product.tags}
          image={product.image} 
          price={product.price} 
          currency={product.currency}
          created_at={product.created_at}
          />
          ))} 

        </div>
        
      </div>
      <Footer />
    </>
  )
}
