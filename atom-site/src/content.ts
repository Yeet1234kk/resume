// Images and the resume PDF live in /public, so they are served from the site root.
const airsentinelImg = 'airsentinel.jpg';
const breakingBondsImg = 'breaking-bonds.jpg';
const webdevAwardImg = 'webdev-award.jpg';
export const resumePreviewImg = 'resume-preview.jpg';

// ALL site content lives here. Edit this file to update the portfolio.
// Anything set to null shows on the page as a dashed "to add" tag.

export const profile = {
  name: 'Phasin Likitphatham',
  nickname: 'Atom',
  headline: 'First-year ICT student at Mahidol University | Websites and tools for small businesses | HTML, CSS, JavaScript',
  seeking: 'Open to internships at tech companies and startups',
  email: 'atom.phasin@gmail.com' as string | null,
  phone: '+66 93 791 7443' as string | null,
  linkedin: 'https://www.linkedin.com/in/phasin-likitphatham-380484372/' as string | null,
  github: 'https://github.com/yeet1234k' as string | null,
  resume: 'resume.pdf' as string | null, // file lives in /public
};

// Lesson 7: value, audience, promise
export const brand = {
  audience: 'Small business owners, like restaurants and retail shops, with no in-house tech team',
  persona: 'A builder who works with paying clients, not just class projects',
  promise: 'I find gaps in small businesses and build practical websites and tools to fill them',
};

// Present tense, active voice (Lesson 7). First paragraph = my submitted brand story.
export const story = [
  'I’m Atom, and I build websites and tools that solve real problems for small businesses. Running my family’s food shop showed me how hard it is to track sales across the POS, LINE MAN and Grab, so I’m building a system that sends the owner one clear daily report on LINE. From client websites to tools for my family’s shop, I start by understanding the business, then deliver something the owner actually uses every day.',
  'I’m a first-year ICT student at Mahidol University. I taught myself HTML, CSS and JavaScript through YouTube and real projects, and I had my first paid web client within one to three months.',
  'Business taught me the rest. Since 2021 I’ve run my own resale business, first sneakers and now watches, with average monthly revenue in the five figures (THB). When a restoration order didn’t look brand new, I told the customer I needed more time and redid it, even when that cost me time or profit. When sneaker demand cooled, I tracked the trend and moved the business to watches.',
  'I’m looking for an internship at a tech company or startup during university, and I’m working toward an internship in Germany, drawn by my love of cars and the automotive industry.',
];

export const education = [
  {
    school: 'Mahidol University, Faculty of ICT',
    degree: 'Bachelor of Science in Information and Communication Technology',
    dates: '2026 to present (expected graduation 2030)',
    courses: [
      'ITCS113 Fundamentals of Programming (C)',
      'ITCS112 Discrete Structures',
      'ITCS114 Introduction to Computer Ethics',
      'ITLG301 Communication Strategies for Professional Life',
      'Calculus',
      'Technical English I',
      'Management',
    ],
    activities: [] as string[],
  },
  {
    school: 'Potisarnpittayakorn School',
    degree: 'Intensive English Program, Computer Science track (M.4–6); English Program, Science Robotics track (M.1–3)',
    dates: 'Graduated 2025',
    courses: [] as string[],
    activities: ['Computer Science Club: hackathons and competitions', 'Boxing Club', 'Senior Student Ambassador, program open house events', 'Teaching Assistant, Muay Thai cultural exchange for Chinese exchange students', 'Good Citizen Award 2025: sports day Treasurer and Acting Vice President'],
  },
];

