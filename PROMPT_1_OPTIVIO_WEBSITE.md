# PROMPT FOR SONNET 4.6 — BUILD OPTIVIO AUTOMATION WEBSITE

> Copy-paste this ENTIRE prompt into a new Sonnet 4.6 chat. Do NOT modify anything.

---

You are building a production-grade, SEO-optimized, high-converting landing page for **Optivio Automation** — an AI voice agent agency that sells AI receptionists to service businesses (dental clinics, HVAC companies, med spas) in the USA.

## PROJECT SPECS

**Tech Stack:** Next.js 14 (App Router) + Tailwind CSS + Framer Motion
**Deployment:** Vercel (free tier)
**Type:** Single-page landing site (all sections on one page with smooth scroll navigation)
**Goal:** Convert cold email traffic into booked demo calls via Calendly

## BRANDING (STRICT — DO NOT DEVIATE)

- **Primary Background:** Dark navy `#0A1628`
- **Accent Color:** Cyan `#00C8FF`
- **Secondary Accent:** Light cyan `#7DF3FF` (for subtle highlights, glows)
- **Text Primary:** White `#FFFFFF`
- **Text Secondary:** `#94A3B8` (muted gray-blue for secondary text)
- **Card/Section Backgrounds:** `#0F1F35` (slightly lighter navy for contrast)
- **Gradient Accent:** Use subtle cyan-to-blue gradients sparingly for CTAs and highlights
- **Font — Headings:** `Sora` from Google Fonts (bold, modern, tech-forward)
- **Font — Body:** `DM Sans` from Google Fonts (clean, readable)
- **Logo:** Will be added manually later — use text "OPTIVIO AUTOMATION" as placeholder with "OPTIVIO" in white bold and "AUTOMATION" in cyan below it, matching the logo style
- **Favicon:** Will be added manually later

## DESIGN DIRECTION

**Aesthetic:** Dark, premium, tech-forward. Think Linear.app meets Vercel's homepage. NOT generic SaaS template garbage.

**Key design elements:**
- Subtle grain/noise texture overlay on the dark background (very subtle, 2-3% opacity)
- Subtle glow effects behind CTAs and key elements (cyan glow)
- Smooth scroll-triggered fade-in animations for each section (use Framer Motion `whileInView`)
- Gradient mesh or radial gradient blobs in the background (very subtle, decorative)
- Cards with subtle border (1px border `rgba(0, 200, 255, 0.1)`) and slight backdrop blur
- NO cheesy stock images. Use icons (Lucide React) and clean illustrations/shapes instead
- Generous whitespace between sections
- Mobile-first responsive design

## PAGE STRUCTURE & COPY

Build these sections in this exact order:

### 1. NAVBAR (Sticky)
- Left: "OPTIVIO" (white, bold, Sora) + "AUTOMATION" (cyan, lighter weight) — text logo
- Center: Nav links — How It Works | Pricing | FAQ (smooth scroll to sections)
- Right: "Book a Free Demo" button (cyan background, dark text, rounded-lg, subtle glow)
- On mobile: hamburger menu
- Navbar should have blur background (`backdrop-blur-md`) when scrolled

### 2. HERO SECTION
**Headline:** `Never Miss Another Customer Call. Ever.`
**Subheadline:** `AI voice agents that answer every call 24/7, qualify leads, and book appointments — so you never lose a customer to voicemail again.`
**CTA Button:** `Book a Free Demo →` (links to Calendly — use href="https://calendly.com" as placeholder)
**Secondary CTA:** `See How It Works ↓` (smooth scrolls to How It Works section)

**Stats bar below hero (3 stats in a row):**
- `85%` — "of callers who hit voicemail never call back"
- `$1,200` — "average revenue lost per missed call in home services"
- `24/7` — "coverage without hiring a single person"

**Design notes for hero:**
- Large headline with gradient text effect (white to slight cyan)
- Subtle animated pulse/glow behind the main CTA button
- Stats bar has subtle top border line and cards with the slightly lighter navy background
- Add a decorative abstract SVG element or radial gradient glow behind the headline area

### 3. PROBLEM SECTION
**Section tag (small, above heading):** `THE PROBLEM`
**Headline:** `Your Phone Is Ringing. Nobody's Answering.`
**Body text:** `Right now, your competitors are picking up the customers you're losing to voicemail. Every unanswered call is revenue walking out the door.`

**3 problem cards in a grid:**
1. Icon: PhoneMissed → Title: "Missed Calls = Missed Revenue" → Text: "The average service business misses 30-40% of incoming calls. At $200+ per job, that's thousands lost every month."
2. Icon: Clock → Title: "After-Hours Means No-Hours" → Text: "62% of customer calls happen outside business hours. Your voicemail isn't closing deals at 9 PM."
3. Icon: UserMinus → Title: "Customers Don't Wait" → Text: "A customer who hits voicemail calls your competitor within 60 seconds. They're not leaving a message — they're leaving you."

