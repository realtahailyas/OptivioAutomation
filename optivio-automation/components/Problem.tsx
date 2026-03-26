import { PhoneMissed, Clock, UserMinus } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const problems = [
  {
    Icon: PhoneMissed,
    title: 'Missed Calls = Missed Revenue',
    text: "The average service business misses 30-40% of incoming calls. At $200+ per job, that's thousands lost every month.",
  },
  {
    Icon: Clock,
    title: 'After-Hours Means No-Hours',
    text: "62% of customer calls happen outside business hours. Your voicemail isn't closing deals at 9 PM.",
  },
  {
    Icon: UserMinus,
    title: "Customers Don't Wait",
    text: "A customer who hits voicemail calls your competitor within 60 seconds. They're not leaving a message — they're leaving you.",
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
              Your Phone Is Ringing.
              <br />
              Nobody&apos;s Answering.
            </h2>
            <p className="text-[#94A3B8] font-dm text-lg max-w-2xl mx-auto leading-relaxed">
              Right now, your competitors are picking up the customers you&apos;re losing to
              voicemail. Every unanswered call is revenue walking out the door.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="bg-[#0F1F35] border border-[rgba(0,200,255,0.1)] rounded-2xl p-8 h-full hover:border-[rgba(0,200,255,0.25)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,200,255,0.1)] flex items-center justify-center mb-6 group-hover:bg-[rgba(0,200,255,0.15)] transition-colors">
                  <problem.Icon size={24} className="text-[#00C8FF]" />
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