export const work = [
  {
    title: 'Developer (part-time)',
    org: 'Fantuan, family restaurant',
    dates: 'Aug 2026 to present',
    points: [
      'Design a reporting tool that combines sales from the Buzzebees POS, LINE MAN and Grab into one daily LINE report for the owner',
      'Research how to access each platform’s data within its terms of service and Thailand’s data protection law (PDPA)',
    ],
  },
  {
    title: 'Marketing Assistant (part-time)',
    org: 'Watch business',
    dates: 'Mar 2026 to present',
    points: [
      'Write watch listings, shoot and edit product photos, and post content on Instagram, Facebook and TikTok',
      'Answer customer questions about products and orders',
      'Built Watch Poster, a tool that posts one listing to several Facebook groups in a single run',
    ],
  },
  {
    title: 'Freelance Web Developer',
    org: 'Self-employed',
    dates: 'Mar 2026 to present',
    points: [
      'Run client projects alone, from the first meeting to launch and maintenance',
      'Turn unclear client ideas into layouts with structured questions and Figma, Canva and v0 mockups before building',
      'Deliver builds to each client’s specification and revise them through feedback rounds',
      'Built 3–5 client websites, including a 14-page bilingual site for King Nylon, a Thai rope and fishing net manufacturer',
    ],
  },
  {
    title: 'Founder and Owner',
    org: 'Resale business: sneakers (2021 to 2025), watches (2025 to present)',
    dates: '2021 to present',
    points: [
      'Run the business alone, handling sourcing, restoration, pricing and marketing',
      'Sold 300+ items through Facebook and LINE, with average monthly revenue in the five figures (THB)',
      'Restore used sneakers and watches to raise their resale value, and redo any restoration that doesn’t look brand new before delivery',
      'Negotiate purchase and sale prices with suppliers and buyers, and review stock costs and profit each month to decide what to invest in next',
      'Pivoted from sneakers to watches in 2025 after tracking a drop in sneaker demand',
    ],
  },
];

export type Project = {
  name: string;
  status: string;
  what: string;
  features?: string[];
  role: string;
  tools: string[];
  challenge?: string;
  result?: string;
  evidence: { label: string; href: string | null }[];
  images?: { src: string; alt: string }[];
  diagram?: boolean;
};

export const projects: Project[] = [
  {
    name: 'King Nylon website',
    status: 'Live draft',
    what: 'A 14-page bilingual (English and Thai) website for King Nylon, a Thai manufacturer of nylon, PE, PP and polyester rope, twine and fishing nets for commercial fisheries, aquaculture and construction.',
    features: [
      'Five sections: Why us, Products (rope, fishing nets, other netting), Company (technology, quality control, gallery), Customers (testimonials, FAQ) and Contact',
      'English and Thai language switch in the header',
      'Quote request form, linked from the header and the home page',
      'Home page specification table: materials, 3-, 4- and 8-strand and braided construction, knotted and knotless netting, UV-stabilised finish, OEM supply',
      'Search and sharing setup: canonical URL, Open Graph and Twitter card previews, Thai locale tag and indexing rules',
      'Skip-to-content link and a mobile menu',
    ],
    role: 'Solo developer: design, page structure, coding and deployment',
    tools: ['HTML', 'CSS', 'JavaScript', 'SEO metadata', 'Vercel'],
    challenge: 'The client’s company figures (years in business, export markets, annual output) and full product data aren’t ready yet, so those fields hold placeholders that the real data will replace without layout changes.',
    result: 'A live preview on Vercel for client review, already set up for its planned domain, kingnylon.com.',
    evidence: [
      { label: 'Live site: king-nylon.vercel.app', href: 'https://king-nylon.vercel.app' },
    ],
  },
  {
    name: 'Fantuan sales report app',
    status: 'Planning and research',
    what: 'A reporting tool that sends my brother one daily LINE message covering the family restaurant’s sales from all three channels.',
    features: [
      'Sources: Buzzebees POS, LINE MAN and Grab',
      'Report contents: sales per channel, best- and worst-selling items, the most profitable platform after commission fees, and ingredient stock burn rate',
      'Delivery: a LINE message through the LINE Messaging API',
    ],
    role: 'Solo developer: requirements, research and system design',
    tools: ['REST APIs', 'Buzzebees POS API', 'LINE Messaging API', 'PDPA'],
    challenge: 'LINE MAN and Grab are closed platforms, so I research which merchant data I can access without breaking their terms of service or the PDPA.',
    result: 'Confirmed that the Buzzebees POS offers a REST API with key-based access, and mapped the full data flow in the diagram below.',
    evidence: [{ label: 'System design diagram (below)', href: null }],
    diagram: true,
  },
];

