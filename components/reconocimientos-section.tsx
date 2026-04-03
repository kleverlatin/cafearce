import Image from "next/image"

export function ReconocimientosSection() {
  return (
    <section id="reconocimientos" className="py-24 md:py-32 bg-amber-300">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-700 font-medium tracking-wider uppercase text-sm">
            Reconocimientos
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-800 mt-4 mb-6">
            Nuestro Café, Reconocido por su Calidad
          </h2>

          <p className="text-stone-600 leading-relaxed">
            En 2025, Café Don Arce destacó en la Feria Internacional del Líbano, Tolima, 
            compitiendo entre más de 600 caficultores. Su calidad excepcional le permitió 
            avanzar entre los 40 mejores, luego posicionarse dentro de los 20 finalistas y 
            culminar su participación en la prestigiosa subasta nacional, consolidándose como un 
            café de alto nivel.
          </p>
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Imagen 1 */}
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="/img/certificado.jpeg"
              alt="Reconocimiento café colombiano"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Imagen 2 */}
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="/img/certificado2.jpeg"
              alt="Premio café Don Arce"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Imagen 3 */}
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="/img/pepa1.jpeg"
              alt="Certificación café artesanal"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Imagen 4 (opcional) */}
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="/img/pepa2.jpeg"
              alt="Calidad café premium"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  )
}