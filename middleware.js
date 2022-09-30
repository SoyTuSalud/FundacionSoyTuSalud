import { NextResponse } from 'next/server'
import { validateUser } from './utils/validateUser'
import { enablePages, redirect } from './utils/enablePages'


export async function middleware(request) {
  const token = request.cookies.get('token') || ""
  const validate = await validateUser(token)
  const role = validate?.data?.verifyRoles || 'noAuth'
  const path = request.nextUrl.pathname
  

  if (enablePages[role].find(page => path.includes(page))) {
    const response = NextResponse.next()
    if(role == 'noAuth'){
      deleteCookie(request, response, 'token')
    }
    return response
    } else {

    const response = NextResponse.redirect(new URL(redirect[role], request.url))
    if(role == 'noAuth'){
      deleteCookie(request, response, 'token')
    }
    return response
  }
  
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/private/:path*',
    '/api/graqhql',
    '/tuhistoria',
    '/loginAdmin',
    '/login',
    '/registro',
  ],
}


export const deleteCookie = (
  request,
  response,
  cookie
) => {
  const { value, options } = request.cookies.getWithOptions(cookie);
  if (value) {
    response.cookies.set(cookie, value, options);
    response.cookies.delete(cookie);
  }
};