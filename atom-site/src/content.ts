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
  seeking: 'Looking for an internship at a tech company or startup',
  email: 'atom.phasin@gmail.com' as string | null,
  phone: '+66 93 791 7443' as string | null,
  linkedin: 'https://www.linkedin.com/in/phasin-likitphatham-380484372/' as string | null,
  github: 'https://github.com/Yeet1234kk' as string | null,
  resume: 'resume.pdf' as string | null, // file lives in /public
};

// Lesson 7: value, audience, promise
export const brand = {
  audience: 'Restaurants and small shops with nobody to look after the tech side',
  persona: 'Someone who builds for paying clients, not just for class',
  promise: 'I find the thing slowing a small business down, then build the website or tool that fixes it',
};

// Told in order, so each part leads into the next. The first paragraph is always shown.
export const story = [
  'I’m Atom, a first-year ICT student at Mahidol University, and I build websites and tools for small businesses. My strength is that I’ve run a small business myself, so I understand the owner’s problem before I write any code.',
  'It started in 2021, while I was still in school. I bought worn sneakers, cleaned them up until they looked new, and sold them on Facebook and LINE. More than 300 sales later I’m still at it, only now it’s watches.',
  'Running that shop alone taught me what small business owners worry about: what sold, what it cost, and what’s left at the end of the month. When a restoration didn’t come out looking new, I told the buyer I needed more time and did it again, even when it ate my profit. When sneaker demand dropped, I saw it coming and moved to watches.',
  'Then I taught myself HTML, CSS and JavaScript from YouTube and real projects. A few months in, someone paid me to build their website. Since then I’ve built 3 to 5 client sites, including a 14-page English and Thai site for King Nylon, a rope and fishing net maker.',
  'My family’s restaurant, Fantuan, is where both sides meet. Orders come in through the POS, LINE MAN and Grab, and nobody sees them in one place. So I’m building a tool that sends my brother one short LINE message with the day’s sales.',
  'Now I’m looking for an internship at a tech company or startup, where I can learn how bigger teams build software. One day I’d like to intern in Germany, because I love cars and the car industry there.',
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
    degree: 'Intensive English Program, Computer Science track (M.4 to 6); English Program, Science Robotics track (M.1 to 3)',
    dates: 'Graduated 2025',
    courses: [] as string[],
    activities: ['Computer Science Club: hackathons and competitions', 'Boxing Club', 'Senior Student Ambassador at the program’s open house events', 'Teaching assistant for a Muay Thai cultural exchange with Chinese exchange students', 'Good Citizen Award 2025, as sports day Treasurer and Acting Vice President'],
  },
];

