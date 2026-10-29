import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, Linkedin } from 'lucide-react'

const apps = [
  { name: 'TChess', href: 'https://tchess.app' },
  { name: 'DareClock', href: 'https://play.google.com/store/apps/details?id=com.dareclock' },
  { name: 'CertForge', href: 'https://getcertforge.app' },
  {
    name: 'Brick Breaker: Power Rush',
    href: 'https://play.google.com/store/apps/details?id=com.brickrush',
  },
  {
    name: 'All apps on Google Play',
    href: 'https://play.google.com/store/apps/developer?id=Optivio+Automation',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,200,255,0.1)] py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-3">
              <Image
                src="/logo.png"
                alt="Optivio Automation"
                width={160}
                height={42}
                className="object-contain h-9 w-auto"
              />
            </div>
            <p className="text-[#94A3B8] font-dm text-sm max-w-xs text-center md:text-left">
              AI receptionists for UK dental practices. 24/7 call answering, booking, and recall.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://www.instagram.com/optivioautomation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#94A3B8] hover:text-[#00C8FF] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/optivioautomation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#94A3B8] hover:text-[#00C8FF] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/optivoautomation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#94A3B8] hover:text-[#00C8FF] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-white font-sora font-semibold text-sm uppercase tracking-widest mb-4">
              Product
            </p>
            <ul className="flex flex-col items-center md:items-start gap-3">
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-[#94A3B8] hover:text-white font-dm text-sm transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-[#94A3B8] hover:text-white font-dm text-sm transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-[#94A3B8] hover:text-white font-dm text-sm transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#94A3B8] hover:text-white font-dm text-sm transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Apps */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-white font-sora font-semibold text-sm uppercase tracking-widest mb-4">
              Our Apps
            </p>
            <ul className="flex flex-col items-center md:items-start gap-3">
              {apps.map((app) => (
                <li key={app.name}>
                  <a
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94A3B8] hover:text-white font-dm text-sm transition-colors"
                  >
                    {app.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-white font-sora font-semibold text-sm uppercase tracking-widest mb-4">
              Legal
            </p>
            <ul className="flex flex-col items-center md:items-start gap-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-[#94A3B8] hover:text-white font-dm text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[#94A3B8] hover:text-white font-dm text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/gdpr"
                  className="text-[#94A3B8] hover:text-white font-dm text-sm transition-colors"
                >
                  GDPR / Data Processing Agreement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[rgba(0,200,255,0.05)]">
          <p className="text-[#94A3B8] font-dm text-sm text-center sm:text-left">
            © 2026 Optivio Automation. All rights reserved. Founded by{' '}
            <a
              href="https://tahailyas.com"
              className="text-[#94A3B8] hover:text-white underline underline-offset-2 transition-colors"
            >
              Taha Ilyas
            </a>
            .
          </p>
          <p className="text-[#94A3B8] font-dm text-xs">Built with AI. Run by humans.</p>
        </div>
      </div>
    </footer>
  )
}
