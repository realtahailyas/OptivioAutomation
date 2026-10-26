import { Check, X } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const industries = [
  'Dental Clinics',
  'HVAC Companies',
  'Med Spas',
  'Real Estate',
  'Law Firms',
  'Plumbing',
  'Roofing',
]

const traditional = [
  { label: '£2,200/mo', strike: true },
  { label: '8hrs/day only', strike: false },
  { label: '1 call at a time', strike: false },
  { label: 'Sick days & vacations', strike: false },
  { label: '£25,000+ yearly cost', strike: false },
]

const ai = [
  'Starting at £299/mo',
  '24/7/365',
  'Unlimited concurrent calls',
  'Never calls in sick',
  'Setup in 5 days',
]

export default function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#0F1F35]/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl text-white text-center mb-16">
            Built for Service Businesses
            <br className="hidden sm:block" /> That Run on Phone Calls.
          </h2>
        </AnimatedSection>

        {/* Industry Badges */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {industries.map((industry) => (
              <span
                key={industry}
                className="bg-[#0A1628] border border-[rgba(0,200,255,0.2)] text-[#94A3B8] font-dm text-sm px-5 py-2.5 rounded-full hover:border-[#00C8FF] hover:text-white transition-all duration-200 cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* ROI Comparison */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Traditional — muted */}
            <div className="bg-[#060E1A] border border-[rgba(148,163,184,0.08)] rounded-2xl p-8">
              <h3 className="font-sora font-semibold text-lg text-white/40 mb-6">
                Traditional Receptionist
              </h3>
              <div className="space-y-4">
                {traditional.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.15)] flex items-center justify-center flex-shrink-0">
                      <X size={11} className="text-red-400/60" />
                    </div>
                    <span className={`font-dm text-white/50 ${item.strike ? 'line-through' : ''}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI — highlighted */}
            <div className="bg-[#0F1F35] border border-[rgba(0,200,255,0.3)] rounded-2xl p-8 shadow-[0_0_30px_rgba(0,200,255,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#00C8FF] text-[#0A1628] font-sora font-bold text-xs px-3 py-1.5 rounded-bl-xl animate-pulse">
                RECOMMENDED
              </div>
              <h3 className="font-sora font-semibold text-lg text-white mb-6">
                Optivio AI Agent
              </h3>
              <div className="space-y-4">
                {ai.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[rgba(0,200,255,0.15)] flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-[#00C8FF]" />
                    </div>
                    <span className="text-white font-dm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
