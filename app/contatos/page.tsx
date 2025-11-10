import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContatosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,97,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(201,169,97,0.08),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Entre em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a961] to-[#b89851]">
                Contato
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Estamos prontos para ajudá-lo a encontrar o empreendimento perfeito. Entre em contato conosco e descubra
              como podemos realizar seus sonhos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Informações de Contato</h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Nossa equipe está disponível para atendê-lo e esclarecer todas as suas dúvidas sobre nossos
                  empreendimentos.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#c9a961]/20 hover:border-[#c9a961]/40 transition-all duration-300 group">
                  <div className="p-3 bg-gradient-to-br from-[#c9a961] to-[#b89851] rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Telefone</h3>
                    <p className="text-gray-400">(27) 3333-4444</p>
                    <p className="text-gray-400">(27) 99999-8888</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#c9a961]/20 hover:border-[#c9a961]/40 transition-all duration-300 group">
                  <div className="p-3 bg-gradient-to-br from-[#c9a961] to-[#b89851] rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">E-mail</h3>
                    <p className="text-gray-400">contato@upmont.com.br</p>
                    <p className="text-gray-400">vendas@upmont.com.br</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#c9a961]/20 hover:border-[#c9a961]/40 transition-all duration-300 group">
                  <div className="p-3 bg-gradient-to-br from-[#c9a961] to-[#b89851] rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Endereço</h3>
                    <p className="text-gray-400">Av. Central, 1000 - Praia de Manguinhos</p>
                    <p className="text-gray-400">Serra - ES, 29173-087</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#c9a961]/20 hover:border-[#c9a961]/40 transition-all duration-300 group">
                  <div className="p-3 bg-gradient-to-br from-[#c9a961] to-[#b89851] rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-400">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-400">Sábado: 9h às 13h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-[#c9a961]/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
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
                    className="w-full px-4 py-3 bg-black/40 border border-[#c9a961]/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-all duration-300 resize-none"
                    placeholder="Como podemos ajudá-lo?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#c9a961] to-[#b89851] hover:from-[#b89851] hover:to-[#a67c3c] text-black font-semibold py-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,97,0.4)] hover:scale-[1.02]"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-[#c9a961]/20 overflow-hidden">
              <div className="aspect-[21/9] bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#c9a961] mx-auto mb-4" />
                  <p className="text-gray-400">Mapa de localização</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatButton />
    </main>
  )
}
