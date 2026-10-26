'use client'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-16 md:py-24 pt-24 md:pt-32">
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.07)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.04)_0%,transparent_70%)]" />
        {/* Fix 7: Atmospheric glow blob behind headline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00C8FF] rounded-full opacity-[0.05] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#0F1F35] border border-[rgba(0,200,255,0.2)] rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse" />
          <span className="text-[#94A3B8] text-sm font-dm">AI Receptionists for UK Dental Practices</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.15] md:leading-[1.1] lg:leading-[1.05] text-balance max-w-4xl mx-auto"
        >
          <span className="bg-gradient-to-b from-white via-white to-[#94A3B8] bg-clip-text text-transparent">
            UK Dental Practices Lose £4,000+ Every Month From Missed Calls
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mt-6 font-dm leading-relaxed"
        >
          AI Receptionist that answers every call, books appointments instantly, and handles
          after-hours emergencies — 24/7. Setup in under 5 days.
        </motion.p>

        {/* Value Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center mt-8 mb-8 text-sm md:text-base text-slate-300 font-dm"
        >
          <span className="flex items-center justify-center gap-2">
            <CheckCircle2 size={18} className="text-[#5BB8D4]" />
            Books appointments instantly
          </span>
          <span className="flex items-center justify-center gap-2">
            <CheckCircle2 size={18} className="text-[#5BB8D4]" />
            Handles after-hours &amp; emergencies
          </span>
          <span className="flex items-center justify-center gap-2">
            <CheckCircle2 size={18} className="text-[#5BB8D4]" />
            Runs automated recall campaigns
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="https://calendly.com/optivioautomation/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-[#00C8FF] to-[#00A3FF] text-[#0A1628] font-sora font-semibold text-base md:text-lg px-8 py-4 rounded-lg text-center transition-all duration-300 shadow-[0_0_25px_rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.5)] hover:scale-105"
            >
              Hear The AI Answer Calls Live →
            </a>
            <button
              onClick={() => scrollTo('demo')}
              className="w-full sm:w-auto bg-transparent text-white font-sora font-semibold text-sm md:text-base px-6 py-3.5 rounded-lg border border-[rgba(91,184,212,0.4)] hover:border-[#5BB8D4] hover:bg-[rgba(91,184,212,0.08)] transition-all duration-300"
            >
              Watch Demo Video
            </button>
          </div>
          <button
            onClick={() => scrollTo('pricing')}
            className="text-[#94A3B8] hover:text-white font-dm text-sm transition-colors flex items-center gap-2 group"
          >
            View Pricing
            <span className="group-hover:translate-y-1 transition-transform inline-block">↓</span>
          </button>
        </motion.div>

        {/* Micro-line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-xs md:text-sm text-slate-400 mt-6 font-dm text-center"
        >
          Built specifically for UK dental practices · GDPR compliant · Cancel anytime
        </motion.p>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-[rgba(0,200,255,0.1)] pt-10 mt-16"
        >
          {[
            { stat: '62%', label: 'of calls to UK dental practices go unanswered during peak hours' },
            { stat: '85%', label: 'of callers who hit voicemail never call back' },
            { stat: '£800', label: 'average lost revenue per missed new-patient call' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0F1F35] border border-[rgba(0,200,255,0.1)] rounded-xl p-6 text-left"
            >
              <div className="font-sora font-bold text-3xl text-[#00C8FF] mb-2">{item.stat}</div>
              <div className="text-[#94A3B8] text-sm font-dm leading-snug">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
