import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Chakra } from './chakra'
import SearchBar from './components/templates/SearchBar'
import Navbar from './components/templates/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movies Info',
  description: 'App Movies Information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark`}>
      <Chakra>
        <Navbar />
        <SearchBar />
        {children}
      </Chakra>
      </body>
    </html>
  )
}