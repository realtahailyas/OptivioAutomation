import Link from 'next/link'
import { Github, Linkedin, Globe, Mail } from 'lucide-react'
import PageShell, { PageHeader, Section, btnGhost, card } from '@/components/hub/PageShell'
import JsonLd from '@/components/JsonLd'
import { buildMetadata, breadcrumb } from '@/lib/seo'
import { LINKS, SITE_URL } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'About Optivio Automation',
  description:
    'Optivio Automation is a software company building Android apps on Google Play, AI voice agents, puzzle books and content automation pipelines.',
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
    mainEntity: { '@id': `${SITE_URL}/#organization` },
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
        title="A software company that ships and runs its own products"
        lead="Optivio Automation builds Android apps, AI voice agents, puzzle books and automation pipelines, and keeps them running after launch."
        crumbs={[{ name: 'Home', href: '/' }, { name: 'About' }]}
      />
      <Section title="What we do">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-slate-300 font-dm leading-relaxed">
            <p>
              We work in four areas: <Link href="/apps" className="text-[#00C8FF] underline underline-offset-2">apps on Google Play</Link>,{' '}
              <Link href="/ai-voice-agent" className="text-[#00C8FF] underline underline-offset-2">an AI voice agent</Link> for service businesses,{' '}
              <Link href="/publishing" className="text-[#00C8FF] underline underline-offset-2">puzzle book publishing</Link> and{' '}
              <Link href="/automation" className="text-[#00C8FF] underline underline-offset-2">content automation</Link>.
            </p>
            <p>
              Our apps are built with React Native, Kotlin and Unity. Our automation is written in Python and
              TypeScript. We publish under the Optivio Automation name, maintain what we release, and open
              source tools where it helps others.
            </p>
            <p>
              The company was founded by Taha Ilyas, based in Pakistan. His personal portfolio and writing
              live at{' '}
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
          Back to home
        </Link>
      </Section>
    </PageShell>
  )
}
