import AnimatedSection from './AnimatedSection'

const steps = [
  {
    number: '01',
    title: 'We Build Your AI Agent',
    text: 'We train your AI on your business — services, pricing, FAQs, booking rules. Custom-built for your specific needs.',
  },
  {
    number: '02',
    title: 'Connect to Your Phone',
    text: 'We set up a dedicated business number or forward your existing line. Zero disruption to your operations.',
  },
  {
    number: '03',
    title: 'Never Miss a Call Again',
    text: 'Your AI answers every call, qualifies leads, books appointments, and sends you a summary. You focus on the work.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-[#00C8FF] font-sora text-sm font-semibold tracking-widest uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="font-sora font-bold text-4xl sm:text-5xl text-white">
              Live in 3 Days. Not 3 Months.
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-transparent via-[rgba(0,200,255,0.25)] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.2}>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="relative w-24 h-24 rounded-full bg-[#0F1F35] border-2 border-[rgba(0,200,255,0.3)] flex items-center justify-center mb-8 flex-shrink-0 shadow-[0_0_30px_rgba(0,200,255,0.12)]">
                    <span className="font-sora font-bold text-2xl text-[#00C8FF]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-sora font-bold text-2xl text-white mb-4">{step.title}</h3>
                  <p className="text-[#94A3B8] font-dm leading-relaxed text-base">{step.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
