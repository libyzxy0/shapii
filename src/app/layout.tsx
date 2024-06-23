import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast';

import React from 'react';
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500"], display: 'swap' })

export const metadata: Metadata = {
  title: 'Shapii: Order amazing products in just one click!',
  description: 'E-commerce website made by libyzxy0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      {children}
      <Toaster
      position="top-right"
      reverseOrder={false}
      />
      </body>
    </html>
  )
}
