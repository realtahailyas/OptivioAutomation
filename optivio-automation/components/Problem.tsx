import { PhoneMissed, Clock, UserMinus } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const problems = [
  {
    Icon: PhoneMissed,
    stat: '62%',
    title: 'Calls Go Unanswered',
    text: 'of calls to UK dental practices go unanswered during peak hours. Your reception team is stretched thin between patients, payments, and the diary.',
  },
  {
    Icon: Clock,
    stat: '85%',
    title: 'Never Call Back',
    text: 'of callers who hit voicemail never call back. They ring the next practice on Google instead — and book there.',
  },
  {
    Icon: UserMinus,
    stat: '£800',
    title: 'Lost Per Missed Call',
    text: 'average lost revenue per missed new-patient call. Multiply that across a month and you see why missed calls are the costliest line on your P&L.',
  },
]

export default function Problem() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-[#00C8FF] font-sora text-sm font-semibold tracking-widest uppercase mb-4 block">
              The Problem
            </span>
            <h2 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-6">
              Every missed call is a patient
              <br />
              walking to your competitor.
            </h2>
            <p className="text-[#94A3B8] font-dm text-lg max-w-2xl mx-auto leading-relaxed">
              Your reception team is brilliant — but they&apos;re stretched. They can&apos;t answer
              phones while checking patients in, processing payments, and managing the diary. After
              5pm, calls just disappear. We fix that.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="bg-[#0F1F35] border border-[rgba(0,200,255,0.1)] rounded-2xl p-8 h-full hover:border-[rgba(0,200,255,0.25)] transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,200,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(0,200,255,0.15)] transition-colors">
                    <problem.Icon size={24} className="text-[#00C8FF]" />
                  </div>
                  <span className="font-sora font-bold text-4xl text-[#00C8FF]">{problem.stat}</span>
                </div>
                <h3 className="font-sora font-bold text-xl text-white mb-3">{problem.title}</h3>
                <p className="text-[#94A3B8] font-dm leading-relaxed">{problem.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
