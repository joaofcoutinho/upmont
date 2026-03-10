"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ usuario: "", senha: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/dashboard/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || "Credenciais inválidas")
        return
      }

      router.push("/dashboard")
      router.refresh()
    } catch {
      setError("Erro ao conectar. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image src="/upmont-logo-white.png" alt="UpMont" width={160} height={48} className="h-12 w-auto" />
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-[#c9a961]/20 rounded-2xl p-8 backdrop-blur-xl">
          <h1 className="text-white text-xl font-bold mb-1">Acesso ao Dashboard</h1>
          <p className="text-white/40 text-sm mb-8">Entre com suas credenciais para continuar.</p>

          {error && (
            <div className="mb-6 p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wide">
                Usuário
              </label>
              <input
                type="text"
                autoComplete="username"
                required
                value={form.usuario}
                onChange={(e) => setForm({ ...form, usuario: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-[#c9a961]/20 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#c9a961] transition-colors"
                placeholder="admin"
              />
            </div>

            <div>
              <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wide">
                Senha
              </label>
              <input
                type="password"
                autoComplete="current-password"
                required
                value={form.senha}
                onChange={(e) => setForm({ ...form, senha: e.target.value })}
                className="w-full px-4 py-3 bg-black/40 border border-[#c9a961]/20 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#c9a961] transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 bg-gradient-to-r from-[#c9a961] to-[#b89851] text-black font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
