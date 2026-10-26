import type { Metadata } from 'next'
import Link from 'next/link'

const gamePath = '/games/brick-breaker-power-rush'
const contact = 'optivio.apps@gmail.com'

export const metadata: Metadata = {
  title: 'Brick Breaker: Power Rush Privacy Policy',
  description: 'Privacy policy for the Brick Breaker: Power Rush Android game by Optivio Automation.',
  alternates: { canonical: `${gamePath}/privacy` },
}

export default function BrickBreakerPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] px-5 py-12 text-slate-200 sm:py-16">
      <article className="mx-auto max-w-3xl space-y-8 leading-relaxed">
        <div className="border-b border-slate-700 pb-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">Optivio Automation · Games</p>
          <h1 className="font-sora text-3xl font-bold text-white sm:text-4xl">Brick Breaker: Power Rush Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-400">Effective 25 September 2026 · Android package: com.brickrush</p>
        </div>

        <section>
          <h2 className="mb-2 font-sora text-xl font-semibold text-white">Who is responsible</h2>
          <p>Optivio Automation publishes Brick Breaker: Power Rush. For questions or privacy requests, email <a className="text-cyan-300 underline" href={`mailto:${contact}`}>{contact}</a>. This policy applies to this game, not to Optivio Automation&apos;s separate business website or future games.</p>
        </section>

        <section>
          <h2 className="mb-2 font-sora text-xl font-semibold text-white">Game data on your device</h2>
          <p>The game saves level progress, in-game currency, unlocks, settings and gameplay preferences locally on your device. You do not need to create a game account or submit a name, email address or payment-card number to play. The leaderboard shown in the game is a local demonstration, not an online leaderboard.</p>
        </section>

        <section>
          <h2 className="mb-2 font-sora text-xl font-semibold text-white">Advertising and consent</h2>
          <p>The game includes Google Mobile Ads and may display a top banner, an ad between completed levels, and optional rewarded ads. Google&apos;s SDK may collect or share an IP address, device or advertising identifiers where available, app and ad interactions, and diagnostics for ad delivery, measurement and fraud prevention. An IP address can indicate approximate location. Google&apos;s data practices are described in its <a className="text-cyan-300 underline" href="https://policies.google.com/privacy">Privacy Policy</a>.</p>
          <p className="mt-3">Where required, the game asks for advertising consent before requesting ads and offers privacy choices in Settings when available. You can also manage advertising preferences through your device settings. Optional rewarded ads require your choice to watch them. You can remove ads with the optional &quot;Remove Ads&quot; purchase described below.</p>
        </section>

        <section>
          <h2 className="mb-2 font-sora text-xl font-semibold text-white">Google Play Games sign-in and cloud save (optional)</h2>
          <p>If you choose to sign in with Google Play Games, the game stores a copy of your progress (levels, stars, coins, gems, unlocked ball designs, upgrades and owned store items) in Google Play Games Saved Games so it can be restored after reinstalling or on another device. The game shows your Play Games display name inside the game. Signing in is optional; you can cancel the sign-in prompt and keep playing. Google processes this data under its <a className="text-cyan-300 underline" href="https://policies.google.com/privacy">Privacy Policy</a>.</p>
        </section>
        <section>
          <h2 className="mb-2 font-sora text-xl font-semibold text-white">In-app purchases</h2>
          <p>Optional purchases (Remove Ads, Starter Pack and gem packs) are processed by Google Play. We never see or store your payment-card details. To confirm and restore purchases, the game uses RevenueCat, a purchase-validation service that receives the purchase record from Google Play (product, time, transaction and order identifiers) together with a random app user identifier created by its SDK. On a new install the game quietly asks Google Play which items your Google account already owns, so Remove Ads and the Starter Pack are restored without signing in.</p>
        </section>
        <section>
          <h2 className="mb-2 font-sora text-xl font-semibold text-white">Anonymous gameplay analytics</h2>
          <p>To balance levels and fix problems, the game sends anonymous usage events: app opened, level started, won, failed or left, rewards claimed, rewarded ads watched, ball designs and upgrades bought, and store purchases (product only). Each event carries a random installation ID created on your device, together with the app version, device model, Android version, phone language, time-zone offset, highest level reached and in-game coin and gem balance. We do not collect your name, email address, Google account, advertising ID or precise location for analytics.</p>
          <p className="mt-3">These events are stored in our database hosted by Supabase and in PostHog, an analytics service. Only Optivio Automation staff can view them. Automated test devices used by Google Play are excluded.</p>
        </section>
        <section>
          <h2 className="mb-2 font-sora text-xl font-semibold text-white">Crash reports</h2>
          <p>If the game crashes or stops responding, it sends a crash report to Sentry: the error and stack trace, app version, device model, Android version and basic device state (such as memory and orientation) at the time of the crash. Crash reports do not include screenshots, your name, email address or IP address as a user identifier. We use them only to find and fix bugs.</p>
        </section>

        <section>
          <h2 className="mb-2 font-sora text-xl font-semibold text-white">Retention, deletion and your choices</h2>
          <p>Local game data remains on your device until you clear the app&apos;s storage or uninstall it, subject to any Android backup or restore settings. A Play Games cloud save remains in your Google account until you delete it through Google Play Games. Anonymous analytics and crash reports are kept only as long as they are useful for improving the game and are then deleted. Google controls data it receives through its advertising, Play Games and billing services under its own policies. For the available steps and a contact route, see our <Link className="text-cyan-300 underline" href={`${gamePath}/data-deletion`}>game data deletion page</Link>. You can email us about access, correction or deletion requests; we will review requests under applicable law.</p>
        </section>

        <section>
          <h2 className="mb-2 font-sora text-xl font-semibold text-white">Children and changes</h2>
          <p>The game does not ask players to submit personal contact information. Parents or guardians with a privacy concern can contact us at the email above. The game&apos;s Play Store age and audience settings must match the released version. We may update this policy when features or providers change, and will publish a new effective date here.</p>
        </section>

        <footer className="border-t border-slate-700 pt-6 text-sm text-slate-400">
          <Link className="text-cyan-300 underline" href={`${gamePath}/data-deletion`}>Data deletion</Link>
          <span className="mx-3">·</span>
          <Link className="text-cyan-300 underline" href="/">Optivio Automation</Link>
        </footer>
      </article>
    </main>
  )
}
