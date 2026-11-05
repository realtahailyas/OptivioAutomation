import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://optivioautomation.com'),
  title: {
    default: 'Optivio Automation | Software studio: apps, AI voice agents, publishing',
    template: '%s | Optivio Automation',
  },
  description:
    'Optivio Automation is a small software studio run by Taha Ilyas. Android apps on Google Play, AI voice agents, puzzle book publishing and content automation.',
  authors: [{ name: 'Taha Ilyas', url: 'https://tahailyas.com' }],
  creator: 'Optivio Automation',
  publisher: 'Optivio Automation',
  formatDetection: { telephone: false, email: true },
  openGraph: {
    type: 'website',
    siteName: 'Optivio Automation',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Optivio Automation' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="bg-[#0A1628] font-dm text-white antialiased">
        {children}
      </body>
    </html>
  )
}
