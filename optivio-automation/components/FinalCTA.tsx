import AnimatedSection from './AnimatedSection'

export default function FinalCTA() {
  return (
    <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.07)_0%,transparent_65%)]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-sora font-bold text-4xl sm:text-6xl text-white mb-6 leading-tight">
            Stop Losing Customers
            <br />
            to Voicemail.
          </h2>
          <p className="text-[#94A3B8] font-dm text-xl mb-10 leading-relaxed">
            Book a 15-minute demo. See your AI receptionist in action. No commitment.
          </p>
          <a
            href="https://calendly.com/optivioautomation/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#00C8FF] to-[#00A3FF] text-[#0A1628] font-sora font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.5)] hover:scale-105 mb-8"
          >
            Book Your Free Demo →
          </a>
          <div>
            <a
              href="mailto:hello@optivioautomation.com"
              className="text-[#94A3B8] hover:text-[#00C8FF] font-dm transition-colors"
            >
              hello@optivioautomation.com
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
