import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Optivio Automation',
  description:
    'Terms of Service for the Optivio Automation AI receptionist service for UK dental practices.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-[#94A3B8] font-dm text-sm mb-12">Last updated: 6 May 2026</p>

          <div className="space-y-8 text-[#CBD5E1] font-dm leading-relaxed">
            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">1. Agreement</h2>
              <p>
                These Terms govern your use of the Optivio Automation AI receptionist service
                (&ldquo;Service&rdquo;). By signing up or using the Service you agree to these
                Terms. If you do not agree, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">2. The service</h2>
              <p>
                We provide an AI receptionist that answers, qualifies, and books calls on behalf of
                your dental practice, plus optional automated recall and post-call summaries.
                Specific features depend on the plan you select.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">3. Fees</h2>
              <p>
                Setup fees are billed on signing. Monthly fees are billed monthly in advance.
                Pricing is in GBP and exclusive of VAT. We may revise pricing on 30 days&rsquo;
                notice; existing contracts retain their pricing for the remainder of the current
                term.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">4. Cancellation</h2>
              <p>
                You may cancel at any time. Cancellation takes effect at the end of the current
                billing month and we do not refund partial months. There is no minimum-term
                lock-in.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">5. Acceptable use</h2>
              <p>
                You must not use the Service for unlawful purposes, to send unsolicited marketing
                that breaches Ofcom regulations or the TPS, or in a way that violates the rights of
                third parties. You are responsible for the accuracy of information you provide for
                AI training (e.g. pricing, services, opening hours).
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">6. Liability</h2>
              <p>
                The Service is provided &ldquo;as is&rdquo;. To the maximum extent permitted by
                law, our aggregate liability under these Terms is limited to the fees paid in the
                12 months preceding the event giving rise to liability. Nothing in these Terms
                limits liability for death or personal injury caused by negligence, or for fraud.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">7. Data protection</h2>
              <p>
                Our handling of personal data is governed by our{' '}
                <a href="/privacy" className="text-[#00C8FF] hover:underline">
                  Privacy Policy
                </a>{' '}
                and our{' '}
                <a href="/gdpr" className="text-[#00C8FF] hover:underline">
                  Data Processing Agreement
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">8. Governing law</h2>
              <p>
                These Terms are governed by the laws of England and Wales, and the courts of
                England and Wales have exclusive jurisdiction over any dispute.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">9. Contact</h2>
              <p>
                Questions about these Terms? Email{' '}
                <a
                  href="mailto:hello@optivioautomation.com"
                  className="text-[#00C8FF] hover:underline"
                >
                  hello@optivioautomation.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
