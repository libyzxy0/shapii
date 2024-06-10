import { Navbar } from '@/components/Navbar'
import { Righteous } from 'next/font/google'
const righteous = Righteous({ subsets: ['latin'], weight: ["400"] })
import { ShoppingBag } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'
import Link from 'next/link'
import { Footer } from '@/components/Footer'

export default function Landing() {
  return (
    <>
    <Navbar />
      <section className="mx-8 md:mx-16 h-[70vh] md:flex md:items-center md:h-screen">
      <div className="mt-28 md:mt-0 w-full md:w-[60%]">
        <h1 className={`${righteous.className} text-4xl md:text-5xl text-[#FF7200] font-bold`}>Discover More, Pay Less – Shop Smart with Shapii</h1>
        <p className="text-gray-800 mt-5 md:text-md">Are you in search of affordable yet high-quality products? Look no further! Come and explore the diverse range of exceptional items available at Shapii. Shop now and experience the perfect blend of value and quality!</p>
        
        <Link href="/products">
        <button className={`${righteous.className}
        rounded-lg bg-[#FF7200] mt-8 flex flex-row items-center py-2 px-4 text-xl font-medium text-white hover:opacity-90 transition-all duration-200`}>
        <ShoppingBag className="h-5 w-5 mr-2" />
        Shop Now
        </button>
        </Link>
        
      </div>
      </section>
      <section id="featured" className="w-full h-full pb-20">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-[#FF7200]">Featured Products</h1>
          <p className="mt-2 text-gray-700 md:text-md">See our featured products below.</p>
        </header>
        
        <div className="w-full flex flex-col mt-10 md:flex-row md:flex-wrap md:mx-8 space-y-5">
          <ProductCard 
          id="1" 
          name="Mens Casual Premium Slim Fit T-Shirts" 
          description="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket." 
          tags={["clothing", "tshirt", "mens clothing"]}
          image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" 
          price="219.53" 
          currency="PHP" 
          />

        </div>
      </section>
      <Footer />
    </>
  )
}