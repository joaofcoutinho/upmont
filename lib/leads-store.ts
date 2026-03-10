import { neon } from "@neondatabase/serverless"

export type Lead = {
  id: string
  nome: string
  email: string
  whatsapp?: string
  telefone?: string
  unidade_interesse?: string
  mensagem?: string
  origem: "home" | "contatos"
  timestamp: string
}

function db() {
  return neon(process.env.DATABASE_URL!)
}

export async function setupTable() {
  const sql = db()
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      nome TEXT NOT NULL,
      email TEXT NOT NULL,
      whatsapp TEXT,
      telefone TEXT,
      unidade_interesse TEXT,
      mensagem TEXT,
      origem TEXT NOT NULL DEFAULT 'home',
      timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
}

export async function addLead(lead: Omit<Lead, "id" | "timestamp">): Promise<Lead> {
  const sql = db()
  const rows = await sql`
    INSERT INTO leads (nome, email, whatsapp, telefone, unidade_interesse, mensagem, origem)
    VALUES (
      ${lead.nome},
      ${lead.email},
      ${lead.whatsapp ?? null},
      ${lead.telefone ?? null},
      ${lead.unidade_interesse ?? null},
      ${lead.mensagem ?? null},
      ${lead.origem}
    )
    RETURNING *
  `
  return rows[0] as Lead
}

export async function getLeads(): Promise<Lead[]> {
  const sql = db()
  const rows = await sql`
    SELECT * FROM leads ORDER BY timestamp DESC
  `
  return rows as Lead[]
}
