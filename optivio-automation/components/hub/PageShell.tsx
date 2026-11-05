import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const btnPrimary =
  'inline-flex items-center justify-center bg-gradient-to-r from-[#00C8FF] to-[#00A3FF] text-[#0A1628] font-sora font-semibold text-sm md:text-base px-6 py-3.5 rounded-lg text-center transition-all duration-300 shadow-[0_0_25px_rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.5)]'
export const btnGhost =
  'inline-flex items-center justify-center bg-transparent text-white font-sora font-semibold text-sm md:text-base px-6 py-3.5 rounded-lg text-center border border-[rgba(91,184,212,0.4)] hover:border-[#5BB8D4] hover:bg-[rgba(91,184,212,0.08)] transition-all duration-300'
export const card =
  'rounded-2xl border border-[rgba(0,200,255,0.12)] bg-[#0F1F35] p-6 sm:p-7'

export function Crumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#94A3B8] font-dm">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {it.href ? <Link href={it.href} className="hover:text-white">{it.name}</Link> : <span className="text-white">{it.name}</span>}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow: string
  title: string
  lead: string
  crumbs?: { name: string; href?: string }[]
  children?: React.ReactNode
}) {
  return (
    <header className="relative overflow-hidden pt-28 md:pt-36 pb-12 md:pb-16 px-4 sm:px-6">
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.08)_0%,transparent_65%)]" />
      <div className="relative max-w-5xl mx-auto">
        {crumbs && <Crumbs items={crumbs} />}
        <p className="text-[#00C8FF] font-sora text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">{eyebrow}</p>
        <h1 className="font-sora font-bold text-3xl sm:text-5xl leading-[1.1] text-white max-w-3xl">{title}</h1>
        <p className="text-slate-300 font-dm text-base md:text-lg leading-relaxed max-w-2xl mt-5">{lead}</p>
        {children && <div className="mt-8 flex flex-col sm:flex-row gap-3">{children}</div>}
      </div>
    </header>
  )
}

export function Section({ title, children, id }: { title?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="py-10 md:py-14 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {title && <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-6">{title}</h2>}
        {children}
      </div>
    </section>
  )
}

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0A1628]">{children}</main>
      <Footer />
    </>
  )
}
