import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/Nav_bar';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog Website',
  description: 'Created by Divyansh Gupta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-800">
      <NavBar />
        {children}
      </body>
    </html>
  )
}
