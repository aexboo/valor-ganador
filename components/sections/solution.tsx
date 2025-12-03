"use client"

import { FadeUp } from "@/components/fade-up"
import { Check } from "lucide-react"

const bullets = [
  "Descubrimos los 3 argumentos que tu competencia no puede copiar",
  'Redactamos la propuesta que hace "click" con el dolor real del decisor',
  "Posicionamos tu marca como la autoridad técnica en tu rubro (LinkedIn del dueño + gerentes, charlas locales, whitepapers que se comparten por WhatsApp)",
  "Creamos el playbook para que cualquier vendedor cierre tratos directos sin guerra de precios",
  "Armamos tu historia de éxito que circula sola entre plantas y minas",
  "Lanzamos una campaña discreta pero letal que te pone en la mesa antes que nadie",
  "Medimos el impacto real: win rate, margen y cuánto tiempo libera tu equipo",
]

export function Solution() {
  return (
    <section id="solucion" className="py-20 md:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="inline-block mb-4">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">La Solución</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Valor Ganador™ – El servicio que te hace imbatible en el trato directo
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <p className="text-lg md:text-xl text-slate-400 max-w-4xl mb-12 leading-relaxed">
            En 3-6 meses convertimos tu empresa en el proveedor que los decisores llaman antes de pedir cotizaciones a
            nadie más.
          </p>
        </FadeUp>

        <div className="space-y-4 md:space-y-5 mb-12">
          {bullets.map((bullet, index) => (
            <FadeUp key={index} delay={200 + index * 50}>
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                  {bullet}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={600}>
          <div className="border-l-4 border-cyan-500 pl-6 py-2">
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
              No es marketing de consumo. Es branding industrial que genera confianza y te hace el proveedor preferido
              cuando el teléfono suena.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
