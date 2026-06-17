import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundGlobe from '@/components/BackgroundGlobeLeft'

export const metadata: Metadata = {
  title: 'Flyer Design Solutions LLC',
  description: 'Engineering-grade software and design services.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <BackgroundGlobe />
        <Header />
        <main className="relative z-10 mx-auto max-w-6xl px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
