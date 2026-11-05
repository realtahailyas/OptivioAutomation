'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Apps', href: '/apps' },
  { label: 'AI Voice Agent', href: '/ai-voice-agent' },
  { label: 'Publishing', href: '/publishing' },
  { label: 'Automation', href: '/automation' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isVoice = pathname.startsWith('/ai-voice-agent')
  const cta = isVoice
    ? { label: 'Book a Free Demo', href: 'https://calendly.com/optivioautomation/15min', external: true }
    : { label: 'Contact', href: 'mailto:hello@optivioautomation.com', external: false }
  const active = (href: string) => pathname === href || pathname.startsWith(href + '/')
  const ctaClass =
    'bg-gradient-to-r from-[#00C8FF] to-[#00A3FF] text-[#0A1628] font-sora font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 shadow-[0_0_25px_rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.5)] inline-block'

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'backdrop-blur-md bg-[#0A1628]/80 border-b border-[rgba(0,200,255,0.1)]'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Optivio Automation"
              width={180}
              height={48}
              className="object-contain h-8 sm:h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-dm transition-all duration-200 pb-1 border-b-2 ${
                  active(l.href)
                    ? 'text-[#00C8FF] border-[#00C8FF]'
                    : 'text-[#94A3B8] hover:text-white border-transparent'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href={cta.href}
              {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={ctaClass}
            >
              {cta.label}
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F1F35] border-t border-[rgba(0,200,255,0.1)]">
          <div className="px-4 py-6 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-dm py-2 transition-colors ${
                  active(l.href) ? 'text-[#00C8FF]' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={cta.href}
              {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`${ctaClass} text-center mt-2`}
            >
              {cta.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
