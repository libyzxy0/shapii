'use server';

import { db } from '@/db/drizzle';
import { carts, products } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getSession } from '@/actions/auth';
import { revalidatePath } from 'next/cache';
import type { User } from '@/types';

export const changeQty = async (id: string, action: 'increment' | 'decrement') => {
  try {
    const prev = await db.select().from(carts).where(eq(carts.id, id));
    if (prev.length === 0) {
      console.log('Cart item not found');
      return;
    }
    if (prev[0].quantity === 1 && action === 'decrement') return;
    switch (action) {
      case 'increment':
        await db.update(carts).set({
          quantity: prev[0].quantity + 1
        }).where(eq(carts.id, id));
        revalidatePath('/cart');
        break;
      case 'decrement':
        await db.update(carts).set({
          quantity: prev[0].quantity - 1
        }).where(eq(carts.id, id));
        revalidatePath('/cart');
        break;
      default:
        console.log('Invalid action');
        break;
    }
  } catch (error) {
    console.error('Error changing quantity:', error);
  }
};

export const addToCart = async (product_id: string) => {
  try {
    const session: User | null = await getSession({});
    if (session !== null) {
      const product = await db.select().from(products).where(eq(products.id, product_id));
      if (product.length > 0) {
        await db.insert(carts).values({
          user_id: session.id,
          product_id,
          name: product[0].name,
          image: product[0].image,
          price: product[0].price,
          currency: product[0].currency,
          quantity: 1
        });
        revalidatePath(`/product/${product_id}`);
        return { message: 'success' };
      } else {
        return { message: 'Product not found' };
      }
    } else {
      return { message: 'User not logged in' };
    }
  } catch (error: any) {
    console.error('Error adding to cart:', error);
    return { message: 'failed', error: error.message };
  }
};
