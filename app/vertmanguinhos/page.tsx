"use client"

import { Button } from "@/components/ui/button"
import {
  Home, Car, MapPin, Building2, Sparkles, Wind, ChefHat,
  Armchair, Zap, Package, Lock, Bike, Sun, Droplet, PawPrint, CheckCircle2, ArrowRight
} from "lucide-react"
import { FloorPlanCarousel, floorPlans } from "@/components/floor-plan-carousel"
import { InteriorCarousel } from "@/components/interior-carousel"
import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const B = "/vertmanguinhos-novo/Imagens%20VertManguinhos"

function VideoSection() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center gap-8 overflow-hidden">
      <img src="/vertmanguinhos-novo/Imagens%20VertManguinhos/image%20287.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/40" />
      {/* Copy */}
      {!playing && (
        <div className="relative z-10 text-center">
          <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-semibold mb-3">Vídeo</p>
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-4 leading-tight">
            Veja o Vert Manguinhos<br />com seus próprios olhos.
          </h2>
          <p className="text-white/60 text-sm font-light">Clique no play e descubra cada detalhe deste empreendimento único.</p>
        </div>
      )}

      {/* Botão + Player */}
      <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 lg:px-20">
        {!playing ? (
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={handlePlay}
          >
            <div className="w-24 h-24 rounded-full bg-[#6B6054] flex items-center justify-center hover:bg-[#6B6054]/85 shadow-xl shadow-[#6B6054]/30 transition-all duration-300">
              <svg className="w-10 h-10 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        ) : (
          <div className="relative rounded-[2rem] overflow-hidden w-full aspect-video shadow-2xl">
            <video
              ref={videoRef}
              src="/vertmanguinhos-novo/video.mp4"
              className="w-full h-full object-cover"
              onEnded={() => setPlaying(false)}
              autoPlay
              playsInline
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default function VertManguinhosNovoPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [currentFloorPlanIndex, setCurrentFloorPlanIndex] = useState(0)
  const [selectedAmenity, setSelectedAmenity] = useState(0)
  const currentFloorPlan = floorPlans[currentFloorPlanIndex]

  const whatsapp = "https://wa.me/5527992970152?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Vert%20Manguinhos."

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-in") }),
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    )
    document.querySelectorAll(".fi").forEach((el) => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <style jsx global>{`
        @media (max-width: 768px) { .fi { opacity:1!important; transform:none!important; } }
        @media (min-width: 769px) {
          .fi { opacity:0; transform:translateY(24px);
            transition: opacity .8s cubic-bezier(.4,0,.2,1), transform .8s cubic-bezier(.4,0,.2,1); }
          .fi.animate-in { opacity:1; transform:none; }
        }
        .d1{transition-delay:.1s} .d2{transition-delay:.2s} .d3{transition-delay:.3s}
        .d4{transition-delay:.4s} .d5{transition-delay:.5s} .d6{transition-delay:.6s}
        :root { --header-height: 116px; }
        @keyframes shimmer{0%{background-position:-1000px 0}100%{background-position:1000px 0}}
        .shimmer{background:linear-gradient(90deg,transparent 0%,rgba(201,169,97,.18) 50%,transparent 100%);
          background-size:1000px 100%;animation:shimmer 3s infinite}
        .hide-scroll{-ms-overflow-style:none;scrollbar-width:none}
        .hide-scroll::-webkit-scrollbar{display:none}

        /* ── Fundos texturizados ── */

        /* Pontos dourados sutis */
        .s-dots {
          background-color: #ffffff;
          background-image: radial-gradient(circle, rgba(201,169,97,0.13) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        /* Linhas diagonais editoriais */
        .s-lines {
          background-color: #f9f7f4;
          background-image:
            repeating-linear-gradient(-55deg, transparent, transparent 52px, rgba(201,169,97,0.055) 52px, rgba(201,169,97,0.055) 53px);
        }
        /* Gradiente quente cream */
        .s-warm {
          background: linear-gradient(150deg, #fefaf2 0%, #ffffff 45%, #faf5ec 100%);
        }
        /* Brilho dourado radial nos cantos */
        .s-glow {
          background-color: #f9f7f4;
          background-image:
            radial-gradient(ellipse at 8% 20%, rgba(201,169,97,0.11) 0%, transparent 55%),
            radial-gradient(ellipse at 92% 80%, rgba(201,169,97,0.08) 0%, transparent 50%);
        }
        /* Gradiente quente com linhas */
        .s-warmlines {
          background-color: #fdf9f3;
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,169,97,0.04) 60px, rgba(201,169,97,0.04) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,169,97,0.03) 60px, rgba(201,169,97,0.03) 61px);
        }

        /* Marca d'água decorativa */
        .watermark::after {
          content: attr(data-wm);
          position: absolute;
          font-family: 'Saira', sans-serif;
          font-weight: 100;
          font-size: clamp(80px, 12vw, 180px);
          color: rgba(201,169,97,0.05);
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.02em;
          white-space: nowrap;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
        }

        /* Divisor ornamental */
        .ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          opacity: 0.5;
        }
        .ornament::before, .ornament::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,169,97,0.5), transparent);
        }

        /* ── Hero entrance animations ── */
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .hero-bg    { animation: heroFadeIn  1.2s ease forwards; }
        .hero-logo  { opacity: 0; animation: heroFadeUp 0.9s cubic-bezier(.4,0,.2,1) 0.3s forwards; }
        .hero-line  { opacity: 0; animation: heroFadeUp 0.7s cubic-bezier(.4,0,.2,1) 0.9s forwards; }
        .hero-text  { opacity: 0; animation: heroFadeUp 0.7s cubic-bezier(.4,0,.2,1) 1.2s forwards; }
        .hero-tags  { opacity: 0; animation: heroFadeUp 0.7s cubic-bezier(.4,0,.2,1) 1.5s forwards; }
        .hero-cta   { opacity: 0; animation: heroFadeUp 0.7s cubic-bezier(.4,0,.2,1) 1.8s forwards; }
        .hero-badge { opacity: 0; animation: heroFadeIn 0.6s ease 2.1s forwards; }
        .hero-title { text-shadow: 0 2px 24px rgba(255,255,255,0.55), 0 1px 4px rgba(255,255,255,0.35); }
      `}</style>

      {/* Spacer para compensar o header absolute */}
      {/* ══════════════════════════════════════
          1. HERO — full screen estilo editorial
      ══════════════════════════════════════ */}
      <section className="relative h-screen min-h-screen flex flex-col overflow-hidden">
        {/* Fundo full-screen */}
        <img
          src="/vertmanguinhos-novo/fundo-hero.jpeg"
          alt="Vert Manguinhos"
          className="hero-bg absolute inset-0 w-full h-full object-cover object-right"
        />
        {/* Overlay gradiente esquerda → transparente para dar contraste ao texto */}
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.5) 28%, rgba(255,255,255,0.1) 42%, transparent 52%)' }} />
        {/* Conteúdo central */}
        <div className="relative z-10 flex-1 flex items-center px-8 md:px-16 lg:px-24 pt-16">
          <div className="hero-text flex flex-col leading-none gap-0 max-w-xl">
            <img
              src="/_6A6054.png"
              alt="Vert Manguinhos"
              className="w-auto h-36 md:h-48 lg:h-56 object-contain object-left mb-8 self-start drop-shadow-md"
            />
            <span className="hero-title text-[#6B6054] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight uppercase leading-[1.05]">UM</span>
            <span className="hero-title text-[#6B6054] text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight uppercase leading-[1.05]">REFÚGIO</span>
            <span className="hero-title text-[#6B6054] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight uppercase leading-[1.05]">NA SUA</span>
            <span className="hero-title text-[#6B6054] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight uppercase leading-[1.05]">CASA</span>
            <div className="hero-cta mt-10">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#6B6054] text-white text-xs md:text-sm font-semibold tracking-[0.25em] uppercase rounded-full px-10 py-5 hover:bg-[#6B6054]/85 shadow-lg shadow-[#6B6054]/30 transition-all duration-300 text-center">
                  GARANTA SUA UNIDADE
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* CTA de vídeo — rodapé do hero */}
        <div className="hero-cta relative z-10 flex items-center justify-center gap-4 pb-10">
          <div className="w-px h-8 bg-[#6B6054]/40" />
          <a href="/vertmanguinhos-novo/video.mp4" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 text-[#6B6054] hover:gap-4 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-full border border-[#6B6054]/60 flex items-center justify-center group-hover:bg-[#6B6054]/10 transition-all duration-300">
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <span className="text-xs font-light tracking-[0.2em] uppercase">Assista ao vídeo e conheça o Vert</span>
          </a>
          <div className="w-px h-8 bg-[#6B6054]/40" />
        </div>
      </section>

      {/* Faixa de números entre hero e conceito */}
      <section className="border-y border-[#6A6054]/15 py-12" style={{backgroundColor: '#6B6054'}}>
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { num: "36", unit: "unidades exclusivas" },
              { num: "16", unit: "andares de altitude" },
              { num: "190", unit: "m² área máxima" },
              { num: "25+", unit: "anos de arquitetura" },
            ].map((s, i) => (
              <div key={i} className={`fi d${i+1} text-center`}>
                <div className="text-4xl md:text-5xl font-thin text-white mb-1">{s.num}</div>
                <div className="text-white/80 text-xs font-light tracking-wide uppercase">{s.unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. CONCEITO — Texto + foto
      ══════════════════════════════════════ */}
      <section className="s-warm relative overflow-hidden py-24 md:py-32 watermark" data-wm="Vert">
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="fi">
              <span className="text-[#6A6054] text-[10px] uppercase tracking-[0.3em] font-semibold mb-6 block">O Conceito</span>
              <h2 className="text-4xl md:text-5xl font-thin text-[#1a1a14] leading-tight mb-8">
                Um endereço que valoriza sua escolha
              </h2>
              <div className="w-12 h-0.5 bg-[#6A6054] mb-8" />
              <p className="text-[#6A6054] text-base leading-relaxed mb-8">
                Localizado em uma das regiões mais estratégicas de Manguinhos, o Vert conecta mobilidade, serviços, lazer e qualidade de vida em um só lugar.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-3">
                {[
                  { name: "Restaurante Varanda", dist: "40m" },
                  { name: "Bistrô do Mar", dist: "60m" },
                  { name: "FarmaBem", dist: "100m" },
                  { name: "Spa Relax", dist: "120m" },
                  { name: "Pet Mania", dist: "250m" },
                  { name: "Supermercado BomPreço", dist: "260m" },
                  { name: "Shopping Itaparica", dist: "300m" },
                  { name: "Igreja Matriz", dist: "400m" },
                  { name: "Lanchonete Tropical", dist: "400m" },
                  { name: "Praia Secreta", dist: "500m" },
                  { name: "Open Mall", dist: "900m" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 py-1.5 border-b border-[#6A6054]/10">
                    <span className="text-[#1a1a14] text-xs font-light">{item.name}</span>
                    <span className="text-[#6A6054] text-xs font-semibold tracking-wide flex-shrink-0">{item.dist}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#6A6054] text-[10px] italic mb-8">*Lojas, restaurantes e serviços</p>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#6A6054] font-medium text-sm hover:gap-4 transition-all duration-300">
                Conhecer o empreendimento <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="fi d2 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img src={`${B}/dfdsf.jpg`} alt="Conceito Vert Manguinhos"
                  className="w-full h-full object-cover object-[center_30%]" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                <p className="text-[#1a1a14] font-medium text-sm mb-1">Manguinhos, Serra — ES</p>
                <p className="text-[#6A6054] text-xs">A metros do mar</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          VÍDEO
      ══════════════════════════════════════ */}
      <VideoSection />

      {/* ══════════════════════════════════════
          4 + 5. STATEMENT + UPMONT — seções fusionadas
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* ── Statement ── */}
        <div className="relative min-h-[80vh] flex items-center">
          <img src={`${B}/Frame%201321315599.jpg`} alt="Vert Manguinhos"
            className="absolute inset-0 w-full h-full object-cover object-center" />

          <div className="relative z-20 container mx-auto px-8 md:px-16 flex justify-end pb-24">
            <div className="fi max-w-2xl text-right">
              <img
                src="/_6A6054.png"
                alt="Vert Manguinhos"
                className="w-auto h-24 md:h-32 object-contain object-right mb-8 ml-auto brightness-0 invert"
              />
              <h2 className="text-5xl md:text-7xl font-thin text-white leading-[1.05] tracking-tight">
                Amplo por dentro.<br />
                Elevado por fora.<br />
                Livre por inteiro.
              </h2>
              <div className="mt-10 flex justify-end">
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-[#1a1a14] hover:bg-[#6A6054] hover:text-white px-8 h-12 text-sm font-semibold rounded-full transition-all duration-300">
                    Quero saber mais
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* divisor */}
      <div className="ornament py-2 px-16 bg-white">
        <div className="w-2 h-2 rounded-full border border-[#6A6054]/50" />
      </div>

      {/* ══════════════════════════════════════
          6. GALERIA DE ESPAÇOS
      ══════════════════════════════════════ */}
      <section className="s-warm py-24">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-14 fi">
            <span className="text-[#6A6054] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 block">Espaços</span>
            <h2 className="text-4xl md:text-5xl font-thin text-[#1a1a14] mb-3">Conheça cada ambiente</h2>
            <div className="w-12 h-0.5 bg-[#6A6054] mx-auto mt-6" />
            <p className="text-[#6A6054] mt-6 font-light max-w-xl mx-auto text-sm">Ambientes projetados para proporcionar conforto, lazer e bem-estar para toda a família</p>
          </div>

          {/* Linha 1 — altura fixa compartilhada */}
          <div className="grid grid-cols-12 gap-3 mb-3" style={{height: '480px'}}>
            <div className="col-span-12 md:col-span-7 group relative overflow-hidden rounded-2xl fi h-64 md:h-auto">
              <img src={`${B}/Rectangle%208568.jpg`} alt="Piscina rooftop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <p className="text-[#6A6054] text-[10px] uppercase tracking-widest mb-1">Cobertura</p>
                <h3 className="text-white font-light text-xl">Piscina Rooftop com Vista para o Mar</h3>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 group relative overflow-hidden rounded-2xl fi h-64 md:h-auto">
              <img src={`${B}/dfsdf.jpg`} alt="Área gourmet social"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <p className="text-[#6A6054] text-[10px] uppercase tracking-widest mb-1">Social</p>
                <h3 className="text-white font-light text-xl">Área Gourmet</h3>
              </div>
            </div>
          </div>

          {/* Linha 2 — altura fixa compartilhada */}
          <div className="grid grid-cols-12 gap-3 mb-3" style={{height: '380px'}}>
            <div className="col-span-12 md:col-span-4 group relative overflow-hidden rounded-2xl fi h-52 md:h-auto">
              <img src="/academia-vistamar.jpeg" alt="Academia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="text-white font-light text-lg">Academia com Vista</h3>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 group relative overflow-hidden rounded-2xl fi h-52 md:h-auto">
              <img src={`${B}/sd.jpg`} alt="Piscina kids"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="text-white font-light text-lg">Para as Crianças</h3>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 group relative overflow-hidden rounded-2xl fi h-52 md:h-auto">
              <img src={`${B}/dfdsf.jpg`} alt="Família"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="text-white font-light text-lg">A 5 minutos do Mar</h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { img: "/vert-mezanino-01.png", label: "Sala de Jogos" },
              { img: "/vert-sala-reuniao.png", label: "Sala Executiva" },
              { img: "/vert-podcast.png", label: "Podcast Studio" },
              { img: "/vert-bicicletario.png", label: "Bicicletário" },
              { img: "/vert-espaco-beleza.png", label: "Espaço Beleza" },
              { img: "/vert-brinquedoteca-01.png", label: "Brinquedoteca" },
            ].map((item, i) => (
              <div key={i} className={`fi d${(i % 6) + 1} group relative overflow-hidden rounded-2xl aspect-square`}>
                <img src={item.img} alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                  <p className="text-white text-xs font-light">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#6A6054] text-xs font-light text-center mt-8 italic">*Projeto em desenvolvimento sujeito a alterações até aprovação final</p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          O QUE NOS MOVE
      ══════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{backgroundColor: '#86A6A6'}}>
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="text-center mb-16 fi">
            <span className="text-white/70 text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 block">Nossa Filosofia</span>
            <h2 className="text-4xl md:text-5xl font-thin text-white">
              O que nos move
            </h2>
            <div className="w-12 h-0.5 bg-white/50 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                word: "INTERPRETAR",
                sub: "A arquitetura começa no silêncio de quem ouve.",
                img: `${B}/Frame%201321315706.jpg`,
                desc: "Cada projeto nasce de uma escuta profunda. Entendemos quem vai morar antes de começar a desenhar."
              },
              {
                word: "VIABILIZAR",
                sub: "A coragem começa onde o mercado parou.",
                img: `${B}/Frame%201321315707.jpg`,
                desc: "Transformamos visão em realidade construtiva, com técnica, parceiros de referência e coragem de inovar."
              },
              {
                word: "PERPETUAR",
                sub: "O legado começa no que se constrói para ficar.",
                img: `${B}/image%20286.jpg`,
                desc: "Edificamos com materiais e métodos que resistem ao tempo, gerando valorização real para quem investe."
              },
            ].map((item, i) => (
              <div key={i} className={`fi d${i+1} group rounded-2xl overflow-hidden border border-white/20 hover:border-white/50 hover:shadow-xl transition-all duration-500`}>
                <div className="relative h-52 overflow-hidden">
                  <img src={item.img} alt={item.word}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="text-white font-light text-2xl tracking-widest">{item.word}</h3>
                  </div>
                </div>
                <div className="p-6" style={{backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)'}}>
                  <p className="text-white text-sm font-medium mb-3 italic">{item.sub}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. VERTHOMES — Features
      ══════════════════════════════════════ */}
      <section className="s-lines py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
            <div className="fi">
              <span className="text-[#6A6054] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 block">O Produto</span>
              <h2 className="text-4xl md:text-5xl font-thin text-[#1a1a14] leading-tight">
                A Revolução das VertHouses
              </h2>
              <div className="w-12 h-0.5 bg-[#6A6054] mt-6" />
            </div>
            <div className="fi d2 flex items-end">
              <p className="text-[#6A6054] text-base leading-relaxed">
                Um conceito exclusivo da UpMont: a experiência de morar em uma casa — privacidade, amplitude, identidade — com toda a infraestrutura de um condomínio de alto padrão.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Wind, title: "Ventilação Cruzada", desc: "Janelas inteligentes e todos os banheiros com ventilação natural" },
              { icon: ChefHat, title: "Cozinha com Ilha", desc: "Integrada à sala com ilha para maior amplitude e interação" },
              { icon: Armchair, title: "Salas Amplas", desc: "Mesa para 8 pessoas, sofá grande, poltronas — espaço de verdade" },
              { icon: Sparkles, title: "Varanda Gourmet", desc: "Com vistas panorâmicas, preparada para pia e churrasqueira elétrica" },
              { icon: Home, title: "Suíte Master Premium", desc: "Closet, 2 chuveiros, 2 pias, varanda própria, espaço para cama king" },
              { icon: MapPin, title: "Vistas Panorâmicas", desc: "Sem vizinhos ao lado. Mar e Mestre Álvaro como horizonte permanente" },
              { icon: Zap, title: "Carregamento Elétrico", desc: "Preparação para veículos elétricos em todas as unidades" },
              { icon: Building2, title: "Interiores Únicos", desc: "Projeto de interiores incluso com personalização total" },
              { icon: Car, title: "2 e 3 Vagas", desc: "Garagens cobertas com box locker privativo" },
              { icon: Sparkles, title: "Hidromassagem", desc: "Preparação para hidro ou ofurô na varanda da suíte master" },
              { icon: Home, title: "Unidades Gardens", desc: "Áreas descobertas preparadas para piscinas privativas e firepit" },
              { icon: Building2, title: "Box Locker", desc: "Ambientes privativos com portas nas garagens para todas as unidades" },
            ].map((f, i) => (
              <div key={i} className={`fi d${(i % 3) + 1} flex items-start gap-4 bg-white border border-gray-100 hover:border-[#6A6054]/40 hover:shadow-md rounded-2xl p-5 transition-all duration-300`}>
                <div className="w-10 h-10 rounded-xl bg-[#6A6054]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <f.icon className="w-5 h-5 text-[#6A6054]" />
                </div>
                <div>
                  <p className="text-[#1a1a14] text-sm font-medium mb-1">{f.title}</p>
                  <p className="text-[#6A6054] text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════
          10. INTERIOR — destaque
      ══════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Foto full-screen */}
        <img src={`${B}/image%20291.jpg`} alt="Interior de luxo"
          className="absolute inset-0 w-full h-full object-cover object-right" />
        {/* Overlay gradiente à esquerda */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        {/* Conteúdo à esquerda branco */}
        <div className="relative z-10 px-10 md:px-20 py-20 max-w-xl fi">
          <span className="text-[#6A6054] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 block">Personalização</span>
          <h2 className="text-4xl md:text-5xl font-thin text-white leading-tight mb-6">
            Interiores Personalizados.<br/>Cada unidade é única.
          </h2>
          <div className="w-12 h-0.5 bg-[#6A6054] mb-8" />
          <p className="text-white/70 text-base leading-relaxed mb-8">
            Incluso projeto de interiores completo com a equipe Henrique Gasparini Arquitetura. Customização total de revestimentos, pedras, louças, metais, iluminação e marcenaria — aproveitando a mão de obra da construção.
          </p>
          <div className="border-l-4 border-[#6A6054] pl-5">
            <p className="text-white font-light text-lg leading-relaxed">
              "No Vert Manguinhos, a sua casa suspensa tem a sua cara."
            </p>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          12. PLANTAS
      ══════════════════════════════════════ */}
      <section id="plantas" className="s-lines py-24">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="fi order-2 lg:order-1">
              <FloorPlanCarousel currentIndex={currentFloorPlanIndex} onIndexChange={setCurrentFloorPlanIndex} />
            </div>
            <div className="fi order-1 lg:order-2 space-y-8">
              <div>
                <span className="text-[#6A6054] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 block">Plantas</span>
                <h2 className="text-4xl md:text-5xl font-thin text-[#1a1a14] mb-4 leading-tight">
                  Plantas pensadas para você viver com estilo.
                </h2>
                <div className="w-12 h-0.5 bg-[#6A6054] mb-8" />
                <p className="text-[#6A6054] text-base leading-relaxed">
                  Apartamentos de 3 e 4 suítes com até 190m² — ambientes generosos, bem distribuídos e adaptáveis ao seu estilo de vida.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-[#1a1a14] font-light text-xl mb-2">{currentFloorPlan.title}</h3>
                    <p className="text-[#6A6054] text-sm font-light">{currentFloorPlan.bedrooms}</p>
                  </div>
                  <div className="bg-[#6A6054] text-white px-5 py-2.5 rounded-full font-medium text-lg">
                    {currentFloorPlan.area}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[#6A6054] text-xs uppercase tracking-widest mb-4 font-light">Selecione uma planta</p>
                <div className="flex gap-3 overflow-x-auto hide-scroll pb-2">
                  {floorPlans.map((plan, index) => (
                    <button key={plan.id} onClick={() => setCurrentFloorPlanIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${index === currentFloorPlanIndex ? "border-[#6A6054] scale-105" : "border-gray-200 hover:border-[#6A6054]/40"}`}>
                      <img src={plan.image || "/placeholder.svg"} alt={plan.title} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 transition-opacity duration-300 ${index === currentFloorPlanIndex ? "bg-[#6A6054]/15" : "bg-black/20"}`} />
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-[#6A6054] text-xs italic font-light">*Projeto em desenvolvimento sujeito a alterações até aprovação final.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          13. TIPOLOGIA
      ══════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${B}/image%20283.jpg`} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/30" />
        </div>
        <div className="container mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="fi">
              <span className="text-[#6A6054] text-[10px] uppercase tracking-[0.3em] font-semibold mb-6 block">Tipologia</span>
              <h2 className="text-5xl md:text-6xl font-thin text-white mb-3 leading-tight">
                3 e 4 Suítes
              </h2>
              <p className="text-[#6A6054] text-xl mb-8 font-light">160 a 190 m²</p>
              <div className="w-12 h-0.5 bg-[#6A6054]/60 mb-10" />
              <div className="space-y-5">
                {[
                  { label: "Térreo", desc: "15 lojas, áreas comuns e recreativas do condomínio" },
                  { label: "2º e 3º Pavimentos", desc: "Garagens cobertas e box lockers privativos" },
                  { label: "4º Pavimento", desc: "3 unidades Gardens com áreas descobertas e piscina privativa" },
                  { label: "5º ao 15º Pavimentos", desc: "3 unidades por andar — 11 de 3 suítes e 22 de 4 suítes" },
                  { label: "16º Pavimento", desc: "Cobertura com piscina aquecida, academia, área gourmet e sauna" },
                ].map((item, i) => (
                  <div key={i} className={`fi d${i + 1} flex items-start gap-3`}>
                    <CheckCircle2 className="w-4 h-4 text-[#6A6054] mt-0.5 flex-shrink-0" />
                    <p className="text-white/80 font-light text-sm leading-relaxed">
                      <span className="text-white font-medium">{item.label}: </span>{item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 fi d2">
              {[
                { num: "36", unit: "unidades residenciais" },
                { num: "16", unit: "andares de altitude" },
                { num: "190", unit: "m² área máxima" },
                { num: "15", unit: "lojas no térreo" },
              ].map((s, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-sm border border-white/50 rounded-2xl p-6 text-center hover:border-white/80 transition-colors duration-500">
                  <div className="text-5xl font-thin text-white mb-1">{s.num}</div>
                  <div className="text-white text-xs font-medium tracking-wide">{s.unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          14. INTERIORES 160m²
      ══════════════════════════════════════ */}
      <section className="s-warm py-20">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-12 fi">
            <span className="text-[#6A6054] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 block">Tour Virtual</span>
            <h2 className="text-4xl md:text-5xl font-thin text-[#1a1a14] mb-3">Interiores 160m² e 190m²</h2>
            <div className="w-12 h-0.5 bg-[#6A6054] mx-auto mt-6" />
          </div>
          <div className="fi"><InteriorCarousel /></div>
          <p className="text-[#6A6054] text-xs italic font-light text-center mt-8">*Imagens ilustrativas sujeitas a alterações conforme personalização</p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          14. AMENIDADES
      ══════════════════════════════════════ */}
      <section className="s-dots py-24">
        <div className="container mx-auto px-6 md:px-10 max-w-7xl">
          <div className="text-center mb-14 fi">
            <span className="text-[#6A6054] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 block">Comodidades</span>
            <h2 className="text-4xl md:text-5xl font-thin text-[#1a1a14] mb-3">Comodidades de Alto Padrão.</h2>
            <div className="w-12 h-0.5 bg-[#6A6054] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-12 fi">
            {[
              { icon: Package, title: "Minimercado", image: "/MINIMARKET.jpeg" },
              { icon: Package, title: "Delivery Box", image: "/delivery-box.jpeg" },
              { icon: Lock, title: "Box Locker", image: "/box-locker.jpeg" },
              { icon: Bike, title: "Bike Point", image: "/bike-point.jpeg" },
              { icon: Zap, title: "Elétrico", image: "/tomadas-eletricas.jpeg" },
              { icon: Sun, title: "Solar", image: "/aquecimento-solar.png" },
              { icon: Droplet, title: "Hidro", image: "/hidro-ofuro.jpeg" },
              { icon: PawPrint, title: "PetCare", image: "/pet-care.jpg" },
            ].map((a, i) => (
              <button key={i} onClick={() => setSelectedAmenity(i)}
                className={`group relative rounded-2xl p-4 transition-all duration-300 flex flex-col items-center gap-2 ${selectedAmenity === i ? "bg-[#6A6054] scale-105 shadow-xl shadow-[#6A6054]/30" : "bg-white border border-gray-100 hover:border-[#6A6054]/40 hover:shadow-md"}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedAmenity === i ? "bg-white/20" : "bg-[#6A6054]/10"}`}>
                  <a.icon className={`w-5 h-5 ${selectedAmenity === i ? "text-white" : "text-[#6A6054]"}`} />
                </div>
                <span className={`text-xs font-light text-center leading-tight ${selectedAmenity === i ? "text-white font-medium" : "text-[#6A6054]"}`}>{a.title}</span>
                {selectedAmenity === i && <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#6A6054]" />}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center fi bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="space-y-5 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-thin text-[#1a1a14] leading-tight">
                {["MINIMERCADO Autônomo","Delivery Box Refrigerado","Box Locker Privativo","Bike Point com Oficina","Carregamento Elétrico","Aquecimento Solar","Hidromassagem ou Ofurô","PetCare e LavaPatas"][selectedAmenity]}
              </h3>
              <div className="w-10 h-0.5 bg-[#6A6054]" />
              <p className="text-[#6A6054] text-base leading-relaxed">
                {["Compras rápidas sem sair do condomínio. Tecnologia autônoma 24h.","Encomendas seguras com sistema refrigerado para alimentos frescos.","Espaço privativo com porta nas garagens para guardar pertences.","Oficina completa e recarga para bicicletas elétricas no condomínio.","Estações de carregamento para veículos elétricos em todas as unidades.","Aquecimento solar central com medição individual — economia real.","Preparação para hidromassagem ou ofurô na varanda da suíte master.","Área dedicada ao seu pet: banho, cuidados e lava-patas."][selectedAmenity]}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden border border-gray-100 group">
                <img src={["/MINIMARKET.jpeg","/delivery-box.jpeg","/box-locker.jpeg","/bike-point.jpeg","/tomadas-eletricas.jpeg","/aquecimento-solar.png","/hidro-ofuro.jpeg","/pet-care.jpeg"][selectedAmenity] || "/placeholder.svg"} alt="Amenidade"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* divisor */}
      <div className="ornament py-2 px-16 s-warmlines">
        <div className="w-2 h-2 rounded-full border border-[#6A6054]/50" />
      </div>

      {/* ══════════════════════════════════════
          15. INTELIGÊNCIA CONSTRUTIVA
      ══════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        {/* fundo com foto + overlay */}
        <img src={`${B}/ewe.jpg`} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#2e2c27]/88" />
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'radial-gradient(circle, rgba(201,169,97,0.07) 1px, transparent 1px)', backgroundSize:'28px 28px'}} />
        <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse at 15% 50%, rgba(201,169,97,0.1) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(201,169,97,0.07) 0%, transparent 50%)'}} />

        <div className="container mx-auto px-6 md:px-10 max-w-6xl relative z-10">
          <div className="text-center mb-16 fi">
            <span className="text-[#6A6054] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 block">Tecnologia</span>
            <h2 className="text-4xl md:text-5xl font-thin text-white mb-3">Inteligência Construtiva</h2>
            <div className="w-12 h-0.5 bg-[#6A6054] mx-auto mt-6" />
            <p className="text-white/50 font-light mt-6 max-w-xl mx-auto">Segurança, sustentabilidade, precisão, durabilidade e facilidade de manutenção</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] rounded-2xl overflow-hidden border border-white/10">
            {[
              { title: "Estrutura e Construção", Icon: Building2, items: ["Concreto armado e laje protendida","Paredes internas em Drywall","Paredes externas em Steel Frame","Escadas de bombeiro metálicas","Fachada toda revestida"] },
              { title: "Segurança", Icon: Lock, items: ["Fechadura eletrônica nas unidades","Pulmão com duas portas","Sistema contra incêndio","Acesso por biometria facial","Guarita com portaria 24h"] },
              { title: "Sustentabilidade", Icon: Sun, items: ["Aquecimento solar central","Captação águas pluviais","Sistema de refrigeração VRV","Medição digital individual","Espaço para gerador"] },
              { title: "Tecnologia", Icon: Zap, items: ["Automação residencial","Wifi na área de lazer","Minimercado autônomo","Espaço delivery refrigerado"] },
              { title: "Mobilidade", Icon: Bike, items: ["Bike Point com oficina","Tomadas p/ bike elétrica","Box Lockers privativos"] },
              { title: "Conforto", Icon: Sparkles, items: ["PetCare e Lava Patas","Preparação hidromassagem","Prep. máquina lava-louças","Bancadas 70-80cm prof."] },
            ].map((cat, i) => (
              <div key={i} className={`fi d${(i % 3) + 1} bg-[#2e2c27] hover:bg-white/[0.05] transition-colors duration-300 p-8 group`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-[#6A6054]/20 border border-[#6A6054]/30 flex items-center justify-center flex-shrink-0">
                    <cat.Icon className="w-4 h-4 text-[#6A6054]" />
                  </div>
                  <h4 className="text-white text-sm font-medium tracking-wide">{cat.title}</h4>
                </div>
                <div className="space-y-3">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full border border-[#6A6054]/40 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6A6054]" />
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          16. CORPO TÉCNICO
      ══════════════════════════════════════ */}
      <section className="s-glow py-24">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16 fi">
            <div className="flex items-center justify-center gap-8 mb-10">
              <img src="/upmont-escuro.png" alt="UpMont" className="h-12 object-contain" />
              <div className="h-8 w-px bg-[#6A6054]/40" />
              <img src="/logo-nova-vertmanguinhos-escura.png" alt="Vert Manguinhos" className="h-12 object-contain" />
            </div>
            <span className="text-[#6A6054] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 block">Time</span>
            <h2 className="text-4xl md:text-5xl font-thin text-[#1a1a14] mb-3">Corpo Técnico de Excelência</h2>
            <div className="w-12 h-0.5 bg-[#6A6054] mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 max-w-4xl mx-auto">
            {[
              { logo: "/logo-henrique.png", title: "Projeto Arquitetônico", name: "Henrique Gasparini" },
              { logo: "/logo-ilha.png", title: "Projeto Estrutural", name: "Ilha Projetos / Eng. Bruno Sarcinelli" },
              { logo: "/logo-spin.png", title: "Projeto de Instalações", name: "SPIN Projetos" },
              { logo: "/logo-pinheiro.png", title: "Construção", name: "Pinheiro de Sá Engenharia" },
            ].map((t, i) => (
              <div key={i} className={`fi d${i + 1} group hover:-translate-y-1 transition-all duration-500 text-center`}>
                <div className="h-28 flex items-center justify-center mb-5 bg-white rounded-2xl border border-gray-100 p-4 group-hover:border-[#6A6054]/30 group-hover:shadow-md transition-all duration-500">
                  <img src={t.logo} alt={t.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-[#6A6054] text-[9px] uppercase tracking-widest font-semibold mb-1">{t.title}</p>
                <p className="text-[#6A6054] text-xs font-light leading-relaxed">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          17. PARCEIROS
      ══════════════════════════════════════ */}
      <section className="s-dots py-20 border-t border-[#6A6054]/10">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-12 fi">
            <span className="text-[#6A6054] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 block">Parceiros</span>
            <h2 className="text-3xl md:text-4xl font-thin text-[#1a1a14] mb-3">Quem faz parte desse projeto</h2>
            <div className="w-12 h-0.5 bg-[#6A6054] mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className={`fi d${(i % 6) + 1} group bg-white rounded-xl border border-gray-100 hover:border-[#6A6054]/40 hover:shadow-md transition-all duration-500 hover:-translate-y-0.5 flex items-center justify-center p-3 min-h-[90px]`}>
                <img src={`/PARCEIROS VERTMANGUINHOS/${i + 1}.png`} alt={`Parceiro ${i + 1}`}
                  className="w-full object-contain max-h-[70px] group-hover:scale-105 transition-transform duration-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          18. LOCALIZAÇÃO
      ══════════════════════════════════════ */}
      <section className="s-lines py-24">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-14 fi">
            <span className="text-[#6A6054] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 block">Onde fica</span>
            <h2 className="text-4xl md:text-5xl font-thin text-[#1a1a14] mb-3">Localização Privilegiada</h2>
            <div className="w-12 h-0.5 bg-[#6A6054] mx-auto mt-6" />
            <p className="text-[#6A6054] font-light mt-6 max-w-lg mx-auto text-sm">
              Manguinhos, Serra — ES. A metros do mar, em um dos bairros de maior crescimento do estado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { img: "/mahai-serra.jpeg", title: "Shopping & Comércio", desc: "Shoppings e comércio completo a poucos minutos" },
              { img: "/hospital-estadual-jayme-santos-neves.jpg", title: "Saúde & Educação", desc: "Hospitais de referência e escolas de qualidade" },
              { img: "/mobilidade-urbana-aerial-night.jpg", title: "Mobilidade Urbana", desc: "Acesso fácil às principais vias da Grande Vitória" },
            ].map((loc, i) => (
              <div key={i} className={`fi d${i + 1} relative h-60 rounded-2xl overflow-hidden group border border-gray-100`}>
                <img src={loc.img} alt={loc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-light text-lg mb-1">{loc.title}</h3>
                  <p className="text-white/60 text-xs font-light">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* mapa iframe */}
          <div className="fi rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.4383!2d-40.2229!3d-20.0756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sManguinhos%2C+Serra+-+ES!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          19. CTA FINAL
      ══════════════════════════════════════ */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-end">
        <img src={`${B}/FACHADA%20MANHA%2003.jpg`} alt="Vert Manguinhos"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="relative z-10 w-full pb-20 md:pb-28">
          <div className="container mx-auto px-8 md:px-16 text-center">
            <div className="fi max-w-3xl mx-auto">
              <img src="/logo-nova-vertmanguinhos.png" alt="Vert Manguinhos"
                className="h-16 w-auto mx-auto mb-10 drop-shadow-2xl" />
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin text-white mb-6 leading-tight">
                Nosso primeiro lançamento.<br />Nossa maior declaração.
              </h2>
              <p className="text-white/60 font-light text-lg mb-10">
                Breve lançamento. Unidades limitadas.
              </p>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#6A6054] hover:bg-[#b89851] text-white px-12 py-7 text-sm font-bold rounded-full shadow-2xl hover:shadow-[#6A6054]/40 hover:scale-105 transition-all duration-300 tracking-widest uppercase relative overflow-hidden group">
                  <span className="relative z-10 text-xs tracking-[0.2em]">Falar com um Especialista</span>
                  <div className="absolute inset-0 shimmer" />
                </Button>
              </a>
              <p className="text-white/30 text-xs font-light mt-6 tracking-wide">Atendimento personalizado · Sem compromisso</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
