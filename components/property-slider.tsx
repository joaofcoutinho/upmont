"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Home, Maximize2, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const properties = [
  {
    id: 1,
    image: "/vert-manguinhos-final.png",
    alt: "Vert Manguinhos",
    name: "Vert Manguinhos",
    bedrooms: "3 e 4 suítes",
    area: "160,00 a 190,00 m²",
    parking: "2 e 3 vagas",
    slug: "vert-manguinhos",
  },
  {
    id: 2,
    image: "/upstudios-manguinhos-final.png",
    alt: "Upstudios Manguinhos",
    name: "Upstudios Manguinhos",
    bedrooms: "Studios e 1 Dormitório",
    area: "36,00 m²",
    feature: "Frente mar",
  },
  {
    id: 3,
    image: "/upstudios-morada-updated.png",
    alt: "Upstudios Morada",
    name: "Upstudios Morada",
    bedrooms: "Studios e 1 Dormitório",
    area: "36,00 m²",
    feature: "Com Varandas",
  },
]

export function PropertySlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? properties.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === properties.length - 1 ? 0 : prev + 1))
  }

  const getVisibleProperties = () => {
    const prev = currentIndex === 0 ? properties.length - 1 : currentIndex - 1
    const next = currentIndex === properties.length - 1 ? 0 : currentIndex + 1
    return [properties[prev], properties[currentIndex], properties[next]]
  }

  const visibleProperties = getVisibleProperties()

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background with grid pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#c9a961 1px, transparent 1px), linear-gradient(90deg, #c9a961 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Elegant border accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a961]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a961]/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="relative max-w-7xl mx-auto">
          {/* Slider Container */}
          <div className="flex items-center justify-center gap-4 md:gap-8 py-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              className="text-white hover:bg-[#c9a961]/20 shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/40 backdrop-blur-md border border-[#c9a961]/30 transition-all hover:scale-110 hover:border-[#c9a961]/60 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" />
            </Button>

            <div className="flex items-center justify-center gap-6 md:gap-8">
              {visibleProperties.map((property, index) => {
                const isCenter = index === 1

                return (
                  <div
                    key={property.id}
                    className={`transition-all duration-700 ease-out ${
                      isCenter ? "scale-100 z-20 opacity-100" : "scale-90 opacity-70 hover:opacity-90 hidden md:block"
                    }`}
                  >
                    {property.slug ? (
                      <Link href={`/${property.slug}`}>
                        <div className="rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_rgba(201,169,97,0.3)] transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-[#c9a961]/50 cursor-pointer">
                          <div className="relative">
                            <img
                              src={property.image || "/placeholder.svg"}
                              alt={property.alt}
                              className={`object-cover transition-all duration-500 ${
                                isCenter
                                  ? "w-96 md:w-[480px] lg:w-[600px] h-[450px] md:h-[580px]"
                                  : "w-80 md:w-96 lg:w-[480px] h-[380px] md:h-[480px]"
                              }`}
                            />

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent p-6 md:p-8">
                              {/* Project Name */}
                              <h3 className="text-white font-semibold text-xl md:text-2xl mb-4 tracking-wide">
                                {property.name}
                              </h3>

                              {/* Project Details */}
                              <div className="space-y-3">
                                {/* Bedrooms */}
                                <div className="flex items-center gap-3 text-white/90">
                                  <div className="w-8 h-8 rounded-full bg-[#c9a961]/20 flex items-center justify-center shrink-0">
                                    <Home className="w-4 h-4 text-[#c9a961]" />
                                  </div>
                                  <span className="text-sm md:text-base font-light">{property.bedrooms}</span>
                                </div>

                                {/* Area */}
                                <div className="flex items-center gap-3 text-white/90">
                                  <div className="w-8 h-8 rounded-full bg-[#c9a961]/20 flex items-center justify-center shrink-0">
                                    <Maximize2 className="w-4 h-4 text-[#c9a961]" />
                                  </div>
                                  <span className="text-sm md:text-base font-light">{property.area}</span>
                                </div>

                                {/* Parking or Feature */}
                                {property.parking && (
                                  <div className="flex items-center gap-3 text-white/90">
                                    <div className="w-8 h-8 rounded-full bg-[#c9a961]/20 flex items-center justify-center shrink-0">
                                      <Car className="w-4 h-4 text-[#c9a961]" />
                                    </div>
                                    <span className="text-sm md:text-base font-light">{property.parking}</span>
                                  </div>
                                )}

                                {property.feature && (
                                  <div className="mt-3 pt-3 border-t border-[#c9a961]/20">
                                    <span className="text-[#c9a961] text-sm md:text-base font-medium tracking-wide">
                                      {property.feature}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_rgba(201,169,97,0.3)] transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-[#c9a961]/50">
                        <div className="relative">
                          <img
                            src={property.image || "/placeholder.svg"}
                            alt={property.alt}
                            className={`object-cover transition-all duration-500 ${
                              isCenter
                                ? "w-96 md:w-[480px] lg:w-[600px] h-[450px] md:h-[580px]"
                                : "w-80 md:w-96 lg:w-[480px] h-[380px] md:h-[480px]"
                            }`}
                          />

                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent p-6 md:p-8">
                            {/* Project Name */}
                            <h3 className="text-white font-semibold text-xl md:text-2xl mb-4 tracking-wide">
                              {property.name}
                            </h3>

                            {/* Project Details */}
                            <div className="space-y-3">
                              {/* Bedrooms */}
                              <div className="flex items-center gap-3 text-white/90">
                                <div className="w-8 h-8 rounded-full bg-[#c9a961]/20 flex items-center justify-center shrink-0">
                                  <Home className="w-4 h-4 text-[#c9a961]" />
                                </div>
                                <span className="text-sm md:text-base font-light">{property.bedrooms}</span>
                              </div>

                              {/* Area */}
                              <div className="flex items-center gap-3 text-white/90">
                                <div className="w-8 h-8 rounded-full bg-[#c9a961]/20 flex items-center justify-center shrink-0">
                                  <Maximize2 className="w-4 h-4 text-[#c9a961]" />
                                </div>
                                <span className="text-sm md:text-base font-light">{property.area}</span>
                              </div>

                              {/* Parking or Feature */}
                              {property.parking && (
                                <div className="flex items-center gap-3 text-white/90">
                                  <div className="w-8 h-8 rounded-full bg-[#c9a961]/20 flex items-center justify-center shrink-0">
                                    <Car className="w-4 h-4 text-[#c9a961]" />
                                  </div>
                                  <span className="text-sm md:text-base font-light">{property.parking}</span>
                                </div>
                              )}

                              {property.feature && (
                                <div className="mt-3 pt-3 border-t border-[#c9a961]/20">
                                  <span className="text-[#c9a961] text-sm md:text-base font-medium tracking-wide">
                                    {property.feature}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="text-white hover:bg-[#c9a961]/20 shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/40 backdrop-blur-md border border-[#c9a961]/30 transition-all hover:scale-110 hover:border-[#c9a961]/60 shadow-xl"
            >
              <ChevronRight className="w-6 h-6 md:w-10 md:h-10" />
            </Button>
          </div>

          {/* Description */}
          <div className="text-center mt-16">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-8 rounded-full" />

            <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Transformamos espaços em experiências para quem vai morar
              <br />e ativos lucrativos para quem vai investir.
            </p>

            <Button
              variant="outline"
              className="mt-8 border-2 border-[#c9a961] text-white hover:bg-gradient-to-r hover:from-[#c9a961] hover:to-[#b89851] hover:text-black bg-transparent px-8 py-6 text-base font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_10px_40px_rgba(201,169,97,0.4)]"
            >
              Quero Saber Como Investir
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
