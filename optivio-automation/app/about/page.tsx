import Link from 'next/link'
import { Github, Linkedin, Globe, Mail } from 'lucide-react'
import PageShell, { PageHeader, Section, btnGhost, card } from '@/components/hub/PageShell'
import JsonLd from '@/components/JsonLd'
import { buildMetadata, breadcrumb } from '@/lib/seo'
import { LINKS, SITE_URL } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'About Taha Ilyas and Optivio Automation',
  description:
    'Optivio Automation is a small software studio founded by Taha Ilyas, a developer based in Pakistan who builds Android apps, AI voice agents and automation pipelines.',
  path: '/about',
})

const jsonLd = [
  breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${SITE_URL}/about`,
    mainEntity: {
      '@type': 'Person',
      '@id': 'https://tahailyas.com/#person',
      name: 'Taha Ilyas',
      url: LINKS.personal,
      jobTitle: 'Founder',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      sameAs: [LINKS.github, LINKS.linkedin],
    },
  },
]

const profiles = [
  { icon: Globe, label: 'tahailyas.com', href: LINKS.personal },
  { icon: Github, label: 'GitHub: realtahailyas', href: LINKS.github },
  { icon: Linkedin, label: 'LinkedIn: Taha Ilyas', href: LINKS.linkedin },
  { icon: Mail, label: LINKS.email, href: `mailto:${LINKS.email}` },
]

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="About"
        title="Optivio Automation is one developer and a lot of automation"
        lead="The studio is run by Taha Ilyas. He writes the code, ships the apps and keeps the pipelines running."
        crumbs={[{ name: 'Home', href: '/' }, { name: 'About' }]}
      />
      <Section title="Founder">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-slate-300 font-dm leading-relaxed">
            <p>
              Taha Ilyas is an indie mobile developer based in Pakistan. He builds Android apps with React
              Native and Kotlin, writes automation in Python and TypeScript, and publishes everything under
              the Optivio Automation name.
            </p>
            <p>
              The work spans four areas: <Link href="/apps" className="text-[#00C8FF] underline underline-offset-2">apps on Google Play</Link>,{' '}
              <Link href="/ai-voice-agent" className="text-[#00C8FF] underline underline-offset-2">an AI voice agent</Link>,{' '}
              <Link href="/publishing" className="text-[#00C8FF] underline underline-offset-2">puzzle book publishing</Link> and{' '}
              <Link href="/automation" className="text-[#00C8FF] underline underline-offset-2">content automation</Link>. For his
              personal portfolio and writing, see{' '}
              <a href={LINKS.personal} className="text-[#00C8FF] underline underline-offset-2">tahailyas.com</a>.
            </p>
          </div>
          <ul className={`${card} space-y-3 h-fit`}>
            {profiles.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  {...(p.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-3 text-sm font-dm text-white hover:text-[#00C8FF] break-all"
                >
                  <p.icon size={18} color="#00C8FF" aria-hidden="true" className="shrink-0" />
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section title="Contact">
        <p className="text-slate-300 font-dm mb-6">
          Email{' '}
          <a href={`mailto:${LINKS.email}`} className="text-[#00C8FF] underline underline-offset-2">
            {LINKS.email}
          </a>{' '}
          for voice agent enquiries, automation work or press.
        </p>
        <Link href="/" className={btnGhost}>
          Back to the studio
        </Link>
      </Section>
    </PageShell>
  )
}
