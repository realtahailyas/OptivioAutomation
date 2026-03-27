import { Check } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const features = [
  'AI voice agent trained on your business',
  '24/7 call answering & lead qualification',
  'Appointment booking into your calendar',
  'Full call transcripts & analytics',
  'Dedicated support & monthly optimization',
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
              Simple Pricing. Serious Results.
            </h2>
            <p className="text-[#94A3B8] font-dm text-lg">
              No contracts. No hidden fees. Cancel anytime.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="max-w-lg mx-auto bg-[#0F1F35] border border-[rgba(0,200,255,0.2)] rounded-2xl p-10 shadow-[0_0_60px_rgba(0,200,255,0.07)]">
            <div className="text-center mb-8 pb-8 border-b border-[rgba(0,200,255,0.1)]">
              <p className="text-[#94A3B8] font-dm text-sm mb-2">Starting at</p>
              <div className="font-sora font-bold text-white">
                <span className="text-6xl text-[#00C8FF]">$500</span>
                <span className="text-2xl">/month</span>
              </div>
              <p className="text-[#94A3B8] font-dm mt-3 text-sm">
                One-time setup fee from $1,500
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[rgba(0,200,255,0.15)] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check size={11} className="text-[#00C8FF]" />
                  </div>
                  <span className="text-white font-dm">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://calendly.com/optivioautomation/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-[#00C8FF] to-[#00A3FF] text-[#0A1628] font-sora font-bold text-base px-8 py-4 rounded-lg text-center transition-all duration-300 shadow-[0_0_25px_rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.5)] hover:scale-105 mb-4"
            >
              Book a Free Demo →
            </a>
            <p className="text-[#94A3B8] font-dm text-sm text-center">
              Custom packages available for multi-location businesses
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
