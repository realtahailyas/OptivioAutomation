'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
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
          <span className="text-[#94A3B8] text-sm font-dm">AI Voice Agents for Service Businesses</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sora font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-6"
        >
          <span className="bg-gradient-to-b from-white via-white to-[#94A3B8] bg-clip-text text-transparent">
            Never Miss Another
            <br />
            Customer Call. Ever.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#94A3B8] text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-dm leading-relaxed"
        >
          AI voice agents that answer every call 24/7, qualify leads, and book appointments — so
          you never lose a customer to voicemail again.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#00C8FF] to-[#00A3FF] text-[#0A1628] font-sora font-bold text-base px-8 py-4 rounded-lg transition-all duration-300 shadow-[0_0_25px_rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.5)] hover:scale-105"
          >
            Book a Free Demo →
          </a>
          <button
            onClick={() => scrollTo('how-it-works')}
            className="text-[#94A3B8] hover:text-white font-dm text-base transition-colors flex items-center gap-2 group"
          >
            See How It Works
            <span className="group-hover:translate-y-1 transition-transform inline-block">↓</span>
          </button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-[rgba(0,200,255,0.1)] pt-10"
        >
          {[
            { stat: '85%', label: 'of callers who hit voicemail never call back' },
            {
              stat: '$1,200',
              label: 'average revenue lost per missed call in home services',
            },
            { stat: '24/7', label: 'coverage without hiring a single person' },
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
