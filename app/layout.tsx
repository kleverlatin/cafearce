import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Café Don Arce | Café Colombiano Tolimense',
  description: 'Compra café colombiano premium directo del productor. En Café Don Arce ofrecemos café de origen 100% colombiano, cafe orgánico con envío a todo el país.',
  keywords: ['café colombiano', 'café orgánico', 'Don Arce', 'Chaparral', 'café artesanal', 'Tolima'],
}

export const viewport: Viewport = {
  themeColor: '#f5f0e8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${poppins.variable} font-sans antialiased bg-stone-50 text-[16px] sm:text-[17px] md:text-[18px]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
