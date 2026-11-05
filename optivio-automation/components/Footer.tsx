import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
import { FEATURED_APPS, LINKS } from '@/lib/site'

const linkClass = 'text-[#94A3B8] hover:text-white font-dm text-sm transition-colors'

const studio = [
  { label: 'Apps', href: '/apps' },
  { label: 'AI Voice Agent', href: '/ai-voice-agent' },
  { label: 'Publishing', href: '/publishing' },
  { label: 'Automation', href: '/automation' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'GDPR / Data Processing Agreement', href: '/gdpr' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,200,255,0.1)] py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-10">
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src="/logo.png"
              alt="Optivio Automation"
              width={160}
              height={42}
              className="object-contain h-9 w-auto mb-3"
            />
            <p className="text-[#94A3B8] font-dm text-sm max-w-xs text-center sm:text-left">
              A software company: Android apps, AI voice agents, puzzle book publishing and content automation.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#94A3B8] hover:text-[#00C8FF] transition-colors">
                <Github size={20} />
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Optivio Automation on LinkedIn" className="text-[#94A3B8] hover:text-[#00C8FF] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <p className="text-white font-sora font-semibold text-sm uppercase tracking-widest mb-4">Company</p>
            <ul className="flex flex-col items-center sm:items-start gap-3">
              {studio.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <p className="text-white font-sora font-semibold text-sm uppercase tracking-widest mb-4">Our Apps</p>
            <ul className="flex flex-col items-center sm:items-start gap-3">
              {FEATURED_APPS.map((app) => (
                <li key={app.slug}>
                  <Link href={`/apps/${app.slug}`} className={linkClass}>{app.name}</Link>
                </li>
              ))}
              <li>
                <a href={LINKS.playDeveloper} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  All apps on Google Play
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <p className="text-white font-sora font-semibold text-sm uppercase tracking-widest mb-4">Legal</p>
            <ul className="flex flex-col items-center sm:items-start gap-3">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[rgba(0,200,255,0.05)]">
          <p className="text-[#94A3B8] font-dm text-sm text-center sm:text-left">
            © 2026 Optivio Automation.
          </p>
          <a href={`mailto:${LINKS.email}`} className="text-[#94A3B8] hover:text-white font-dm text-xs">
            {LINKS.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
