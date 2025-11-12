"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Leaf, MapPin, Sparkles, Award } from "lucide-react"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    unidadeInteresse: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validateForm = () => {
    if (!formData.nome.trim()) {
      setErrorMessage("Por favor, preencha seu nome completo")
      return false
    }
    if (!formData.whatsapp.trim()) {
      setErrorMessage("Por favor, preencha seu WhatsApp")
      return false
    }
    if (!formData.email.trim()) {
      setErrorMessage("Por favor, preencha seu e-mail")
      return false
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Por favor, insira um e-mail válido")
      return false
    }
    if (!formData.unidadeInteresse) {
      setErrorMessage("Por favor, selecione uma unidade de interesse")
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    if (!validateForm()) {
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || ""

      if (!GOOGLE_SCRIPT_URL) {
        throw new Error("Google Sheets URL not configured")
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      })

      // Note: With no-cors mode, we can't read the response
      // We'll assume success if no error is thrown
      setSubmitStatus("success")
      setFormData({
        nome: "",
        whatsapp: "",
        email: "",
        unidadeInteresse: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setErrorMessage("Erro ao enviar formulário. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const features = [
    {
      icon: MapPin,
      title: "Localização Premium",
      description: "Regiões estratégicas com infraestrutura completa e valorização garantida",
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Projetos eco-conscientes com certificações ambientais e eficiência energética",
    },
    {
      icon: Sparkles,
      title: "Personalização",
      description: "Ambientes exclusivos adaptados ao seu estilo de vida e necessidades",
    },
    {
      icon: Award,
      title: "Qualidade Superior",
      description: "Acabamentos de alto padrão com materiais nobres e tecnologia de ponta",
    },
  ]

  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/modern-office-golden-lighting-wood-slats.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a961]" />
            <div className="w-2 h-2 bg-[#c9a961] rounded-full mx-4" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a961]" />
          </div>

          <div className="backdrop-blur-xl bg-gradient-to-br from-black/40 via-black/30 to-black/40 rounded-3xl p-8 md:p-12 border border-[#c9a961]/20 shadow-2xl hover:border-[#c9a961]/40 transition-all duration-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                <span className="bg-gradient-to-r from-white via-white to-[#c9a961] bg-clip-text text-transparent drop-shadow-2xl">
                  IMÓVEIS PARA VIVER E VALORIZAR
                </span>
              </h2>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Obras que multiplicam os resultados de nossos investidores e promovem extremo valor agregado para cada
                região em que temos o privilégio de investir.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#c9a961]/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#c9a961]/20 to-[#c9a961]/5 border border-[#c9a961]/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-[#c9a961]" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="backdrop-blur-md bg-black/20 rounded-2xl p-8 border border-[#c9a961]/10">
                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500/50 backdrop-blur-sm">
                    <p className="text-green-300 text-center font-medium">
                      ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && errorMessage && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/50 backdrop-blur-sm">
                    <p className="text-red-300 text-center font-medium">✕ {errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative group">
                    <Input
                      type="text"
                      placeholder="NOME COMPLETO"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="bg-white/5 backdrop-blur-sm border border-white/20 h-14 md:h-16 placeholder:text-white/40 text-white text-base md:text-lg focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/30 focus:bg-white/10 transition-all duration-300 rounded-xl"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#c9a961]/0 via-[#c9a961]/5 to-[#c9a961]/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <div className="relative group">
                    <Input
                      type="tel"
                      placeholder="WHATSAPP"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="bg-white/5 backdrop-blur-sm border border-white/20 h-14 md:h-16 placeholder:text-white/40 text-white text-base md:text-lg focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/30 focus:bg-white/10 transition-all duration-300 rounded-xl"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#c9a961]/0 via-[#c9a961]/5 to-[#c9a961]/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <div className="relative group">
                    <Input
                      type="email"
                      placeholder="E-MAIL"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 backdrop-blur-sm border border-white/20 h-14 md:h-16 placeholder:text-white/40 text-white text-base md:text-lg focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/30 focus:bg-white/10 transition-all duration-300 rounded-xl"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#c9a961]/0 via-[#c9a961]/5 to-[#c9a961]/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <div className="relative group">
                    <Select
                      value={formData.unidadeInteresse}
                      onValueChange={(value) => setFormData({ ...formData, unidadeInteresse: value })}
                    >
                      <SelectTrigger className="bg-white/5 backdrop-blur-sm border border-white/20 h-14 md:h-16 text-white/40 text-base md:text-lg focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/30 focus:bg-white/10 transition-all duration-300 rounded-xl data-[state=open]:border-[#c9a961]">
                        <SelectValue placeholder="UNIDADE DE INTERESSE" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/95 backdrop-blur-lg border-[#c9a961]/30">
                        <SelectItem value="4-suites" className="text-white hover:bg-[#c9a961]/50 focus:bg-[#c9a961]/50 hover:text-white focus:text-white cursor-pointer">
                          4 suítes
                        </SelectItem>
                        <SelectItem value="3-suites" className="text-white hover:bg-[#c9a961]/50 focus:bg-[#c9a961]/50 hover:text-white focus:text-white cursor-pointer">
                          3 suítes
                        </SelectItem>
                        <SelectItem value="studios" className="text-white hover:bg-[#c9a961]/50 focus:bg-[#c9a961]/50 hover:text-white focus:text-white cursor-pointer">
                          Studios
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#c9a961]/0 via-[#c9a961]/5 to-[#c9a961]/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 bg-gradient-to-r from-[#c9a961] via-[#b89851] to-[#c9a961] hover:from-[#b89851] hover:via-[#c9a961] hover:to-[#b89851] text-white font-bold text-lg shadow-2xl hover:shadow-[#c9a961]/50 hover:scale-[1.02] transition-all duration-300 rounded-xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "ENVIANDO..." : "RECEBER INFORMAÇÕES"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </Button>
                </form>

                <p className="text-white/40 text-xs text-center mt-6">
                  Seus dados estão seguros e serão utilizados apenas para contato sobre nossos empreendimentos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
