import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import PageShell, { PageHeader, Section, btnPrimary, btnGhost, card } from '@/components/hub/PageShell'
import AppIcon from '@/components/hub/AppIcon'
import JsonLd from '@/components/JsonLd'
import { buildMetadata, breadcrumb } from '@/lib/seo'
import { APPS, FEATURED_APPS, SITE_URL } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return APPS.map((a) => ({ slug: a.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const app = APPS.find((a) => a.slug === slug)
  if (!app) return {}
  return buildMetadata({
    title: `${app.name}: ${app.tagline.replace(/\.$/, '')}`,
    description: `${app.name} is an Android app by Optivio Automation. ${app.description[0]}`.slice(0, 300),
    path: `/apps/${app.slug}`,
  })
}

export default async function AppPage({ params }: Props) {
  const { slug } = await params
  const app = APPS.find((a) => a.slug === slug)
  if (!app) notFound()

  const path = `/apps/${app.slug}`
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'MobileApplication',
      '@id': `${SITE_URL}${path}#app`,
      name: app.name,
      description: app.description.join(' '),
      image: [`${SITE_URL}${app.icon}`, ...app.screenshots.map((s) => `${SITE_URL}${s.src}`)],
      screenshot: app.screenshots.map((s) => `${SITE_URL}${s.src}`),
      url: `${SITE_URL}${path}`,
      installUrl: app.play,
      sameAs: [app.play, ...(app.site ? [app.site.url] : [])],
      operatingSystem: 'Android',
      applicationCategory: app.schemaCategory,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'Apps', path: '/apps' },
      { name: app.name, path },
    ]),
  ]

  return (
    <PageShell>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow={app.category}
        title={app.name}
        lead={app.tagline}
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Apps', href: '/apps' }, { name: app.name }]}
      >
        <a href={app.play} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
          Get it on Google Play
        </a>
        {app.site && (
          <a href={app.site.url} target="_blank" rel="noopener noreferrer" className={btnGhost}>
            {app.site.label} <ExternalLink size={16} className="ml-2" aria-hidden="true" />
          </a>
        )}
      </PageHeader>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="font-sora font-bold text-2xl text-white">About {app.name}</h2>
            {app.description.map((p) => (
              <p key={p} className="text-slate-300 font-dm leading-relaxed">
                {p}
              </p>
            ))}
            {app.features.length > 0 && (
              <>
            <h3 className="font-sora font-semibold text-lg text-white pt-4">What it does</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-300 font-dm">
              {app.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
              </>
            )}
          </div>

          <aside className={`${card} h-fit`}>
            <div className="mb-5">
              <AppIcon src={app.icon} name={app.name} size={80} />
            </div>
            <dl className="space-y-4 text-sm font-dm">
              <div>
                <dt className="text-[#94A3B8]">Platform</dt>
                <dd className="text-white">Android</dd>
              </div>
              <div>
                <dt className="text-[#94A3B8]">Stack</dt>
                <dd className="text-white">{app.stack.join(', ')}</dd>
              </div>
              {app.installs && (
                <div>
                  <dt className="text-[#94A3B8]">Reach</dt>
                  <dd className="text-white">{app.installs}</dd>
                </div>
              )}
              <div>
                <dt className="text-[#94A3B8]">Publisher</dt>
                <dd>
                  <Link href="/" className="text-[#00C8FF]">
                    Optivio Automation
                  </Link>
                </dd>
              </div>
              {app.privacy && (
                <div>
                  <dt className="text-[#94A3B8]">Privacy policy</dt>
                  <dd>
                    <a href={app.privacy} className="text-[#00C8FF] break-all">
                      Read the policy
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </Section>

      {app.screenshots.length > 0 && (
        <Section title="Screenshots">
          <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-1 px-1 max-w-full">
            {app.screenshots.map((s, i) => (
              <li key={s.src} className="snap-start shrink-0 w-[200px] sm:w-[220px]">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={600}
                  height={app.slug === 'tchess' ? 1300 : 1067}
                  sizes="220px"
                  loading={i < 2 ? 'eager' : 'lazy'}
                  className="w-full h-auto rounded-2xl border border-white/10"
                />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section title="More apps">
        <ul className="flex flex-wrap gap-3">
          {FEATURED_APPS.filter((a) => a.slug !== app.slug).map((a) => (
            <li key={a.slug}>
              <Link href={`/apps/${a.slug}`} className={btnGhost}>
                {a.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/apps" className={btnGhost}>
              All apps
            </Link>
          </li>
        </ul>
      </Section>
    </PageShell>
  )
}
