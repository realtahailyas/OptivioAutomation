import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageShell, { PageHeader, Section, btnGhost, card } from '@/components/hub/PageShell'
import AppIcon from '@/components/hub/AppIcon'
import JsonLd from '@/components/JsonLd'
import { buildMetadata, breadcrumb } from '@/lib/seo'
import { APPS, LINKS, SITE_URL } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'Android Apps on Google Play',
  description:
    'Android apps from Optivio Automation: TChess chess trainer, DareClock mission alarm, the arcade game Brick Breaker: Power Rush, plus CertForge.',
  path: '/apps',
})

const jsonLd = [
  breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/apps' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Optivio Automation apps',
    itemListElement: APPS.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.name,
      url: `${SITE_URL}/apps/${a.slug}`,
    })),
  },
]

export default function AppsPage() {
  return (
    <PageShell>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Apps"
        title="Android apps we build and publish"
        lead="Apps published on Google Play under the Optivio Automation developer account. Each page has the description, the stack and the store link."
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Apps' }]}
      >
        <a href={LINKS.playDeveloper} target="_blank" rel="noopener noreferrer" className={btnGhost}>
          Developer page on Google Play
        </a>
      </PageHeader>
      <Section>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {APPS.map((app) => (
            <li key={app.slug}>
              <Link
                href={`/apps/${app.slug}`}
                className={`${card} group block h-full transition-colors hover:border-[rgba(0,200,255,0.4)]`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <AppIcon src={app.icon} name={app.name} size={64} />
                  <div>
                    <h2 className="font-sora font-semibold text-xl">{app.name}</h2>
                    <p className="text-xs uppercase tracking-widest" style={{ color: app.accent }}>
                      {app.category}
                    </p>
                  </div>
                </div>
                <p className="text-[#94A3B8] font-dm text-sm leading-relaxed">{app.tagline}</p>
                {app.screenshots.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-2" aria-hidden="false">
                    {app.screenshots.slice(0, 3).map((s) => (
                      <Image
                        key={s.src}
                        src={s.src}
                        alt={s.alt}
                        width={600}
                        height={app.slug === 'tchess' ? 1300 : 1067}
                        sizes="(max-width: 768px) 30vw, 150px"
                        className="w-full h-auto rounded-lg border border-white/10"
                      />
                    ))}
                  </div>
                )}
                <p className="mt-4 text-xs text-[#94A3B8] font-dm">{app.stack.join(' / ')}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-sora text-[#00C8FF]">
                  App details <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  )
}
