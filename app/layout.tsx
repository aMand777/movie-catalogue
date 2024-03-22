import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ChakraProviderUI from './ChakraProvider'
import SearchBar from './components/templates/SearchBar'
import Navbar from './components/templates/Navbar'
import ReactQueryProvider from './ReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie Catalogue',
  description: 'App Movies Information',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-dark`}>
        <ReactQueryProvider>
          <ChakraProviderUI>
            <Navbar />
            <SearchBar />
            {children}
          </ChakraProviderUI>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
