import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Café Don Arce | Café Colombiano Premium',
  description: 'Descubre el auténtico sabor del café colombiano. Café Don Arce ofrece granos selectos cultivados en las montañas de Colombia con tradición y pasión.',
  keywords: ['café colombiano', 'café premium', 'Don Arce', 'café de origen', 'café artesanal'],
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
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-stone-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
