import AnimatedSection from './AnimatedSection'

export default function DemoVideo() {
  return (
    <section id="demo" className="py-24 px-4 sm:px-6 bg-[#0F1F35]/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#0F1F35] border border-[rgba(0,200,255,0.2)] rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse" />
              <span className="text-[#94A3B8] text-sm font-dm">See It In Action</span>
            </div>
            <h2 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-6">
              Watch Our AI Answer a Real Call
            </h2>
            <p className="text-[#94A3B8] font-dm text-lg max-w-2xl mx-auto leading-relaxed">
              Live demo — watch our AI receptionist pick up a call, qualify a lead, and book an
              appointment in real time.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-[rgba(91,184,212,0.3)] shadow-[0_0_40px_rgba(91,184,212,0.12)]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/kQGxPADbVt8"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
