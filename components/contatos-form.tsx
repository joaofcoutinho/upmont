"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContatosForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, origem: "contatos" }),
      })
      setStatus("success")
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" })
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-[#c9a961]/20 p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h2>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500/50">
          <p className="text-green-300 text-center font-medium">
            ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/50">
          <p className="text-red-300 text-center font-medium">
            ✕ Erro ao enviar. Tente novamente.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="w-full px-4 py-3 bg-black/40 border border-[#c9a961]/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-all duration-300"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-black/40 border border-[#c9a961]/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-all duration-300"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            className="w-full px-4 py-3 bg-black/40 border border-[#c9a961]/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-all duration-300"
            placeholder="(00) 00000-0000"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.mensagem}
            onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
            className="w-full px-4 py-3 bg-black/40 border border-[#c9a961]/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-all duration-300 resize-none"
            placeholder="Como podemos ajudá-lo?"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#c9a961] to-[#b89851] hover:from-[#b89851] hover:to-[#a67c3c] text-black font-semibold py-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,97,0.4)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </form>
    </div>
  )
}
