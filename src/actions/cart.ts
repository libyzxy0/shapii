'use server';

import { db } from '@/db/drizzle'
import { carts, products } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { getSession } from '@/actions/auth'
import { revalidatePath } from 'next/cache'

export const changeQty = async (id: string, action: string) => {
  const prev = await db.select().from(carts).where(eq(carts.id,id))
  if(prev[0].quantity === 1 && action == 'decrement') return;
  switch(action) {
    case 'increment':
      await db.update(carts).set({
        quantity: prev[0].quantity + 1
      }).where(eq(carts.id, id));
      break;
    case 'decrement':
      await db.update(carts).set({
        quantity: prev[0].quantity - 1
      }).where(eq(carts.id, id));
      break;
    default:
      console.log('Poginiliby');
      break;
  }
}

export const addToCart = async (product_id) => {
  const { id: user_id } = await getSession();
  const product = await db.select().from(products).where(eq(products.id, product_id))[0];
  await db.insert(carts).values({
    user_id, 
    product_id, 
    name: product.name,
    image: product.image,
    currency: product.currency,
    price: product.price, 
    quantity: 1
  })
  revalidatePath(`/product/${product_id}`);
}