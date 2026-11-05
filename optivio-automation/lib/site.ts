export const SITE_URL = 'https://optivioautomation.com'

export const LINKS = {
  github: 'https://github.com/realtahailyas',
  linkedin: 'https://www.linkedin.com/in/tahailyas',
  personal: 'https://tahailyas.com',
  playDeveloper: 'https://play.google.com/store/apps/developer?id=Optivio+Automation',
  email: 'hello@optivioautomation.com',
  calendly: 'https://calendly.com/optivioautomation/15min',
  kdpRepo: 'https://github.com/realtahailyas/kdp-puzzle-book-generator',
  chessReelsRepo: 'https://github.com/realtahailyas/chess-reels',
}

export const SAME_AS = [
  LINKS.github,
  LINKS.linkedin,
  LINKS.playDeveloper,
  LINKS.personal,
]

export type AppInfo = {
  slug: string
  name: string
  tagline: string
  category: string
  schemaCategory: string
  accent: string
  glyph: string
  description: string[]
  features: string[]
  stack: string[]
  play: string
  site?: { label: string; url: string }
  privacy?: string
  installs?: string
  featured?: boolean
}

export const APPS: AppInfo[] = [
  {
    slug: 'tchess',
    name: 'TChess',
    tagline: 'An offline chess trainer for Android.',
    category: 'Games and learning',
    schemaCategory: 'GameApplication',
    accent: '#7DF3FF',
    glyph: 'knight',
    description: [
      'TChess is a chess trainer built around tactics puzzles, lessons and games against bots. It works offline, so you can practise on a flight or a commute without a connection.',
      'Puzzles come from the open Lichess puzzle database (CC0). The short-form video channels that promote it are run by the pipeline described on our automation page.',
    ],
    features: [
      'Tactics puzzles sorted by theme and difficulty',
      'Lessons and practice games against bots',
      'Works offline',
      'Progress tracking',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Android'],
    play: 'https://play.google.com/store/apps/details?id=app.tchess',
    site: { label: 'tchess.app', url: 'https://tchess.app' },
    installs: '1,000+ installs on Google Play',
  },
  {
    slug: 'dareclock',
    name: 'DareClock',
    tagline: 'An alarm that only stops when you complete a mission.',
    category: 'Lifestyle',
    schemaCategory: 'LifestyleApplication',
    accent: '#FF9F43',
    glyph: 'alarm',
    description: [
      'DareClock is an alarm clock for people who sleep through normal alarms. To switch it off you have to finish a short mission, such as push-ups counted by the camera.',
      'Pose detection runs on the device with ML Kit, so the camera feed is not uploaded.',
    ],
    features: [
      'Camera-counted push-up missions',
      'Other wake-up missions to choose from',
      'Streaks and wake-up time stats',
      'On-device processing',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'CameraX', 'ML Kit', 'Android'],
    play: 'https://play.google.com/store/apps/details?id=com.dareclock',
    privacy: 'https://optivioautomation.com/dareclock/privacy',
  },
  {
    slug: 'brick-breaker',
    name: 'Brick Breaker: Power Rush',
    tagline: 'A fast arcade brick breaker with power-ups.',
    category: 'Games',
    schemaCategory: 'GameApplication',
    accent: '#F472B6',
    glyph: 'bricks',
    description: [
      'Brick Breaker: Power Rush is a casual arcade game. Bounce the ball, clear the bricks and catch power-ups to keep a run alive.',
      'The game is free with ads. Its privacy policy and data deletion page are hosted on this site.',
    ],
    features: [
      'Classic brick breaker controls',
      'Power-ups to catch during a run',
      'Short sessions',
    ],
    stack: ['Unity', 'C#', 'Android'],
    play: 'https://play.google.com/store/apps/details?id=com.brickrush',
    privacy: 'https://optivioautomation.com/games/brick-breaker-power-rush/privacy',
  },
  {
    slug: 'certforge',
    name: 'CertForge',
    tagline: 'A study app for the AWS Cloud Practitioner exam.',
    category: 'Education',
    schemaCategory: 'EducationalApplication',
    accent: '#5EEAD4',
    glyph: 'cert',
    featured: false,
    description: [
      'CertForge is a study app for the AWS Certified Cloud Practitioner exam. It is no longer actively developed.',
    ],
    features: [],
    stack: ['Android'],
    play: 'https://play.google.com/store/apps/details?id=com.getcertforge.app',
  },
]

export const FEATURED_APPS = APPS.filter((a) => a.featured !== false)
