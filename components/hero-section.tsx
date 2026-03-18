"use client"

import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const backgroundImages = [
    "/1-slide-eleve-seu-padrao-de-viver.png",
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
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-36">
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
              objectPosition: index === 0 ? "center 45%" : "center 65%",
            }}
          />
        </div>
      ))}

      <div className="absolute inset-0 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 md:hidden" />

      <div className="relative z-10 container px-6 md:px-12 lg:px-16 flex items-center justify-start h-full">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-[1.2] mb-6 transition-opacity duration-700 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] tracking-tight">
            <span className="block">{slideContent[currentImageIndex].title}</span>
          </h1>

          <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed mb-8 max-w-lg font-light mx-auto md:mx-0 transition-opacity duration-700">
            {slideContent[currentImageIndex].description}
          </p>

          <div className="flex justify-center md:justify-start">
            <a href="/#contato">
              <button className="group px-8 py-3 border-2 border-[#c9a961] text-white hover:bg-[#c9a961] transition-all duration-300 rounded-lg text-base md:text-lg font-medium shadow-lg hover:shadow-[#c9a961]/20">
                Tenho Interesse
              </button>
            </a>
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
