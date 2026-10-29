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
    default: 'AI Receptionist for UK Dental Practices | Optivio Automation',
    template: '%s | Optivio Automation',
  },
  description:
    'Stop losing patients to missed calls. AI receptionists for UK dental clinics. 24/7 booking, recall campaigns, GDPR compliant. From £299/mo.',
  keywords: [
    'AI voice agent',
    'AI receptionist',
    'AI phone answering',
    'dental clinic AI receptionist',
    'UK dental AI receptionist',
    'dental practice call answering',
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
    title: 'AI Receptionist for UK Dental Practices | Optivio Automation',
    description:
      'Stop losing patients to missed calls. AI receptionists for UK dental clinics. 24/7 booking, recall campaigns, GDPR compliant. From £299/mo.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Optivio Automation — AI voice agents for service businesses',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Receptionist for UK Dental Practices | Optivio Automation',
    description:
      'Stop losing patients to missed calls. AI receptionists for UK dental clinics. 24/7 booking, recall campaigns, GDPR compliant. From £299/mo.',
    images: {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Optivio Automation — AI voice agents for service businesses',
    },
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

// Android apps published under the Optivio Automation Google Play developer account
const apps = [
  {
    id: 'https://tchess.app/#app',
    name: 'TChess',
    url: 'https://tchess.app',
    play: 'https://play.google.com/store/apps/details?id=app.tchess',
    category: 'GameApplication',
  },
  {
    id: 'https://optivioautomation.com/#dareclock',
    name: 'DareClock',
    url: 'https://play.google.com/store/apps/details?id=com.dareclock',
    play: 'https://play.google.com/store/apps/details?id=com.dareclock',
    category: 'LifestyleApplication',
  },
  {
    id: 'https://getcertforge.app/#app',
    name: 'CertForge',
    url: 'https://getcertforge.app',
    play: 'https://play.google.com/store/apps/details?id=com.getcertforge.app',
    category: 'EducationalApplication',
  },
  {
    id: 'https://optivioautomation.com/#brick-breaker-power-rush',
    name: 'Brick Breaker: Power Rush',
    url: 'https://play.google.com/store/apps/details?id=com.brickrush',
    play: 'https://play.google.com/store/apps/details?id=com.brickrush',
    category: 'GameApplication',
  },
]

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
        '@id': 'https://tahailyas.com/#person',
        name: 'Taha Ilyas',
        url: 'https://tahailyas.com',
        sameAs: [
          'https://www.instagram.com/tahailyasofficial',
          'https://www.linkedin.com/in/tahailyas/',
          'https://www.facebook.com/tahailyas',
          'https://github.com/realtahailyas',
        ],
        jobTitle: 'Founder & CEO',
        worksFor: [
          { '@id': 'https://optivioautomation.com/#organization' },
          { '@id': 'https://optivioautomation.com/#optivio-media' },
        ],
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@optivioautomation.com',
        contactType: 'sales',
        availableLanguage: 'English',
      },
      sameAs: [
        'https://www.instagram.com/optivioautomation',
        'https://www.facebook.com/optivioautomation',
        'https://www.linkedin.com/company/optivoautomation',
        'https://play.google.com/store/apps/developer?id=Optivio+Automation',
      ],
      description:
        'UK agency providing 24/7 AI receptionists for dental practices and other service businesses.',
      areaServed: [{ '@type': 'Country', name: 'United Kingdom' }],
    },
    {
      '@type': 'Organization',
      '@id': 'https://optivioautomation.com/#optivio-media',
      name: 'Optivio Media',
      url: 'https://optiviomedia.online',
      description: 'Meta Ads agency specializing in scaling e-commerce brands.',
      sameAs: [
        'https://www.instagram.com/optiviomedia',
      ],
      founder: { '@id': 'https://tahailyas.com/#person' },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://optivioautomation.com/#chatbot-tool',
      name: 'Optivio Chatbot',
      url: 'https://chatbot.tahailyas.com',
      applicationCategory: 'BusinessApplication',
      description: 'AI chatbot tool for businesses.',
      creator: { '@id': 'https://tahailyas.com/#person' },
    },
    ...apps.map((app) => ({
      '@type': 'MobileApplication',
      '@id': app.id,
      name: app.name,
      url: app.url,
      installUrl: app.play,
      sameAs: [app.play],
      operatingSystem: 'Android',
      applicationCategory: app.category,
      publisher: { '@id': 'https://optivioautomation.com/#organization' },
      author: { '@id': 'https://tahailyas.com/#person' },
    })),
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
      name: 'AI Receptionist for UK Dental Practices | Optivio Automation',
      isPartOf: { '@id': 'https://optivioautomation.com/#website' },
      about: { '@id': 'https://optivioautomation.com/#organization' },
      description:
        'AI receptionists for UK dental clinics. 24/7 booking, recall campaigns, GDPR compliant. From £299/mo.',
    },
    {
      '@type': 'Service',
      '@id': 'https://optivioautomation.com/#service',
      name: 'AI Receptionist for UK Dental Practices',
      provider: { '@id': 'https://optivioautomation.com/#organization' },
      serviceType: 'AI Receptionist for UK Dental Practices',
      category: 'Dental, Healthcare, UK Service Businesses',
      areaServed: [{ '@type': 'Country', name: 'United Kingdom' }],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Receptionist Plans',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Starter',
            description:
              'Single-location practices, after-hours coverage. Up to 500 minutes/month.',
            price: '299',
            priceCurrency: 'GBP',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '299',
              priceCurrency: 'GBP',
              billingDuration: 'P1M',
            },
            addOn: {
              '@type': 'Offer',
              name: 'One-time setup fee',
              price: '499',
              priceCurrency: 'GBP',
            },
          },
          {
            '@type': 'Offer',
            name: 'Pro',
            description:
              'Growing practices wanting full automation. Up to 1,200 minutes/month, insurance verification, recall campaigns, emergency triage.',
            price: '499',
            priceCurrency: 'GBP',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '499',
              priceCurrency: 'GBP',
              billingDuration: 'P1M',
            },
            addOn: {
              '@type': 'Offer',
              name: 'One-time setup fee',
              price: '799',
              priceCurrency: 'GBP',
            },
          },
          {
            '@type': 'Offer',
            name: 'Scale',
            description:
              'Multi-location practices and group dental. Unlimited minutes, multi-location routing, custom integrations, dedicated account manager.',
            price: '899',
            priceCurrency: 'GBP',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '899',
              priceCurrency: 'GBP',
              billingDuration: 'P1M',
            },
            addOn: {
              '@type': 'Offer',
              name: 'One-time setup fee',
              price: '1499',
              priceCurrency: 'GBP',
            },
          },
        ],
      },
      description:
        '24/7 AI receptionist for UK dental practices. Answers every call, books appointments, runs recall campaigns, handles emergency triage, and integrates with Dentally, Cliniko, SOE, and other PMS platforms.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://optivioautomation.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Will my patients know they're talking to an AI?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We're transparent — the AI introduces itself as a virtual assistant. But the conversation feels completely natural. Most patients don't comment on it; they just get their appointment booked.",
          },
        },
        {
          '@type': 'Question',
          name: "What if the AI can't handle a call?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Complex cases are routed to your team's mobile or a designated voicemail. The AI never pretends to know something it doesn't.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is this GDPR compliant?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We use UK/EU-based servers, encrypted call recordings, and compliant data retention policies. Full DPA agreement provided.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can it integrate with our practice management software?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — we support Dentally, NHS systems, Cliniko, SOE, and most major PMS platforms. Custom integrations available on Pro and Scale tiers.',
          },
        },
        {
          '@type': 'Question',
          name: 'What languages does it speak?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'British English by default. Other languages available on request.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I want to cancel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No long contracts. 30 days notice. We export all your call data and transcripts before disconnecting.',
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
