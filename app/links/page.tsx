import Link from "next/link"
import { MessageCircle, Instagram, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LinksPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="fundo-varanda.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/images/design-mode/logo-upmont.png"
              alt="UpMont"
              className="h-24 md:h-32 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Conecte-se Conosco
            </h1>
            <p className="text-white/70 text-lg">Escolha a melhor forma de contato</p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5527992970152?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20empreendimentos%20da%20UpMont."
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full h-16 bg-gradient-to-r from-[#c9a961] to-[#b89851] hover:from-[#b89851] hover:to-[#a67c3c] text-black font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#c9a961]/50 hover:scale-[1.02] transition-all duration-300 group">
                <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                WhatsApp
              </Button>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/upmontincorporadora"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full h-16 bg-gradient-to-r from-[#c9a961] to-[#b89851] hover:from-[#b89851] hover:to-[#a67c3c] text-black font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#c9a961]/50 hover:scale-[1.02] transition-all duration-300 group">
                <Instagram className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Instagram @upmontincorporadora
              </Button>
            </a>

            {/* Website */}
            <Link href="/" className="block">
              <Button className="w-full h-16 bg-gradient-to-r from-[#c9a961] to-[#b89851] hover:from-[#b89851] hover:to-[#a67c3c] text-black font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#c9a961]/50 hover:scale-[1.02] transition-all duration-300 group">
                <Globe className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Visite Nosso Site
              </Button>
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center pt-8">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} UpMont - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
