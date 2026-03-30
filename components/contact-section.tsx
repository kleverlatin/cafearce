"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Coffee } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-amber-700 font-medium tracking-wider uppercase text-sm">
              Contáctanos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-800 mt-4 mb-6 text-balance">
              ¿Tienes Alguna Pregunta?
            </h2>
            <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos
              lo antes posible.
            </p>
          </div>

          {/* Form */}
          <div className="bg-stone-50 rounded-xl p-8 md:p-12 shadow-xl border border-stone-200">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-700/10 mb-6">
                  <Coffee className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">
                  ¡Gracias por tu mensaje!
                </h3>
                <p className="text-stone-600">
                  Te responderemos pronto. Mientras tanto, disfruta de un buen
                  café.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-6 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-stone-800">
                      Nombre
                    </Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      required
                      className="bg-white border-stone-300 focus:border-amber-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-stone-800">
                      Correo Electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="bg-white border-stone-300 focus:border-amber-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-stone-800">
                    Asunto
                  </Label>
                  <Input
                    id="subject"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                    className="bg-white border-stone-300 focus:border-amber-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-stone-800">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                    rows={5}
                    className="bg-white border-stone-300 focus:border-amber-700 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
