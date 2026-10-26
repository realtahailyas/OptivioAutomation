import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Optivio Automation',
  description:
    'How Optivio Automation collects, uses, and protects personal data for our AI receptionist service for UK dental practices.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#94A3B8] font-dm text-sm mb-12">Last updated: 6 May 2026</p>

          <div className="space-y-8 text-[#CBD5E1] font-dm leading-relaxed">
            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">1. Who we are</h2>
              <p>
                Optivio Automation (&ldquo;we&rdquo;, &ldquo;us&rdquo;) provides AI receptionist
                services to UK dental practices. We are a data controller for personal data
                collected through our website and a data processor for personal data handled on
                behalf of our practice clients. For all data protection enquiries, contact{' '}
                <a
                  href="mailto:privacy@optivioautomation.com"
                  className="text-[#00C8FF] hover:underline"
                >
                  privacy@optivioautomation.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">2. Data we collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact details you submit through our website or booking forms.</li>
                <li>
                  Call recordings, transcripts, and metadata processed by our AI receptionist on
                  behalf of our client practices.
                </li>
                <li>Usage data such as IP address, device, and browser for security and analytics.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">3. Lawful basis</h2>
              <p>
                We process personal data under UK GDPR and the UK Data Protection Act 2018. Our
                lawful bases are legitimate interest (operating our service), contract (delivering
                what you asked for), and consent (marketing communications, where applicable).
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">4. How we use data</h2>
              <p>
                To deliver and improve the AI receptionist service, route calls, book appointments
                in your practice management system, send appointment confirmations and recall
                messages, and handle billing and support.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">5. Data sharing</h2>
              <p>
                We share data only with sub-processors necessary to deliver the service (telephony
                providers, cloud hosting, AI model providers). All sub-processors are bound by
                contractual data protection terms and process data within the UK or EEA where
                possible.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">6. Retention</h2>
              <p>
                Call recordings and transcripts are retained for the duration of your contract plus
                30 days, unless your practice instructs us otherwise. Marketing data is retained
                until you withdraw consent.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">7. Your rights</h2>
              <p>
                Under UK GDPR you have the right to access, rectify, erase, restrict, port, and
                object to processing of your personal data. Email{' '}
                <a
                  href="mailto:privacy@optivioautomation.com"
                  className="text-[#00C8FF] hover:underline"
                >
                  privacy@optivioautomation.com
                </a>{' '}
                to exercise these rights. You may also lodge a complaint with the Information
                Commissioner&rsquo;s Office (ICO) at ico.org.uk.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">8. Updates</h2>
              <p>
                We may update this policy from time to time. The &ldquo;last updated&rdquo; date at
                the top reflects the most recent change.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
