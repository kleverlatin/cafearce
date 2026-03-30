import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Don Arce Clásico",
    description:
      "Nuestro blend insignia con notas de chocolate, caramelo y un toque cítrico. Tueste medio, ideal para cualquier momento del día.",
    price: "$35.000",
    weight: "500g",
    badge: "Más Vendido",
    image: "/img/c1.png",
  },
  {
    id: 2,
    name: "Reserva Especial - Borbon Rosado",
    description:
      "Café de origen único, microlote seleccionado. Notas florales, frutos rojos y acidez brillante. Para los verdaderos conocedores.",
    price: "$45.000",
    weight: "500g",
    badge: "Edición Limitada",
    image: "/img/c2.png",
  }
]

export function ProductsSection() {
  return (
    <section id="productos" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-amber-700 font-medium tracking-wider uppercase text-sm">
            Nuestros Productos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-800 mt-4 mb-6 text-balance">
            Café de Especialidad
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Cada variedad es cuidadosamente seleccionada y tostada para resaltar
            los sabores únicos de nuestros granos colombianos.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-stone-200 hover:border-amber-700/30 hover:shadow-xl transition-all duration-500 bg-white"
            >
              <div className="relative aspect-square overflow-hidden" style={{ position: 'relative' }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-amber-700 text-white">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-serif font-semibold text-stone-800">
                    {product.name}
                  </h3>
                  <span className="text-sm text-stone-500">
                    {product.weight}
                  </span>
                </div>
                <p className="text-sm text-stone-600 mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-amber-700">
                    {product.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
