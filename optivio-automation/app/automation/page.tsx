import Link from 'next/link'
import { Github, Cog, Film, Send, Database } from 'lucide-react'
import PageShell, { PageHeader, Section, btnPrimary, btnGhost, card } from '@/components/hub/PageShell'
import JsonLd from '@/components/JsonLd'
import { buildMetadata, breadcrumb } from '@/lib/seo'
import { LINKS, SITE_URL } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'Content and Workflow Automation',
  description:
    'Content and workflow automation with Python, FFmpeg, Remotion and Playwright. Case study: a chess puzzle video pipeline with 1,078 logged posts across 4 platforms.',
  path: '/automation',
})

const jsonLd = [
  breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Automation', path: '/automation' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/automation#service`,
    name: 'Content and workflow automation',
    serviceType: 'Automation engineering',
    url: `${SITE_URL}/automation`,
    provider: { '@id': `${SITE_URL}/#organization` },
    description:
      'Pipelines that generate, render and publish content on a schedule, built with Python, FFmpeg, Remotion and Playwright.',
  },
]

const steps = [
  { icon: Database, t: 'Select', d: 'Puzzles are streamed from the open Lichess database and filtered by theme, rating and popularity.' },
  { icon: Film, t: 'Render', d: 'Python with python-chess and Pillow draws the board, FFmpeg encodes 1080x1920 video with narration, sound effects and music. Remotion handles motion-graphic formats.' },
  { icon: Send, t: 'Publish', d: 'Instagram, Facebook and YouTube go through their official APIs. TikTok goes through Playwright driving an already signed-in browser profile.' },
  { icon: Cog, t: 'Control', d: 'Dry-run defaults, per-platform switches and a channel guard that refuses to upload to the wrong account. Status is written as JSON for a dashboard.' },
]

export default function AutomationPage() {
  return (
    <PageShell>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Automation"
        title="Content and workflow automation that runs on a schedule"
        lead="We build pipelines that generate, check and publish content without someone clicking through each step. The stack is Python, FFmpeg, Remotion and Playwright, with official APIs wherever they exist."
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Automation' }]}
      >
        <a href={LINKS.chessReelsRepo} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
          <Github size={18} className="mr-2" aria-hidden="true" /> View chess-reels on GitHub
        </a>
        <a href={`mailto:${LINKS.email}`} className={btnGhost}>
          Discuss a project
        </a>
      </PageHeader>

      <Section title="What we can automate">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ['Video and image generation', 'Templated short-form video, carousels and promo clips from structured data.'],
            ['Scheduled publishing', 'Queues, schedules and logs for posting to several platforms.'],
            ['Browser workflows', 'Repetitive web tasks done with Playwright where no API exists.'],
          ].map(([t, d]) => (
            <li key={t} className={card}>
              <h3 className="font-sora font-semibold mb-2">{t}</h3>
              <p className="text-[#94A3B8] font-dm text-sm leading-relaxed">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Case study: the chess content pipeline">
        <p className="text-slate-300 font-dm leading-relaxed max-w-3xl mb-6">
          <strong className="text-white">chess-reels</strong> turns chess puzzles into vertical videos and
          publishes them to four platforms for the{' '}
          <Link href="/apps/tchess" className="text-[#00C8FF] underline underline-offset-2">
            TChess app
          </Link>
          . It runs on CPU only, with no GPU and no model training. The ledger has logged{' '}
          <strong className="text-white">1,078 posts across 4 platforms</strong>.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {['Python', 'FFmpeg', 'Remotion', 'Playwright'].map((t) => (
            <span key={t} className="rounded-full border border-[rgba(0,200,255,0.3)] bg-[#0F1F35] px-3 py-1 text-xs font-sora text-[#7DF3FF]">
              {t}
            </span>
          ))}
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((s, i) => (
            <li key={s.t} className={card}>
              <div className="flex items-center gap-3 mb-3">
                <s.icon size={22} color="#00C8FF" aria-hidden="true" />
                <h3 className="font-sora font-semibold">
                  {i + 1}. {s.t}
                </h3>
              </div>
              <p className="text-[#94A3B8] font-dm text-sm leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-slate-300 font-dm">
          The code is open source:{' '}
          <a href={LINKS.chessReelsRepo} className="text-[#00C8FF] underline underline-offset-2" target="_blank" rel="noopener noreferrer">
            github.com/realtahailyas/chess-reels
          </a>
          . The same approach powers our{' '}
          <Link href="/publishing" className="text-[#00C8FF] underline underline-offset-2">
            puzzle book publishing
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  )
}
