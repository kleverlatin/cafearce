import { MapPin, Clock, Phone } from "lucide-react"

export function LocationSection() {
  return (
    <section id="ubicacion" className="py-24 md:py-32 bg-stone-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-amber-700 font-medium tracking-wider uppercase text-sm">
            Ubicación
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-800 mt-4 mb-6 text-balance">
            Desde que parte del Tolima Nace nuestro café
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Las hermosas montañas de las que les hablamos al inicio las pueden ubiacar en.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 justify-center">
      

          {/* Info Cards */}
          <div className="space-y-6 max-w-md mx-auto">
            {/* Address Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-amber-700/10">
                  <MapPin className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-stone-800 mb-2">
                    Dirección
                  </h3>
                  <p className="text-stone-600">
                    Vereda Santa Barbara
                    <br />
                    Chaparral(Tol), Colombia
                    <br />
                    Código Postal: 110311
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-amber-700/10">
                  <Clock className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-stone-800 mb-2">
                    Horario de Atención
                  </h3>
                  <div className="text-stone-600 space-y-1">
                    <p>
                      <span className="font-medium text-stone-800">
                        Lunes - Viernes:
                      </span>{" "}
                      7:00 AM - 8:00 PM
                    </p>
                    <p>
                      <span className="font-medium text-stone-800">
                        Sábados:
                      </span>{" "}
                      8:00 AM - 6:00 PM
                    </p>
                 
                  </div>
                </div>
              </div>
            </div>

          {/* Contact Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-amber-700/10">
                  <Phone className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-stone-800 mb-2">
                    Contacto
                  </h3>

                  <div className="text-stone-600 space-y-2">
                    <p>
                      <span className="font-medium text-stone-800">Teléfono: </span>
                      <a
                        href="https://wa.me/573106749303"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-700"
                      >
                        +57 310 674 9303
                      </a>
                    </p>

                    <p>
                      <span className="font-medium text-stone-800">WhatsApp:</span>
                      <br />
                      <a
                        href="https://wa.me/573166208783"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-amber-700"
                      >
                        +57 316 620 8783
                      </a>
                      <a
                        href="https://wa.me/573133480674"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-amber-700"
                      >
                        +57 313 348 0674
                      </a>
                    </p>

                    <p>
                      <span className="font-medium text-stone-800">Email: </span>
                      <a
                        href="mailto:isidroarce68@gmail.com"
                        className="hover:text-amber-700"
                      >
                        isidroarce68@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
