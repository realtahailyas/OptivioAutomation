import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import DemoVideo from '@/components/DemoVideo'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { buildMetadata, breadcrumb } from '@/lib/seo'
import { faqs } from '@/lib/voice-faq'
import { SITE_URL } from '@/lib/site'

const TITLE = 'AI Receptionist for UK Dental Practices'
const DESCRIPTION =
  'AI voice agents that answer calls for UK dental clinics: 24/7 booking, recall campaigns and emergency triage, built to be GDPR aware. Plans from £299 a month.'

export const metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: '/ai-voice-agent' })

const plans = [
  { name: 'Starter', price: '299', setup: '499', description: 'Single-location practices, after-hours coverage. Up to 500 minutes/month.' },
  { name: 'Pro', price: '499', setup: '799', description: 'Growing practices wanting full automation. Up to 1,200 minutes/month, insurance verification, recall campaigns, emergency triage.' },
  { name: 'Scale', price: '899', setup: '1499', description: 'Multi-location practices and group dental. Unlimited minutes, multi-location routing, custom integrations, dedicated account manager.' },
]


const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/ai-voice-agent#service`,
    name: TITLE,
    serviceType: 'AI voice receptionist',
    url: `${SITE_URL}/ai-voice-agent`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    description:
      'A 24/7 AI receptionist for UK dental practices. Answers calls, books appointments, runs recall campaigns and handles emergency triage.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Receptionist Plans',
      itemListElement: plans.map((p) => ({
        '@type': 'Offer',
        name: p.name,
        description: p.description,
        price: p.price,
        priceCurrency: 'GBP',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: p.price, priceCurrency: 'GBP', billingDuration: 'P1M' },
        addOn: { '@type': 'Offer', name: 'One-time setup fee', price: p.setup, priceCurrency: 'GBP' },
      })),
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  },
  breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'AI Voice Agent', path: '/ai-voice-agent' },
  ]),
]

export default function AIVoiceAgentPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <JsonLd data={jsonLd} />
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <DemoVideo />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
