import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Upmont Incorporadora - Transformamos espaços em experiências",
  description: "Transformamos espaços em experiências para viver e ativos para investir",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${montserrat.variable}`} suppressHydrationWarning>
        {children}
        <Analytics />
        <Script
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/cf247fa1-c9c8-435d-8c72-68b3228754da-loader.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
