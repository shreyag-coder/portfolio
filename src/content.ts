export const profile = {
  name: 'Shreya Gupta',
  headline: 'Software engineer · Recommendations & product discovery · MCDS @ Carnegie Mellon',
  location: 'Pittsburgh, Pennsylvania, US',
  phone: '(412) 430-1011',
  phoneHref: 'tel:+14124301011',
  email: '2002sgupta@gmail.com',
  emailHref: 'mailto:2002sgupta@gmail.com',
  linkedinLabel: 'linkedin.com/in/shreya-gupta-0367b11b8',
  linkedinHref: 'https://www.linkedin.com/in/shreya-gupta-0367b11b8',
  photoSrc: 'shreya-headshot.png',
  photoAlt:
    'Professional headshot of Shreya Gupta, wearing a cream blouse, photographed against a soft bookshelf background',
  intro:
    'I build product-discovery experiences that balance UX, fairness, and revenue — from ranking layers on commerce feeds to sharing features shipped at scale. Incoming M.S. student in Computational Data Science at Carnegie Mellon.',
  about:
    'Recently a Member of Technical Staff at Adobe on Lightroom Mobile, and currently a software developer at Kicks Machine focused on recommendations and discovery. I care about clean architecture, thoughtful experiments, and making creative tools feel effortless. Contributor to Women Techmakers. Interests include mobile tech, on-device ML, and creative tools. English (fluent) and Hindi (native).',
} as const

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const

export const experience = [
  {
    company: 'Kicks Machine',
    location: 'Remote',
    role: 'Software Developer, Recommendations & Product Discovery',
    dates: 'Aug 2025 – Present',
    bullets: [
      'Built a rule-based ranking layer on Shopify product feeds, improving home and search CTR by 5–7%.',
      'Shipped dynamic carousels for new drops and curated collections, reducing manual curation for merchandising.',
      'Added event tracking and lightweight A/B tests on CTR, add-to-cart, and conversion.',
      'Worked with founders and designers on discovery flows balancing UX, fairness, and revenue.',
    ],
  },
  {
    company: 'Adobe Inc.',
    location: 'Bangalore',
    role: 'Member of Technical Staff',
    dates: 'July 2023 – Aug 2025',
    bullets: [
      'Shipped feature work that increased sharing usage by 15%, including QR code sharing.',
      'Migrated legacy XML-based UI to Jetpack Compose (~10% of the app).',
      'Wrote 120+ unit tests for sharing and raised coverage from 62% to 87%.',
      'Automated experiment gating and A/B tests with Adobe Target, cutting rollout issues by about 15%.',
      'Authored 85 Adobe Relay UI tests for Masking, Lens Blur, and Profiles — +35% coverage and fewer regressions.',
    ],
  },
  {
    company: 'Adobe Inc.',
    location: 'Remote',
    role: 'Tech Intern BS',
    dates: 'May 2022 – July 2022',
    bullets: [
      'Reduced the PSX iOS app size by 20% by removing unused assets and tightening bundles.',
      'Collaborated with design and engineering to triage and fix high-impact bugs.',
    ],
  },
] as const

export const projects = [
  {
    title: 'Augmented Reality for Students & Learning Enthusiasts',
    description:
      'Unity AR app that overlays 3D models and videos on Grade 12 Physics diagrams. Optimized for mid-range Android devices. Accompanying paper presented at ICSRESM 2022.',
    tags: ['Unity', 'AR', 'Android', 'Education'],
  },
  {
    title: 'Applied AI & Product Sense Hackathon',
    description:
      'Background-change prototype combining pose detection with Firefly APIs in a Lightroom-style demo, with mobile-aware segmentation and fallbacks.',
    tags: ['Pose detection', 'Firefly', 'Mobile ML'],
  },
  {
    title: 'Hide Album — Lightroom Android Hackathon',
    description:
      'Private albums feature for Lightroom Android. Received 90% positive internal feedback and led to roadmap discussions.',
    tags: ['Android', 'Lightroom', 'Kotlin'],
  },
  {
    title: 'Obstacle Avoidance Drone',
    description:
      'Hardware, ultrasonics, and control logic for a collision-aware drone. Top-20 at the Navonmesh state hackathon. Followed with post-collision reliability fixes and a pre-flight checklist.',
    tags: ['Hardware', 'Control systems', 'Hackathon'],
  },
] as const

export const skills = [
  {
    title: 'Languages',
    items: ['Kotlin', 'Java', 'Python', 'SQL', 'HTML/CSS', 'C', 'C++', 'C#'],
  },
  {
    title: 'Tools & frameworks',
    items: [
      'Android Studio',
      'Git',
      'Jetpack Compose',
      'Spring Boot',
      'Postman',
      'Swagger',
      'Unity',
      'Blender',
      'VS Code',
      'Jupyter',
      'Mermaid',
      'Mission Planner',
      'REST APIs',
      'Android SDK',
      'Firebase',
      'Adobe Target',
    ],
  },
  {
    title: 'Architecture & testing',
    items: [
      'MVVM',
      'MVI',
      'REST',
      'JWT',
      'JUnit',
      'Coroutines',
      'Rule-based recommendation',
      'Co-occurrence ranking',
    ],
  },
] as const

export const education = [
  {
    school: 'Carnegie Mellon University',
    degree: 'M.S. in Computational Data Science (MCDS), Analytics Concentration',
    dates: 'Aug 2026 – Dec 2027',
    location: 'Pittsburgh, PA',
    detail: null,
  },
  {
    school: 'Shri Shankaracharya Institute of Professional Mgmt. & Technology',
    degree: 'B.Tech. Computer Science & Engineering (Hons)',
    dates: 'Aug 2019 – May 2023',
    location: 'Raipur, India',
    detail: '9.29/10 CGPA',
  },
] as const

export const achievements = [
  'Silver Honour, International Astronomy and Astrophysics Competition (IAAC) 2020',
  'Paper: “Augmented Reality for Students and Learning Enthusiasts” at ICSRESM 2022',
  'NCC ‘A’ Certificate',
] as const

export const leadership = [
  {
    role: 'Community Coding Mentor',
    org: null,
    dates: 'Sep 2019 – Jun 2023',
    detail:
      'Taught 120+ students, designed curriculum, coordinated 10+ volunteer mentors, and ran bootcamps.',
  },
  {
    role: 'Cultural Committee Member',
    org: 'SSIPMT Raipur',
    dates: 'Jun 2020 – Jun 2022',
    detail: 'Handled logistics for Agresita and Navonmesh.',
  },
] as const
