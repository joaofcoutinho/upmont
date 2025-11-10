"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"
import { Button } from "@/components/ui/button"
import { Building2, Users, Sparkles, Heart } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function QuemSomosPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

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
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src="/fundo-varanda.png"
            alt="UpMont"
            className="w-full h-full object-cover brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 h-full min-h-screen flex flex-col justify-center py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-[fadeIn_1s_ease-out]">
              <img
                src="/images/design-mode/logo-upmont.png"
                alt="UpMont"
                className="h-24 md:h-32 mx-auto drop-shadow-2xl"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-[fadeIn_1s_ease-out_0.2s_both]">
              Bem-vindos à UpMont
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-8 rounded-full animate-[fadeIn_1s_ease-out_0.3s_both]" />
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto animate-[fadeIn_1s_ease-out_0.4s_both]">
              Acreditamos que sociedades podem ser desenvolvidas a partir da qualidade de ocupação imobiliária
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jeans2.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-section">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Quem Somos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-8 rounded-full" />

            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                A construção civil tem a força e a responsabilidade de ser um agente de transformação social, incentivando bairros e cidades a elevarem o padrão e qualidade de vida e gerando oportunidades para todos.
              </p>
              <p>
                Construímos com excelência para entregar projetos e imóveis feitos para render. Obras que multiplicam os resultados de nossos investidores e promovem extremo valor agregado para cada região em que temos o privilégio de investir.
              </p>
              <p>
                Incorporar, para nós, é uma via próspera para desenvolver uma região, com imóveis de identidade autêntica de alto padrão. Entregamos, em cada projeto, experiências únicas, aliadas à natureza e ao bem-estar.
              </p>
              <p className="text-xl text-white/90 font-semibold">
                Transformamos espaços em experiências para quem vai morar e ativos lucrativos para quem vai investir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto UpMont Section */}
      <section className="relative pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/cortina-foto2.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pb-32 pt-0">
          <div className="max-w-3xl fade-in-section">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Manifesto UpMont
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#c9a961] to-transparent mb-12 rounded-full" />

            <div className="space-y-8 text-lg md:text-xl text-white/90 leading-relaxed">
              <p className="text-2xl md:text-3xl font-semibold text-white">
                A UpMont é um movimento ascendente.
              </p>
              <p className="text-xl md:text-2xl text-[#c9a961]">
                Um convite à elevação — de padrões, de propósito, de vida.
              </p>
              <p>
                Representa o despertar para a escalada ao ponto mais alto: o cume, a plenitude.
                É conexão com o céu, com o que é sublime, com as coisas do alto, com Deus o criador.
              </p>
              <p>
                Mais do que um nome, é um estilo de vida.
                Um impulso que nasce da coragem de realizar, de ir além,
                de transformar o impossível em conquista.
              </p>
              <p>
                A UpMont é para aqueles que não se satisfazem com o comum,
                que buscam o ideal, o topo da montanha.
                Para os que enxergam na subida um propósito,
                e no ápice, a recompensa da jornada.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-[#c9a961] pt-8">
                UpMont — eleve seu padrão de viver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jeans2.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Nossos Valores</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Princípios que guiam cada decisão e projeto que desenvolvemos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Qualidade",
                description: "Selo de qualidade e excelência do renomado arquiteto capixaba Henrique Gasparini, em conjunto com fornecedores e todos os materiais e insumos de primeira linha.",
              },
              {
                icon: Users,
                title: "Parceria",
                description: "Construindo relacionamentos duradouros com clientes, fornecedores, investidores e colaboradores.",
              },
              {
                icon: Sparkles,
                title: "Pioneirismo",
                description: "Sempre à frente das tendências e tecnologias construtivas e digitais, que valorizam os imóveis e deixam um legado de excelência.",
              },
              {
                icon: Heart,
                title: "Fé",
                description: "Honrando ao Criador que tem nos dado vida e esperança, dedicando sempre a Ele tudo que fazemos, em gratidão e obediência à Sua Palavra.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`fade-in-section stagger-${index + 1} group bg-gradient-to-br from-neutral-900 to-black p-8 rounded-2xl border border-[#c9a961]/30 hover:border-[#c9a961]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c9a961]/20`}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a961] to-[#b89851] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <value.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatButton />
    </main>
  )
}
