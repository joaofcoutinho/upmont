"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building2, Users, Sparkles, Heart } from "lucide-react"
import { useEffect, useRef } from "react"

/** Separador fino dourado entre seções — substitui gradientes pesados */
function Divider() {
  return (
    <div
      aria-hidden
      className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a961]/25 to-transparent"
    />
  )
}

export default function QuemSomosPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Cria o observer uma única vez; unobserve após animação = sem vazamento
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" },
    )
    observerRef.current = observer
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-[#0d0d0d] font-sans overflow-x-hidden">
      <Header />
      {/* Espaçador para compensar o header absolute (top row + nav row) */}
      <div className="h-[116px] lg:h-[120px]" />

      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.65s ease-out, transform 0.65s ease-out;
        }
        .reveal.animate-in        { opacity: 1; transform: translateY(0); }
        .reveal-d1 { transition-delay: 0.10s; }
        .reveal-d2 { transition-delay: 0.20s; }
        .reveal-d3 { transition-delay: 0.30s; }
        .reveal-d4 { transition-delay: 0.40s; }
      `}</style>

      {/* ── Introdução ──────────────────────────────────── */}
      <section className="bg-[#0d0d0d]">
        {/* Mobile-first: flex-col; Desktop: grid 2 cols */}
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          {/* Texto — sempre primeiro no DOM */}
          <div className="flex items-center px-5 md:px-12 lg:px-16 py-14 lg:py-24 order-1 reveal">
            <div className="w-full max-w-lg space-y-5">
              <p className="text-[#c9a961] text-[10px] tracking-[0.35em] uppercase font-medium">
                Introdução
              </p>
              <div className="w-10 h-px bg-[#c9a961]/50" />
              <p className="text-white text-xl md:text-2xl leading-snug font-light">
                Existe uma forma de morar que o mercado separou em duas: a liberdade de quem vive em
                casa e os privilégios de quem vive no alto.
              </p>
              <p className="text-white/65 text-sm md:text-base leading-relaxed font-light">
                Como se fossem incompatíveis. Como se subir exigisse perder. Esta apresentação é sobre
                o que acontece quando alguém se recusa a aceitar essa separação. Quando um arquiteto
                que passou 25 anos desenhando casas decide levar tudo que faz uma casa ser casa — para
                cima.
              </p>
            </div>
          </div>

          {/* Foto — abaixo no mobile, à direita no desktop */}
          <div className="relative order-2 h-64 sm:h-80 lg:h-auto lg:min-h-[460px]">
            <img src="/familia.jpg" alt="Família" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent hidden lg:block" />
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Origem ──────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/casal-piscina.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/25 to-transparent" />
        </div>

        <div className="container mx-auto px-5 md:px-8 flex justify-end">
          <div className="w-full max-w-md reveal">
            <p className="text-[#c9a961] text-[10px] tracking-[0.35em] uppercase font-medium mb-4">
              Origem
            </p>
            <div className="w-10 h-px bg-[#c9a961]/50 mb-8" />
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-light mb-6">
              Todo produto extraordinário nasce de uma convicção. De alguém que olhou para o que
              existia, entendeu o que faltava e decidiu construir diferente.
            </p>
            <p className="text-white text-xl md:text-2xl leading-snug font-light">
              Antes do empreendimento, existe a história de quem o imaginou.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Quem Somos ──────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/quem-somos.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
        </div>

        <div className="container mx-auto px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center reveal">
            <p className="text-[#c9a961] text-[10px] tracking-[0.35em] uppercase font-medium mb-4">
              Incorporadora
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-snug">
              Quem Somos
            </h1>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-6" />
            <p className="text-base md:text-lg font-semibold text-white mb-6 leading-snug">
              O produto começa em quem vai morar
            </p>
            <div className="space-y-4 text-sm md:text-base text-white/70 leading-relaxed font-light text-left md:text-center">
              <p>
                A UpMont é uma incorporadora que nasceu com uma premissa incomum no mercado: o produto
                começa em quem vai morar. Não na viabilidade, não no terreno, não na planilha. Na vida
                real das famílias.
              </p>
              <p>
                Com mais de duas décadas de experiência em projetos residenciais de alto padrão no
                Espírito Santo, corpo técnico consolidado e parceiros construtivos de referência, a
                UpMont reúne a sensibilidade de quem entende de moradia com a estrutura de quem sabe
                entregar.
              </p>
              <p>
                A Serra é uma das regiões que mais crescem no estado. Tem público, tem demanda e tem
                famílias que já conquistaram o direito de morar à altura do que construíram na vida. A
                UpMont existe para entregar exatamente isso: com a coragem de ser a primeira.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Manifesto ───────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/cortina-foto2.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="container mx-auto px-5 md:px-8">
          <div className="max-w-2xl reveal">
            <p className="text-[#c9a961] text-[10px] tracking-[0.35em] uppercase font-medium mb-4">
              Manifesto
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-snug">
              UpMont
            </h2>
            <div className="w-10 h-px bg-[#c9a961]/50 mb-8" />
            <div className="space-y-4 text-sm md:text-base font-light leading-relaxed">
              <p className="text-white text-lg md:text-xl leading-snug font-semibold">
                A UpMont é um movimento ascendente.
              </p>
              <p className="text-[#c9a961]">
                Um convite à elevação — de padrões, de propósito, de vida.
              </p>
              <p className="text-white/70">
                Representa o despertar para a escalada ao ponto mais alto: o cume, a plenitude. É
                conexão com o céu, com o que é sublime, com as coisas do alto, com Deus o criador.
              </p>
              <p className="text-white/70">
                Mais do que um nome, é um estilo de vida. Um impulso que nasce da coragem de realizar,
                de ir além, de transformar o impossível em conquista.
              </p>
              <p className="text-white/70">
                A UpMont é para aqueles que não se satisfazem com o comum, que buscam o ideal, o topo
                da montanha. Para os que enxergam na subida um propósito, e no ápice, a recompensa da
                jornada.
              </p>
              <p className="text-[#c9a961] text-base md:text-lg pt-4 border-t border-[#c9a961]/20">
                UpMont — eleve seu padrão de viver.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Assinatura / Henrique Gasparini ─────────────── */}
      <section className="relative py-20 bg-[#0d0d0d]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#c9a961 1px,transparent 1px),linear-gradient(90deg,#c9a961 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 container mx-auto px-5 md:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Cabeçalho */}
            <div className="mb-10 reveal">
              <p className="text-[#c9a961] text-[10px] tracking-[0.35em] uppercase font-medium mb-3">
                Assinatura
              </p>
              <p className="text-white/55 text-sm font-light mb-1">
                Conceito e projetos com o selo de qualidade de
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c9a961] to-[#b89851]">
                Henrique Gasparini
              </h2>
              <div className="w-10 h-px bg-[#c9a961]/50 mt-4" />
            </div>

            {/* Split texto + foto */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-start mb-12">
              <div className="reveal order-1 space-y-4">
                {[
                  "Henrique Gasparini é um arquiteto visionário com mais de vinte e cinco anos de experiência na criação de espaços que transcendem o conceito tradicional de moradia. Sua abordagem única combina precisão técnica com profunda sensibilidade humana.",
                  "Henrique desenvolveu uma metodologia exclusiva que coloca as pessoas no centro do processo criativo, resultando em espaços que não apenas impressionam visualmente, mas também abraçam e elevam a experiência de vida de seus moradores.",
                  "Principal referência em arquitetura residencial Premium de Serra, com atuação marcante em todo Estado, acumulando diversas premiações municipais e estaduais, Henrique Gasparini traz toda sua expertise e visão inovadora para o mercado vertical, criando um novo conceito de morar bem, agora nas alturas, nascendo os \"VertHouses\".",
                  "Sua assinatura é sinônimo de qualidade, sofisticação e credibilidade, valores que agora são transferidos para a UPMONT Incorporadora, nos VertHouses e nos UP Studios.",
                ].map((text, i) => (
                  <p key={i} className="text-sm md:text-base text-white/70 leading-relaxed font-light">
                    {text}
                  </p>
                ))}
              </div>

              <div className="reveal order-2 relative rounded-xl overflow-hidden border border-[#c9a961]/15 h-64 sm:h-80 lg:h-[420px]">
                <img src="/henrique-sozinho.jpeg" alt="Henrique Gasparini" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Texto complementar + citação */}
            <div className="reveal space-y-5">
              <p className="text-sm md:text-base text-white/65 leading-relaxed font-light max-w-3xl">
                A UPMONT nasce no momento perfeito, combinando a experiência consolidada em casas de
                luxo, credibilidade estabelecida por meio de vasto portfólio com mais de 1000 projetos
                desenvolvidos entre Boulevard Lagoa, Alphaville Jacuhy, Arquipélago de Manguinhos e
                demais, e o mercado aquecido e promissor de Serra.
              </p>
              <blockquote className="border-l-2 border-[#c9a961]/35 pl-5 space-y-3">
                <p className="text-sm md:text-base text-white/75 leading-relaxed font-light italic">
                  "Nas últimas décadas, com a H Arquitetura, contribuí para que o município de Serra se
                  tornasse referência em casas de Alto Padrão para todo Estado do ES. Agora com a UPMONT
                  Incorporadora, vamos avançar nessa transição para a Verticalização, no mesmo nível de
                  qualidade e inovação. Serra está pronta e anseia por esse movimento, nós merecemos essa
                  revolução dos VertHouses! Vamos juntos !!!!"
                </p>
                <p className="text-[#c9a961] text-sm font-light">— Henrique Gasparini</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Nossos Valores ──────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/jeans2.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="container mx-auto px-5 md:px-8">
          <div className="text-center mb-10 reveal">
            <p className="text-[#c9a961] text-[10px] tracking-[0.35em] uppercase font-medium mb-3">
              Princípios
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">Nossos Valores</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent mx-auto mb-4" />
            <p className="text-sm text-white/55 max-w-md mx-auto leading-relaxed font-light">
              Princípios que guiam cada decisão e projeto que desenvolvemos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Qualidade",
                description:
                  "Qualidade máxima do início ao fim: da seleção do terreno e projeto qualificado à obra impecável e entrega da unidade, garantindo a melhor experiência para o cliente.",
              },
              {
                icon: Users,
                title: "Parceria",
                description:
                  "Construindo relacionamentos duradouros com clientes, fornecedores, investidores e colaboradores.",
              },
              {
                icon: Sparkles,
                title: "Pioneirismo",
                description:
                  "Sempre à frente das tendências e tecnologias construtivas e digitais, que valorizam os imóveis e deixam um legado de excelência.",
              },
              {
                icon: Heart,
                title: "Fé",
                description:
                  "Honrando ao Criador que tem nos dado vida e esperança, dedicando sempre a Ele tudo que fazemos, em gratidão e obediência à Sua Palavra.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className={`reveal reveal-d${i + 1} group p-5 rounded-xl border border-[#c9a961]/15 bg-white/[0.03] hover:border-[#c9a961]/35 transition-all duration-300 hover:-translate-y-0.5`}
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c9a961] to-[#b89851] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <v.icon className="w-4 h-4 text-black" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2 tracking-wide">{v.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed font-light">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Palavra de Confirmação ──────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/jeans2.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-5 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-start">
              {/* Foto — abaixo no mobile, esquerda no desktop */}
              <div className="reveal order-2 lg:order-1 relative rounded-xl overflow-hidden border border-[#c9a961]/15 h-72 sm:h-96 lg:h-[540px]">
                <img src="/henrique-esposa.jpeg" alt="Henrique Gasparini e Esposa" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Texto */}
              <div className="reveal order-1 lg:order-2 space-y-5">
                <p className="text-[#c9a961] text-[10px] tracking-[0.35em] uppercase font-medium">
                  Palavra de Confirmação
                </p>
                <div className="w-10 h-px bg-[#c9a961]/50" />

                <blockquote className="border border-[#c9a961]/15 rounded-xl p-5 md:p-6 bg-white/[0.03] space-y-3">
                  <p className="text-sm md:text-base text-white/75 leading-relaxed font-light italic">
                    "Nos últimos dias acontecerá que o monte da casa do Senhor será estabelecido no cume
                    dos montes, e se Elevará sobre os outeiros, e para ele se afluirão todos os povos.
                    Irão muitas nações e dirão: Vinde, e subamos ao monte do Senhor, e à casa do Deus de
                    Jacó, para que nos ensine os seus caminhos, e andemos pelas suas veredas, porque de
                    Sião sairá a lei, e a palavra do Senhor de Jerusalém."
                  </p>
                  <p className="text-[#c9a961] text-sm font-light text-right">— Isaías 2:2-3</p>
                </blockquote>

                {[
                  <>
                    Essa foi a Palavra que o Senhor trouxe como confirmação dessa missão, enquanto
                    orávamos pelos empreendimentos, e não tivemos dúvida de que esse propósito não era
                    nosso, que já havia nascido no coração de Deus, e o nome foi confirmado e
                    estabelecido: <span className="text-[#c9a961]">UPMONT</span>.
                  </>,
                  <>
                    É um comando de Deus ao qual buscamos obedecer todos os dias, elevando nossos
                    corações, pensamentos, atitudes, sempre olhando para o alto, subindo a montanha do
                    Senhor, descalçando os pés e nos derramando em sua presença.
                  </>,
                  <>
                    Esse é o convite, vinde e subamos ao monte do Senhor e à casa do Deus de Jacó.{" "}
                    <span className="text-[#c9a961]">Vamos juntos !!!!</span>
                  </>,
                ].map((text, i) => (
                  <p key={i} className="text-sm md:text-base text-white/65 leading-relaxed font-light">
                    {text}
                  </p>
                ))}

                <div className="pt-4 border-t border-[#c9a961]/20">
                  <p className="text-sm text-[#c9a961] font-light leading-relaxed text-center">
                    A UPMONT e todos os seus empreendimentos pertencem ao Senhor Jesus e por Ele são
                    abençoados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
