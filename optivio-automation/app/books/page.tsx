import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Download } from 'lucide-react'
import books from '@/lib/books.json'

type Book = (typeof books)[number]

const TITLE = 'Hopscotch Lane Press | Puzzle Books for Kids & Seniors'
const DESCRIPTION =
  'Screen-free puzzle books for kids and large print puzzle books for seniors. Mysteries, mazes and word searches, with free printable sample pages.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/books' },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://optivioautomation.com/books',
    siteName: 'Hopscotch Lane Press',
    type: 'website',
    images: books[0]
      ? [{ url: books[0].cover, width: books[0].coverWidth, height: books[0].coverHeight }]
      : [],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: books[0] ? [books[0].cover] : [],
  },
}

function Logo() {
  const s = { stroke: '#000', strokeWidth: 6 }
  const t = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: 800,
    fontSize: 24,
    textAnchor: 'middle' as const,
  }
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-16 w-16 drop-shadow-lg sm:h-20 sm:w-20"
      role="img"
      aria-label="Hopscotch Lane Press logo"
    >
      <rect x="75" y="20" width="50" height="38" fill="#ffc93c" {...s} />
      <rect x="50" y="58" width="50" height="38" fill="#e63946" {...s} />
      <rect x="100" y="58" width="50" height="38" fill="#2ec4b6" {...s} />
      <rect x="75" y="96" width="50" height="38" fill="#9b5de5" {...s} />
      <rect x="75" y="134" width="50" height="38" fill="#ffffff" {...s} />
      <text x="100" y="47" {...t} fill="#16213e">4</text>
      <text x="75" y="85" {...t} fill="#fff">2</text>
      <text x="125" y="85" {...t} fill="#16213e">3</text>
      <text x="100" y="123" {...t} fill="#fff">1</text>
    </svg>
  )
}

function BookCard({ book, index }: { book: Book; index: number }) {
  return (
    <li className="flex flex-row gap-3 rounded-2xl bg-[#fdf3dc] p-3 text-[#16213e] shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-1 ring-black/5 sm:flex-col sm:gap-0 sm:p-4">
      <a
        href={book.amazon}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${book.name} on Amazon`}
        className="block w-[40%] shrink-0 self-start overflow-hidden rounded-xl shadow-md ring-1 ring-black/10 sm:mb-3 sm:w-full"
      >
        <Image
          src={book.cover}
          alt={`Cover of ${book.name}`}
          width={book.coverWidth}
          height={book.coverHeight}
          sizes="(max-width: 639px) 40vw, (max-width: 1023px) 45vw, 320px"
          priority={index < 2}
          className="h-auto w-full"
        />
      </a>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="mb-1.5 inline-block self-start rounded-full bg-[#16213e] px-2.5 py-0.5 text-[11px] font-semibold text-[#ffc93c]">
          {book.badge}
        </span>
        <h3 className="font-sora text-[15px] font-bold leading-snug sm:text-lg">{book.name}</h3>
        <p className="mt-1 text-[13px] leading-snug text-[#16213e]/80">{book.hook}</p>
        <ul className="mt-2 space-y-1 text-[12px] leading-snug text-[#16213e]/80">
          {book.highlights.map((h, i) => (
            <li key={h} className={`${i >= 2 ? 'hidden sm:flex' : 'flex'} gap-1.5`}>
              <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2ec4b6]" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 font-sora text-lg font-extrabold">{book.price}</p>
        <div className="mt-auto flex flex-col gap-2 pt-2">
          <a
            href={book.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[#ffc93c] px-4 text-sm font-bold text-[#16213e] shadow-[0_3px_0_#d9a420] active:translate-y-px active:shadow-none"
          >
            View on Amazon <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={book.sample}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl px-3 text-[13px] font-semibold text-[#16213e] underline decoration-[#e63946] decoration-2 underline-offset-4"
          >
            <Download className="h-4 w-4" aria-hidden /> Free printable pages
          </a>
        </div>
      </div>
    </li>
  )
}

function Section({
  id,
  title,
  list,
  offset,
}: {
  id: string
  title: string
  list: Book[]
  offset: number
}) {
  if (!list.length) return null
  return (
    <section id={id} className="scroll-mt-16 pt-6">
      <h2 className="mb-3 font-sora text-xl font-bold text-white">
        <span className="mr-2 inline-block h-3 w-3 rounded-sm bg-[#ffc93c] align-middle" aria-hidden />
        {title}
      </h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((b, i) => (
          <BookCard key={b.slug} book={b} index={offset + i} />
        ))}
      </ul>
    </section>
  )
}

export default function BooksPage() {
  const kids = books.filter((b) => b.audience === 'kids')
  const seniors = books.filter((b) => b.audience === 'seniors')
  const chip =
    'inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white'

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#16213e] font-dm text-white">
      <header className="px-4 pt-6 text-center">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h1 className="mt-2 font-sora text-2xl font-extrabold sm:text-3xl">Hopscotch Lane Press</h1>
        <p className="mt-0.5 text-sm font-semibold text-[#ffc93c]">Puzzle books for kids &amp; seniors</p>
        <p className="mx-auto mt-2 max-w-md text-[13px] leading-snug text-white/75">
          Screen-free mysteries, mazes and large print word searches. Tap a book to see it on Amazon.
        </p>
      </header>

      <nav aria-label="Jump to section" className="sticky top-0 z-10 mt-4 bg-[#16213e]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl justify-center gap-2 overflow-x-auto px-4 py-1">
          <a href="#all" className={chip}>All books</a>
          <a href="#kids" className={chip}>For kids</a>
          <a href="#seniors" className={chip}>For seniors</a>
        </div>
      </nav>

      <div id="all" className="mx-auto max-w-6xl scroll-mt-16 px-4 pb-10">
        <Section id="kids" title="For kids" list={kids} offset={0} />
        <Section id="seniors" title="For seniors" list={seniors} offset={kids.length} />
      </div>

      <footer className="border-t border-white/10 px-4 py-6 text-center text-[11px] leading-relaxed text-white/60">
        <p>&copy; 2026 Hopscotch Lane Press. Books printed and sold by Amazon.</p>
        <p>As an Amazon customer you&apos;ll check out on Amazon.</p>
        <p className="mt-1">
          <Link href="/" className="underline underline-offset-2">
            Website by Optivio Automation
          </Link>
        </p>
      </footer>
    </main>
  )
}
