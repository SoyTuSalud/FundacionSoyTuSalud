import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
import { validateUser } from './utils/validateUser'
import { enablePages } from './utils/enablePages'

export async function middleware(request) {
  const token = request.cookies.get('token')
  const validate = await validateUser(token)
  const verifyRolesCondition = validate?.data?.verifyRoles || 'noAuth'

  if (enablePages[verifyRolesCondition].includes(request.nextUrl.pathname)) {
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
