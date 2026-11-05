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
  icon: string
  screenshots: { src: string; alt: string }[]
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
    icon: '/apps/tchess/icon.png',
    screenshots: [
      { src: '/apps/tchess/screenshot-1.webp', alt: 'TChess home screen with the daily puzzle, rating and streak' },
      { src: '/apps/tchess/screenshot-2.webp', alt: 'TChess puzzles screen with Puzzle Rush, endgame trainer and themes' },
      { src: '/apps/tchess/screenshot-3.webp', alt: 'TChess bot list with opponents from beginner to advanced' },
      { src: '/apps/tchess/screenshot-4.webp', alt: 'TChess puzzle board showing a position with black to play' },
      { src: '/apps/tchess/screenshot-5.webp', alt: 'TChess Learn tab with basics lessons and pins, forks and sacrifices' },
    ],
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
    icon: '/apps/dareclock/icon.png',
    screenshots: [
      { src: '/apps/dareclock/screenshot-1.webp', alt: 'DareClock home screen with a 7:00 AM alarm and weekly stats' },
      { src: '/apps/dareclock/screenshot-2.webp', alt: 'DareClock mission picker with push-ups, squats and other dares' },
      { src: '/apps/dareclock/screenshot-3.webp', alt: 'DareClock lock screen alarm asking for 15 squats to turn off' },
      { src: '/apps/dareclock/screenshot-4.webp', alt: 'DareClock streak screen showing a 14 day streak' },
      { src: '/apps/dareclock/screenshot-5.webp', alt: 'DareClock wake-up time tracking chart' },
    ],
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
    icon: '/apps/brick-breaker/icon.png',
    screenshots: [
      { src: '/apps/brick-breaker/screenshot-1.webp', alt: 'Brick Breaker: Power Rush home screen with the play button' },
      { src: '/apps/brick-breaker/screenshot-2.webp', alt: 'Brick Breaker: Power Rush gameplay with bricks and a ball volley' },
      { src: '/apps/brick-breaker/screenshot-3.webp', alt: 'Brick Breaker: Power Rush star map with 100 levels' },
      { src: '/apps/brick-breaker/screenshot-4.webp', alt: 'Brick Breaker: Power Rush ball skins screen' },
      { src: '/apps/brick-breaker/screenshot-5.webp', alt: 'Brick Breaker: Power Rush power-ups during a level' },
    ],
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
    icon: '/apps/certforge/icon.png',
    screenshots: [
    ],
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
