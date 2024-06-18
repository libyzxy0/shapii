import { Navbar } from '@/components/Navbar'
import { righteous } from '@/utils/font'
import { ShoppingBag } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { db } from '@/db/drizzle'
import { products } from '@/db/schema'
import { eq } from  'drizzle-orm'
import { getSession } from '@/actions/auth';

export const dynamic = 'force-dynamic'

export default async function Landing() {
  const productList = await db.select().from(products).where(eq(products.featured, true))
  const user = await getSession({
    carts: true
  })
  return (
    <>
    <Navbar cart_length={user ? user.carts.length : 0} />
      <section className="mx-8 md:mx-16 h-[70vh] md:flex md:items-center md:h-screen">
      <div className="mt-32 md:mt-0 w-full md:w-[60%]">
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
          <h1 className={`${righteous.className} text-3xl font-bold text-[#FF7200]`}>Featured Products</h1>
          <p className="mt-2 text-gray-700 md:text-md">See our featured products below.</p>
        </header>
        
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
      </section>
      <Footer />
    </>
  )
}