import type { Metadata } from 'next'
import Link from 'next/link'

const gamePath = '/games/brick-breaker-power-rush'
const contact = 'optivio.apps@gmail.com'

export const metadata: Metadata = {
  title: 'Brick Breaker: Power Rush Data Deletion',
  description: 'How to delete locally stored Brick Breaker: Power Rush game data and contact Optivio Automation.',
  alternates: { canonical: `${gamePath}/data-deletion` },
}

export default function BrickBreakerDataDeletionPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] px-5 py-12 text-slate-200 sm:py-16">
      <article className="mx-auto max-w-3xl space-y-8 leading-relaxed">
        <div className="border-b border-slate-700 pb-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">Optivio Automation · Games</p>
          <h1 className="font-sora text-3xl font-bold text-white sm:text-4xl">Brick Breaker: Power Rush Data Deletion</h1>
          <p className="mt-3 text-sm text-slate-400">Updated 25 September 2026 · Android package: com.brickrush</p>
        </div>

        <section>
          <h2 className="mb-2 font-sora text-xl font-semibold text-white">Delete saved game data</h2>
          <p>The current game does not require an online game account. Level progress, game currency, unlocks and preferences are stored on your device. To delete them, open Android Settings, find Brick Breaker: Power Rush under Apps, then choose Storage and Clear storage or Clear data. You can also uninstall the game. Clearing storage permanently resets local game progress; Android backup settings may restore a previous copy if backup is enabled.</p>
        </section>

        <section>
          <h2 className="mb-2 font-sora text-xl font-semibold text-white">Ask for help or request deletion</h2>
          <p>Email <a className="text-cyan-300 underline" href={`mailto:${contact}?subject=Brick%20Breaker%20data%20deletion`}>{contact}</a> with the subject “Brick Breaker data deletion” and describe the data or issue. Do not send passwords, payment-card numbers or identity documents. Because the current game has no online account, we cannot remotely erase local progress from your device; the Android steps above do that. We will review any other request we can identify and control, and respond as applicable law requires.</p>
        </section>

        <section>
          <h2 className="mb-2 font-sora text-xl font-semibold text-white">Cloud save, analytics and crash data</h2>
          <p>If you signed in with Google Play Games, delete the cloud copy of your progress in the Google Play Games app (Settings, then delete your Play Games data for this game), or ask us by email. Anonymous gameplay analytics and crash reports are not linked to your name or email; to request their deletion, email us with the approximate date you played and your phone model so we can find the matching installation.</p>
          <p className="mt-3">Purchases are recorded by Google Play; your purchase history is managed in your Google account and is not deleted by clearing game data.</p>
        </section>
        <section>
          <h2 className="mb-2 font-sora text-xl font-semibold text-white">Advertising data</h2>
          <p>Google may process ad identifiers, app/ad interactions and diagnostics through Google Mobile Ads. Clearing game storage does not necessarily delete data already held by Google. See <a className="text-cyan-300 underline" href="https://policies.google.com/privacy">Google&apos;s Privacy Policy</a> and your Android advertising settings for their controls.</p>
        </section>

        <footer className="border-t border-slate-700 pt-6 text-sm text-slate-400">
          <Link className="text-cyan-300 underline" href={`${gamePath}/privacy`}>Game privacy policy</Link>
          <span className="mx-3">·</span>
          <Link className="text-cyan-300 underline" href="/">Optivio Automation</Link>
          <span className="mx-3">·</span>
          <a className="text-cyan-300 underline" href="https://play.google.com/store/apps/details?id=com.brickrush">Get it on Google Play</a>
        </footer>
      </article>
    </main>
  )
}
