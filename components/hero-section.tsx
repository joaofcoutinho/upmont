"use client"

import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const backgroundImages = [
    "/upstudios-manguinhos-hero.png",
    "/modern-building-exterior-blue-sky.png",
    "/3-slide-verthouses-manguinhos.png",
  ]

  const slideContent = [
    {
      title: (
        <>
          Eleve seu padrão de <br />
          <span className="bg-gradient-to-r from-[#c9a961] via-[#d4b76e] to-[#c9a961] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(201,169,97,0.5)] font-bold tracking-wide">
            viver.
          </span>
        </>
      ),
      description: "Transformamos espaços em experiências para viver e ativos para investir.",
    },
    {
      title: (
        <>
          UP STUDIOS <br />
          <span className="bg-gradient-to-r from-[#c9a961] via-[#d4b76e] to-[#c9a961] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(201,169,97,0.5)] font-bold tracking-wide">
            Seu Short Stay no coração da Serra
          </span>
        </>
      ),
      description:
        "Compactos, completos e estratégicos. Perfeitos para uso e rentabilidade. Unidades de 36m2 com minimercado, lavanderia, academia, piscina e mais.",
    },
    {
      title: (
        <>
          VERTHOUSES <br />
          <span className="bg-gradient-to-r from-[#c9a961] via-[#d4b76e] to-[#c9a961] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(201,169,97,0.5)] font-bold tracking-wide">
            Sua casa de Alto Padrão nas alturas
          </span>
        </>
      ),
      description:
        "Sua casa de alto padrão nas alturas. Unidades com 3 e 4 suítes, de 160,00 a 190,00 m2, preparação para Hidro nas varandas, closet, e muito mais. Área de lazer completa com Piscina aquecida na cobertura.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-24">
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 transition-all duration-[2000ms] ease-in-out"
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
            transform: "scale(1)",
          }}
        >
          <img
            src={image || "/placeholder.svg"}
            alt="UPMONT Building"
            className="w-full h-full object-cover"
            style={{
              objectPosition: index === 0 ? "center 15%" : index === 1 ? "center 80%" : "center 65%",
              transform: index === 0 ? "scaleX(-1)" : "none",
            }}
          />
        </div>
      ))}

      <div className="absolute inset-0 hidden md:block">
        <div
          className="absolute inset-0 bg-black/60 transition-all duration-[2000ms] ease-in-out"
          style={{
            clipPath: "polygon(0 0, 65% 0, 45% 100%, 0 100%)",
            opacity: 0.8,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 md:hidden" />

      <div className="relative z-10 container px-6 md:px-12 lg:px-16 flex items-center justify-start h-full">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-[1.2] mb-8 transition-opacity duration-700 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] tracking-tight">
            <span className="block">{slideContent[currentImageIndex].title}</span>
          </h1>

          <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-xl font-light mx-auto md:mx-0 transition-opacity duration-700">
            {slideContent[currentImageIndex].description}
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="group px-10 py-4 border-2 border-[#c9a961] text-white hover:bg-[#c9a961] transition-all duration-300 rounded-lg text-lg md:text-xl font-medium shadow-lg hover:shadow-[#c9a961]/20">
              Fale com a UpMont
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-[#c9a961]/80 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#c9a961] rounded-full" />
        </div>
      </div>
    </section>
  )
}
