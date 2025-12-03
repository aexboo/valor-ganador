"use client"

import { AnimatedCounter } from "@/components/animated-counter"
import { FadeUp } from "@/components/fade-up"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToCTA = () => {
    const element = document.getElementById("cta")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 text-balance max-w-5xl mx-auto">
            Deja de ser "uno más" y conviértete en el proveedor que el gerente de planta{" "}
            <span className="text-cyan-400">llama primero</span>
          </h1>
        </FadeUp>

        <FadeUp delay={100}>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
            Creamos tu propuesta de valor única + branding B2B que te hace ganar tratos directos con márgenes que tu
            competencia ni sueña.
          </p>
        </FadeUp>

        <FadeUp delay={200}>
          <Button
            onClick={scrollToCTA}
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base md:text-lg px-8 py-6 h-auto rounded-lg group shadow-lg shadow-cyan-500/25"
          >
            Solicitar Diagnóstico de Diferenciación Gratuito (45 min)
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </FadeUp>

        {/* Animated Metrics */}
        <FadeUp delay={400}>
          <div className="mt-20 md:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <AnimatedCounter prefix="+" end={38} suffix="%" label="win rate en tratos directos" />
            <AnimatedCounter prefix="+" end={27} suffix="%" label="margen bruto promedio" />
            <AnimatedCounter end={71} suffix="%" label="de clientes nuevos por referencia directa" />
            <AnimatedCounter end={9} suffix=" de 10" label="cotizaciones ya ganadas antes de enviarlas" />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
