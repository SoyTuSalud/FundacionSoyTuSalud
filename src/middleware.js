import { NextResponse } from "next/server";
import { validateUser } from "./utils/validateUser";
import { enablePages, redirect } from "./utils/enablePages";
import { verifyAccount } from "./utils/verifyAccount";
import { ResponseCodes } from "backend/common/enums/responseCodes.Enum";
export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const access = request.cookies.get("access") || "";
  if (path.includes("/verifiedAccount/")) {
    const token = path.slice(17);

    if (token.length > 0) {
      const { data } = await verifyAccount(token);
      if (data?.verifyAccount?.status?.code === ResponseCodes.SUCCESS) {
        const response = NextResponse.redirect(
          new URL("/success", request.url)
        );
        response.cookies.set("access", "true");
        return response;
      }

      return NextResponse.redirect(new URL("/error", request.url));
    }
    return NextResponse.redirect(new URL("/error", request.url));
  } else if (path.includes("/success") && access === "true") {
    const response = NextResponse.next();
    return response;
  } else {
    const token = request.cookies.get("token") || { value: "", name: "" };

    const validate = await validateUser(token.value);
    const role = validate?.body?.role || "noAuth";

    if (enablePages[role].find((page) => path.includes(page))) {
      const response = NextResponse.next();
      if (role == "noAuth") {
        request.cookies.delete("token");
      }
      return response;
    } else {
      const response = NextResponse.redirect(
        new URL(redirect[role], request.url)
      );
      if (role == "noAuth") {
        request.cookies.delete("token");
      }
      return response;
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/services/graqhql",
    "/login-admin",
    "/login",
    "/registro",
    "/verifiedAccount/:path*",
    "/success",
  ],
};
