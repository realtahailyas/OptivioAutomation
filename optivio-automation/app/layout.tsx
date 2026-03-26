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
  title: 'Optivio Automation | AI Voice Agents That Never Miss a Call',
  description:
    'AI receptionists for service businesses. Answer every call 24/7, qualify leads, and book appointments automatically. Dental clinics, HVAC, med spas. Starting at $500/mo.',
  keywords: [
    'AI voice agent',
    'AI receptionist',
    'missed calls solution',
    'dental clinic AI',
    'HVAC AI answering',
    'med spa AI receptionist',
    '24/7 call answering',
    'AI appointment booking',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://optivioautomation.com',
    siteName: 'Optivio Automation',
    title: 'AI Voice Agents That Never Miss a Call | Optivio Automation',
    description:
      'Stop losing customers to voicemail. AI receptionists that answer 24/7, qualify leads, and book appointments. Starting at $500/mo.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Agents That Never Miss a Call | Optivio Automation',
    description:
      'Stop losing customers to voicemail. AI receptionists that answer 24/7, qualify leads, and book appointments.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Optivio Automation',
  url: 'https://optivioautomation.com',
  logo: 'https://optivioautomation.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@optivioautomation.com',
    contactType: 'customer service',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Voice Agent Service',
  provider: {
    '@type': 'Organization',
    name: 'Optivio Automation',
  },
  serviceType: 'AI Voice Agent',
  areaServed: 'US',
  description:
    'AI voice agents that answer every call 24/7, qualify leads, and book appointments for service businesses.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does the AI actually sound human?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Our AI uses the latest voice synthesis technology with sub-second response times. Callers typically can't tell the difference. We'll demo it for you on our call.",
      },
    },
    {
      '@type': 'Question',
      name: "What if the AI can't handle a question?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The AI is trained to recognize when it's out of its depth. It seamlessly transfers the call to your team with full context of what was discussed — no awkward handoffs.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does setup take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most businesses are fully live within 3-5 business days. We handle everything — training the AI, configuring call flows, connecting to your calendar, and testing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to change my phone number?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. We either set up a new dedicated number or forward your existing line to the AI. Your customers won't notice any change except better service.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "That's the whole point. Your AI works 24/7/365 — nights, weekends, holidays. Every call answered, every lead captured, every appointment booked.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I try it before committing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely. Book a free demo and we'll show you a live AI agent built for your specific business niche. You'll hear exactly what your customers will experience.",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-[#0A1628] font-dm text-white antialiased">
        {children}
      </body>
    </html>
  )
}
