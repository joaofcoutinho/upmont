"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="relative py-32 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 overflow-hidden">
      {/* Sophisticated grid pattern with bronze accent */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,169,97,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,97,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Radial gradient spotlights */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a961]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c9a961]/5 rounded-full blur-3xl" />
      </div>

      {/* Elegant border accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a961]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a961]/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-8 rounded-full" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              O investimento da sua vida
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Descubra como famílias transformam seus sonhos em realidade com nossos empreendimentos
            </p>
          </div>

          <div className="relative group">
            {/* Video Container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm border-2 border-[#c9a961]/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              {!isPlaying ? (
                <>
                  {/* Video Thumbnail */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/happy-family-enjoying-luxury-apartment-balcony-sun.jpg')",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsPlaying(true)}
                      className="w-24 h-24 rounded-full bg-[#c9a961]/20 hover:bg-[#c9a961]/30 backdrop-blur-md border-2 border-[#c9a961]/50 hover:border-[#c9a961] transition-all duration-300 hover:scale-110 shadow-[0_10px_40px_rgba(201,169,97,0.3)] hover:shadow-[0_15px_50px_rgba(201,169,97,0.5)]"
                    >
                      <Play className="w-12 h-12 text-white fill-white ml-1" />
                    </Button>
                  </div>
                </>
              ) : (
                // Video Player (placeholder - replace with actual video URL)
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/9KqwqjP3exM?si=qXrejq0qf0NeD2bL"
                  title="O investimento da sua vida"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#c9a961]/50 rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#c9a961]/50 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#c9a961]/50 rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#c9a961]/50 rounded-br-lg" />
          </div>

          
        </div>
      </div>
    </section>
  )
}
