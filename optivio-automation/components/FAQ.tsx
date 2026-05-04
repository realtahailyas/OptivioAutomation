'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const faqs = [
  {
    q: "Will my patients know they're talking to an AI?",
    a: "We're transparent — the AI introduces itself as a virtual assistant. But the conversation feels completely natural. Most patients don't comment on it; they just get their appointment booked.",
  },
  {
    q: "What if the AI can't handle a call?",
    a: "Complex cases are routed to your team's mobile or a designated voicemail. The AI never pretends to know something it doesn't.",
  },
  {
    q: 'Is this GDPR compliant?',
    a: 'Yes. We use UK/EU-based servers, encrypted call recordings, and compliant data retention policies. Full DPA agreement provided.',
  },
  {
    q: 'Can it integrate with our practice management software?',
    a: 'Yes — we support Dentally, NHS systems, Cliniko, SOE, and most major PMS platforms. Custom integrations available on Pro and Scale tiers.',
  },
  {
    q: 'What languages does it speak?',
    a: 'British English by default. Other languages available on request.',
  },
  {
    q: 'What if I want to cancel?',
    a: 'No long contracts. 30 days notice. We export all your call data and transcripts before disconnecting.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 bg-[#0F1F35]/30">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-[#00C8FF] font-sora text-sm font-semibold tracking-widest uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="font-sora font-bold text-4xl sm:text-5xl text-white">
              Questions? We&apos;ve Got Answers.
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="bg-[#0A1628] border border-[rgba(0,200,255,0.1)] rounded-xl overflow-hidden hover:border-[rgba(0,200,255,0.2)] transition-colors duration-200">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-sora font-semibold text-white text-base pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#00C8FF] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? 'max-h-60' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-[#94A3B8] font-dm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
