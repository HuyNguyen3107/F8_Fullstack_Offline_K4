import { NextResponse } from "next/server";

export const middleware = (request) => {
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/") && +pathname.length === 1) {
    const url = `${request.nextUrl.origin}/en`;
    return NextResponse.redirect(url);
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};