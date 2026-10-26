import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'GDPR & Data Processing Agreement | Optivio Automation',
  description:
    'GDPR compliance and Data Processing Agreement (DPA) for Optivio Automation, the AI receptionist for UK dental practices.',
}

export default function GdprPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-4">
            GDPR &amp; Data Processing Agreement
          </h1>
          <p className="text-[#94A3B8] font-dm text-sm mb-12">Last updated: 6 May 2026</p>

          <div className="space-y-8 text-[#CBD5E1] font-dm leading-relaxed">
            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">Overview</h2>
              <p>
                This Data Processing Agreement (&ldquo;DPA&rdquo;) forms part of the agreement
                between you (the &ldquo;Controller&rdquo;) and Optivio Automation (the
                &ldquo;Processor&rdquo;) when we process personal data on your behalf to deliver
                the AI receptionist service. It is designed to comply with UK GDPR and the UK Data
                Protection Act 2018.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">1. Roles</h2>
              <p>
                Your dental practice is the data controller for patient personal data. Optivio
                Automation is the data processor. Each party will comply with its obligations
                under UK GDPR.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">
                2. Subject matter and duration
              </h2>
              <p>
                We process personal data for the duration of your subscription, plus a 30-day
                wind-down for export and deletion. The subject matter is the operation of an AI
                receptionist for inbound and outbound calls.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">
                3. Categories of data
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Caller name, telephone number, and contact details.</li>
                <li>Appointment requests, reasons for the call, and booking metadata.</li>
                <li>Call recordings and transcripts.</li>
                <li>
                  Limited special-category data (health information) where the patient discloses it
                  during a call. We process such data only as necessary to deliver the booking
                  request.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">4. Our obligations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process personal data only on your documented instructions.</li>
                <li>
                  Ensure personnel with access are subject to appropriate confidentiality
                  obligations.
                </li>
                <li>
                  Implement technical and organisational measures appropriate to the risk
                  (encryption in transit and at rest, access controls, audit logs).
                </li>
                <li>
                  Notify you without undue delay (and within 72 hours) of becoming aware of any
                  personal data breach.
                </li>
                <li>
                  Assist you in responding to data subject requests and in fulfilling your DPIA and
                  prior-consultation obligations.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">5. Sub-processors</h2>
              <p>
                We engage sub-processors for telephony, cloud hosting, AI model inference, and
                payments. We maintain a current list of sub-processors and notify you of changes
                with the opportunity to object. All sub-processors are bound by terms equivalent to
                this DPA.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">
                6. International transfers
              </h2>
              <p>
                We aim to keep all processing within the UK or EEA. Where transfers outside the
                UK/EEA occur, we rely on UK International Data Transfer Agreements or Standard
                Contractual Clauses with the UK Addendum.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">
                7. Deletion and return
              </h2>
              <p>
                On termination you may export your data within the wind-down window. After that
                period we securely delete or anonymise personal data unless retention is required
                by law.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">8. Audit</h2>
              <p>
                On reasonable notice and at your cost we will provide information necessary to
                demonstrate compliance with this DPA, including the latest third-party audit
                reports we hold.
              </p>
            </section>

            <section>
              <h2 className="font-sora font-bold text-2xl text-white mb-3">9. Contact</h2>
              <p>
                Data protection enquiries:{' '}
                <a
                  href="mailto:privacy@optivioautomation.com"
                  className="text-[#00C8FF] hover:underline"
                >
                  privacy@optivioautomation.com
                </a>
                . You may also contact the Information Commissioner&rsquo;s Office (ICO) at
                ico.org.uk.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
