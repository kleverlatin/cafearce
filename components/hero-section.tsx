"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2000&auto=format&fit=crop"
          alt="Granos de café colombiano"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Image
              src="/public/img/cafeblanco.png"
              alt="Café Don Arce"
              width={280}
              height={200}
              className="mx-auto h-48 w-auto md:h-56"
              priority
              loading="eager"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            El Auténtico Sabor del Tolima
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Desde las montañas del Cañon de las Hermosas en Chaparral - Tolima hasta tu taza. Café cultivado con pasión, recogido a mano y tostado con tradición familiar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Button
              asChild
              size="lg"
              className="bg-amber-700 hover:bg-amber-800 text-white text-lg px-8 py-6"
            >
              <Link href="#productos">Comprar ahora</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-amber-700 hover:bg-amber-800 text-white text-lg px-8 py-6"
            >
              <Link href="#historia">Nuestra Historia</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link
          href="#historia"
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Descubre más</span>
          <ChevronDown className="h-6 w-6" />
        </Link>
      </div>
    </section>
  )
}
