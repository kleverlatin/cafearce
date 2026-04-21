import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter } from "lucide-react"

const footerLinks = {
  productos: [
    { label: "Don Arce Clásico", href: "#productos" },
    { label: "Reserva Especial", href: "#productos" },
  ],
  empresa: [
    { label: "Nuestra Historia", href: "#historia" },
    { label: "Proceso de Cultivo", href: "#historia" },
    { label: "Sostenibilidad", href: "#historia" },
    { label: "Tienda", href: "#ubicacion" },
  ],
  soporte: [
    { label: "Contacto", href: "#ubicacion" },
    { label: "Envíos", href: "#ubicacion" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center text-center">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="#inicio" className="inline-block mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoTransparente-7tzc8HBn2jBglfZ6schwzIQGaBMpOU.png"
                alt="Café Don Arce"
                width={140}
                height={100}
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-stone-400 max-w-xs leading-relaxed mb-6">
              Café colombiano de especialidad, cultivado con pasión en las
              montañas de Colombia desde 1920.
            </p>
            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-stone-700 hover:bg-amber-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
      
          {/* Soporte */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Soporte</h3>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 mt-12 pt-8 text-center">
          <p className="text-s text-stone-500">
            © {new Date().getFullYear()} Café Don Arce. Todos los derechos
            reservados. Desarrollado por CHN Studio
          </p>
        </div>
      </div>
    </footer>
  )
}
