"use client"

import { Button } from "@/components/ui/button"
import { Home, Car, MapPin, Building2, ShoppingCart, Sparkles, Wind, ChefHat, Armchair, Zap, Package, Lock, Bike, Wrench, Sun, Droplet, PawPrint } from "lucide-react"
import Link from "next/link"
import { FloorPlanCarousel, floorPlans } from "@/components/floor-plan-carousel"
import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"

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
  const [selectedAmenity, setSelectedAmenity] = useState(0)

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
              <img src="/vert-manguinhos-logo.png" alt="Vert Manguinhos" className="h-32 md:h-36 lg:h-40 w-auto" />
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

      {/* VertHouses Concept Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/design-mode/verthouses-concept.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />

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
                  desc: "Janelas inteligentes com ventilação cruzada e todos banheiros com ventilação natural",
                  delay: "stagger-1",
                },
                {
                  icon: ChefHat,
                  title: "Cozinha Integrada com Ilha",
                  desc: "Cozinha integrada à sala com ilha para maior amplitude e melhor interação social.",
                  delay: "stagger-2",
                },
                {
                  icon: Armchair,
                  title: "Salas Amplas",
                  desc: "Ambientes bem definidos e espaçosos acolhendo mesa para 8 pessoas, sofá grande e poltronas.",
                  delay: "stagger-3",
                },
                {
                  icon: Sparkles,
                  title: "Varanda Gourmet",
                  desc: "com vistas panorâmicas, preparada para pia e churrasqueira elétrica.",
                  delay: "stagger-4",
                },
                {
                  icon: Home,
                  title: "Suíte Master Premium",
                  desc: "Com closet, 2 chuveiros e duas pias, varanda e espaço para cama king.",
                  delay: "stagger-5",
                },
                {
                  icon: MapPin,
                  title: "Vistas Panorâmicas",
                  desc: "Sem vizinhos, cercado por reservas, vista para o mar e para o Mestre Álvaro",
                  delay: "stagger-6",
                },
                {
                  icon: Zap,
                  title: "Carregamento Elétrico",
                  desc: "Preparação para estações de carro elétrico para todas as unidades",
                  delay: "stagger-1",
                },
                {
                  icon: Building2,
                  title: "Interiores Personalizados",
                  desc: "Incluso projeto de interiores completo, customização dos materiais de acabamento. Cada unidade será única!",
                  delay: "stagger-2",
                },
                {
                  icon: Car,
                  title: "Vagas Cobertas",
                  desc: "2 ou 3 vagas de garagem, sendo a maioria cobertas",
                  delay: "stagger-3",
                },
                {
                  icon: Sparkles,
                  title: "Preparação Hidromassagem",
                  desc: "Preparação para hidromassagem ou ofurô na varanda da suíte master",
                  delay: "stagger-4",
                },
                {
                  icon: Home,
                  title: "Unidades Gardens",
                  desc: "amplas áreas descobertas, preparadas para piscinas privativas e firepit",
                  delay: "stagger-5",
                },
                {
                  icon: Building2,
                  title: "Box Locker Privativos",
                  desc: "ambientes com portas, nas garagens, para todas unidades",
                  delay: "stagger-6",
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

      {/* Investment Value Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/ripado-degrade.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                3 e 4 Suítes
                <br />
                160,00 a 190,00 m²
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#c9a961] to-transparent mb-12 rounded-full" />

              <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#c9a961] rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <span className="font-bold text-white">Térreo:</span> 15 lojas, áreas comuns e recreativas do condomínio.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#c9a961] rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <span className="font-bold text-white">2º e 3º Pavimentos:</span> garagens e box privativos.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#c9a961] rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <span className="font-bold text-white">4º Pavimento:</span> 3 unidades Gardens, sendo uma de três suítes e duas de 4 suítes.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#c9a961] rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <span className="font-bold text-white">5º ao 15º Pavimentos:</span> 3 unidades por andar, somando 33 unidades, sendo 11 de 3 suítes e 22 de 4 suítes.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#c9a961] rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <span className="font-bold text-white">16º Pavimento:</span> unidade cobertura com 4 suítes e área de lazer com piscina aquecida, academia, área gourmet, sauna e churrasqueira gourmet.
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-[#c9a961]/40">
                  <p className="text-2xl font-bold text-[#c9a961]">Total: 37 casas suspensas</p>
                </div>
              </div>
            </div>

            <div className="relative fade-in-section">
              <div className="relative h-[400px] md:h-[550px] lg:h-[700px] bg-gradient-to-b from-neutral-950/50 to-neutral-900/50 rounded-3xl overflow-hidden border border-[#c9a961]/30 shadow-2xl hover:shadow-[#c9a961]/20 transition-all duration-500 group">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {/* Row 1 - 4 equal items */}
            <div className="group relative overflow-hidden rounded-2xl aspect-square border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 fade-in-section stagger-1">
              <img
                src="/vert-mezanino-02.jpg"
                alt="Espaço Gourmet"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-semibold text-sm">Espaço Gourmet</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-square border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 fade-in-section stagger-2">
              <img
                src="/vert-mezanino-03.jpg"
                alt="Lounge"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-semibold text-sm">Lounge Premium</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-square border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 fade-in-section stagger-3">
              <img
                src="/vert-mezanino-04.jpg"
                alt="Área de convivência"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-semibold text-sm">Convivência</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-square border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 fade-in-section stagger-4">
              <img
                src="/vert-futmesa.png"
                alt="Mesa de pebolim"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity duration-500 flex items-end p-4">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-semibold">Estúdio de Podcast</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 fade-in-section stagger-2">
              <img
                src="/vert-bicicletario.png"
                alt="Bicicletário"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-semibold">Bicicletário</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 fade-in-section stagger-3">
              <img
                src="/vert-espaco-beleza.png"
                alt="Espaço de beleza"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity duration-500 flex items-end p-4">
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

          {/* Row 4 - Academia e Piscina Destaque */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="group relative overflow-hidden rounded-3xl aspect-[16/10] border border-[#c9a961]/30 hover:border-[#c9a961] transition-all duration-500 shadow-2xl hover:shadow-[#c9a961]/20 fade-in-section stagger-1">
              <img
                src="/academia-destaque.jpeg"
                alt="Academia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-2xl mb-2">Academia com Vista pro Mar</h3>
                <p className="text-white/80 text-sm">Equipamentos modernos para seu treino na cobertura</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl aspect-[16/10] border border-[#c9a961]/30 hover:border-[#c9a961] transition-all duration-500 shadow-2xl hover:shadow-[#c9a961]/20 fade-in-section stagger-2">
              <img
                src="/piscina-destaque.jpeg"
                alt="Piscina"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-2xl mb-2">Piscina com Vista pro Mar</h3>
                <p className="text-white/80 text-sm">Piscina aquecida com vista panorâmica</p>
              </div>
            </div>
          </div>

          {/* Row 5 - Academia e Piscina Adicionais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="group relative overflow-hidden rounded-3xl aspect-[16/10] border border-[#c9a961]/30 hover:border-[#c9a961] transition-all duration-500 shadow-2xl hover:shadow-[#c9a961]/20 fade-in-section stagger-1">
              <img
                src="/academia.jpeg"
                alt="Academia - Vista 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-2xl mb-2">Academia Completa</h3>
                <p className="text-white/80 text-sm">Espaço amplo e bem equipado para suas atividades físicas</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl aspect-[16/10] border border-[#c9a961]/30 hover:border-[#c9a961] transition-all duration-500 shadow-2xl hover:shadow-[#c9a961]/20 fade-in-section stagger-2">
              <img
                src="/piscina.jpeg"
                alt="Piscina - Vista 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-2xl mb-2">Piscina na Cobertura</h3>
                <p className="text-white/80 text-sm">Deck completo para relaxar e aproveitar o sol</p>
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

      {/* Amenidades Interativas Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jeans2.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 fade-in-section">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Comodidades de Alto Padrão para seu bem-estar.
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-8 rounded-full" />
              <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Cada detalhe foi pensado para você escolher como quer aproveitar o seu tempo
              </p>
            </div>

            {/* Amenity Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 mb-12 fade-in-section">
              {[
                {
                  icon: Package,
                  title: "MINIMERCADO Autônomo",
                  shortTitle: "Minimercado",
                  image: "/minimercado.jpeg",
                },
                {
                  icon: Package,
                  title: "Delivery Box Com Refrigeradores",
                  shortTitle: "Delivery Box",
                  image: "/delivery-box.jpeg",
                },
                {
                  icon: Lock,
                  title: "Box Locker Privativo",
                  shortTitle: "Box Locker",
                  image: "/box-locker.jpeg",
                },
                {
                  icon: Bike,
                  title: "Bike Point e oficina e tomada elétrica",
                  shortTitle: "Bike Point",
                  image: "/bike-point.jpeg",
                },
                {
                  icon: Zap,
                  title: "Tomadas para Veículos elétricos",
                  shortTitle: "Carregamento",
                  image: "tomadas-eletricas.jpeg",
                },
                {
                  icon: Sun,
                  title: "Aquecimento Solar Central",
                  shortTitle: "Solar",
                  image: "aquecimento-solar.png",
                },
                {
                  icon: Droplet,
                  title: "Preparação para Hidro ou ofurô",
                  shortTitle: "Hidro",
                  image: "/hidro-ofuro.jpeg",
                },
                {
                  icon: PawPrint,
                  title: "PetCare e LavaPatas",
                  shortTitle: "PetCare",
                  image: "/pet-care.jpg",
                },
              ].map((amenity, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAmenity(index)}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 ${
                    selectedAmenity === index
                      ? "bg-gradient-to-br from-[#c9a961] to-[#b89851] scale-105 shadow-2xl shadow-[#c9a961]/50"
                      : "bg-gradient-to-br from-neutral-900 to-black border border-[#c9a961]/30 hover:border-[#c9a961]/60 hover:scale-105"
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        selectedAmenity === index
                          ? "bg-black/20"
                          : "bg-[#c9a961]/20 group-hover:bg-[#c9a961]/30"
                      }`}
                    >
                      <amenity.icon
                        className={`w-8 h-8 transition-all duration-300 ${
                          selectedAmenity === index ? "text-black" : "text-[#c9a961]"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-sm font-semibold text-center leading-tight ${
                        selectedAmenity === index ? "text-black" : "text-white"
                      }`}
                    >
                      {amenity.shortTitle}
                    </h3>
                  </div>
                  {selectedAmenity === index && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#b89851]" />
                  )}
                </button>
              ))}
            </div>

            {/* Selected Amenity Image and Description */}
            <div className="fade-in-section grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Title and Description */}
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {
                    [
                      "MINIMERCADO Autônomo",
                      "Delivery Box Com Refrigeradores",
                      "Box Locker Privativo",
                      "Bike Point e oficina e tomada elétrica",
                      "Tomadas para Veículos elétricos",
                      "Aquecimento Solar Central",
                      "Preparação para Hidro ou ofurô",
                      "PetCare e LavaPatas",
                    ][selectedAmenity]
                  }
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#c9a961] to-transparent rounded-full" />
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  {
                    [
                      "Praticidade e conveniência ao seu alcance. Faça suas compras rápidas sem sair do condomínio.",
                      "Receba suas encomendas com segurança. Sistema refrigerado para alimentos frescos.",
                      "Espaço privativo e seguro para guardar seus pertences e receber encomendas.",
                      "Espaço completo com oficina e ponto de recarga para sua bike elétrica.",
                      "Prepare-se para o futuro com estações de carregamento para veículos elétricos.",
                      "Economia e sustentabilidade com sistema de aquecimento solar com medição individual.",
                      "Relaxe na sua própria hidromassagem ou ofurô na varanda da suíte master.",
                      "Área exclusiva para cuidar do seu pet com lava-patas e muito carinho.",
                    ][selectedAmenity]
                  }
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="order-1 lg:order-2">
                <div className="relative h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden border-2 border-[#c9a961]/50 shadow-2xl group">
                  <img
                    src={
                      [
                        "/minimercado.jpeg",
                        "/delivery-box.jpeg",
                        "/box-locker.jpeg",
                        "/bike-point.jpeg",
                        "/tomadas-eletricas.jpeg",
                        "/aquecimento-solar.png",
                        "/hidro-ofuro.jpeg",
                        "/pet-care.jpeg",
                      ][selectedAmenity] || "/placeholder.svg"
                    }
                    alt="Amenidade selecionada"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interiores Personalizados Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/fundo-madeira.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 fade-in-section">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                INTERIORES PERSONALIZADO
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <div className="fade-in-section space-y-6 order-2 lg:order-1">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Incluso projeto de interiores completo com equipe Henrique Gasparini arquitetura, com possibilidade de
                  customização dos revestimentos, pedras, louças, metais, iluminação, marcenaria, gesso, podendo haver
                  upgrade de materiais, aproveitando a mão de obra da construção, evitando desperdício de insumos, de
                  tempo e de custos com reformas.
                </p>

                <div className="bg-gradient-to-br from-[#c9a961]/20 to-[#b89851]/10 backdrop-blur-lg p-8 rounded-2xl border border-[#c9a961]/30">
                  <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed">
                    No VertManguinhos a sua casa suspensa tem a sua cara, sua identidade, totalmente adaptada às suas
                    necessidades e ao seu estilo.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-4">
                  {[
                    "Revestimentos",
                    "Pedras",
                    "Louças",
                    "Metais",
                    "Iluminação",
                    "Marcenaria",
                    "Gesso",
                    "Upgrade de Materiais",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-neutral-900/50 p-3 rounded-lg border border-[#c9a961]/20 hover:border-[#c9a961]/50 transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#c9a961] flex-shrink-0" />
                      <span className="text-white/90 text-xs sm:text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Imagem */}
              <div className="fade-in-section order-1 lg:order-2">
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-[#c9a961]/30 shadow-2xl group hover:shadow-[#c9a961]/20 transition-all duration-500">
                  <img
                    src="/interior-personalizado.jpeg"
                    alt="Interiores Personalizados"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corpo Técnico Section */}
      <section className="relative py-24 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(#c9a961 1px, transparent 1px), linear-gradient(90deg, #c9a961 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 fade-in-section">
              <div className="flex items-center justify-center gap-8 md:gap-12 mb-12">
                <img
                  src="images/design-mode/logo-upmont.png"
                  alt="UpMont"
                  className="h-16 md:h-20 object-contain drop-shadow-2xl"
                />
                <div className="h-12 md:h-16 w-px bg-gradient-to-b from-transparent via-[#c9a961] to-transparent" />
                <img
                  src="/vert-manguinhos-logo.png"
                  alt="Vert Manguinhos"
                  className="h-16 md:h-20 object-contain drop-shadow-2xl"
                />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CORPO TÉCNICO EXPERIENTE E CONSOLIDADO
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
              {[
                {
                  logo: "/logo-henrique.png",
                  title: "Projeto Arquitetônico",
                  name: "Henrique Gasparini",
                },
                {
                  logo: "/logo-ilha.png",
                  title: "Projeto Estrutural",
                  name: "Ilha Projetos/Eng. Bruno Sarcinelli",
                },
                {
                  logo: "/logo-spin.png",
                  title: "Projeto de Instalações",
                  name: "SPIN Projetos",
                },
                {
                  logo: "/logo-pinheiro.png",
                  title: "Construção",
                  name: "Pinheiro de Sá Engenharia",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className={`fade-in-section stagger-${index + 1} group transition-all duration-500 hover:-translate-y-2`}
                >
                  <div className="flex items-center justify-center mb-6 md:mb-8 h-32 md:h-40 lg:h-48">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-[#c9a961] font-bold text-sm md:text-base mb-3 uppercase tracking-wide">
                      {tech.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed">{tech.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inteligência Construtiva Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/familia-feliz-praia.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 fade-in-section">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                INTELIGÊNCIA CONSTRUTIVA E TECNOLOGIA AVANÇADA
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-6 rounded-full" />
              <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Que gera segurança, sustentabilidade, precisão, durabilidade e facilidade de manutenção
              </p>
            </div>

            <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Estrutura e Construção */}
              <div>
                <h3 className="text-[#c9a961] font-bold text-base mb-3 uppercase tracking-wide">Estrutura e Construção</h3>
                <div className="space-y-2">
                  {[
                    "Estrutura em concreto armado e laje protendida",
                    "Paredes internas em Drywall",
                    "Paredes externas em Steel Frame",
                    "Escadas de bombeiro metálicas",
                    "Revestimentos das vigas em ACM",
                    "Fachada toda revestida",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-white/90">
                      <div className="w-1 h-1 rounded-full bg-[#c9a961] mt-2 flex-shrink-0" />
                      <p className="text-xs md:text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Segurança */}
              <div>
                <h3 className="text-[#c9a961] font-bold text-base mb-3 uppercase tracking-wide">Segurança</h3>
                <div className="space-y-2">
                  {[
                    "Fechadura eletrônica nas unidades",
                    "Pulmão com duas portas",
                    "Sistema contra incêndio",
                    "Acesso por biometria facial",
                    "Guarita com portaria 24h",
                    "Elevadores com reconhecimento",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-white/90">
                      <div className="w-1 h-1 rounded-full bg-[#c9a961] mt-2 flex-shrink-0" />
                      <p className="text-xs md:text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sustentabilidade */}
              <div>
                <h3 className="text-[#c9a961] font-bold text-base mb-3 uppercase tracking-wide">Sustentabilidade</h3>
                <div className="space-y-2">
                  {[
                    "Aquecimento solar central",
                    "Captação águas pluviais",
                    "Sistema de refrigeração VRV",
                    "Medição digital individual",
                    "Espaço para gerador",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-white/90">
                      <div className="w-1 h-1 rounded-full bg-[#c9a961] mt-2 flex-shrink-0" />
                      <p className="text-xs md:text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tecnologia */}
              <div>
                <h3 className="text-[#c9a961] font-bold text-base mb-3 uppercase tracking-wide">Tecnologia</h3>
                <div className="space-y-2">
                  {[
                    "Automação residencial",
                    "Wifi na área de lazer",
                    "Minimercado autônomo",
                    "Espaço delivery refrigerado",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-white/90">
                      <div className="w-1 h-1 rounded-full bg-[#c9a961] mt-2 flex-shrink-0" />
                      <p className="text-xs md:text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobilidade */}
              <div>
                <h3 className="text-[#c9a961] font-bold text-base mb-3 uppercase tracking-wide">Mobilidade</h3>
                <div className="space-y-2">
                  {[
                    "Bike Point com oficina",
                    "Tomadas p/ bike elétrica",
                    "Acesso serviços lateral",
                    "Box Lockers privativos",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-white/90">
                      <div className="w-1 h-1 rounded-full bg-[#c9a961] mt-2 flex-shrink-0" />
                      <p className="text-xs md:text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conforto */}
              <div>
                <h3 className="text-[#c9a961] font-bold text-base mb-3 uppercase tracking-wide">Conforto</h3>
                <div className="space-y-2">
                  {[
                    "PetCare e Lava Patas",
                    "Preparação hidromassagem",
                    "Prep. máquina lava-louças",
                    "Bancadas 70-80cm prof.",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-white/90">
                      <div className="w-1 h-1 rounded-full bg-[#c9a961] mt-2 flex-shrink-0" />
                      <p className="text-xs md:text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Connectivity Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jeans2.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
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
                img: "/mahai-serra.jpeg",
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
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{location.title}</h3>
                    <p className="text-lg text-white/90 leading-relaxed">{location.desc}</p>
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8">
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
      </section>

      {/* CTA Section - Last Section Before Footer */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-[#c9a961]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-section">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-8">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a961]" />
                <div className="w-2 h-2 bg-[#c9a961] rounded-full mx-4" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a961]" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Pronto para Viver nas Alturas?
              </h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
                Entre em contato e descubra como o Vert Manguinhos pode ser o seu novo lar de alto padrão.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#c9a961] to-[#b89851] text-black hover:from-[#b89851] hover:to-[#a67c3c] px-10 py-7 text-lg md:text-xl font-bold rounded-full transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-[#c9a961]/50 relative overflow-hidden group"
              >
                <span className="relative z-10">Fale Conosco</span>
                <div className="absolute inset-0 shimmer" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="border-2 border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-black px-10 py-7 text-lg md:text-xl font-bold rounded-full transition-all duration-300 hover:scale-110 bg-transparent backdrop-blur-sm"
              >
                Voltar ao Início
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatButton />
    </main>
  )
}
