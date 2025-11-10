"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  MapPin,
  Building2,
  Waves,
  DollarSign,
  Users,
  Factory,
  TreePine,
  FileText,
  Award,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function ViverEmSerraPage() {
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
          transition:
            opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
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
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src="/praia de manguinhos.jpg"
            alt="Praia de Manguinhos - Serra/ES"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>

        <div className="relative container mx-auto px-4 h-full min-h-screen flex flex-col justify-center py-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-[fadeIn_1s_ease-out]">
              Serra/ES: A Combinação Perfeita de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a961] via-[#d4b76e] to-[#c9a961]">
                Qualidade de Vida
              </span>{" "}
              e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a961] via-[#d4b76e] to-[#c9a961]">
                Investimento Inteligente
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-8 rounded-full animate-[fadeIn_1s_ease-out_0.2s_both]" />
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto animate-[fadeIn_1s_ease-out_0.3s_both]">
              Descubra por que a cidade se tornou o epicentro do desenvolvimento no Espírito Santo e como você pode se
              beneficiar desse crescimento.
            </p>

            <div className="mt-12 animate-[fadeIn_1s_ease-out_0.4s_both]">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#c9a961]/20 to-[#b89851]/10 backdrop-blur-lg border border-[#c9a961]/30 rounded-2xl px-8 py-6">
                <TrendingUp className="w-12 h-12 text-[#c9a961]" />
                <div className="text-left">
                  <p className="text-5xl md:text-6xl font-bold text-[#c9a961]">42%</p>
                  <p className="text-white/80 text-sm md:text-base">Valorização em 3 anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução Section */}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-section">
              {/* Texto */}
              <div>
                <div className="w-24 h-1 bg-gradient-to-r from-[#c9a961] to-transparent mb-8 rounded-full" />
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Nos últimos anos, Serra consolidou-se como o principal motor de crescimento do Espírito Santo. Mais do que
                  um polo econômico, a cidade tornou-se o destino preferido de quem busca qualidade de vida sem renunciar à
                  conveniência de uma infraestrutura urbana completa. Com uma valorização imobiliária que alcançou a marca
                  histórica de <span className="text-[#c9a961] font-bold">42% em apenas três anos</span>, Serra atrai tanto
                  famílias que sonham com um novo lar quanto investidores que buscam rentabilidade e segurança patrimonial.
                </p>
              </div>

              {/* Imagem */}
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-[#c9a961]/30 shadow-2xl group hover:shadow-[#c9a961]/20 transition-all duration-500">
                <img
                  src="/modern-building-exterior-blue-sky.png"
                  alt="Serra - Crescimento"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualidade de Vida Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/jeans2.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Qualidade de Vida em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a961] to-[#b89851]">
                Destaque
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Morar em Serra significa ter à disposição uma infraestrutura que poucas cidades oferecem. O município se
              destaca pelos investimentos maciços em mobilidade, saneamento, saúde e educação, sendo reconhecido como o{" "}
              <span className="text-[#c9a961] font-bold">6º no Brasil que mais investe em obras</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                img: "/shopping-mall-interior-modern.jpeg",
                title: "Comércio Completo",
                desc: "Shoppings e centros comerciais de alto padrão",
                delay: "stagger-1",
              },
              {
                img: "/hospital-estadual-jayme-santos-neves.jpg",
                title: "Saúde & Educação",
                desc: "Hospitais e escolas de referência no estado",
                delay: "stagger-2",
              },
              {
                img: "/mobilidade-urbana-aerial-night.jpg",
                title: "Mobilidade Urbana",
                desc: "Acesso às principais vias da Grande Vitória",
                delay: "stagger-3",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`fade-in-section ${item.delay} relative h-[380px] rounded-2xl overflow-hidden border border-[#c9a961]/30 group hover:border-[#c9a961]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c9a961]/20`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-lg text-white/90 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="fade-in-section text-center">
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              As praias de <span className="text-[#c9a961] font-semibold">Manguinhos</span> e{" "}
              <span className="text-[#c9a961] font-semibold">Jacaraípe</span> oferecem um refúgio perfeito para relaxar,
              enquanto os polos gastronômicos garantem lazer e conveniência. É a união perfeita entre a tranquilidade de
              uma cidade litorânea e as facilidades de um grande centro urbano.
            </p>
          </div>
        </div>
      </section>

      {/* Mercado Imobiliário Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/modern-building-exterior-blue-sky.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Um Mercado Imobiliário em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a961] to-[#b89851]">
                Plena Expansão
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              O potencial de valorização do município de Serra é inegável. A cidade lidera os lançamentos imobiliários
              na Grande Vitória, com mais de <span className="text-[#c9a961] font-bold">40% do total</span>, e apresenta
              uma taxa de vendas que comprovam a alta demanda:{" "}
              <span className="text-[#c9a961] font-bold">65% dos imóveis novos</span> são vendidos rapidamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "40%", label: "Lançamentos da Grande Vitória", delay: "stagger-1" },
              { number: "65%", label: "Taxa de Vendas Imediatas", delay: "stagger-2" },
              { number: "42%", label: "Valorização em 3 Anos", delay: "stagger-3" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`fade-in-section ${stat.delay} bg-gradient-to-br from-neutral-900/80 to-black/80 backdrop-blur-lg p-8 rounded-2xl border border-[#c9a961]/30 hover:border-[#c9a961] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c9a961]/20 text-center`}
              >
                <p className="text-6xl md:text-7xl font-bold text-[#c9a961] mb-4">{stat.number}</p>
                <p className="text-white/80 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="fade-in-section">
            <p className="text-xl text-white/90 text-center leading-relaxed">
              Bairros como <span className="text-[#c9a961] font-semibold">Morada de Laranjeiras</span>,{" "}
              <span className="text-[#c9a961] font-semibold">Laranjeiras</span> e{" "}
              <span className="text-[#c9a961] font-semibold">Manguinhos</span> se tornaram verdadeiros polos de
              investimento, atraindo empreendimentos modernos e sofisticados.
            </p>
          </div>
        </div>
      </section>

      {/* Por que Investir Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/ripado-degrade.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Por que Investir em Serra{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a961] to-[#b89851]">Agora?</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Valorização Comprovada",
                description: "Retorno médio de 42% nos últimos três anos",
                delay: "stagger-1",
              },
              {
                icon: Users,
                title: "Alta Demanda",
                description: "Crescimento populacional e econômico contínuo",
                delay: "stagger-2",
              },
              {
                icon: Building2,
                title: "Infraestrutura de Ponta",
                description: "Investimentos que melhoram a vida e valorizam os imóveis",
                delay: "stagger-3",
              },
              {
                icon: DollarSign,
                title: "Custo-Benefício",
                description: "Preços competitivos em comparação com outras cidades da Grande Vitória",
                delay: "stagger-4",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`fade-in-section ${benefit.delay} group bg-gradient-to-br from-neutral-900 to-black p-8 rounded-2xl border border-[#c9a961]/30 hover:border-[#c9a961]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c9a961]/20`}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a961] to-[#b89851] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-white/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center fade-in-section">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
              Seja para construir um futuro para sua família ou para diversificar seu portfólio de investimentos, Serra
              oferece um cenário sólido e promissor.{" "}
              <span className="text-[#c9a961] font-bold">O momento de aproveitar essa onda de crescimento é agora.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Dados da Cidade Section */}
      <section className="relative py-24 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,97,0.08),transparent_60%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Serra em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a961] to-[#b89851]">Números</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: "Maior PIB do Estado",
                description: "Líder econômico do Espírito Santo",
                delay: "stagger-1",
              },
              {
                icon: Users,
                title: "Município Mais Populoso",
                description: "Da Grande Vitória",
                delay: "stagger-2",
              },
              {
                icon: Factory,
                title: "Grandes Polos Industriais",
                description: "Como Civit e Tims",
                delay: "stagger-3",
              },
              {
                icon: MapPin,
                title: "Investimentos em Mobilidade",
                description: "Integração com modais portuários e ferroviários",
                delay: "stagger-4",
              },
              {
                icon: TreePine,
                title: "Belezas Naturais",
                description: "Praias e áreas verdes que encantam",
                delay: "stagger-1",
              },
              {
                icon: FileText,
                title: "Plano Diretor Atualizado",
                description: "Incentiva empreendimentos verticais",
                delay: "stagger-2",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`fade-in-section ${item.delay} bg-gradient-to-br from-neutral-900/90 to-black/90 backdrop-blur-sm p-6 rounded-2xl border border-[#c9a961]/20 hover:border-[#c9a961]/60 transition-all duration-500 group hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#c9a961]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a961]/30 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-[#c9a961]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/cortina-foto2.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-section">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Pronto para Investir no Seu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a961] to-[#b89851]">Futuro?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Conheça nossos empreendimentos em Serra e descubra como transformar seus sonhos em realidade.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/contatos">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#c9a961] to-[#b89851] text-black hover:from-[#b89851] hover:to-[#a67c3c] px-10 py-7 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl hover:shadow-[#c9a961]/50 relative overflow-hidden group"
                >
                  <span className="relative z-10">Fale Conosco</span>
                  <div className="absolute inset-0 shimmer" />
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#c9a961] text-white hover:bg-[#c9a961] hover:text-black px-10 py-7 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm"
                >
                  Ver Empreendimentos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatButton />
    </main>
  )
}
