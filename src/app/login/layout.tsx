import type { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = {
  title: 'Shapii | Sign In to your account',
  description: 'Sign In to your account to continue shopping with Shapii',
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
