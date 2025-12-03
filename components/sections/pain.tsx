"use client"

import { FadeUp } from "@/components/fade-up"
import { Card } from "@/components/ui/card"
import { Flame, FileX, UserX } from "lucide-react"

const painPoints = [
  {
    icon: Flame,
    title: "Tu equipo pasa el día apagando incendios en vez de cerrar proyectos nuevos",
  },
  {
    icon: FileX,
    title: "Cotizas 10 veces para ganar 1, y ese 1 lo ganas por precio",
  },
  {
    icon: UserX,
    title: "El gerente de la planta ni sabe que existes hasta que le mandas la cotización… y ya es tarde",
  },
]

export function Pain() {
  return (
    <section id="dolor" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6">
            El día a día que ya no aguantas más
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <p className="text-lg md:text-xl text-slate-400 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            Estás hasta el cuello manteniendo clientes actuales, atendiendo consultas que al final se van con el "de
            siempre", y cuando logras una reunión grande… te piden bajar el precio porque "todos ofrecen lo mismo".
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {painPoints.map((pain, index) => (
            <FadeUp key={index} delay={200 + index * 100}>
              <Card className="bg-slate-900/80 border-slate-700 p-6 md:p-8 h-full hover:border-cyan-500/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6">
                  <pain.icon className="w-6 h-6 text-slate-400" />
                </div>
                <p className="text-white text-lg leading-relaxed">{pain.title}</p>
              </Card>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={500}>
          <div className="text-center">
            <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto">
              No es que tu producto sea malo. Es que{" "}
              <span className="text-cyan-400">nadie sabe por qué deberían elegírtelo a ti.</span>
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
