import { ShoppingCart } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { CartCard } from '@/components/CartCard'
import { getSession } from '@/actions/auth';
import type { User, Cart } from '@/types'

const calculateTotalPurchase = (user: User | null): string => {
  if (user && Array.isArray(user.carts)) {
    const total = user.carts.reduce((total: number, product: Cart) => {
      return total + (product.quantity * product.price);
    }, 0);
    return total.toFixed(2);
  }
  return "0.00";
};

export default async function CartPage() {
  const user = await getSession({
    carts: true
  })
  const totalPurchase = calculateTotalPurchase(user)
  
  const carts = user && user.carts && user.carts.sort((a, b) => {
  return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });
  
  return (
    <>
    <Navbar />
    
    
    <h1 className="text-gray-800 font-bold text-2xl mx-6 mt-8">My Cart</h1>
    
    
    <div className="mx-6 mt-5 flex flex-col justify-center space-y-4 pb-28 md:mx-0 md:flex-row md:flex-wrap">
      {carts && carts.map((product, index) => (
        <CartCard 
        key={index}
        id={product.id} 
        name={product.name} 
        price={product.price} 
        currency={product.currency}
        quantity={product.quantity} 
        image={product.image} />
      ))}
    </div>
    
    
    <div className="fixed bottom-0 w-full h-16 border-t border-gray-200 flex items-center justify-between bg-white">
      <div className="mx-6 flex flex-col">
        <p className="font-medium text-sm text-gray-700">Total Purchase</p>
        <h1 className="text-[#FF7200] font-bold text-xl">
        {carts && carts.length > 0 ? (
          <span>{carts[0]?.currency} {totalPurchase}</span>
        ) : (
          <span>0</span>
        )}
        </h1>
      </div>
      <button className="flex flex-row items-center bg-[#FF7200] text-white py-2 px-4 rounded hover:opacity-90 transition-all duration-200 mx-6">
        <ShoppingCart className="w-5 h-5 mr-2" />
        Checkout
      </button>
    </div>
    </>
  )
}