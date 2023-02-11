import {NextRequest, NextResponse} from 'next/server'
import {getLocale} from "@/src/middleware.functions.ts/locale.middleware";
import {privateRoutes} from "@/src/middleware.functions.ts/privateRoutes.middleware";
import {i18n} from "@/i18n-config";


export async function middleware(request: NextRequest) {


  const pathname = request.nextUrl.pathname

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
  return await privateRoutes(request)

}

export const config = {

  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ],
}
