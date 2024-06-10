import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Search, SlidersHorizontal } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center flex-col pb-20">
      
        <div className="w-full px-6 max-w-xl mx-auto">
          <div className="flex items-center py-2.5 mt-8 px-4 rounded-lg border-[1.5px] border-gray-200 hover:border-[#FF7200]">
            <button className="text-gray-700 flex-shrink-0 flex items-center justify-center">
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
         
          <ProductCard 
          id="1" 
          name="Mens Casual Premium Slim Fit T-Shirts" 
          description="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket." 
          tags={["clothing", "tshirt", "mens clothing"]}
          image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" 
          price="219.53" 
          currency="PHP"
          created_at="2024"
          />
          <ProductCard 
          id="1" 
          name="Mens Casual Premium Slim Fit T-Shirts" 
          description="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket." 
          tags={["clothing", "tshirt", "mens clothing"]}
          image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" 
          price="219.53" 
          currency="PHP" 
          created_at="2024"
          />
          <ProductCard 
          id="1" 
          name="Mens Casual Premium Slim Fit T-Shirts" 
          description="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket." 
          tags={["clothing", "tshirt", "mens clothing"]}
          image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" 
          price="219.53" 
          currency="PHP" 
          created_at="2024"
          />
          <ProductCard 
          id="1" 
          name="Mens Casual Premium Slim Fit T-Shirts" 
          description="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket." 
          tags={["clothing", "tshirt", "mens clothing"]}
          image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" 
          price="219.53" 
          currency="PHP" 
          created_at="2024"
          />

        </div>
        
      </div>
      <Footer />
    </>
  )
}
