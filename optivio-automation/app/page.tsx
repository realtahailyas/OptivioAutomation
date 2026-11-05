import Link from 'next/link'
import { ArrowRight, Smartphone, PhoneCall, BookOpen, Workflow, User } from 'lucide-react'
import PageShell, { btnPrimary, btnGhost } from '@/components/hub/PageShell'
import AppIcon from '@/components/hub/AppIcon'
import AnimatedSection from '@/components/AnimatedSection'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/seo'
import { FEATURED_APPS, LINKS, SAME_AS, SITE_URL } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'Optivio Automation | Software company: apps, AI voice agents, publishing',
  description:
    'Optivio Automation is a software company building Android apps on Google Play, AI voice agents, puzzle books and content automation.',
  path: '/',
  absoluteTitle: true,
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Optivio Automation',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
      description:
        'A software company building Android apps, AI voice agents, puzzle books and content automation.',
      founder: { '@id': 'https://tahailyas.com/#person' },
      contactPoint: {
        '@type': 'ContactPoint',
        email: LINKS.email,
        contactType: 'customer support',
        availableLanguage: 'English',
      },
      sameAs: SAME_AS,
    },
    {
      '@type': 'Person',
      '@id': 'https://tahailyas.com/#person',
      name: 'Taha Ilyas',
      url: LINKS.personal,
      jobTitle: 'Founder',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      sameAs: [LINKS.github, LINKS.linkedin],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Optivio Automation',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

const areas = [
  {
    href: '/apps',
    icon: Smartphone,
    title: 'Apps',
    body: 'Android apps we design, build and publish on Google Play: a chess trainer, a mission alarm clock and an arcade game.',
    accent: '#7DF3FF',
    span: 'lg:col-span-2',
  },
  {
    href: '/ai-voice-agent',
    icon: PhoneCall,
    title: 'AI voice agent',
    body: 'A phone receptionist that answers calls and books appointments. Offered to UK dental practices.',
    accent: '#00C8FF',
    span: '',
  },
  {
    href: '/publishing',
    icon: BookOpen,
    title: 'Publishing',
    body: 'Puzzle books for kids and large print puzzle books for seniors, under two imprints.',
    accent: '#FFC93C',
    span: '',
  },
  {
    href: '/automation',
    icon: Workflow,
    title: 'Automation',
    body: 'Content and workflow pipelines in Python, FFmpeg, Remotion and Playwright. Includes a worked case study.',
    accent: '#5EEAD4',
    span: 'lg:col-span-2',
  },
]

const principles = [
  ['Build first', 'We make the thing, put it in front of people, then write about it. Pages here describe what exists.'],
  ['Live products, maintained', 'We ship apps to Google Play and keep them updated, supported and compliant after launch.'],
  ['Open where it helps', 'Tools such as the puzzle book generator and the chess content pipeline are open source on GitHub.'],
]

const nodes = [
  [60, 80],
  [200, 160],
  [360, 90],
  [460, 220],
  [300, 300],
  [160, 330],
]

export default function HomePage() {
  return (
    <PageShell>
      <JsonLd data={jsonLd} />

      <header className="relative overflow-hidden pt-28 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.1)_0%,transparent_65%)]"
        />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-[-120px] top-24 hidden md:block opacity-60"
          width="520"
          height="420"
          viewBox="0 0 520 420"
          fill="none"
        >
          <path
            d="M60 80L200 160L360 90L460 220L300 300L160 330L200 160M360 90L300 300"
            stroke="#00C8FF"
            strokeOpacity="0.25"
          />
          {nodes.map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 2 ? 7 : 11}
              fill="#0F1F35"
              stroke="#00C8FF"
              strokeOpacity="0.6"
              strokeWidth="2"
            />
          ))}
        </svg>
        <div className="relative max-w-5xl mx-auto">
          <p className="inline-flex items-center gap-2 bg-[#0F1F35] border border-[rgba(0,200,255,0.2)] rounded-full px-4 py-2 mb-8 text-[#94A3B8] text-sm font-dm">
            <span className="w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse" />
            Software company
          </p>
          <h1 className="font-sora font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] max-w-3xl">
            <span className="bg-gradient-to-b from-white via-white to-[#94A3B8] bg-clip-text text-transparent">
              We build apps, voice agents and automation.
            </span>
          </h1>
          <p className="text-slate-300 font-dm text-base md:text-lg leading-relaxed max-w-2xl mt-6">
            Optivio Automation ships Android apps on Google Play, builds AI phone agents for service
            businesses, publishes puzzle books and runs content pipelines. Everything here is
            something we built and operate ourselves.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link href="/apps" className={btnPrimary}>
              See our apps <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link href="/about" className={btnGhost}>
              About the company
            </Link>
          </div>
        </div>
      </header>

      <section className="px-4 sm:px-6 py-10 md:py-14" aria-labelledby="areas">
        <div className="max-w-5xl mx-auto">
          <h2 id="areas" className="font-sora font-bold text-2xl sm:text-3xl mb-8">
            What we work on
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {areas.map((a, i) => (
              <AnimatedSection key={a.href} delay={i * 0.06} className={a.span}>
                <Link
                  href={a.href}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-[rgba(0,200,255,0.12)] bg-[#0F1F35] p-6 sm:p-7 transition-colors hover:border-[rgba(0,200,255,0.4)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-20 blur-2xl"
                    style={{ background: a.accent }}
                  />
                  <a.icon size={28} color={a.accent} aria-hidden="true" />
                  <h3 className="font-sora font-semibold text-xl mt-5 mb-2">{a.title}</h3>
                  <p className="text-[#94A3B8] font-dm text-sm leading-relaxed">{a.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-sora" style={{ color: a.accent }}>
                    Explore <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-10 md:py-14" aria-labelledby="shipped">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 id="shipped" className="font-sora font-bold text-2xl sm:text-3xl">
              Shipped on Google Play
            </h2>
            <Link href="/apps" className="text-[#00C8FF] text-sm font-sora hidden sm:inline">
              All apps
            </Link>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURED_APPS.map((app) => (
              <li key={app.slug}>
                <Link
                  href={`/apps/${app.slug}`}
                  className="flex items-center gap-4 rounded-2xl border border-[rgba(0,200,255,0.12)] bg-[#0F1F35] p-5 transition-colors hover:border-[rgba(0,200,255,0.4)]"
                >
                  <AppIcon src={app.icon} name={app.name} size={64} />
                  <span className="min-w-0">
                    <span className="block font-sora font-semibold">{app.name}</span>
                    <span className="block text-[#94A3B8] font-dm text-sm">{app.tagline}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-10 md:py-14" aria-labelledby="principles">
        <div className="max-w-5xl mx-auto">
          <h2 id="principles" className="font-sora font-bold text-2xl sm:text-3xl mb-8">
            How we work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {principles.map(([t, b]) => (
              <div key={t} className="rounded-2xl border border-[rgba(0,200,255,0.12)] bg-[#0F1F35]/60 p-6">
                <h3 className="font-sora font-semibold mb-2">{t}</h3>
                <p className="text-[#94A3B8] font-dm text-sm leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <User size={28} className="mx-auto text-[#00C8FF]" aria-hidden="true" />
          <h2 className="font-sora font-bold text-3xl sm:text-4xl mt-4 mb-4">Want to work together?</h2>
          <p className="text-[#94A3B8] font-dm text-base md:text-lg mb-8">
            For voice agents, automation work or anything else, email{' '}
            <a className="text-[#00C8FF] underline underline-offset-2" href={`mailto:${LINKS.email}`}>
              {LINKS.email}
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/ai-voice-agent" className={btnPrimary}>
              AI voice agent details
            </Link>
            <Link href="/automation" className={btnGhost}>
              Automation case study
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
