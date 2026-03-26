import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,200,255,0.1)] py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start">
            <div className="mb-2">
              <Image
                src="/logo.png"
                alt="Optivio Automation"
                width={160}
                height={42}
                className="object-contain h-9 w-auto"
              />
            </div>
            <p className="text-[#94A3B8] font-dm text-sm">
              © 2026 Optivio Automation. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#94A3B8] hover:text-white font-dm text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#94A3B8] hover:text-white font-dm text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-[rgba(0,200,255,0.05)]">
          <p className="text-[#94A3B8] font-dm text-xs">Built with AI. Run by humans.</p>
        </div>
      </div>
    </footer>
  )
}
