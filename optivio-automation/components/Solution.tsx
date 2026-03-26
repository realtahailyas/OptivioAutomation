import { Phone, CalendarCheck, MessageSquare, BarChart3 } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const features = [
  {
    Icon: Phone,
    title: 'Answers Every Call',
    text: '24/7/365. No hold music. No voicemail. Every call answered in natural, human-like voice.',
  },
  {
    Icon: CalendarCheck,
    title: 'Books Appointments',
    text: 'AI qualifies the caller and books directly into your Google Calendar or Outlook. No double-booking.',
  },
  {
    Icon: MessageSquare,
    title: 'Handles FAQs',
    text: 'Pricing, hours, services, location — your AI knows your business and answers accurately every time.',
  },
  {
    Icon: BarChart3,
    title: 'Full Call Analytics',
    text: "Every call logged with transcript, caller info, and outcome. Know exactly what's happening on your phones.",
  },
]

export default function Solution() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0F1F35]/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-[#00C8FF] font-sora text-sm font-semibold tracking-widest uppercase mb-4 block">
              The Solution
            </span>
            <h2 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-6">
              An AI Receptionist
              <br />
              That Never Sleeps.
            </h2>
            <p className="text-[#94A3B8] font-dm text-lg max-w-2xl mx-auto leading-relaxed">
              Our AI voice agents answer every call in under 2 seconds. They sound natural, handle
              real conversations, and book appointments directly into your calendar.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-[#0A1628] border border-[rgba(0,200,255,0.1)] rounded-2xl p-8 h-full hover:border-[rgba(0,200,255,0.25)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,200,255,0.1)] flex items-center justify-center mb-6 group-hover:bg-[rgba(0,200,255,0.15)] transition-colors">
                  <feature.Icon size={24} className="text-[#00C8FF]" />
                </div>
                <h3 className="font-sora font-bold text-xl text-white mb-3">{feature.title}</h3>
                <p className="text-[#94A3B8] font-dm leading-relaxed">{feature.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
