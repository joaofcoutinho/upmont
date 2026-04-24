"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const col1Images = [
  { id: 1, src: "/COLUNA 1/A.jpeg", alt: "Interior 160m² 1" },
  { id: 2, src: "/COLUNA 1/B.jpeg", alt: "Interior 160m² 2" },
  { id: 3, src: "/COLUNA 1/C.jpeg", alt: "Interior 160m² 3" },
  { id: 4, src: "/COLUNA 1/D.jpeg", alt: "Interior 160m² 4" },
  { id: 5, src: "/COLUNA 1/E.jpeg", alt: "Interior 160m² 5" },
  { id: 6, src: "/COLUNA 1/F.jpeg", alt: "Interior 160m² 6" },
  { id: 7, src: "/COLUNA 1/G.jpeg", alt: "Interior 160m² 7" },
  { id: 8, src: "/COLUNA 1/H.jpeg", alt: "Interior 160m² 8" },
  { id: 9, src: "/COLUNA 1/I.jpeg", alt: "Interior 160m² 9" },
  { id: 10, src: "/COLUNA 1/J.jpeg", alt: "Interior 160m² 10" },
  { id: 11, src: "/COLUNA 1/K.jpeg", alt: "Interior 160m² 11" },
  { id: 12, src: "/COLUNA 1/L.jpeg", alt: "Interior 160m² 12" },
]

const col2Images = [
  { id: 1, src: "/COLUNA 2/WhatsApp Image 2026-04-23 at 10.26.08.jpeg", alt: "Interior 190m² 1" },
  { id: 2, src: "/COLUNA 2/WhatsApp Image 2026-04-23 at 10.26.08 (1).jpeg", alt: "Interior 190m² 2" },
  { id: 3, src: "/COLUNA 2/WhatsApp Image 2026-04-23 at 10.26.08 (2).jpeg", alt: "Interior 190m² 3" },
  { id: 4, src: "/COLUNA 2/WhatsApp Image 2026-04-23 at 10.26.09.jpeg", alt: "Interior 190m² 4" },
  { id: 5, src: "/COLUNA 2/WhatsApp Image 2026-04-23 at 10.26.09 (1).jpeg", alt: "Interior 190m² 5" },
  { id: 6, src: "/COLUNA 2/WhatsApp Image 2026-04-23 at 10.27.41.jpeg", alt: "Interior 190m² 6" },
  { id: 7, src: "/COLUNA 2/WhatsApp Image 2026-04-23 at 10.27.41 (1).jpeg", alt: "Interior 190m² 7" },
  { id: 8, src: "/COLUNA 2/WhatsApp Image 2026-04-23 at 10.27.41 (2).jpeg", alt: "Interior 190m² 8" },
  { id: 9, src: "/COLUNA 2/WhatsApp Image 2026-04-23 at 10.27.41 (3).jpeg", alt: "Interior 190m² 9" },
  { id: 10, src: "/COLUNA 2/WhatsApp Image 2026-04-23 at 10.27.42.jpeg", alt: "Interior 190m² 10" },
  { id: 11, src: "/COLUNA 2/WhatsApp Image 2026-04-23 at 10.27.42 (1).jpeg", alt: "Interior 190m² 11" },
  { id: 12, src: "/COLUNA 2/WhatsApp Image 2026-04-23 at 10.28.05.jpeg", alt: "Interior 190m² 12" },
  { id: 13, src: "/COLUNA 2/WhatsApp Image 2026-04-23 at 10.28.05 (1).jpeg", alt: "Interior 190m² 13" },
  { id: 14, src: "/COLUNA 2/WhatsApp Image 2026-04-23 at 10.28.05 (2).jpeg", alt: "Interior 190m² 14" },
]

export function InteriorCarousel() {
  const [activeCol, setActiveCol] = useState<1 | 2>(1)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = activeCol === 1 ? col1Images : col2Images

  const handleColChange = (col: 1 | 2) => {
    setActiveCol(col)
    setCurrentIndex(0)
  }

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  const goToSlide = (index: number) => setCurrentIndex(index)

  const currentImage = images[currentIndex]

  return (
    <div className="w-full max-w-7xl mx-auto fade-in-section">
      {/* Seletor 160 / 190 */}
      <div className="flex gap-2 mb-6 justify-center">
        {([1, 2] as const).map((col) => (
          <button
            key={col}
            onClick={() => handleColChange(col)}
            className={`px-8 py-3 rounded-full text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 ${
              activeCol === col
                ? "bg-[#6A6054] text-white shadow-lg"
                : "border border-[#6A6054]/40 text-[#6A6054] hover:bg-[#6A6054]/10"
            }`}
          >
            {col === 1 ? "160m²" : "190m²"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start">
        {/* Main Image */}
        <div className="relative overflow-hidden rounded-3xl border border-[#c9a961]/30 shadow-2xl bg-neutral-900">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <img
              key={currentImage.id + "-" + activeCol}
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

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

            <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/80 backdrop-blur-sm border border-[#c9a961]/50 rounded-full">
              <p className="text-white text-sm font-semibold">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto hide-scrollbar lg:max-h-[600px] pb-2 lg:pb-0 justify-center lg:justify-start">
          {images.map((image, index) => (
            <button
              key={image.id + "-" + activeCol}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-[#c9a961] shadow-lg shadow-[#c9a961]/50 scale-105"
                  : "border-[#c9a961]/30 hover:border-[#c9a961]/60 hover:scale-105"
              }`}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 transition-opacity duration-300 ${
                index === currentIndex ? "bg-[#c9a961]/20" : "bg-black/40 hover:bg-black/20"
              }`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
