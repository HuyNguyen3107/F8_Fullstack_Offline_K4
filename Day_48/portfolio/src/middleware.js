import { NextResponse } from "next/server";

export const middleware = (request) => {
  const pathname = request.nextUrl.pathname;
  if (pathname === "/" || pathname === "/locale") {
    const url = `${request.nextUrl.origin}/locale/en`;
    return NextResponse.redirect(url);
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
