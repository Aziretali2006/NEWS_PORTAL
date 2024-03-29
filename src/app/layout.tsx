import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css"
import { Provider } from 'react-redux'
import { setupStore } from './store/Store'
import StoreProvider from './StoreProviders'
import Header from './components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>{children}</body>
      </StoreProvider> 
    </html>
  )
}
