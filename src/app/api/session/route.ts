import { getUser } from '@/utils/jwt'

export async function GET(request: Request) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1] ?? 'no-session';
    const user = await getUser(token, {});
    return Response.json({ isAuthenticated: user ? true : false })
  } catch (error: any) {
  return Response.json({ isAuthenticated: false })
  }
}