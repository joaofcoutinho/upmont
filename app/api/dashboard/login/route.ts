import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { usuario, senha } = await req.json()

  const validUser = process.env.DASHBOARD_USER
  const validPassword = process.env.DASHBOARD_PASSWORD
  const secret = process.env.DASHBOARD_SECRET

  if (usuario !== validUser || senha !== validPassword) {
    return NextResponse.json({ error: "Usuário ou senha inválidos" }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set("dashboard_auth", secret!, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 horas
  })

  return res
}
