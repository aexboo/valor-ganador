"use client"

import { FadeUp } from "@/components/fade-up"

const timelineSteps = [
  {
    period: "Mes 1",
    title: "Diagnóstico brutal + propuesta de valor que destroza a la competencia",
  },
  {
    period: "Mes 2-3",
    title: "Branding B2B + playbook de trato directo",
  },
  {
    period: "Mes 4-6",
    title: "Lanzamiento y medición (win rate, margen, referencias)",
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-16">
            3-6 meses y tu empresa ya es otra
          </h2>
        </FadeUp>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-700" />

          <div className="space-y-8 md:space-y-0">
            {timelineSteps.map((step, index) => (
              <FadeUp key={index} delay={index * 150}>
                <div
                  className={`relative md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-6 md:p-8 hover:border-cyan-500/50 transition-colors">
                      <span className="inline-block text-cyan-400 font-bold text-lg mb-2">{step.period}</span>
                      <p className="text-white text-lg md:text-xl leading-relaxed">{step.title}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-500 border-4 border-slate-950 z-10" />

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
