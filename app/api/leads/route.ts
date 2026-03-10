import { NextRequest, NextResponse } from "next/server"
import { addLead, getLeads, setupTable } from "@/lib/leads-store"

async function ensureTable() {
  await setupTable()
}

export async function GET() {
  try {
    await ensureTable()
    const leads = await getLeads()
    return NextResponse.json(leads)
  } catch (error) {
    console.error("GET /api/leads error:", error)
    return NextResponse.json({ error: "Erro ao buscar leads" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await ensureTable()
    const body = await req.json()

    const lead = await addLead({
      nome: body.nome || body.name || "",
      email: body.email || "",
      whatsapp: body.whatsapp || undefined,
      telefone: body.telefone || body.phone || undefined,
      unidade_interesse: body.unidadeInteresse || undefined,
      mensagem: body.mensagem || body.message || undefined,
      origem: body.origem || "home",
    })

    return NextResponse.json(lead, { status: 201 })
  } catch (error) {
    console.error("POST /api/leads error:", error)
    return NextResponse.json({ error: "Erro ao salvar lead" }, { status: 500 })
  }
}
