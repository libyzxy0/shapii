import type { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = {
  title: 'Shapii | Admin',
  description: 'Manage shapii products',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {children}
    </>
  )
}
