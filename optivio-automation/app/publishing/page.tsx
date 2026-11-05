import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import PageShell, { PageHeader, Section, btnPrimary, btnGhost, card } from '@/components/hub/PageShell'
import JsonLd from '@/components/JsonLd'
import { buildMetadata, breadcrumb } from '@/lib/seo'
import { LINKS, SITE_URL } from '@/lib/site'
import books from '@/lib/books.json'

export const metadata = buildMetadata({
  title: 'Puzzle Book Publishing: Hopscotch Lane Press and Sweet Tea Puzzles',
  description:
    'Optivio Automation publishes puzzle books on Amazon under two imprints: Hopscotch Lane Press for kids and Sweet Tea Puzzles for large print puzzles. See the books and the open-source generator.',
  path: '/publishing',
})

type Book = (typeof books)[number]

const imprints = [
  {
    name: 'Hopscotch Lane Press',
    audience: 'kids',
    blurb: 'Screen-free puzzle books for kids: detective mysteries, animal mazes and would-you-rather games.',
  },
  {
    name: 'Sweet Tea Puzzles',
    audience: 'seniors',
    blurb: 'Large print word searches and activity books with big letters, short familiar words and full solutions.',
  },
]

const jsonLd = [
  breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Publishing', path: '/publishing' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Puzzle books by Optivio Automation imprints',
    itemListElement: books.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      url: b.amazon,
    })),
  },
]

function BookRow({ book }: { book: Book }) {
  return (
    <li className="flex gap-4 rounded-2xl border border-[rgba(0,200,255,0.12)] bg-[#0F1F35] p-4">
      <a
        href={book.amazon}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${book.name} on Amazon`}
        className="block w-24 sm:w-28 shrink-0 self-start overflow-hidden rounded-lg ring-1 ring-white/10"
      >
        <Image
          src={book.cover}
          alt={`Cover of ${book.name}`}
          width={book.coverWidth}
          height={book.coverHeight}
          sizes="112px"
          className="h-auto w-full"
        />
      </a>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-widest text-[#FFC93C] mb-1">{book.badge}</p>
        <h3 className="font-sora font-semibold leading-snug">{book.name}</h3>
        <a
          href={book.amazon}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm font-sora text-[#00C8FF]"
        >
          View on Amazon <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    </li>
  )
}

export default function PublishingPage() {
  return (
    <PageShell>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Publishing"
        title="Puzzle books for kids and for large print readers"
        lead="We design, generate and publish puzzle books on Amazon under two imprints. The interiors and covers are produced with our own open-source toolkit, then checked against Amazon print rules before upload."
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Publishing' }]}
      >
        <Link href="/books" className={btnPrimary}>
          Free sample pages
        </Link>
        <a href={LINKS.kdpRepo} target="_blank" rel="noopener noreferrer" className={btnGhost}>
          <Github size={18} className="mr-2" aria-hidden="true" /> Open-source generator
        </a>
      </PageHeader>

      {imprints.map((imp) => (
        <Section key={imp.name} title={imp.name}>
          <p className="text-slate-300 font-dm max-w-2xl mb-6">{imp.blurb}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {books
              .filter((b) => b.audience === imp.audience)
              .map((b) => (
                <BookRow key={b.asin} book={b} />
              ))}
          </ul>
        </Section>
      ))}

      <Section title="How the books are made">
        <div className={card}>
          <p className="text-slate-300 font-dm leading-relaxed">
            Word searches, mazes, sudoku, crossword and logic puzzles are generated in Python, laid out as
            print-ready PDFs and preflighted for page size, margins and fonts. The toolkit is published as
            the{' '}
            <a href={LINKS.kdpRepo} className="text-[#00C8FF] underline underline-offset-2" target="_blank" rel="noopener noreferrer">
              kdp-puzzle-book-generator
            </a>{' '}
            repository under the MIT license. See also our{' '}
            <Link href="/automation" className="text-[#00C8FF] underline underline-offset-2">
              automation work
            </Link>
            .
          </p>
        </div>
        <p className="mt-6 text-xs text-[#94A3B8] font-dm">
          Back to <Link href="/" className="underline">{SITE_URL.replace('https://', '')}</Link>
        </p>
      </Section>
    </PageShell>
  )
}
