"use client"

import { Button } from "@/components/ui/button"
import { Home, Car, MapPin, Building2, ShoppingCart, Sparkles, Wind, ChefHat, Armchair, Zap } from "lucide-react"
import Link from "next/link"
import { FloorPlanCarousel, floorPlans } from "@/components/floor-plan-carousel"
import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function VertManguinhosPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  // UPDATED: Added new street view image to the carousel
  const buildingImages = [
    "/building-front.jpeg",
    "/vert-building-side-view.png",
    "/vert-building-front-view.jpeg",
    "/vert-building-exterior.jpeg",
  ]

  const [currentFloorPlanIndex, setCurrentFloorPlanIndex] = useState(0)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const elements = document.querySelectorAll(".fade-in-section")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % buildingImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [buildingImages.length])

  const currentFloorPlan = floorPlans[currentFloorPlanIndex]

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-900">
      <Header />

      <style jsx global>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-1 {
          transition-delay: 0.1s;
        }
        .stagger-2 {
          transition-delay: 0.2s;
        }
        .stagger-3 {
          transition-delay: 0.3s;
        }
        .stagger-4 {
          transition-delay: 0.4s;
        }
        .stagger-5 {
          transition-delay: 0.5s;
        }
        .stagger-6 {
          transition-delay: 0.6s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(201, 169, 97, 0.1) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        @keyframes scale {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }

        .animate-scale {
          animation: scale 20s ease-in-out infinite alternate;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.6;
          }
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
        }

        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }

        /* Hide scrollbar on thumbnail container while keeping scroll functionality */
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src="/images/design-mode/vert-manguinhos-hero.png"
            alt="Vert Manguinhos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c9a961]/10 rounded-full blur-3xl float-animation" />
          <div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#c9a961]/5 rounded-full blur-3xl float-animation"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative container mx-auto px-4 h-full min-h-screen flex flex-col justify-center py-32 md:py-40">
          <div className="max-w-3xl">
            <div className="mb-6 animate-[fadeIn_1s_ease-out]">
              <img src="/vert-manguinhos-logo.png" alt="Vert Manguinhos" className="h-24 md:h-32 lg:h-40 w-auto" />
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-[fadeIn_1s_ease-out_0.2s_both]">
              Sua casa de alto padrão nas altura, com vista para o mar e para o Mestre Álvaro.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 mb-8 animate-[fadeIn_1s_ease-out_0.3s_both]">
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-[#c9a961]" />
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider">Suítes</p>
                  <p className="text-white font-semibold">3 e 4 suítes</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-[#c9a961]" />
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider">Área</p>
                  <p className="text-white font-semibold">160 a 190 m²</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Car className="w-5 h-5 text-[#c9a961]" />
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider">Vagas</p>
                  <p className="text-white font-semibold">2 a 3 vagas</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 animate-[fadeIn_1s_ease-out_0.4s_both]">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#c9a961] to-[#b89851] text-black hover:from-[#b89851] hover:to-[#a67c3c] px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c9a961]/50 shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10">Tenho Interesse</span>
                <div className="absolute inset-0 shimmer" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm"
              >
                Agendar Visita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Value Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c9a961]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#c9a961]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Mais que um Lar, um Investimento Inteligente
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#c9a961] to-transparent mb-8 rounded-full" />
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                O Vert Manguinhos representa uma oportunidade única de investir em qualidade de vida e valorização
                patrimonial. Um empreendimento que une localização estratégica, acabamento premium e infraestrutura
                completa.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 fade-in-section stagger-1 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a961] to-[#b89851] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Sparkles className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Valorização Garantida</h4>
                    <p className="text-white/70">Região em constante desenvolvimento e valorização imobiliária</p>
                  </div>
                </div>

                <div className="flex gap-4 fade-in-section stagger-2 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a961] to-[#b89851] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Building2 className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Padrão Construtivo</h4>
                    <p className="text-white/70">Construção de alto padrão com materiais de primeira linha</p>
                  </div>
                </div>

                <div className="flex gap-4 fade-in-section stagger-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a961] to-[#b89851] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Home className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Qualidade de Vida</h4>
                    <p className="text-white/70">Infraestrutura completa para você e sua família</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative fade-in-section">
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px] bg-gradient-to-b from-neutral-950/50 to-neutral-900/50 rounded-3xl overflow-hidden border border-[#c9a961]/30 shadow-2xl hover:shadow-[#c9a961]/20 transition-all duration-500 group">
                {buildingImages.map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`Vert Manguinhos - Vista ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0" />
                {/* Carousel Navigation Dots */}
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {buildingImages.map((_, index) => null)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VertHouses Concept Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/design-mode/verthouses-concept.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 fade-in-section">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Revolução das VertHouses</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-8 rounded-full" />
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Um conceito inovador desenvolvido exclusivamente pela UpMont para promover uma verdadeira experiência de
                morar em uma casa, com todas as comodidades e estrutura de um condomínio de apartamentos de alto padrão.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: Wind,
                  title: "Ventilação Cruzada",
                  desc: "Todos os banheiros com ventilação natural",
                  delay: "stagger-1",
                },
                {
                  icon: ChefHat,
                  title: "Cozinha Integrada",
                  desc: "Cozinha com ilha para maior convivência",
                  delay: "stagger-2",
                },
                {
                  icon: Armchair,
                  title: "Salas Amplas",
                  desc: "Ambientes espaçosos e integrados",
                  delay: "stagger-3",
                },
                {
                  icon: Sparkles,
                  title: "Varanda Gourmet",
                  desc: "Varandas nos quartos e preparadas para hidromassagem",
                  delay: "stagger-4",
                },
                {
                  icon: Home,
                  title: "Suíte Master Premium",
                  desc: "Com closet, 2 pias e 2 chuveiros",
                  delay: "stagger-5",
                },
                {
                  icon: MapPin,
                  title: "Vistas Panorâmicas",
                  desc: "3 unidades por andar com vistas privilegiadas",
                  delay: "stagger-6",
                },
                {
                  icon: Zap,
                  title: "Carregamento Elétrico",
                  desc: "Estações de carregamento para todas as unidades",
                  delay: "stagger-1",
                },
                {
                  icon: Building2,
                  title: "Interiores Personalizados",
                  desc: "Acabamentos de alto padrão customizáveis",
                  delay: "stagger-2",
                },
                {
                  icon: Car,
                  title: "Vagas Cobertas",
                  desc: "Maioria das vagas soltas e cobertas com store boxes",
                  delay: "stagger-3",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`fade-in-section ${feature.delay} bg-gradient-to-br from-neutral-900 to-black p-4 rounded-xl border border-[#c9a961]/30 hover:border-[#c9a961]/50 hover:shadow-lg hover:shadow-[#c9a961]/10 transition-all duration-500 hover:-translate-y-1 group flex items-start gap-3`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#c9a961]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#c9a961]/30 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-[#c9a961]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-base mb-1">{feature.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="relative py-24 bg-[#070F0E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Conheça Nossos Espaços</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Ambientes projetados para proporcionar conforto, lazer e bem-estar para toda a família
            </p>
          </div>

          {/* Featured Large Images */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="group relative overflow-hidden rounded-3xl aspect-[16/10] border border-[#c9a961]/30 hover:border-[#c9a961] transition-all duration-500 shadow-2xl hover:shadow-[#c9a961]/20 fade-in-section stagger-1">
                <img
                  src="/vert-mezanino-01.png"
                  alt="Mezanino com jogos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-2xl mb-2">Sala de Jogos Premium</h3>
                  <p className="text-white/80 text-sm">Mesa de sinuca, poker e área de TV</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl aspect-[16/10] border border-[#c9a961]/30 hover:border-[#c9a961] transition-all duration-500 shadow-2xl hover:shadow-[#c9a961]/20 fade-in-section stagger-2">
                <img
                  src="/vert-sala-reuniao.png"
                  alt="Sala de reunião"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-2xl mb-2">Sala de Reunião Executiva</h3>
                  <p className="text-white/80 text-sm">Espaço corporativo com tecnologia de ponta</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {/* Row 1 - 4 equal items */}
            <div className="group relative overflow-hidden rounded-2xl aspect-square border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 fade-in-section stagger-1">
              <img
                src="/vert-mezanino-02.jpg"
                alt="Espaço Gourmet"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-semibold text-sm">Espaço Gourmet</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-square border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 fade-in-section stagger-2">
              <img
                src="/vert-mezanino-03.jpg"
                alt="Lounge"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-semibold text-sm">Lounge Premium</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-square border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 fade-in-section stagger-3">
              <img
                src="/vert-mezanino-04.jpg"
                alt="Área de convivência"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-semibold text-sm">Convivência</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-square border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 fade-in-section stagger-4">
              <img
                src="/vert-futmesa.png"
                alt="Mesa de pebolim"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-semibold">Pebolim</p>
              </div>
            </div>
          </div>

          {/* Row 2 - Mixed sizes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 fade-in-section stagger-1">
              <img
                src="/vert-podcast.png"
                alt="Estúdio de Podcast"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-semibold">Estúdio de Podcast</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 fade-in-section stagger-2">
              <img
                src="/vert-bicicletario.png"
                alt="Bicicletário"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-semibold">Bicicletário</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 fade-in-section stagger-3">
              <img
                src="/vert-espaco-beleza.png"
                alt="Espaço de beleza"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-semibold">Espaço de Beleza</p>
              </div>
            </div>
          </div>

          {/* Row 3 - Kids Area (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-3xl aspect-[16/10] border border-[#c9a961]/30 hover:border-[#c9a961] transition-all duration-500 shadow-2xl hover:shadow-[#c9a961]/20 fade-in-section stagger-1">
              <img
                src="/vert-brinquedoteca-01.png"
                alt="Brinquedoteca"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-2xl mb-2">Brinquedoteca Completa</h3>
                <p className="text-white/80 text-sm">Espaço kids com estrutura de escalada e brinquedos</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl aspect-[16/10] border border-[#c9a961]/30 hover:border-[#c9a961] transition-all duration-500 shadow-2xl hover:shadow-[#c9a961]/20 fade-in-section stagger-2">
              <img
                src="/vert-area-gourmet.jpg"
                alt="Área gourmet"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-2xl mb-2">Área Gourmet</h3>
                <p className="text-white/80 text-sm">Espaço gourmet completo para confraternizações e eventos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plantas Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Floor Plan Carousel */}
            <div className="fade-in-section order-2 lg:order-1">
              <FloorPlanCarousel currentIndex={currentFloorPlanIndex} onIndexChange={setCurrentFloorPlanIndex} />
            </div>

            {/* Right Column - Text Content */}
            <div className="fade-in-section order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance leading-tight">
                  Plantas Pensadas para Você Viver com Estilo
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#c9a961] to-transparent mb-8 rounded-full" />
                <p className="text-lg md:text-xl text-white/80 leading-relaxed text-pretty mb-8">
                  Explore cada detalhe das plantas do Vert Manguinhos. Apartamentos de 3 e 4 suítes com até 190m², além
                  de áreas comuns projetadas para oferecer o máximo de conforto e lazer para toda a família.
                </p>
              </div>

              <div className="bg-gradient-to-br from-neutral-900 to-black p-6 md:p-8 rounded-2xl border border-[#c9a961]/30">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-2xl md:text-3xl mb-3">{currentFloorPlan.title}</h3>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed">{currentFloorPlan.bedrooms}</p>
                  </div>
                  <div className="flex-shrink-0 bg-gradient-to-r from-[#c9a961] to-[#b89851] text-black px-6 py-3 rounded-full font-bold text-lg md:text-xl shadow-lg">
                    {currentFloorPlan.area}
                  </div>
                </div>
              </div>

              {/* Floor Plan Menu */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg mb-4">Selecione uma Planta:</h4>
                <div className="flex gap-3 overflow-x-auto hide-scrollbar">
                  {floorPlans.map((plan, index) => (
                    <button
                      key={plan.id}
                      onClick={() => setCurrentFloorPlanIndex(index)}
                      className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        index === currentFloorPlanIndex
                          ? "border-[#c9a961] shadow-lg shadow-[#c9a961]/50 scale-105"
                          : "border-[#c9a961]/30 hover:border-[#c9a961]/60 hover:scale-105"
                      }`}
                    >
                      <img
                        src={plan.image || "/placeholder.svg"}
                        alt={plan.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          index === currentFloorPlanIndex ? "bg-[#c9a961]/20" : "bg-black/40 hover:bg-black/20"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Connectivity Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#c9a961 1px, transparent 1px), linear-gradient(90deg, #c9a961 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Localização Privilegiada</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              No coração de Manguinhos, com acesso rápido a tudo que você precisa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                img: "/shopping-mall-interior-modern.jpeg",
                icon: ShoppingCart,
                title: "Shopping & Comércio",
                desc: "Shoppings e comércio completo a poucos minutos",
                delay: "stagger-1",
              },
              {
                img: "/hospital-estadual-jayme-santos-neves.jpg",
                icon: Building2,
                title: "Saúde & Educação",
                desc: "Hospitais e escolas de qualidade próximos",
                delay: "stagger-2",
              },
              {
                img: "/mobilidade-urbana-aerial-night.jpg",
                icon: MapPin,
                title: "Mobilidade Urbana",
                desc: "Acesso fácil às principais vias da cidade",
                delay: "stagger-3",
              },
            ].map((location, index) => (
              <div
                key={index}
                className={`fade-in-section ${location.delay} relative h-[350px] rounded-2xl overflow-hidden border border-[#c9a961]/30 group hover:border-[#c9a961]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c9a961]/20`}
              >
                <img
                  src={location.img || "/placeholder.svg"}
                  alt={location.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{location.title}</h3>
                      <p className="text-lg text-white/90 mb-6 leading-relaxed">{location.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Large Location Feature */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden border border-[#c9a961]/30 shadow-2xl group fade-in-section hover:shadow-[#c9a961]/30 transition-all duration-500">
            <img
              src="/conectado-cidade-aerial-view.jpg"
              alt="Vista aérea do bairro"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Conectado com Toda a Cidade</h3>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    Viva em um bairro que oferece tudo o que você precisa: infraestrutura completa, áreas verdes,
                    segurança e qualidade de vida.
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#c9a961] to-[#b89851] text-black hover:from-[#b89851] hover:to-[#a67c3c] px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl hover:shadow-[#c9a961]/50 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Ver Localização</span>
                    <div className="absolute inset-0 shimmer" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#c9a961]/10 to-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a961]/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in-section">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para Viver nas Alturas?</h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Entre em contato e descubra como o Vert Manguinhos pode ser o seu novo lar de alto padrão.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contatos">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#c9a961] to-[#b89851] text-black hover:from-[#b89851] hover:to-[#a67c3c] px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl hover:shadow-[#c9a961]/50 relative overflow-hidden group"
                >
                  <span className="relative z-10">Fale Conosco</span>
                  <div className="absolute inset-0 shimmer" />
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#c9a961] text-white hover:bg-[#c9a961] hover:text-black px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm"
                >
                  Voltar ao Início
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
