"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import type { Lead } from "@/lib/leads-store"
import Image from "next/image"

const UNIDADE_LABEL: Record<string, string> = {
  "4-suites": "4 Suítes",
  "3-suites": "3 Suítes",
  studios: "Studios",
}

function StatCard({ label, value, sub }: { label: string; value: number; sub?: string }) {
  return (
    <div className="bg-white/5 border border-[#c9a961]/20 rounded-2xl p-6 flex flex-col gap-1">
      <span className="text-white/50 text-sm">{label}</span>
      <span className="text-4xl font-bold text-white">{value}</span>
      {sub && <span className="text-[#c9a961] text-xs">{sub}</span>}
    </div>
  )
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso))
}

function downloadCSV(leads: Lead[]) {
  const headers = ["Nome", "Email", "WhatsApp", "Telefone", "Interesse", "Mensagem", "Origem", "Data"]
  const rows = leads.map((l) => [
    l.nome,
    l.email,
    l.whatsapp ?? "",
    l.telefone ?? "",
    l.unidade_interesse ? (UNIDADE_LABEL[l.unidade_interesse] ?? l.unidade_interesse) : "",
    l.mensagem ?? "",
    l.origem === "home" ? "Home" : "Contatos",
    formatDate(l.timestamp),
  ])

  const csv = [headers, ...rows]
    .map((row) => row.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
    .join("\n")

  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `leads-upmont-${new Date().toISOString().slice(0, 10)}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

export default function DashboardPage() {
  const router = useRouter()
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"todos" | "home" | "contatos">("todos")
  const [search, setSearch] = useState("")
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const handleLogout = async () => {
    await fetch("/api/dashboard/logout", { method: "POST" })
    router.push("/dashboard/login")
  }

  const fetchLeads = useCallback(async () => {
    try {
      const res = await fetch("/api/leads")
      const data = await res.json()
      setLeads(data)
      setLastUpdated(new Date())
    } catch {
      // silently fail
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchLeads()
  }, [fetchLeads])

  const filtered = leads.filter((l) => {
    const matchesFilter = filter === "todos" || l.origem === filter
    const q = search.toLowerCase()
    const matchesSearch =
      !q ||
      l.nome.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      (l.whatsapp ?? "").includes(q) ||
      (l.telefone ?? "").includes(q)
    return matchesFilter && matchesSearch
  })

  const totalHome = leads.filter((l) => l.origem === "home").length
  const totalContatos = leads.filter((l) => l.origem === "contatos").length
  const total4suites = leads.filter((l) => l.unidade_interesse === "4-suites").length
  const total3suites = leads.filter((l) => l.unidade_interesse === "3-suites").length

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      {/* Header */}
      <header className="border-b border-[#c9a961]/20 bg-black/60 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/upmont-logo-white.png" alt="UpMont" width={120} height={36} className="h-9 w-auto" />
            <div className="w-px h-8 bg-[#c9a961]/30" />
            <div>
              <p className="text-white font-semibold text-sm">Dashboard de Leads</p>
              {lastUpdated && (
                <p className="text-white/40 text-xs">
                  Atualizado às {lastUpdated.toLocaleTimeString("pt-BR")}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchLeads}
              className="px-4 py-2 rounded-lg border border-[#c9a961]/30 text-[#c9a961] text-sm hover:bg-[#c9a961]/10 transition-colors"
            >
              Atualizar
            </button>
            <button
              onClick={() => downloadCSV(filtered)}
              disabled={filtered.length === 0}
              className="px-4 py-2 rounded-lg bg-[#c9a961] text-black text-sm font-semibold hover:bg-[#b89851] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Exportar CSV
            </button>
            <div className="w-px h-6 bg-white/10" />
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg border border-white/10 text-white/40 text-sm hover:text-white hover:border-white/30 transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Total de Leads" value={leads.length} sub="todos os formulários" />
          <StatCard label="Via Home" value={totalHome} sub="formulário principal" />
          <StatCard label="Via Contatos" value={totalContatos} sub="página de contatos" />
          <StatCard
            label="4 Suítes"
            value={total4suites}
            sub={`3 Suítes: ${total3suites}`}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex rounded-xl border border-[#c9a961]/20 overflow-hidden">
            {(["todos", "home", "contatos"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 text-sm font-medium capitalize transition-colors ${
                  filter === f
                    ? "bg-[#c9a961] text-black"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {f === "todos" ? "Todos" : f === "home" ? "Home" : "Contatos"}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Buscar por nome, email ou telefone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a961]/50 transition-colors"
          />

          <span className="text-white/40 text-sm whitespace-nowrap">
            {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-[#c9a961]/20 overflow-hidden">
          {loading ? (
            <div className="p-20 text-center text-white/40">Carregando leads...</div>
          ) : filtered.length === 0 ? (
            <div className="p-20 text-center">
              <p className="text-white/40 text-lg mb-2">Nenhum lead encontrado</p>
              <p className="text-white/20 text-sm">
                Os leads aparecerão aqui assim que os formulários forem preenchidos.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#c9a961]/20 bg-[#c9a961]/5">
                    <th className="text-left px-5 py-4 text-[#c9a961] font-semibold tracking-wide text-xs uppercase">
                      Nome
                    </th>
                    <th className="text-left px-5 py-4 text-[#c9a961] font-semibold tracking-wide text-xs uppercase">
                      Email
                    </th>
                    <th className="text-left px-5 py-4 text-[#c9a961] font-semibold tracking-wide text-xs uppercase">
                      WhatsApp / Tel
                    </th>
                    <th className="text-left px-5 py-4 text-[#c9a961] font-semibold tracking-wide text-xs uppercase">
                      Interesse
                    </th>
                    <th className="text-left px-5 py-4 text-[#c9a961] font-semibold tracking-wide text-xs uppercase">
                      Mensagem
                    </th>
                    <th className="text-left px-5 py-4 text-[#c9a961] font-semibold tracking-wide text-xs uppercase">
                      Origem
                    </th>
                    <th className="text-left px-5 py-4 text-[#c9a961] font-semibold tracking-wide text-xs uppercase">
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((lead, i) => (
                    <tr
                      key={lead.id}
                      className={`border-b border-white/5 transition-colors hover:bg-white/5 ${
                        i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                      }`}
                    >
                      <td className="px-5 py-4 text-white font-medium">{lead.nome}</td>
                      <td className="px-5 py-4 text-white/70">{lead.email}</td>
                      <td className="px-5 py-4 text-white/70">
                        {lead.whatsapp || lead.telefone || (
                          <span className="text-white/20">—</span>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        {lead.unidade_interesse ? (
                          <span className="px-2.5 py-1 rounded-full bg-[#c9a961]/15 text-[#c9a961] text-xs font-medium border border-[#c9a961]/20">
                            {UNIDADE_LABEL[lead.unidade_interesse] ?? lead.unidade_interesse}
                          </span>
                        ) : (
                          <span className="text-white/20">—</span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-white/50 max-w-[200px] truncate">
                        {lead.mensagem || <span className="text-white/20">—</span>}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                            lead.origem === "home"
                              ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                              : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                          }`}
                        >
                          {lead.origem === "home" ? "Home" : "Contatos"}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-white/40 whitespace-nowrap">
                        {formatDate(lead.timestamp)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
