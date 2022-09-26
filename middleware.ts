import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { validateUser } from './utils/validateUser'
// import { decodeToken } from './utils/decodeToken'
import { verifyAdmin } from './backend/infrastructure/adapters/mongo/mongoAdapterUser'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // const token = localStorage.getItem('token')
  // if (token) {
  //   decodeToken(token)
  //   return NextResponse.redirect(new URL('/private/admin', request.url))
  // }
  // return NextResponse.redirect(new URL('/private/loginAdmin', request.url))
  // console.log('MIDDLEWARE: ', request.nextUrl)

  const validate = await validateUser()
  console.log(validate)

  if (validate?.data.verifyAdmin === 'ok') {
    return NextResponse.next()
  }
  return NextResponse.redirect(new URL('/private/admin', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/private/admin/:path*',
}
