'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'FAQ', id: 'faq' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.4 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-[#0A1628]/80 border-b border-[rgba(0,200,255,0.1)]'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div>
            <Image
              src="/logo.png"
              alt="Optivio Automation"
              width={180}
              height={48}
              className="hidden sm:block object-contain h-10 w-auto"
              priority
            />
            <Image
              src="/logo.png"
              alt="Optivio Automation"
              width={150}
              height={40}
              className="sm:hidden object-contain h-8 w-auto"
              priority
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-sm font-dm transition-all duration-200 pb-1 ${
                  activeSection === id
                    ? 'text-[#00C8FF] border-b-2 border-[#00C8FF]'
                    : 'text-[#94A3B8] hover:text-white border-b-2 border-transparent'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://calendly.com/optivioautomation/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#00C8FF] to-[#00A3FF] text-[#0A1628] font-sora font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 shadow-[0_0_25px_rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.5)] hover:scale-105 inline-block"
            >
              Book a Free Demo
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1F35] border-t border-[rgba(0,200,255,0.1)]">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-base font-dm text-left py-2 transition-colors ${
                  activeSection === id ? 'text-[#00C8FF]' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href="https://calendly.com/optivioautomation/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#00C8FF] to-[#00A3FF] text-[#0A1628] font-sora font-semibold text-sm px-5 py-3 rounded-lg text-center mt-2 transition-all duration-300 shadow-[0_0_25px_rgba(0,200,255,0.3)]"
            >
              Book a Free Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
