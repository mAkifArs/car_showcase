import type { Metadata } from 'next'
import './globals.css'
import { NavBar, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cass in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
