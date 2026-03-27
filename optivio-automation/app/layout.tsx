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
    default: 'Optivio Automation | AI Voice Agents That Never Miss a Call',
    template: '%s | Optivio Automation',
  },
  description:
    'AI receptionists for service businesses. Answer every call 24/7, qualify leads, and book appointments automatically. Dental clinics, HVAC, med spas. Starting at $500/mo.',
  keywords: [
    'AI voice agent',
    'AI receptionist',
    'AI phone answering',
    'dental clinic AI receptionist',
    'HVAC AI answering service',
    'med spa AI receptionist',
    'missed calls solution',
    '24/7 call answering',
    'AI appointment booking',
    'virtual receptionist for small business',
    'automated phone answering',
    'AI call handling',
  ],
  authors: [{ name: 'Taha Ilyas', url: 'https://tahailyas.com' }],
  creator: 'Optivio Automation',
  publisher: 'Optivio Automation',
  formatDetection: { telephone: true, email: true },
  alternates: { canonical: 'https://optivioautomation.com' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://optivioautomation.com',
    siteName: 'Optivio Automation',
    title: 'AI Voice Agents That Never Miss a Call | Optivio Automation',
    description:
      'Stop losing customers to voicemail. AI receptionists that answer 24/7, qualify leads, and book appointments. Built for dental clinics, HVAC, med spas. Starting at $500/mo.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Optivio Automation - AI Voice Agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Agents That Never Miss a Call | Optivio Automation',
    description:
      'Stop losing customers to voicemail. AI receptionists that answer 24/7, qualify leads, and book appointments.',
    images: ['/og-image.png'],
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://optivioautomation.com/#organization',
      name: 'Optivio Automation',
      url: 'https://optivioautomation.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://optivioautomation.com/logo.png',
      },
      founder: {
        '@type': 'Person',
        name: 'Taha Ilyas',
        url: 'https://tahailyas.com',
        sameAs: ['https://linkedin.com/in/tahailyas'],
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@optivioautomation.com',
        contactType: 'sales',
        availableLanguage: 'English',
      },
      sameAs: [],
      description:
        'AI voice agent agency providing 24/7 AI receptionists for service businesses including dental clinics, HVAC companies, and med spas.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://optivioautomation.com/#website',
      url: 'https://optivioautomation.com',
      name: 'Optivio Automation',
      publisher: { '@id': 'https://optivioautomation.com/#organization' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://optivioautomation.com/#webpage',
      url: 'https://optivioautomation.com',
      name: 'AI Voice Agents That Never Miss a Call | Optivio Automation',
      isPartOf: { '@id': 'https://optivioautomation.com/#website' },
      about: { '@id': 'https://optivioautomation.com/#organization' },
      description:
        'AI receptionists for service businesses. Answer every call 24/7, qualify leads, and book appointments automatically.',
    },
    {
      '@type': 'Service',
      '@id': 'https://optivioautomation.com/#service',
      name: 'AI Voice Agent Service',
      provider: { '@id': 'https://optivioautomation.com/#organization' },
      serviceType: 'AI Voice Agent / AI Receptionist',
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'Canada' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Voice Agent Packages',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'AI Voice Agent Starter',
            price: '500',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '500',
              priceCurrency: 'USD',
              billingDuration: 'P1M',
            },
          },
        ],
      },
      description:
        '24/7 AI receptionist that answers calls, qualifies leads, books appointments, and handles FAQs for service businesses.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://optivioautomation.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does the AI actually sound human?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our AI uses the latest voice synthesis technology with sub-second response times. Callers typically cannot tell the difference. We demo it live on our call.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if the AI cannot handle a question?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The AI recognizes when it is out of its depth and seamlessly transfers the call to your team with full context of what was discussed.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does setup take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most businesses are fully live within 3-5 business days. We handle everything including training the AI, configuring call flows, connecting to your calendar, and testing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to change my phone number?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. We either set up a new dedicated number or forward your existing line to the AI. Your customers will not notice any change except better service.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens after hours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your AI works 24/7/365 including nights, weekends, and holidays. Every call answered, every lead captured, every appointment booked.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I try it before committing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. Book a free demo and we will show you a live AI agent built for your specific business niche. You will hear exactly what your customers will experience.',
          },
        },
      ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A1628] font-dm text-white antialiased">
        {children}
      </body>
    </html>
  )
}
