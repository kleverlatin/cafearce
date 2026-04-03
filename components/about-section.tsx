import Image from "next/image"

export function AboutSection() {
  return (
    <section id="historia" className="py-24 md:py-32 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl" style={{ position: 'relative' }}>
              <Image
                src="https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=1000&auto=format&fit=crop"
                alt="Caficultor colombiano cosechando café"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-700/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-amber-700/30 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-amber-700 font-medium tracking-wider uppercase text-sm">
              Nuestra Historia
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-800 mt-4 mb-6 text-balance">
              Tres Generaciones de Pasión por el Café
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                En las verdes montañas del Cañón de las Hermosas, en el Tolima, donde el clima y la tierra se unen en perfecta armonía, nace Café Don Arce.
              </p>
              <p>
                Desde hace más de 100 años, nuestra familia ha cultivado café con dedicación y esfuerzo. Durante generaciones, los caficultores bajaban hasta Chaparral para vender su cosecha al precio que ofrecían los mayoristas, aceptando el valor con tal de no regresar con la carga a la finca.
              </p>
              <p>
                En 2023, Isidro Arce decidió cambiar esa historia.

                Hoy, nuestro café cultivado desde 1920 representa más de un siglo de tradición cafetera, ahora compartida directamente contigo, con la calidad y el valor que siempre mereció. </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-stone-300">
              <div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-amber-700">
                  100+
                </div>
                <div className="text-sm text-stone-600 mt-1">
                  Años de tradición
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-amber-700">
                  100%
                </div>
                <div className="text-sm text-stone-600 mt-1">
                  Café arábica
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-amber-700">
                  1,800m
                </div>
                <div className="text-sm text-stone-600 mt-1">
                  Altura de cultivo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
