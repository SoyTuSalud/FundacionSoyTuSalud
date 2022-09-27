import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
import { validateUser } from './utils/validateUser'
import { enablePages } from './utils/enablePages'

export async function middleware(request) {
  const token = request.cookies.get('token')
  const validate = await validateUser(token)
  const role = validate?.data?.verifyRoles || 'noAuth'
  const path = request.nextUrl.pathname

  if (enablePages[role].includes(path)) {
    return NextResponse.next()
  } else {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/private/admin/:path*',
    '/api/graqhql',
    '/tuhistoria',
    '/loginAdmin',
    '/login',
    '/registro',
  ],
}
