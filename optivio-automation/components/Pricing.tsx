import { Check } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const tiers = [
  {
    name: 'Starter',
    setup: '£499 setup',
    monthly: '£299',
    bestFor: 'Single-location practices, after-hours coverage',
    features: [
      'AI receptionist 24/7',
      'Up to 500 minutes/month',
      'Appointment booking',
      'FAQ handling',
      'Email transcripts of every call',
      'Monthly performance report',
    ],
    cta: 'Start with Starter',
    highlighted: false,
  },
  {
    name: 'Pro',
    setup: '£799 setup',
    monthly: '£499',
    bestFor: 'Growing practices wanting full automation',
    features: [
      'Everything in Starter',
      'Up to 1,200 minutes/month',
      'Insurance verification',
      'Outbound recall campaigns',
      'Emergency triage',
      'Calendar integration (Dentally, Cliniko, SOE)',
      'Priority support',
    ],
    cta: 'Choose Pro',
    highlighted: true,
  },
  {
    name: 'Scale',
    setup: '£1,499 setup',
    monthly: '£899',
    bestFor: 'Multi-location practices, group dental',
    features: [
      'Everything in Pro',
      'Unlimited minutes',
      'Multi-location routing',
      'Custom integrations',
      'Dedicated account manager',
      'Quarterly strategy review',
    ],
    cta: 'Talk to Sales',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-[#00C8FF] font-sora text-sm font-semibold tracking-widest uppercase mb-4 block">
              Pricing
            </span>
            <h2 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-4">
              Simple pricing. No hidden fees. Cancel anytime.
            </h2>
            <p className="text-[#94A3B8] font-dm text-lg">
              One-time setup fee plus a monthly retainer. 30 days notice to cancel.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 0.1}>
              <div
                className={`relative bg-[#0F1F35] rounded-2xl p-8 h-full flex flex-col ${
                  tier.highlighted
                    ? 'border border-[rgba(0,200,255,0.3)] shadow-[0_0_60px_rgba(0,200,255,0.12)]'
                    : 'border border-[rgba(0,200,255,0.1)] shadow-[0_0_40px_rgba(0,200,255,0.05)]'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00C8FF] to-[#00A3FF] text-[#0A1628] font-sora font-bold text-xs px-4 py-1.5 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-6 pb-6 border-b border-[rgba(0,200,255,0.1)]">
                  <h3 className="font-sora font-bold text-xl text-white mb-3">{tier.name}</h3>
                  <div className="font-sora font-bold text-white">
                    <span className="text-5xl text-[#00C8FF]">{tier.monthly}</span>
                    <span className="text-xl">/month</span>
                  </div>
                  <p className="text-[#94A3B8] font-dm mt-2 text-sm">{tier.setup}</p>
                  <p className="text-[#94A3B8] font-dm text-xs mt-3 leading-relaxed">
                    Best for: {tier.bestFor}
                  </p>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[rgba(0,200,255,0.15)] flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check size={11} className="text-[#00C8FF]" />
                      </div>
                      <span className="text-white font-dm text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://calendly.com/optivioautomation/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full font-sora font-bold text-base px-6 py-3.5 rounded-lg text-center transition-all duration-300 ${
                    tier.highlighted
                      ? 'bg-gradient-to-r from-[#00C8FF] to-[#00A3FF] text-[#0A1628] shadow-[0_0_25px_rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.5)] hover:scale-105'
                      : 'bg-[#0A1628] text-white border border-[rgba(0,200,255,0.3)] hover:border-[#00C8FF] hover:bg-[#0A1628]/80'
                  }`}
                >
                  {tier.cta} →
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-[#94A3B8] font-dm text-sm text-center mt-12 max-w-2xl mx-auto leading-relaxed">
            Compare to a UK dental receptionist (£25,000/year + benefits). Our Pro plan replaces
            60–70% of front-desk phone work — for less than 1/4 the cost.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
