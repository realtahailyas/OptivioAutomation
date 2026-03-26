'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const faqs = [
  {
    q: 'Does the AI actually sound human?',
    a: "Yes. Our AI uses the latest voice synthesis technology with sub-second response times. Callers typically can't tell the difference. We'll demo it for you on our call.",
  },
  {
    q: "What if the AI can't handle a question?",
    a: "The AI is trained to recognize when it's out of its depth. It seamlessly transfers the call to your team with full context of what was discussed — no awkward handoffs.",
  },
  {
    q: 'How long does setup take?',
    a: 'Most businesses are fully live within 3-5 business days. We handle everything — training the AI, configuring call flows, connecting to your calendar, and testing.',
  },
  {
    q: 'Do I need to change my phone number?',
    a: "No. We either set up a new dedicated number or forward your existing line to the AI. Your customers won't notice any change except better service.",
  },
  {
    q: 'What happens after hours?',
    a: "That's the whole point. Your AI works 24/7/365 — nights, weekends, holidays. Every call answered, every lead captured, every appointment booked.",
  },
  {
    q: 'Can I try it before committing?',
    a: "Absolutely. Book a free demo and we'll show you a live AI agent built for your specific business niche. You'll hear exactly what your customers will experience.",
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
