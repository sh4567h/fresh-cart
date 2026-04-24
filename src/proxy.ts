import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const {pathname}=request.nextUrl
    const token = await getToken({req:request})
    const isAuthPage = ['/login' , '/register'].includes(pathname)
    if(token &&isAuthPage){
         return NextResponse.redirect(new URL('/home', request.url))
    }
    if(!token && !isAuthPage){
        return NextResponse.redirect(new URL('/login', request.url))
   
    }
    return NextResponse.next()
 }
 
export const config = {
  matcher: ['/cart' , '/wishList'],
}