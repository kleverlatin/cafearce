import { MapPin, Clock, Phone, MessageCircle } from "lucide-react"

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
            {/* Contact Card */}
<div className="bg-white rounded-xl p-6 shadow-xl border border-stone-200 max-w-md">
  <h3 className="text-xl font-serif font-semibold text-stone-800 mb-4">
    📞 Contáctanos
  </h3>

  <div className="space-y-3">

    {/* Teléfono principal */}
    <a
      href="https://wa.me/573106749303"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
    >
     <MessageCircle className="w-5 h-5" />
  <span>WhatsApp</span>
  <span className="text-sm opacity-90">+57 3106749303</span>
    </a>

    {/* Otros WhatsApp */}
   <a
  href="https://wa.me/573166208783"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition font-semibold tracking-wide"
>
  <MessageCircle className="w-5 h-5" />
  <span>WhatsApp</span>
  <span className="text-sm opacity-90">+57 3166208783</span>
</a>

    <a
      href="https://wa.me/573133480674"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 bg-green-500/90 hover:bg-green-600 text-white py-2 rounded-lg transition"
    >
      <MessageCircle className="w-5 h-5" />
      <span>WhatsApp</span>
      <span className="text-sm opacity-90">+57 3133480674</span>
    </a>

    {/* Email */}
    <a
      href="mailto:isidroarce68@gmail.com"
      className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition"
    >
      📧 Enviar Email
    </a>

  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}
