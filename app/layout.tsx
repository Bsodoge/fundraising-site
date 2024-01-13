import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import './globals.css';

const inter = Roboto_Slab({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fundraising site',
  description: 'A single page fundraising site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
