import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import PillNav from "@/components/slide-nav"
import { Inter } from "next/font/google"

// Using Verdana as the main font

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "Personal portfolio website showcasing my work and experience",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-slate-900 to-slate-800`}>
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
          <PillNav />
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}


import './globals.css'