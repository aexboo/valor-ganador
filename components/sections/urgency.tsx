"use client"

import { FadeUp } from "@/components/fade-up"
import { AlertTriangle } from "lucide-react"

export function Urgency() {
  return (
    <section className="py-20 md:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-8">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span className="text-amber-500 font-medium text-sm">Urgente</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
              Si no eres el proveedor obvio en diciembre, perdiste el año
            </h2>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              El <span className="text-white font-semibold">68 % del presupuesto anual se aprueba en Q1</span>. Los
              gerentes de planta deciden en verano quién será su proveedor favorito del próximo año. Si en diciembre
              todavía eres "uno más", vas a pasar otros 12 meses corriendo detrás de cotizaciones que ya tienen dueño.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
