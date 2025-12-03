"use client"

import type React from "react"

import { useState } from "react"
import { FadeUp } from "@/components/fade-up"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Check, Loader2 } from "lucide-react"

const discoveries = [
  "Cuánto dinero estás dejando en la mesa por tener una propuesta genérica",
  'Qué está haciendo tu competencia para ser el proveedor "de cabecera"',
  "Cuál es tu ventaja real que nadie está contando",
  "El margen extra que ganarías el próximo año si fueras el preferido",
]

export function CTAForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/TU_ENDPOINT_REAL", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="cta" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Copy */}
          <FadeUp>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Diagnóstico de Diferenciación Gratuito – 45 minutos que valen oro
              </h2>

              <p className="text-lg text-slate-400 mb-8">En esta sesión descubrirás:</p>

              <div className="space-y-4">
                {discoveries.map((discovery, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-cyan-400" />
                    </div>
                    <p className="text-slate-300 leading-relaxed">{discovery}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right side - Form */}
          <FadeUp delay={200}>
            <Card className="bg-slate-900/80 border-slate-700 p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud enviada!</h3>
                  <p className="text-slate-400">
                    Te contactaremos en las próximas 24 horas para agendar tu diagnóstico gratuito.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nombre" className="text-slate-300 mb-2 block">
                      Nombre completo
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      required
                      placeholder="Juan Pérez"
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="empresa" className="text-slate-300 mb-2 block">
                      Empresa
                    </Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      required
                      placeholder="Tu Empresa S.A."
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-300 mb-2 block">
                      Email corporativo
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="juan@tuempresa.com"
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefono" className="text-slate-300 mb-2 block">
                      Teléfono
                    </Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      placeholder="+56 9 1234 5678"
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-lg py-6 h-auto shadow-lg shadow-cyan-500/25"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Solicitar Diagnóstico Gratuito Ahora"
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
