import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Baloo_2, Quicksand } from 'next/font/google'
import './globals.css'

/* Baloo 2 is the chunky, rounded storybook face the headings ride on; Quicksand
   is its calmer round-terminal cousin, legible enough to carry body copy. */
const baloo = Baloo_2({ variable: '--font-heading', subsets: ['latin'], weight: ['500', '600', '700', '800'] })
const quicksand = Quicksand({ variable: '--font-body', subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Olo Kinder - Where Curiosity Begins and Learning Comes Alive',
  description: 'Olo Kinder is a unique early childhood learning initiative designed to nurture curious, confident, creative and compassionate young learners through play, exploration, creativity, and discovery.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#2A9D8F' }],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${baloo.variable} ${quicksand.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
