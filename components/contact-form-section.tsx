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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
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
    <section className="relative py-32 overflow-hidden">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative group">
                    <Input
                      type="text"
                      placeholder="NOME COMPLETO"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="bg-white/5 backdrop-blur-sm border border-white/20 h-16 placeholder:text-white/40 text-white text-lg focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/30 focus:bg-white/10 transition-all duration-300 rounded-xl"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#c9a961]/0 via-[#c9a961]/5 to-[#c9a961]/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <div className="relative group">
                    <Input
                      type="tel"
                      placeholder="WHATSAPP"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="bg-white/5 backdrop-blur-sm border border-white/20 h-16 placeholder:text-white/40 text-white text-lg focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/30 focus:bg-white/10 transition-all duration-300 rounded-xl"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#c9a961]/0 via-[#c9a961]/5 to-[#c9a961]/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <div className="relative group">
                    <Input
                      type="email"
                      placeholder="E-MAIL"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 backdrop-blur-sm border border-white/20 h-16 placeholder:text-white/40 text-white text-lg focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/30 focus:bg-white/10 transition-all duration-300 rounded-xl"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#c9a961]/0 via-[#c9a961]/5 to-[#c9a961]/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <div className="relative group">
                    <Select
                      value={formData.unidadeInteresse}
                      onValueChange={(value) => setFormData({ ...formData, unidadeInteresse: value })}
                    >
                      <SelectTrigger className="bg-white/5 backdrop-blur-sm border border-white/20 h-16 text-white/40 text-lg focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961]/30 focus:bg-white/10 transition-all duration-300 rounded-xl data-[state=open]:border-[#c9a961]">
                        <SelectValue placeholder="UNIDADE DE INTERESSE" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/95 backdrop-blur-lg border-[#c9a961]/30">
                        <SelectItem value="4-suites" className="text-white hover:bg-[#c9a961]/20 focus:bg-[#c9a961]/20 cursor-pointer">
                          4 suítes
                        </SelectItem>
                        <SelectItem value="3-suites" className="text-white hover:bg-[#c9a961]/20 focus:bg-[#c9a961]/20 cursor-pointer">
                          3 suítes
                        </SelectItem>
                        <SelectItem value="studios" className="text-white hover:bg-[#c9a961]/20 focus:bg-[#c9a961]/20 cursor-pointer">
                          Studios
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#c9a961]/0 via-[#c9a961]/5 to-[#c9a961]/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-16 bg-gradient-to-r from-[#c9a961] via-[#b89851] to-[#c9a961] hover:from-[#b89851] hover:via-[#c9a961] hover:to-[#b89851] text-white font-bold text-lg shadow-2xl hover:shadow-[#c9a961]/50 hover:scale-[1.02] transition-all duration-300 rounded-xl relative overflow-hidden group"
                  >
                    <span className="relative z-10">RECEBER INFORMAÇÕES</span>
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
