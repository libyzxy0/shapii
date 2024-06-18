import 'dotenv/config'
import {SignJWT, jwtVerify, type JWTPayload} from 'jose';
import { db } from '@/db/drizzle'

const secret = process.env.JWT_SECRET_KEY;

type OptionType = {
  carts?: boolean;
  products?: boolean;
}

export const getUser = async (token: string, options: OptionType) => {
  try {
    const {payload: {id} } = await jwtVerify(token, new TextEncoder().encode(secret));
    const user = await db.query.users.findFirst({
      where: ((users, { eq }) => eq(users.id, id)), 
      with: options
    });
    return user;
  } catch (error: any) {
    return null;
  }
}

export const createToken = async ({ email, id }: { email: string; id: string }) => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 7 * 24 * 60 * 60;
  const token = await new SignJWT({email, id})
    .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(secret));
  return token
}