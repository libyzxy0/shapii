import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios from 'axios';

const getSession = async (authtoken) => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/session', {
      headers: {
        'Authorization': `Bearer ${authtoken ? authtoken : 'no-session'}`
      }
    })
  return data.isAuthenticated;
  } catch (error: any) {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const authtoken = request.cookies.get('authtoken');
  const user = await getSession(authtoken?.value);
  if (pathname === '/cart' || pathname === '/account') {
    if(!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      return NextResponse.next();
    }
  } else {
    return NextResponse.next();
  }
}