### 4. SOLUTION SECTION
**Section tag:** `THE SOLUTION`
**Headline:** `An AI Receptionist That Never Sleeps.`
**Body:** `Our AI voice agents answer every call in under 2 seconds. They sound natural, handle real conversations, and book appointments directly into your calendar.`

**4 feature cards (2x2 grid on desktop, stacked on mobile):**
1. Icon: Phone → Title: "Answers Every Call" → Text: "24/7/365. No hold music. No voicemail. Every call answered in natural, human-like voice."
2. Icon: CalendarCheck → Title: "Books Appointments" → Text: "AI qualifies the caller and books directly into your Google Calendar or Outlook. No double-booking."
3. Icon: MessageSquare → Title: "Handles FAQs" → Text: "Pricing, hours, services, location — your AI knows your business and answers accurately every time."
4. Icon: BarChart3 → Title: "Full Call Analytics" → Text: "Every call logged with transcript, caller info, and outcome. Know exactly what's happening on your phones."

### 5. HOW IT WORKS SECTION
**Section tag:** `HOW IT WORKS`
**Headline:** `Live in 3 Days. Not 3 Months.`

**3 steps (horizontal on desktop, vertical on mobile) with numbered circles and connecting lines:**
1. Number: "01" → Title: "We Build Your AI Agent" → Text: "We train your AI on your business — services, pricing, FAQs, booking rules. Custom-built for your specific needs."
2. Number: "02" → Title: "Connect to Your Phone" → Text: "We set up a dedicated business number or forward your existing line. Zero disruption to your operations."
3. Number: "03" → Title: "Never Miss a Call Again" → Text: "Your AI answers every call, qualifies leads, books appointments, and sends you a summary. You focus on the work."

### 6. SOCIAL PROOF / STATS SECTION
**Headline:** `Built for Service Businesses That Run on Phone Calls.`

**Industry badges/pills showing target niches:**
"Dental Clinics" | "HVAC Companies" | "Med Spas" | "Real Estate" | "Law Firms" | "Plumbing" | "Roofing"

**ROI comparison card:**
Left side: "Traditional Receptionist" — $3,500/mo, 8hrs/day, 1 call at a time, Sick days & vacations
Right side: "Optivio AI Agent" — Starting at $500/mo, 24/7/365, Unlimited concurrent calls, Never calls in sick

(Make this a visually striking comparison — the traditional side slightly muted/gray, the AI side highlighted with cyan accents)

### 7. PRICING SECTION
**Section tag:** `PRICING`
**Headline:** `Simple Pricing. Serious Results.`
**Subheadline:** `No contracts. No hidden fees. Cancel anytime.`

**Single pricing display (NOT 3 columns — keep it simple for cold traffic):**
- Big text: "Starting at $500/month"
- Below: "One-time setup fee from $1,500"
- Feature list with checkmarks:
  - "AI voice agent trained on your business"
  - "24/7 call answering & lead qualification"
  - "Appointment booking into your calendar"
  - "Full call transcripts & analytics"
  - "Dedicated support & monthly optimization"
- CTA: "Book a Free Demo →" (same Calendly link)
- Small text below CTA: "Custom packages available for multi-location businesses"

### 8. FAQ SECTION
**Section tag:** `FAQ`
**Headline:** `Questions? We've Got Answers.`

**Accordion-style FAQ (click to expand):**
1. "Does the AI actually sound human?" → "Yes. Our AI uses the latest voice synthesis technology with sub-second response times. Callers typically can't tell the difference. We'll demo it for you on our call."
2. "What if the AI can't handle a question?" → "The AI is trained to recognize when it's out of its depth. It seamlessly transfers the call to your team with full context of what was discussed — no awkward handoffs."
3. "How long does setup take?" → "Most businesses are fully live within 3-5 business days. We handle everything — training the AI, configuring call flows, connecting to your calendar, and testing."
4. "Do I need to change my phone number?" → "No. We either set up a new dedicated number or forward your existing line to the AI. Your customers won't notice any change except better service."
5. "What happens after hours?" → "That's the whole point. Your AI works 24/7/365 — nights, weekends, holidays. Every call answered, every lead captured, every appointment booked."
6. "Can I try it before committing?" → "Absolutely. Book a free demo and we'll show you a live AI agent built for your specific business niche. You'll hear exactly what your customers will experience."

### 9. FINAL CTA SECTION
**Headline:** `Stop Losing Customers to Voicemail.`
**Subheadline:** `Book a 15-minute demo. See your AI receptionist in action. No commitment.`
**CTA Button:** `Book Your Free Demo →` (large, prominent, cyan with glow)
**Below button:** `hello@optivioautomation.com` (mailto link)

