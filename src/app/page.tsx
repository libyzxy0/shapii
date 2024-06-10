import { Navbar } from '@/components/Navbar'
import { Righteous } from 'next/font/google'
const righteous = Righteous({ subsets: ['latin'], weight: ["400"] })
import { ShoppingBag } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'
import { Footer } from '@/components/Footer'

export default function Landing() {
  return (
    <>
    <Navbar />
      <section className="mx-8 md:mx-16 h-[70vh] md:flex md:items-center md:h-screen">
      <div className="mt-28 md:mt-0 w-full md:w-[60%]">
        <h1 className={`${righteous.className} text-4xl md:text-5xl text-[#FF7200] font-bold`}>Discover More, Pay Less – Shop Smart with Shapii</h1>
        <p className="text-gray-800 mt-5 md:text-md">Are you in search of affordable yet high-quality products? Look no further! Come and explore the diverse range of exceptional items available at Shapii. Shop now and experience the perfect blend of value and quality!</p>
        
        <button className={`${righteous.className} bg-transparent 
        rounded-lg bg-[#FF7200] mt-8 flex flex-row items-center py-2 px-4 text-xl font-medium text-white hover:opacity-90 transition-all duration-200`}>
        <ShoppingBag className="h-5 w-5 mr-2" />
        Shop Now
        </button>
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
          name="Wireless Headphones" 
          description="High-quality wireless headphones with noise cancellation and 20-hour battery life." 
          tags={["electronics", "audio", "headphones"]}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOeme9jQoZMUkqO_3hpfTtd7IdW0_-kAf9lWhT0jcBg&s" 
          price="99.99" 
          currency="USD" 
          />

        </div>
      </section>
      <Footer />
    </>
  )
}