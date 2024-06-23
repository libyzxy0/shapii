import type { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { db } from '@/db/drizzle'
import { products } from '@/db/schema'
import { eq } from  'drizzle-orm'
import { righteous } from '@/utils/font'
import { AddToCartButton } from '@/components/AddToCartButton'
import { getSession } from '@/actions/auth'

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props): Promise<Metadata> {
  try {
    const product = (await db.select().from(products).where(eq(products.id, params.id)))[0]
    return {
      title: `${product.name} | Shapii`,
      description: product.description
    };
  } catch (err: any) {
    console.log(err);
    return {
      title: "404 Product not found!",
    };
  }
}

export default async function ProductDetails({ params }) {
  let product;
  
  const user = await getSession({
    carts: true
  });
  
  try {
    const result = (await db.select().from(products).where(eq(products.id, params.id)))[0]
    product = result;
  } catch (error) {
    product = [];
    console.error(error);
  }
  
  const isProductAddedOnCart = user?.carts?.find((p) => p.product_id === product.id) ?? false;
  
  console.log(user, product)
  
  return (
    <>
    <Navbar cart_length={user && user.carts ? user.carts.length : 0} />
    <div className="mt-5 mx-6">
      <Image className="rounded-lg h-60 object-contain border border-gray-200 shadow-sm" width={500} height={300} src={product.image} alt={product.name} />
      <div className="flex flex-row flex-wrap mt-4 space-x-2 justify-start">
      
        {product.tags && product.tags.map((tag, index) => (
          <div key={index} className="text-white bg-[#FF7200] rounded-full text-sm px-3 py-0.5 mt-1.5">
         {tag}
        </div>
        ))}
       
      </div>
      <h1 className={`${righteous.className} font-bold text-[#FF7200] text-3xl mt-5`}>{product.name}</h1>
      <p className="mt-4 md:text-md">{product.description}</p>
      <p className="mt-4 md:text-md text-gray-500">Available Stocks: {product.stocks}</p>
      
      <div className="flex justify-center mt-5">
        <AddToCartButton added={isProductAddedOnCart} id={product.id} price={product.price} currency={product.currency} />
      </div>
    </div>
    <Footer />
    </>
  )
}