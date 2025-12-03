"use client"

import { useState, useEffect } from "react"
import { BraveraLogo } from "@/components/bravera-logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <BraveraLogo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("dolor")}
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              El problema
            </button>
            <button
              onClick={() => scrollToSection("solucion")}
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              La solución
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Proceso
            </button>
            <Button
              onClick={() => scrollToSection("cta")}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6"
            >
              Diagnóstico Gratuito
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("dolor")}
                className="text-slate-400 hover:text-white transition-colors text-left py-2"
              >
                El problema
              </button>
              <button
                onClick={() => scrollToSection("solucion")}
                className="text-slate-400 hover:text-white transition-colors text-left py-2"
              >
                La solución
              </button>
              <button
                onClick={() => scrollToSection("timeline")}
                className="text-slate-400 hover:text-white transition-colors text-left py-2"
              >
                Proceso
              </button>
              <Button
                onClick={() => scrollToSection("cta")}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold w-full mt-2"
              >
                Diagnóstico Gratuito
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
