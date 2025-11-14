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
                className="h-28 md:h-32 lg:h-36 mx-auto drop-shadow-2xl"
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

      {/* Henrique Gasparini Section */}
      <section className="relative py-24 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black opacity-50" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(#c9a961 1px, transparent 1px), linear-gradient(90deg, #c9a961 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 fade-in-section">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Conceito e projetos com o selo de qualidade da assinatura
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-8 rounded-full" />
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c9a961] to-[#b89851]">
                Henrique Gasparini
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Texto */}
              <div className="fade-in-section space-y-6">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Henrique Gasparini é um arquiteto visionário com mais de vinte e cinco anos de experiência na criação
                  de espaços que transcendem o conceito tradicional de moradia. Sua abordagem única combina precisão
                  técnica com profunda sensibilidade humana.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Henrique desenvolveu uma metodologia exclusiva que coloca as pessoas no centro do processo criativo,
                  resultando em espaços que não apenas impressionam visualmente, mas também abraçam e elevam a
                  experiência de vida de seus moradores.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Principal referência em arquitetura residencial Premium de Serra, com atuação marcante em todo Estado,
                  acumulando diversas premiações municipais e estaduais, Henrique Gasparini traz toda sua expertise e
                  visão inovadora para o mercado vertical, criando um novo conceito de morar bem, agora nas alturas,
                  nascendo os{" "}
                  <span className="text-[#c9a961] font-bold">"VertHouses"</span>.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Sua assinatura é sinônimo de qualidade, sofisticação e credibilidade, valores que agora são
                  transferidos para a UPMONT Incorporadora, nos VertHouses e nos UP Studios.
                </p>
              </div>

              {/* Imagem */}
              <div className="fade-in-section relative">
                <div className="relative h-[400px] md:h-[550px] lg:h-[700px] rounded-2xl overflow-hidden border border-[#c9a961]/30 shadow-2xl group hover:shadow-[#c9a961]/20 transition-all duration-500">
                  <img
                    src="/henrique-sozinho.jpeg"
                    alt="Henrique Gasparini"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            <div className="fade-in-section space-y-6">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center max-w-5xl mx-auto">
                A UPMONT nasce no momento perfeito, combinando a Experiência consolidada em casas de luxo, credibilidade
                estabelecida por meio de vasto portifólio com mais de 1000 projetos desenvolvidos entre Boulevard Lagoa,
                Alphaville Jacuhy, Arquipélago de Manguinhos e demais, e o mercado aquecido e promissor de Serra, que vem
                cada vez mais se consolidando como principal cidade para expansão qualificada no Espírito Santo.
              </p>

              <div className="bg-gradient-to-br from-neutral-900/80 to-black/80 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-[#c9a961]/30 max-w-5xl mx-auto">
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic">
                  "Nas últimas décadas, com a H Arquitetura, contribuí para que o município de Serra se tornasse
                  referência em casas de Alto Padrão para todo Estado do ES. Agora com a UPMONT Incorporadora, vamos
                  avançar nessa transição para a Verticalização, no mesmo nível de qualidade e inovação. Serra está pronta
                  e anseia por esse movimento, nós merecemos essa revolução dos VertHouses! Vamos juntos !!!!"
                </p>
                <p className="text-[#c9a961] font-bold text-xl md:text-2xl mt-6 text-right">
                  - Henrique Gasparini
                </p>
              </div>
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
                description: "Qualidade máxima do início ao fim: da seleção do terreno e projeto qualificado à obra impecável e entrega da unidade, garantindo a melhor experiência para o cliente.",
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

      {/* Palavra de Confirmação Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jeans2.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Imagem */}
              <div className="fade-in-section relative order-2 lg:order-1">
                <div className="relative h-[600px] md:h-[800px] lg:h-[1000px] rounded-2xl overflow-hidden border border-[#c9a961]/30 shadow-2xl group hover:shadow-[#c9a961]/20 transition-all duration-500">
                  <img
                    src="/henrique-esposa.jpeg"
                    alt="Henrique Gasparini e Esposa"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Texto */}
              <div className="fade-in-section space-y-6 order-1 lg:order-2">
                <div className="bg-gradient-to-br from-neutral-900/90 to-black/90 backdrop-blur-lg p-8 md:p-10 rounded-2xl border border-[#c9a961]/30">
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed italic mb-4">
                    "Nos últimos dias acontecerá que o monte da casa do Senhor será estabelecido no cume dos montes, e se
                    Elevará sobre os outeiros, e para ele se afluirão todos os povos. Irão muitas nações e dirão: Vinde, e
                    subamos ao monte do Senhor, e à casa do Deus de Jacó, para que nos ensine os seus caminhos, e andemos
                    pelas suas veredas, porque de Sião sairá a lei, e a palavra do Senhor de Jerusalém."
                  </p>
                  <p className="text-[#c9a961] font-bold text-lg md:text-xl text-right">- Isaías 2:2-3</p>
                </div>

                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Essa foi a Palavra que o Senhor trouxe como confirmação dessa missão, enquanto orávamos pelos
                  empreendimentos, e não tivemos dúvida de que esse propósito não era nosso, que já havia nascido no
                  coração de Deus, e o nome foi confirmado e estabelecido:{" "}
                  <span className="text-[#c9a961] font-bold">UPMONT</span>.
                </p>

                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  É um comando de Deus ao qual buscamos obedecer todos os dias, elevando nossos corações, pensamentos,
                  atitudes, sempre olhando para o alto, subindo a montanha do Senhor, descalçando os pés e nos derramando
                  em sua presença. Buscando direção em tudo que fazemos e em cada empreendimento que desenvolvemos.
                </p>

                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Esse é o convite, vinde e subamos ao monte do Senhor e à casa do Deus de Jacó.{" "}
                  <span className="text-[#c9a961] font-bold">Vamos juntos !!!!</span>
                </p>

                <div className="pt-6 border-t border-[#c9a961]/30">
                  <p className="text-xl md:text-2xl text-[#c9a961] font-bold leading-relaxed text-center">
                    A UPMONT e todos os seus empreendimentos pertencem ao Senhor Jesus e por Ele são abençoados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatButton />
    </main>
  )
}
