import { BraveraLogo } from "@/components/bravera-logo"
import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <BraveraLogo variant="footer" />

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-slate-400 text-sm">
            <span>Bravera © 2026</span>
            <a href="mailto:hello@bravera.pro" className="hover:text-white transition-colors">
              hello@bravera.pro
            </a>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp directo
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