export type Skill = { name: string; level?: string | null };
export const skills: { group: string; items: Skill[] }[] = [
  { group: 'Web development', items: [
    { name: 'HTML', level: 'Intermediate' }, { name: 'CSS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' }, { name: 'Backend and databases', level: 'Intermediate' },
    { name: 'Debugging and troubleshooting', level: 'Intermediate' },
  ]},
  { group: 'Programming and data', items: [
    { name: 'Python', level: 'Intermediate' }, { name: 'SQL and MySQL', level: 'Intermediate' },
    { name: 'C', level: 'Intermediate' }, { name: 'Arduino and C++', level: 'Intermediate' },
  ]},
  { group: 'Design and prototyping', items: [
    { name: 'Canva', level: 'Advanced' }, { name: 'Figma', level: 'Intermediate' },
    { name: 'v0', level: 'Intermediate' }, { name: 'Wireframing', level: 'Intermediate' },
    { name: 'Blender 3D', level: 'Intermediate' },
  ]},
  { group: 'Tools and platforms', items: [
    { name: 'Vercel', level: 'Advanced' }, { name: 'AI tools', level: 'Advanced' }, { name: 'REST APIs', level: 'Intermediate' },
  ]},
  { group: 'Business and marketing', items: [
    { name: 'Negotiation' }, { name: 'Money and stock management' }, { name: 'Market research' },
    { name: 'Digital marketing' }, { name: 'Product photography' }, { name: 'Sneaker and watch restoration' },
  ]},
  { group: 'Soft skills', items: [
    { name: 'Self-motivated' }, { name: 'Disciplined' }, { name: 'Adaptable' },
    { name: 'Detail-oriented' }, { name: 'Resourceful' }, { name: 'Persistent' },
    { name: 'Team leadership' }, { name: 'Client communication' },
  ]},
];

// Use LinkedIn levels (Lesson 7): Elementary, Limited working, Professional working,
// Full professional, Native or bilingual. ICT goal for English: Limited working or higher.
export const languages: Skill[] = [
  { name: 'Thai', level: 'Native or bilingual' },
  { name: 'English', level: 'Limited working proficiency (B2)' },
];


export const schoolProjects: Project[] = [
  {
    name: 'AirSentinel',
    status: 'Senior year project, 2025',
    what: 'An autonomous robot that navigates a mapped building without collisions, measures air quality in each labeled zone (for example, “Building 1, Main Hallway”) and sends the results to a user interface.',
    features: [
      'Maps a building and stores each area as a named zone',
      'Roams on its own and avoids obstacles',
      'Collects air-quality readings per zone and shows them in the UI by area name',
    ],
    role: 'Project lead in a team of 4+: hardware, sensors and the user interface',
    tools: ['Arduino', 'C++', 'Air-quality sensors', 'Robot platform'],
    evidence: [{ label: 'Photos of the prototype, the physical robot and the zone map (below)', href: null }],
    images: [{ src: airsentinelImg, alt: 'AirSentinel prototype render, the physical robot, and a floor plan showing the robot moving between labeled rooms' }],
  },
  {
    name: 'Breaking Bonds',
    status: 'Competition entry, 2025',
    what: 'A digital board game where players act as investors in a collapsed mine, buying and selling chemical elements whose prices shift with random world events such as pandemics.',
    role: 'Concept lead in a team of 3, with a teacher advisor',
    tools: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'VS Code'],
    result: 'Placed 8th of about 40 teams at the MUICT-AST Tech Competition and qualified past the first round.',
    evidence: [{ label: 'Game screenshots (below)', href: null }],
    images: [{ src: breakingBondsImg, alt: 'Breaking Bonds title screen, periodic-table trading board and player setup screen' }],
  },
];

