"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 via-black/30 to-transparent backdrop-blur-xl border-b border-[#c9a961]/10">
      <div className="container mx-auto px-4 relative z-10">
        {/* Top Row: Button, Logo, Search */}
        <div className="flex items-center justify-between py-4 border-b border-[#c9a961]/10">
          {/* Left: Fale com a UpMont Button */}
          <Button
            variant="outline"
            className="hidden lg:flex border-[#c9a961]/40 text-white hover:bg-[#c9a961] hover:text-black hover:border-[#c9a961] transition-all duration-300 bg-transparent text-xs px-6 py-2.5 rounded-full font-medium tracking-wide hover:shadow-[0_0_20px_rgba(201,169,97,0.4)] hover:scale-105"
          >
            Fale com a UpMont
          </Button>

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
          <div
            className={`hidden lg:flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg transition-all duration-300 border ${
              searchFocused
                ? "border-[#c9a961] shadow-[0_0_20px_rgba(201,169,97,0.3)] bg-black/60"
                : "border-[#c9a961]/20 hover:border-[#c9a961]/40"
            }`}
          >
            <Search
              className={`w-4 h-4 transition-colors duration-300 ${searchFocused ? "text-[#c9a961]" : "text-gray-400"}`}
            />
            <input
              type="text"
              placeholder="Buscar empreendimentos..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="bg-transparent border-none outline-none text-sm text-white placeholder:text-gray-500 w-48 font-light tracking-wide"
            />
            <div
              className={`w-px h-4 bg-[#c9a961]/30 transition-opacity duration-300 ${
                searchFocused ? "opacity-100" : "opacity-0"
              }`}
            />
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
              <Button
                variant="outline"
                className="border-[#c9a961] text-white hover:bg-[#c9a961] hover:text-black w-full bg-transparent"
              >
                Fale com a UpMont
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
