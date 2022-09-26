import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { validateUser } from './utils/validateUser'

export async function middleware(request: NextRequest) {
    
  const token= request.cookies.get('token')
  const validate = await validateUser(token)
  

  if (validate?.data?.verifyAdmin === 'ok') {
    return NextResponse.next()
  }
  return NextResponse.redirect(new URL('/private/loginAdmin', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/private/admin/:path*','/api/graqhql'],
}