export const competitions: { name: string; year: string; result: string; detail: string; image?: { src: string; alt: string } }[] = [
  { name: 'MUICT-AST Tech Competition (Mahidol University ICT)', year: '2025', result: '8th of about 40 teams, qualified past the first round', detail: 'Breaking Bonds digital board game, team of 3; I led the game concept.' },
  { name: 'SPU AI Prompt Mini Hackathon (Sripatum University)', year: '2025', result: 'Participant', detail: 'Timed AI and coding challenge.' },
  { name: 'Web Development Competition (university-hosted)', year: '2024', result: 'Honorable Mention, 5th of 26', detail: 'Built a health and nutrition website to given specifications under time limits, team of 2.', image: { src: webdevAwardImg, alt: 'Receiving the Honorable Mention award at the web development competition' } },
];

export const workshops = [
  { name: 'TP-Link Enterprise Training Program', org: 'TP-Link Enterprise and Potisarnpittayakorn School', date: '17 to 21 Mar 2025', detail: 'Five days on networking, CCTV, access point setup, routing and help desk support, including client meetings matching security products to factory needs.' },
];

export const certificates = [
  { name: 'Introduction to Data Analytics', org: 'True Digital Academy and Chulalongkorn University', date: '' },
  { name: 'Exploring Digital Technology Landscape', org: 'Chula MOOC, Chulalongkorn University', date: 'Sep 2025' },
  { name: 'Basic Python Programming', org: 'Change Education', date: 'Apr 2024' },
];

export const personalProjects: Project[] = [
  {
    name: 'CarPlay Dashboard',
    status: 'Live',
    what: 'A phone web app that works like a car dashboard in the style of Apple CarPlay, combining navigation, music and weather on one screen.',
    features: [
      'Saved places, including home and Mahidol University, plus nearby search for gas, food, parking, hospitals and shops',
      'Route preview with distance and drive time, live speed in km/h, and one-tap navigation',
      'YouTube Music player with songs, playlists, an up-next queue and lyrics',
      'Weather with the current, high and low temperature',
      'Voice search: say a place name to find it',
      'Opens full screen when added to the phone’s home screen',
    ],
    role: 'Idea, feature planning, testing and deployment',
    tools: ['HTML', 'CSS', 'JavaScript', 'Geolocation', 'Vercel'],
    evidence: [{ label: 'Live app: car-play-five.vercel.app', href: 'https://car-play-five.vercel.app' }],
  },
  {
    name: 'Finance Tracker',
    status: 'In development',
    what: 'A money tracker for logging income and expenses, built as my own replacement for tracker apps that charge a yearly subscription.',
    features: [
      'Income and expense categories',
      'Monthly summary with charts',
      'Budgets and saving goals',
      'Edit, delete and export entries',
    ],
    role: 'Idea, feature planning, testing and deployment',
    tools: ['HTML', 'CSS', 'JavaScript', 'Local storage', 'Vercel'],
    challenge: 'Data is stored locally on the device for now.',
    result: 'A working tracker I use myself. My next step is moving the data into a database, which this project helps me learn.',
    evidence: [{ label: 'Live app: finance-app-rouge-phi.vercel.app', href: 'https://finance-app-rouge-phi.vercel.app' }],
  },
  {
    name: 'Watch Poster',
    status: 'Live',
    what: 'A Thai-language web app for the watch business that posts one listing to every saved Facebook group in a single run. It is designed for groups where the business is allowed to post.',
    features: [
      'Caption of up to 2,000 characters and up to 15 photos (JPG, PNG or HEIC) per listing',
      'Two comment images set once and added under every post: an Open Chat QR code and a LINE QR code',
      'Group list managed in the app, with a name, Facebook link and emoji icon for each group',
      'Live progress per group, with start, stop and clear controls',
      'Telegram notification when every group is done',
      'Posting runs through n8n workflows and Apify',
    ],
    role: 'Idea, feature planning, testing and deployment',
    tools: ['HTML', 'CSS', 'JavaScript', 'n8n', 'Apify', 'Telegram', 'Vercel'],
    evidence: [{ label: 'Live app: watch-autoposter-ui.vercel.app', href: 'https://watch-autoposter-ui.vercel.app' }],
  },
];