### 10. FOOTER
- Left: "OPTIVIO AUTOMATION" text logo + "© 2026 Optivio Automation. All rights reserved."
- Right: Links — Privacy Policy | Terms of Service (can be # placeholder links)
- Below: "Built with AI. Run by humans."

## TECHNICAL REQUIREMENTS

### File Structure:
```
optivio-automation/
├── app/
│   ├── layout.tsx          (root layout with fonts, metadata)
│   ├── page.tsx            (main page importing all sections)
│   ├── globals.css         (Tailwind + custom styles + grain texture)
│   ├── sitemap.ts          (auto-generated sitemap)
│   └── robots.ts           (robots.txt config)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── HowItWorks.tsx
│   ├── SocialProof.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   └── AnimatedSection.tsx  (reusable scroll animation wrapper)
├── public/
│   └── (empty — logos added manually later)
├── tailwind.config.ts
├── next.config.js
├── package.json
└── tsconfig.json
```

### SEO Requirements (in layout.tsx):
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://optivioautomation.com'),
  title: 'Optivio Automation | AI Voice Agents That Never Miss a Call',
  description: 'AI receptionists for service businesses. Answer every call 24/7, qualify leads, and book appointments automatically. Dental clinics, HVAC, med spas. Starting at $500/mo.',
  keywords: ['AI voice agent', 'AI receptionist', 'missed calls solution', 'dental clinic AI', 'HVAC AI answering', 'med spa AI receptionist', '24/7 call answering', 'AI appointment booking'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://optivioautomation.com',
    siteName: 'Optivio Automation',
    title: 'AI Voice Agents That Never Miss a Call | Optivio Automation',
    description: 'Stop losing customers to voicemail. AI receptionists that answer 24/7, qualify leads, and book appointments. Starting at $500/mo.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Agents That Never Miss a Call | Optivio Automation',
    description: 'Stop losing customers to voicemail. AI receptionists that answer 24/7, qualify leads, and book appointments.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### JSON-LD Schema (add in layout.tsx as script tag):
Include these schemas:
1. **Organization schema** — name: Optivio Automation, url, logo, contactPoint with email hello@optivioautomation.com
2. **Service schema** — name: AI Voice Agent Service, provider: Optivio Automation, serviceType: AI Voice Agent, areaServed: US
3. **FAQPage schema** — all 6 FAQ questions and answers structured for Google rich results

### sitemap.ts:
```typescript
export default function sitemap() {
  return [
    {
      url: 'https://optivioautomation.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
```

### robots.ts:
```typescript
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://optivioautomation.com/sitemap.xml',
  };
}
```

### Performance Requirements:
- Use `next/font` for Sora and DM Sans (auto-optimized, no layout shift)
- Lazy load below-fold sections
- No unnecessary client-side JavaScript — only interactive components (FAQ accordion, mobile menu) should be client components
- Minimize Framer Motion bundle — only import what you use
- All animations should use `whileInView` with `once: true` and `viewport={{ once: true, amount: 0.3 }}`

### AnimatedSection Component:
Create a reusable wrapper component that fades in + slides up when scrolled into view:
```tsx
'use client';
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### Grain Texture (in globals.css):
```css
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
}
```

## CRITICAL INSTRUCTIONS

1. **Output ALL files completely.** Do not use comments like "// rest of component..." or "// similar to above". Write EVERY line of code.
2. **Every component must be fully functional.** FAQ accordion must open/close. Mobile menu must toggle. Smooth scroll must work. All animations must trigger on scroll.
3. **Mobile responsive.** Test mentally at 375px width. All grids should stack. Font sizes should scale down. Padding should reduce.
4. **Use TypeScript** for all files (.tsx, .ts).
5. **Tailwind only for styling** — no separate CSS files except globals.css for the grain texture and base styles.
6. **Include package.json** with all dependencies (next, react, react-dom, framer-motion, lucide-react, tailwindcss, typescript, @types/react, @types/node).
7. **Include tailwind.config.ts** with custom colors (navy, cyan) and fonts (Sora, DM Sans) configured.
8. **The page must feel PREMIUM.** This is for US business owners who charge $200+ per job. It cannot look cheap or template-like.

## DEPLOYMENT INSTRUCTIONS (include at the end as comments)

After generating all files:
```bash
# 1. Create project
npx create-next-app@latest optivio-automation --typescript --tailwind --app --src-dir=false --import-alias="@/*" --no-eslint

# 2. Install dependencies
cd optivio-automation
npm install framer-motion lucide-react

# 3. Replace all generated files with the code above

# 4. Test locally
npm run dev

# 5. Deploy to Vercel
npx vercel --prod
# OR connect GitHub repo to Vercel dashboard for auto-deploys
```

---

**BUILD THE ENTIRE PROJECT NOW. Output every file completely. No shortcuts. No placeholders. No "similar to above" comments. Every single line of code.**
