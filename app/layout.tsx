import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Anushka Jadhav - UI/UX Designer',
  description: 'Portfolio showcasing UI/UX design skills and creative projects',
  keywords: ['UI/UX Design', 'Figma', 'JustInMind', 'Frontend Development'],
  openGraph: {
    title: 'Anushka Jadhav - Portfolio',
    description: 'Creative UI/UX Design Portfolio',
    images: ['/profile.jpg']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} gradient-bg min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}