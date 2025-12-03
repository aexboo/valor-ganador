import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bravera | Valor Ganador™ – Branding B2B Industrial",
  description:
    "Creamos tu propuesta de valor única + branding B2B que te hace ganar tratos directos con márgenes que tu competencia ni sueña.",
  generator: "Next.js",
  keywords: [
    "branding B2B",
    "proveedor industrial",
    "propuesta de valor",
    "marketing industrial",
    "trato directo",
    "minería",
    "plantas industriales",
  ],
  authors: [{ name: "Bravera" }],
  openGraph: {
    title: "Bravera | Valor Ganador™ – Branding B2B Industrial",
    description:
      "Creamos tu propuesta de valor única + branding B2B que te hace ganar tratos directos con márgenes que tu competencia ni sueña.",
    url: "https://bravera.pro",
    siteName: "Bravera",
    images: [
      {
        url: "https://b2b.bravera.pro/og-valorganador.jpg",
        width: 1200,
        height: 630,
        alt: "Bravera | Valor Ganador™",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bravera | Valor Ganador™ – Branding B2B Industrial",
    description:
      "Creamos tu propuesta de valor única + branding B2B que te hace ganar tratos directos con márgenes que tu competencia ni sueña.",
    images: ["https://b2b.bravera.pro/og-valorganador.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
