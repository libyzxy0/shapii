'use server';

import { db } from '@/db/drizzle'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { cookies } from 'next/headers'
import { createToken, getUser as getUserFromToken } from '@/utils/jwt';
import type { User } from '@/types'

type LoginType = {
  email: string;
  password: string;
}

type OptionType = {
  carts?: boolean;
  products?: boolean;
}

export const login = async (data: LoginType) => {
  if(!data.email || !data.password) return { error: "Please enter a value" }
  const user = (await db.select().from(users).where(eq(users.email, data.email)))[0];
  
  if(!user) return { error: "User not found" }
  if(user.password === data.password) {
    const authtoken = await createToken({ email: user.email, id: user.id });
    cookies().set('authtoken', authtoken)
    return { message: "Login successfully" } 
  } else {
    return { error: 'Incorrect password!!?!' }
  }
}

export const getSession = async (options: OptionType): Promise<User | null> => {
  try {
    const authtoken = cookies().get('authtoken')?.value || 'hatdoggsspoginiliby';
    const user: User | null = await getUserFromToken(authtoken, options);
    return user;
  } catch (error: any) {
    console.log(error)
    return null;
  }
}