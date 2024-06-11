import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Righteous } from 'next/font/google'
const righteous = Righteous({ subsets: ['latin'], weight: ["400"] })

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  try {
    return {
      title: `${params.id} | Shapii`,
    };
  } catch (err: any) {
    console.log(err);
    return {
      title: "404 User not found!",
    };
  }
}

export default function ProductDetails() {
  return (
    <>
    <Navbar cart_length={0} />
    <div className="mt-5 mx-6">
      <Image className="rounded-lg h-60 object-contain border border-gray-200 shadow-sm" width={500} height={300} src={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"} alt={"Fallback"} />
      <div className="flex flex-row flex-wrap mt-4 space-x-2 justify-start">
      
        <div className="text-white bg-[#FF7200] rounded-full text-sm px-3 py-0.5 mt-1.5">
        Clothing
        </div>
       
      </div>
      <h1 className={`${righteous.className} font-bold text-[#FF7200] text-3xl mt-5`}>Mens Casual Premium Slim Fit T-Shirts</h1>
      <p className="mt-4 md:text-md">Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.</p>
      <div className="flex justify-center mt-5">
        <button className="w-full bg-[#FF7200] py-2 rounded font-medium text-white hover:opacity-90 transition-all duration-200">Add to Cart ₱219.53</button>
      </div>
    </div>
    <Footer />
    </>
  )
}