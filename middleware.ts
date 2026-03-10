import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith("/dashboard") && !pathname.startsWith("/dashboard/login")) {
    const token = req.cookies.get("dashboard_auth")?.value
    const secret = process.env.DASHBOARD_SECRET

    if (!token || token !== secret) {
      return NextResponse.redirect(new URL("/dashboard/login", req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