export const work = [
  {
    title: 'Developer (part-time)',
    org: 'Fantuan, family restaurant',
    dates: 'Aug 2026 to present',
    points: [
      'Designing a tool that pulls sales from the Buzzebees POS, LINE MAN and Grab into one daily LINE report for the owner',
      'Working out how to get each platform’s data without breaking its terms of service or Thailand’s data protection law (PDPA)',
    ],
  },
  {
    title: 'Marketing Assistant (part-time)',
    org: 'Watch business',
    dates: 'Mar 2026 to present',
    points: [
      'Write the watch listings, shoot and edit the photos, and post them on Instagram, Facebook and TikTok',
      'Answer customers’ questions about watches and orders',
      'Built Watch Poster so one listing goes out to many Facebook groups in a single run',
    ],
  },
  {
    title: 'Freelance Web Developer',
    org: 'Self-employed',
    dates: 'Mar 2026 to present',
    points: [
      'Handle each client project on my own, from the first meeting through launch and upkeep',
      'Ask clients the right questions, then turn rough ideas into Figma, Canva and v0 mockups before I write any code',
      'Build to each client’s brief and keep revising until they’re happy with it',
      'Built 3 to 5 client websites so far, including a 14-page English and Thai site for King Nylon, a Thai rope and fishing net maker',
    ],
  },
  {
    title: 'Founder and Owner',
    org: 'Resale business: sneakers (2021 to 2025), watches (2025 to present)',
    dates: '2021 to present',
    points: [
      'Run the whole business alone: buying, restoring, pricing and marketing',
      'Sold more than 300 items through Facebook and LINE, averaging five figures (THB) in monthly revenue',
      'Restore used sneakers and watches so they sell for more, and redo any piece that doesn’t look new before it ships',
      'Haggle on price with sellers and buyers, and check costs and profit every month to decide what to buy next',
      'Switched from sneakers to watches in 2025 when sneaker demand dropped',
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
    what: 'King Nylon makes rope, twine and fishing nets for fishing boats, fish farms and building sites. I built them a 14-page website in English and Thai.',
    features: [
      'Five sections: Why us, Products (rope, fishing nets, other netting), Company (technology, quality control, gallery), Customers (testimonials, FAQ) and Contact',
      'An English and Thai switch in the header',
      'A quote request form, linked from the header and the home page',
      'A spec table on the home page: materials, 3-, 4- and 8-strand and braided rope, knotted and knotless netting, UV-stabilised finish, OEM supply',
      'Set up for Google and for link previews on social media, with a Thai language tag',
      'A skip-to-content link and a mobile menu',
    ],
    role: 'Everything, on my own: design, page structure, code and launch',
    tools: ['HTML', 'CSS', 'JavaScript', 'SEO metadata', 'Vercel'],
    challenge: 'The client hasn’t sent their company figures or full product data yet. I left placeholders that the real numbers can drop into without changing the layout.',
    result: 'The preview is live on Vercel for the client to review, already set up for their planned domain, kingnylon.com.',
    evidence: [
      { label: 'Live site: king-nylon.vercel.app', href: 'https://king-nylon.vercel.app' },
    ],
    images: [{ src: 'king-nylon.jpg', alt: 'King Nylon home page: “Rope and fishing nets for boats, fish farms, and building sites”' }],
  },
  {
    name: 'Fantuan sales report app',
    status: 'Planning and research',
    what: 'My family’s restaurant sells through three channels, and nobody sees the totals in one place. This tool will send my brother one LINE message a day with all of it.',
    features: [
      'Pulls from the Buzzebees POS, LINE MAN and Grab',
      'Shows sales per channel, best and worst sellers, which platform makes the most after fees, and how fast ingredients run out',
      'Arrives as a LINE message through the LINE Messaging API',
    ],
    role: 'Everything, on my own: requirements, research and system design',
    tools: ['REST APIs', 'Buzzebees POS API', 'LINE Messaging API', 'PDPA'],
    challenge: 'LINE MAN and Grab don’t open their data to just anyone, so I’m researching what a merchant can access without breaking their terms or the PDPA.',
    result: 'I confirmed the Buzzebees POS has a REST API with key-based access, and mapped how the data will flow (see the diagram).',
    evidence: [{ label: 'System design diagram (above)', href: null }],
    diagram: true,
  },
];

export type Skill = { name: string; level?: string | null };
export const skills: { group: string; items: Skill[] }[] = [
  { group: 'Web development', items: [
    { name: 'HTML' }, { name: 'CSS' },
    { name: 'Backend development' },
    { name: 'Debugging and troubleshooting' },
  ]},
  { group: 'Programming languages', items: [
    { name: 'Python' }, { name: 'C' },
    { name: 'Arduino and C++' }, { name: 'JavaScript' },
  ]},
  { group: 'Database tools', items: [
    { name: 'SQL' }, { name: 'MySQL' },
  ]},
  { group: 'Design and prototyping', items: [
    { name: 'Canva' }, { name: 'Figma' },
    { name: 'v0' }, { name: 'Wireframing' },
    { name: 'Blender 3D' },
  ]},
  { group: 'Tools and platforms', items: [
    { name: 'Vercel' }, { name: 'AI tools' }, { name: 'REST APIs' },
  ]},
  { group: 'Business analysis and marketing', items: [
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
    what: 'A robot that drives itself around a building without bumping into anything, checks the air quality in each named area (like “Building 1, Main Hallway”) and sends the readings to a screen.',
    features: [
      'Maps the building and saves each area as a named zone',
      'Drives on its own and steers around obstacles',
      'Reads the air quality in each zone and shows it on screen by area name',
    ],
    role: 'Led a team of 4+, and worked on the hardware, sensors and user interface',
    tools: ['Arduino', 'C++', 'Air-quality sensors', 'Robot platform'],
    evidence: [{ label: 'Photos of the prototype, the robot and the zone map (above)', href: null }],
    images: [{ src: airsentinelImg, alt: 'AirSentinel prototype render, the physical robot, and a floor plan showing the robot moving between labeled rooms' }],
  },
  {
    name: 'Breaking Bonds',
    status: 'Competition entry, 2025',
    what: 'A digital board game where you play an investor in a collapsed mine. You buy and sell chemical elements, and their prices jump around with random world events like pandemics.',
    role: 'Came up with the game concept, in a team of 3 with a teacher advisor',
    tools: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'VS Code'],
    result: 'We placed 8th of about 40 teams at the MUICT-AST Tech Competition and made it past the first round.',
    evidence: [{ label: 'Game screenshots (above)', href: null }],
    images: [{ src: breakingBondsImg, alt: 'Breaking Bonds title screen, periodic-table trading board and player setup screen' }],
  },
];

export const competitions: { name: string; year: string; result: string; detail: string; image?: { src: string; alt: string } }[] = [
  { name: 'MUICT-AST Tech Competition (Mahidol University ICT)', year: '2025', result: '8th of about 40 teams, through to the second round', detail: 'Our team of 3 entered Breaking Bonds, a digital board game. The game concept was mine.' },
  { name: 'SPU AI Prompt Mini Hackathon (Sripatum University)', year: '2025', result: 'Participant', detail: 'A timed challenge using AI and code.' },
  { name: 'Web Development Competition (university-hosted)', year: '2024', result: 'Honorable Mention, 5th of 26', detail: 'With one teammate, I built a health and nutrition website to a set brief against the clock.', image: { src: webdevAwardImg, alt: 'Receiving the Honorable Mention award at the web development competition' } },
];

export const workshops = [
  { name: 'TP-Link Enterprise Training Program', org: 'TP-Link Enterprise and Potisarnpittayakorn School', date: '17 to 21 Mar 2025', detail: 'Five days of networking, CCTV, access point setup, routing and help desk work. We also sat in on client meetings, matching security products to what each factory needed.' },
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
    what: 'I wanted Apple CarPlay on my phone, so I built my own: maps, music and weather on one screen, made for the car.',
    features: [
      'Saved places like home and Mahidol University, plus nearby gas, food, parking, hospitals and shops',
      'Route preview with distance and drive time, your live speed in km/h, and one tap to start navigating',
      'A YouTube Music player with songs, playlists, an up-next queue and lyrics',
      'Weather with the current, high and low temperature',
      'Voice search: say a place and it finds it',
      'Opens full screen once you add it to your home screen',
    ],
    role: 'The idea, planning the features, testing and launch',
    tools: ['HTML', 'CSS', 'JavaScript', 'Geolocation', 'Vercel'],
    evidence: [{ label: 'Live app: car-play-five.vercel.app', href: 'https://car-play-five.vercel.app' }],
    images: [{ src: 'carplay.jpg', alt: 'CarPlay Dashboard with shortcuts, map area, clock, weather and a YouTube Music player' }],
  },
  {
    name: 'Finance Tracker',
    status: 'In development',
    what: 'I didn’t want to pay a yearly subscription just to track my money, so I’m building my own app for income and spending.',
    features: [
      'Categories for income and spending',
      'A monthly summary with charts',
      'Budgets and saving goals',
      'Edit, delete and export any entry',
    ],
    role: 'The idea, planning the features, testing and launch',
    tools: ['HTML', 'CSS', 'JavaScript', 'Local storage', 'Vercel'],
    challenge: 'For now the data only lives on the device.',
    result: 'It works and I use it myself. Next I’m moving the data into a database, which is a big part of why I’m building it.',
    evidence: [{ label: 'Live app: finance-app-rouge-phi.vercel.app', href: 'https://finance-app-rouge-phi.vercel.app' }],
    images: [{ src: 'finance-tracker.jpg', alt: 'Finance Tracker home screen showing total spent and an Add Transaction button' }],
  },
  {
    name: 'Watch Poster',
    status: 'Live',
    what: 'Posting each watch to every Facebook group by hand took ages. This Thai-language app posts one listing to all the saved groups in one go (only groups where the business is allowed to post).',
    features: [
      'A caption of up to 2,000 characters and up to 15 photos (JPG, PNG or HEIC) per listing',
      'Two images you set once, added as comments under every post: an Open Chat QR code and a LINE QR code',
      'A group list you manage in the app, with a name, Facebook link and emoji for each group',
      'Live progress for each group, with start, stop and clear buttons',
      'A Telegram message when every group is done',
      'Posts go out through n8n workflows and Apify',
    ],
    role: 'The idea, planning the features, testing and launch',
    tools: ['HTML', 'CSS', 'JavaScript', 'n8n', 'Apify', 'Telegram', 'Vercel'],
    evidence: [{ label: 'Live app: watch-autoposter-ui.vercel.app', href: 'https://watch-autoposter-ui.vercel.app' }],
    images: [{ src: 'watch-poster.jpg', alt: 'Watch Poster screen with a Thai caption box and photo upload area' }],
  },
];
