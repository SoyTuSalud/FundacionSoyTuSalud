import {NextResponse} from "next/server";

import {validateUser} from "@/src/utils/validateUser";
import {enablePages, redirect} from "@/src/utils/enablePages";



const matcherList = [
  '/private/',
  '/services/graqhql',
  '/tuhistoria',
  '/loginAdmin',
  '/login',
  '/registro',
  '/success',
]
export const  privateRoutes  =  async ( request ) => {

  const path = request.nextUrl.pathname

  if(matcherList.some(match => path.includes(match))){
    const token = request.cookies.get('token') || ''
    const validate = await validateUser(token.value)
    const role = validate?.body?.role || 'noAuth'

    if (enablePages[role].find((page) => path.includes(page))) {
      const response = NextResponse.next()
      if (role == 'noAuth') {
        response.cookies.delete('token')
      }
      return response
    } else {
      const response = NextResponse.redirect(
          new URL(redirect[role], request.url),
      )
      if (role == 'noAuth') {
        response.cookies.delete('token')
      }
      return response
    }
  }
}

/*
export const deleteCookie = (request, response, cookie) => {
  const { value, options } = request.cookies.getWithOptions(cookie)
  if (value) {
    response.cookies.set(cookie, value, options)
    response.cookies.delete(cookie)
  }
}
 */