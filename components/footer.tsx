import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative bg-[#070F0E] text-white py-16 border-t border-[#c9a961]/20">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Menu */}
          <div>
            <div className="mb-8 group">
              <Image
                src="/images/design-mode/Design%20sem%20nome%20-%202025-10-16T164041.349.png"
                alt="UPMONT Incorporadora"
                width={180}
                height={54}
                className="transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_8px_rgba(201,169,97,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(201,169,97,0.5)] w-auto h-20"
              />
            </div>

            {/* Decorative line */}
            <div className="w-16 h-px bg-gradient-to-r from-[#c9a961] to-transparent mb-6" />

            <div className="space-y-3 text-sm">
              <p className="font-semibold mb-4 text-[#c9a961] tracking-wider text-xs">MENU</p>
              <a
                href="/"
                className="block text-white/60 hover:text-[#c9a961] transition-all duration-300 hover:translate-x-1"
              >
                Início
              </a>
              <a
                href="/quem-somos"
                className="block text-white/60 hover:text-[#c9a961] transition-all duration-300 hover:translate-x-1"
              >
                Quem Somos
              </a>
              <a
                href="/empreendimentos"
                className="block text-white/60 hover:text-[#c9a961] transition-all duration-300 hover:translate-x-1"
              >
                Empreendimentos
              </a>
              <a
                href="/viver-em-serra"
                className="block text-white/60 hover:text-[#c9a961] transition-all duration-300 hover:translate-x-1"
              >
                Viver em Serra
              </a>
              <a
                href="/contatos"
                className="block text-white/60 hover:text-[#c9a961] transition-all duration-300 hover:translate-x-1"
              >
                Contatos
              </a>
              <a
                href="#"
                className="block text-white/60 hover:text-[#c9a961] transition-all duration-300 hover:translate-x-1"
              >
                Política de Privacidade
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="w-16 h-px bg-gradient-to-r from-[#c9a961] to-transparent mb-6" />
            <p className="font-semibold mb-4 text-[#c9a961] tracking-wider text-xs">CENTRAL DE VENDAS</p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-white/50 text-xs mb-1">WhatsApp</p>
                <a
                  href="tel:+5527995550000"
                  className="text-white hover:text-[#c9a961] transition-colors duration-300 font-medium"
                >
                  +55 27 9 9555.0000
                </a>
              </div>
              <div className="mt-6">
                <p className="text-white/50 text-xs mb-1">E-mail</p>
                <a
                  href="mailto:invista@upmont.com.br"
                  className="text-white hover:text-[#c9a961] transition-colors duration-300 font-medium"
                >
                  invista@upmont.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <div className="w-16 h-px bg-gradient-to-r from-[#c9a961] to-transparent mb-6" />
            <p className="font-semibold mb-4 text-[#c9a961] tracking-wider text-xs">REDES SOCIAIS</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 backdrop-blur-sm border border-[#c9a961]/20 hover:bg-[#c9a961]/10 hover:border-[#c9a961] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#c9a961]/20 group"
              >
                <Facebook className="w-5 h-5 text-white/60 group-hover:text-[#c9a961] transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 backdrop-blur-sm border border-[#c9a961]/20 hover:bg-[#c9a961]/10 hover:border-[#c9a961] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#c9a961]/20 group"
              >
                <Instagram className="w-5 h-5 text-white/60 group-hover:text-[#c9a961] transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 backdrop-blur-sm border border-[#c9a961]/20 hover:bg-[#c9a961]/10 hover:border-[#c9a961] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#c9a961]/20 group"
              >
                <Linkedin className="w-5 h-5 text-white/60 group-hover:text-[#c9a961] transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 backdrop-blur-sm border border-[#c9a961]/20 hover:bg-[#c9a961]/10 hover:border-[#c9a961] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#c9a961]/20 group"
              >
                <Youtube className="w-5 h-5 text-white/60 group-hover:text-[#c9a961] transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#c9a961]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p className="hover:text-[#c9a961] transition-colors duration-300 cursor-pointer">Viver em Serra</p>
            <p className="text-[#c9a961]/60">© 2025 Upmont Incorporadora. Todos os direitos reservados.</p>
            <p className="hover:text-[#c9a961] transition-colors duration-300 cursor-pointer">Fale com a UpMont</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
