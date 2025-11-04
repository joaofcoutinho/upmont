"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const floorPlans = [
  {
    id: 1,
    title: "Planta - Coluna 1",
    area: "160m²",
    bedrooms:
      "3 Suítes, Sendo 1 suíte com banheiro duplo, closet, varanda com preparação pra hidro (total 4 chuveiros)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/COLUNA%201%20-%203%20SUITES%20-%20160M2-a4HFlidFAKRGeQ6OjztohLDoBGYYj0.png",
  },
  {
    id: 2,
    title: "Planta - Coluna 2",
    area: "188m²",
    bedrooms:
      "4 Suítes, Sendo 1 suíte com banheiro duplo, closet, varanda com preparação pra hidro (total 5 chuveiros)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/COLUNA%202%20-%204%20SUITES%20-%20188M2-ElxjPGmuluSS4QqSehpbJZK7Oez2hb.png",
  },
  {
    id: 3,
    title: "Planta - Coluna 3",
    area: "190m²",
    bedrooms:
      "4 Suítes, Sendo 1 suíte com banheiro duplo, closet, varanda com preparação pra hidro (total 5 chuveiros)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/COLUNA%203%20-%204%20SUITES%20-%20190M2-WBaSQnJ7xu1t3JpgcF8HNS2eCXOzNO.png",
  },
  {
    id: 4,
    title: "Térreo - Vista Geral",
    area: "Térreo",
    bedrooms: "Vista Geral",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/T%C3%89RREO%20VISTA%20GERAL-M6kOYhdqfYoO0NO8C8tdJB0gwlwneC.png",
  },
  {
    id: 5,
    title: "Térreo - Detalhes",
    area: "Térreo",
    bedrooms: "Áreas Comuns",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/T%C3%89RREO%20DETALHES-otMmd9JdEAIQky4AzG8VZZdhP91Jnp.png",
  },
  {
    id: 6,
    title: "Mezanino - Vista Geral",
    area: "Mezanino",
    bedrooms: "Vista Geral",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MEZANINO%20VISTA%20GERAL-VUEL4deU96qLxH9PtfMQHY8z0YXXW8.png",
  },
  {
    id: 7,
    title: "Mezanino - Detalhes",
    area: "Mezanino",
    bedrooms: "Área de Lazer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MEZANINO%20DETALHES-eDfHc7iAx6UCFgixf18dEl8iTjo6Xz.png",
  },
  {
    id: 8,
    title: "Cobertura - Rooftop",
    area: "Cobertura",
    bedrooms: "Área Gourmet",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/COBERTURA-GvsODDD4FKAEfEnaZLTjg8nq2NyFOp.png",
  },
]

interface FloorPlanCarouselProps {
  onIndexChange?: (index: number) => void
  currentIndex?: number
}

export function FloorPlanCarousel({ onIndexChange, currentIndex: externalIndex }: FloorPlanCarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0)

  // Use external index if provided, otherwise use internal
  const currentIndex = externalIndex !== undefined ? externalIndex : internalIndex

  useEffect(() => {
    if (externalIndex === undefined) {
      onIndexChange?.(internalIndex)
    }
  }, [internalIndex, onIndexChange, externalIndex])

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % floorPlans.length
    if (externalIndex !== undefined) {
      onIndexChange?.(newIndex)
    } else {
      setInternalIndex(newIndex)
    }
  }

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + floorPlans.length) % floorPlans.length
    if (externalIndex !== undefined) {
      onIndexChange?.(newIndex)
    } else {
      setInternalIndex(newIndex)
    }
  }

  const currentPlan = floorPlans[currentIndex]

  return (
    <div className="w-full space-y-6">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-3xl border border-[#c9a961]/30 bg-black">
        <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center">
          <img
            src={currentPlan.image || "/placeholder.svg"}
            alt={currentPlan.title}
            className="w-full h-full object-contain"
          />

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 border-[#c9a961]/50 hover:bg-[#c9a961] hover:border-[#c9a961] text-white transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 border-[#c9a961]/50 hover:bg-[#c9a961] hover:border-[#c9a961] text-white transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Counter */}
      <div className="text-center">
        <p className="text-white/60 text-sm">
          {currentIndex + 1} / {floorPlans.length}
        </p>
      </div>
    </div>
  )
}
