"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<Array<{ keyword: string; route: string }>>([])
  const router = useRouter()

  // Mapeamento de palavras-chave para rotas
  const searchKeywords: Record<string, string> = {
    // Início
    "inicio": "/",
    "home": "/",
    "principal": "/",

    // Quem Somos
    "quem somos": "/quem-somos",
    "sobre": "/quem-somos",
    "empresa": "/quem-somos",
    "historia": "/quem-somos",
    "upmont": "/quem-somos",

    // Vert Manguinhos
    "vert": "/vert-manguinhos",
    "vert manguinhos": "/vert-manguinhos",
    "manguinhos": "/vert-manguinhos",
    "empreendimento": "/vert-manguinhos",
    "apartamento": "/vert-manguinhos",
    "verthouses": "/vert-manguinhos",
    "casas suspensas": "/vert-manguinhos",
    "3 suites": "/vert-manguinhos",
    "4 suites": "/vert-manguinhos",
    "plantas": "/vert-manguinhos",
    "lazer": "/vert-manguinhos",

    // Viver em Serra
    "viver": "/viver-em-serra",
    "serra": "/viver-em-serra",
    "localizacao": "/viver-em-serra",
    "bairro": "/viver-em-serra",
    "regiao": "/viver-em-serra",

    // Contatos
    "contato": "/contatos",
    "contatos": "/contatos",
    "telefone": "/contatos",
    "email": "/contatos",
    "endereco": "/contatos",
    "falar": "/contatos",
  }

  const handleSearchInput = (value: string) => {
    setSearchQuery(value)
    const query = value.toLowerCase().trim()

    if (query.length === 0) {
      setSuggestions([])
      return
    }

    // Filtra sugestões baseadas na query
    const filtered = Object.entries(searchKeywords)
      .filter(([keyword]) => keyword.includes(query))
      .map(([keyword, route]) => ({ keyword, route }))

    // Remove duplicatas baseadas na rota
    const uniqueSuggestions = filtered.reduce((acc, current) => {
      const exists = acc.find(item => item.route === current.route)
      if (!exists) {
        acc.push(current)
      }
      return acc
    }, [] as Array<{ keyword: string; route: string }>)

    setSuggestions(uniqueSuggestions.slice(0, 5)) // Limita a 5 sugestões
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = searchQuery.toLowerCase().trim()

    // Procura por correspondência exata primeiro
    if (searchKeywords[query]) {
      router.push(searchKeywords[query])
      setSearchQuery("")
      setSuggestions([])
      return
    }

    // Procura por correspondência parcial
    for (const [keyword, route] of Object.entries(searchKeywords)) {
      if (keyword.includes(query) || query.includes(keyword)) {
        router.push(route)
        setSearchQuery("")
        setSuggestions([])
        return
      }
    }

    // Se não encontrar nada, vai para a página inicial
    router.push("/")
    setSearchQuery("")
    setSuggestions([])
  }

  const handleSuggestionClick = (route: string) => {
    router.push(route)
    setSearchQuery("")
    setSuggestions([])
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 via-black/30 to-transparent backdrop-blur-xl border-b border-[#c9a961]/10">
      <div className="container mx-auto px-4 relative z-10">
        {/* Top Row: Button, Logo, Search */}
        <div className="flex items-center justify-between py-4 border-b border-[#c9a961]/10">
          {/* Left: Fale com a UpMont Button */}
          <a
            href="https://wa.me/5527992970152?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20empreendimentos%20da%20UpMont."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="hidden lg:flex border-[#c9a961]/40 text-white hover:bg-[#c9a961] hover:text-black hover:border-[#c9a961] transition-all duration-300 bg-transparent text-xs px-6 py-2.5 rounded-full font-medium tracking-wide hover:shadow-[0_0_20px_rgba(201,169,97,0.4)] hover:scale-105"
            >
              Fale com a UpMont
            </Button>
          </a>

          {/* Center: Logo */}
          <Link href="/" className="flex flex-col items-center group cursor-pointer">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/upmont-logo-white.png"
                alt="UPMONT Incorporadora"
                width={200}
                height={60}
                className="h-14 w-auto drop-shadow-[0_2px_10px_rgba(201,169,97,0.3)]"
                priority
              />
            </div>
          </Link>

          {/* Right: Search Box */}
          <div className="hidden lg:block relative">
            <form
              onSubmit={handleSearch}
              className={`flex items-center gap-3 bg-transparent rounded-full px-5 py-2.5 transition-all duration-300 border ${
                searchFocused
                  ? "border-[#c9a961] shadow-[0_0_20px_rgba(201,169,97,0.4)] scale-105"
                  : "border-[#c9a961]/40 hover:border-[#c9a961]"
              }`}
            >
              <Search
                className={`w-4 h-4 transition-colors duration-300 ${searchFocused ? "text-[#c9a961]" : "text-white"}`}
              />
              <input
                type="text"
                placeholder="Buscar empreendimentos..."
                value={searchQuery}
                onChange={(e) => handleSearchInput(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                className="bg-transparent border-none outline-none text-sm text-white placeholder:text-white/60 w-48 font-light tracking-wide"
              />
              <div
                className={`w-px h-4 bg-[#c9a961]/30 transition-opacity duration-300 ${
                  searchFocused ? "opacity-100" : "opacity-0"
                }`}
              />
            </form>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && searchFocused && (
              <div className="absolute top-full mt-2 w-full bg-black/95 backdrop-blur-xl border border-[#c9a961]/30 rounded-xl overflow-hidden shadow-2xl shadow-[#c9a961]/20">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion.route)}
                    className="w-full px-5 py-3 text-left text-white hover:bg-[#c9a961]/20 transition-colors duration-200 border-b border-[#c9a961]/10 last:border-b-0 flex items-center gap-2"
                  >
                    <Search className="w-3 h-3 text-[#c9a961]" />
                    <span className="text-sm capitalize">{suggestion.keyword}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:scale-110 transition-transform duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Bottom Row: Navigation */}
        <nav className="hidden lg:flex items-center justify-center py-4 text-sm tracking-widest font-medium">
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="text-white hover:text-[#c9a961] transition-all duration-300 relative group"
            >
              INÍCIO
              <span className="absolute bottom-[-16px] left-0 w-0 h-0.5 bg-[#c9a961] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/quem-somos"
              className="text-white hover:text-[#c9a961] transition-all duration-300 relative group"
            >
              QUEM SOMOS
              <span className="absolute bottom-[-16px] left-0 w-0 h-0.5 bg-[#c9a961] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/vert-manguinhos"
              className="text-white hover:text-[#c9a961] transition-all duration-300 relative group"
            >
              VERT MANGUINHOS
              <span className="absolute bottom-[-16px] left-0 w-0 h-0.5 bg-[#c9a961] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/viver-em-serra"
              className="text-white hover:text-[#c9a961] transition-all duration-300 relative group"
            >
              VIVER EM SERRA
              <span className="absolute bottom-[-16px] left-0 w-0 h-0.5 bg-[#c9a961] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/contatos"
              className="text-white hover:text-[#c9a961] transition-all duration-300 relative group"
            >
              CONTATOS
              <span className="absolute bottom-[-16px] left-0 w-0 h-0.5 bg-[#c9a961] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#c9a961]/20">
            <nav className="flex flex-col gap-4 text-sm">
              <Link href="/" className="text-white hover:text-[#c9a961] transition-colors">
                INÍCIO
              </Link>
              <Link href="/quem-somos" className="text-white hover:text-[#c9a961] transition-colors">
                QUEM SOMOS
              </Link>
              <Link href="/vert-manguinhos" className="text-white hover:text-[#c9a961] transition-colors">
                VERT MANGUINHOS
              </Link>
              <Link href="/viver-em-serra" className="text-white hover:text-[#c9a961] transition-colors">
                VIVER EM SERRA
              </Link>
              <Link href="/contatos" className="text-white hover:text-[#c9a961] transition-colors">
                CONTATOS
              </Link>
              <a
                href="https://wa.me/5527992970152?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20empreendimentos%20da%20UpMont."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="border-[#c9a961] text-white hover:bg-[#c9a961] hover:text-black w-full bg-transparent"
                >
                  Fale com a UpMont
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
