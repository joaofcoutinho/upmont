"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloatButton() {
  const phoneNumber = "5527992970152"
  const message = encodeURIComponent(
    "Olá! Vim pelo site da UpMont e tenho interesse em conhecer mais sobre os empreendimentos. Gostaria de receber mais informações."
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="relative">
        {/* Pulsing background animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75" />

        {/* Main button */}
        <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 group-hover:bg-[#20BD5A]">
          <MessageCircle className="w-8 h-8 text-white" strokeWidth={2} />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap">
          <div className="bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium shadow-xl">
            Fale conosco pelo WhatsApp
            <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-black/90" />
          </div>
        </div>
      </div>
    </a>
  )
}
