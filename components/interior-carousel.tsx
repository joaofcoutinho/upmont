"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const interiorImages = [
  { id: 1, src: "/COLUNA 1/A.jpeg", alt: "Interior 1" },
  { id: 2, src: "/COLUNA 1/B.jpeg", alt: "Interior 2" },
  { id: 3, src: "/COLUNA 1/C.jpeg", alt: "Interior 3" },
  { id: 4, src: "/COLUNA 1/D.jpeg", alt: "Interior 4" },
  { id: 5, src: "/COLUNA 1/E.jpeg", alt: "Interior 5" },
  { id: 6, src: "/COLUNA 1/F.jpeg", alt: "Interior 6" },
  { id: 7, src: "/COLUNA 1/G.jpeg", alt: "Interior 7" },
  { id: 8, src: "/COLUNA 1/H.jpeg", alt: "Interior 8" },
  { id: 9, src: "/COLUNA 1/I.jpeg", alt: "Interior 9" },
  { id: 10, src: "/COLUNA 1/J.jpeg", alt: "Interior 10" },
  { id: 11, src: "/COLUNA 1/K.jpeg", alt: "Interior 11" },
  { id: 12, src: "/COLUNA 1/L.jpeg", alt: "Interior 12" },
]

export function InteriorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % interiorImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + interiorImages.length) % interiorImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentImage = interiorImages[currentIndex]

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 fade-in-section">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-[#c9a961]/30 bg-black shadow-2xl">
        <div className="relative h-[400px] md:h-[550px] lg:h-[700px] flex items-center justify-center">
          {/* Main Image */}
          <img
            key={currentImage.id}
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/80 border-[#c9a961]/50 hover:bg-[#c9a961] hover:border-[#c9a961] text-white transition-all duration-300 backdrop-blur-sm hover:scale-110 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/80 border-[#c9a961]/50 hover:bg-[#c9a961] hover:border-[#c9a961] text-white transition-all duration-300 backdrop-blur-sm hover:scale-110 shadow-xl"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
          </Button>

          {/* Counter Badge */}
          <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/80 backdrop-blur-sm border border-[#c9a961]/50 rounded-full">
            <p className="text-white text-sm font-semibold">
              {currentIndex + 1} / {interiorImages.length}
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="relative px-2">
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 justify-center">
          {interiorImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-[#c9a961] shadow-lg shadow-[#c9a961]/50 scale-110"
                  : "border-[#c9a961]/30 hover:border-[#c9a961]/60 hover:scale-105"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  index === currentIndex ? "bg-[#c9a961]/20" : "bg-black/40 hover:bg-black/20"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
