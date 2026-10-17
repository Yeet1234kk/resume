import type React from 'react';
import { useEffect, useId, useRef, useState, type PointerEvent as RPointerEvent } from 'react';
import { Mail, Phone, Menu, X, Download, ArrowUpRight, Code2, BarChart3, ChevronDown } from 'lucide-react';
import {
  profile, brand, story, education, work, projects, schoolProjects, personalProjects,
  competitions, workshops, certificates, skills, languages, resumePreviewImg, type Project,
} from './content';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Experience & skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'cv', label: 'Resume' },
  { id: 'contact', label: 'Links' },
];
const SECTIONS = ['top', ...NAV.map((n) => n.id)];

const TINTS = ['tint-blue', 'tint-peach', 'tint-lilac', 'tint-mint'];

function useActiveSection() {
  const [active, setActive] = useState('top');
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    SECTIONS.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return active;
}

function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js');
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { rootMargin: '0px 0px -10% 0px' },
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function More({ label, children, defaultOpen = false }: { label: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <div className={`more${open ? ' open' : ''}`}>
      <div id={id} className="more-body" hidden={!open}>{children}</div>
      <button className="more-btn" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
        {open ? 'Show less' : label} <ChevronDown size={16} className="chev" aria-hidden="true" />
      </button>
    </div>
  );
}

const LEVELS: Record<string, number> = { Beginner: 1, Intermediate: 2, Advanced: 3 };
function Level({ level }: { level?: string | null }) {
  if (!level) return null;
  const n = LEVELS[level];
  return (
    <span className="level">
      {n && <span className="meter" aria-hidden="true">{[1, 2, 3].map((i) => <i key={i} className={i <= n ? 'f' : ''} />)}</span>}
      <span className="level-txt">{level}</span>
    </span>
  );
}

function Diagram() {
  const src: [string, string, number][] = [
    ['Buzzebees POS', 'REST API', 20], ['LINE MAN', 'researching access', 215], ['Grab', 'researching access', 410],
  ];
  return (
    <svg className="diagram" viewBox="0 0 600 300" role="img"
      aria-label="Data from the POS, LINE MAN and Grab flows into the report app, which sends a daily LINE report">
      <defs>
        <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M1 1L9 5L1 9" fill="none" stroke="#15172e" strokeWidth="1.6" />
        </marker>
      </defs>
      {src.map(([t, s, x]) => (
        <g key={t}>
          <rect className="d-src" x={x} y="10" width="170" height="64" rx="14" />
          <text className="d-t" x={x + 85} y="38" textAnchor="middle">{t}</text>
          <text className="d-s" x={x + 85} y="58" textAnchor="middle">{s}</text>
        </g>
      ))}
      <path className="d-line" d="M105 74 L230 124" markerEnd="url(#ah)" />
      <path className="d-line" d="M300 74 L300 124" markerEnd="url(#ah)" />
      <path className="d-line" d="M495 74 L370 124" markerEnd="url(#ah)" />
      <rect className="d-app" x="150" y="128" width="300" height="64" rx="14" />
      <text className="d-t d-on" x="300" y="156" textAnchor="middle">Report app</text>
      <text className="d-s d-on" x="300" y="176" textAnchor="middle">combines and calculates</text>
      <path className="d-line" d="M300 192 L300 226" markerEnd="url(#ah)" />
      <rect className="d-out" x="150" y="230" width="300" height="64" rx="14" />
      <text className="d-t" x="300" y="258" textAnchor="middle">Daily LINE report</text>
      <text className="d-s" x="300" y="278" textAnchor="middle">sent to my brother</text>
    </svg>
  );
}

// Screenshots of the live projects, shown one after another in the hero disc.
const PEEK = [...projects, ...personalProjects].flatMap((p) => p.images?.slice(0, 1) ?? []);

function WorkPeek() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % PEEK.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <a className="badge badge-atom depth-2" href="#projects">
      <span className="peek">
        {PEEK.map((img, n) => <img key={img.src} src={img.src} alt="" className={n === i ? 'on' : ''} />)}
      </span>
      <span className="badge-label">See my work</span>
    </a>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: RPointerEvent<HTMLElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || e.pointerType !== 'mouse') return;
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty('--px', String((e.clientX - r.left) / r.width - 0.5));
    ref.current!.style.setProperty('--py', String((e.clientY - r.top) / r.height - 0.5));
  };
  return (
    <section id="top" className="hero" ref={ref} onPointerMove={onMove}>
      <div className="hero-stage">
        <span className="bubble b1" aria-hidden="true" /><span className="bubble b2" aria-hidden="true" />
        <span className="bubble b3" aria-hidden="true" /><span className="dot d1" aria-hidden="true" />
        <div className="hero-orb">
          <img className="hero-photo" src="atom-portrait.webp" alt="Portrait of Phasin “Atom” Likitphatham in a white shirt and university tie" />
        </div>

        <div className="hello card depth-2">
          <span className="wave" aria-hidden="true">👋</span>
          <div>
            <p className="hello-small">Hello, I’m</p>
            <h1>Phasin Likitphatham</h1>
            <p className="hello-nick">Call me Atom</p>
          </div>
        </div>
        <div className="role card depth-1">
          <p>ICT student at Mahidol University</p>
          <p>I build websites and tools for small businesses</p>
        </div>

        <div className="badge badge-web depth-3">
          <span className="badge-icon pink"><Code2 size={26} strokeWidth={2.4} aria-hidden="true" /></span>
          <span className="badge-label">Web development</span>
        </div>
        <WorkPeek />
        <div className="badge badge-biz depth-3">
          <span className="badge-icon white"><BarChart3 size={22} strokeWidth={2.4} aria-hidden="true" /></span>
          <span className="badge-label">Business tools</span>
        </div>
      </div>
      <p className="hero-seek">{profile.seeking}</p>
    </section>
  );
}

function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="section-head reveal">
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <SectionHead title="Personal brand story" sub="Who I am and how I got here" />
      <div className="about-grid">
        <div className="card story reveal">
          <p>{story[0]}</p>
          <More label="Read my full story">
            {story.slice(1).map((p, i) => <p key={i}>{p}</p>)}
          </More>
        </div>
        <div className="brand-stack">
          {([['Audience', brand.audience], ['Persona', brand.persona], ['Promise', brand.promise]] as const).map(([k, v], i) => (
            <div className="card brand-card reveal" key={k} style={{ transitionDelay: `${i * 80}ms` }}>
              <p className="eyebrow-k">{k}</p>
              <p>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkItem({ j }: { j: (typeof work)[number] }) {
  const [open, setOpen] = useState(true);
  const id = useId();
  const year = (j.dates.match(/\d{4}/) ?? [''])[0];
  return (
    <li className={open ? 'on' : ''}>
      <span className="xp-year">{year}</span>
      <div>
        <button className="xp-head" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
          <span className="xp-title">{j.title} <ChevronDown size={18} className="chev" aria-hidden="true" /></span>
          <span className="xp-org">{j.org}</span>
          <span className="xp-dates">{j.dates}</span>
        </button>
        <div id={id} className="xp-tip card" hidden={!open}>
          <ul>{j.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
        </div>
      </div>
    </li>
  );
}

function Resume() {
  const tech = skills.filter((g) => !['Business analysis and marketing', 'Soft skills'].includes(g.group));
  const soft = skills.filter((g) => ['Business analysis and marketing', 'Soft skills'].includes(g.group));
  return (
    <section id="resume" className="section">
      <SectionHead title="Education and work history" />

      <div className="two-col">
        <div className="reveal">
          <h3 className="h3">Work history</h3>
          <p className="hint">Tap a role to open or close its details.</p>
          <ol className="xp" aria-label="Work history">
            {work.map((j) => <WorkItem key={j.title} j={j} />)}
          </ol>
        </div>
        <div className="reveal">
          <h3 className="h3">Education</h3>
          {education.map((e) => (
            <div className="card edu" key={e.school}>
              <p className="xp-year">{e.dates}</p>
              <p className="edu-school">{e.school}</p>
              <p className="edu-degree">{e.degree}</p>
              {e.courses.length > 0 && (
                <More label={`Show relevant courses (${e.courses.length})`} defaultOpen>
                  <ul className="plain">{e.courses.map((c) => <li key={c}>{c}</li>)}</ul>
                </More>
              )}
              {e.activities.length > 0 && (
                <More label={`Show clubs and activities (${e.activities.length})`}>
                  <ul className="plain">{e.activities.map((c) => <li key={c}>{c}</li>)}</ul>
                </More>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-gap" />
      <SectionHead title="Skills inventory" sub="Levels are self-assessed: Beginner, Intermediate or Advanced" />
      <h3 className="h3 reveal">Technical skills</h3>
      <div className="skill-groups">
        {tech.map((g, gi) => (
          <div className="card skill-card reveal" key={g.group}>
            <p className={`skill-group ${TINTS[gi % 4]}`}>{g.group}</p>
            <ul>
              {g.items.map((s) => (
                <li key={s.name}><span className="sk-name">{s.name}</span><Level level={s.level} /></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="two-col">
        <div className="reveal">
          <h3 className="h3">Languages</h3>
          <div className="card">
            {languages.map((l) => (
              <div className="lang" key={l.name}><span>{l.name}</span><span className="level-txt">{l.level}</span></div>
            ))}
          </div>
        </div>
        <div className="reveal">
          {soft.map((g) => (
            <div key={g.group}>
              <h3 className="h3">{g.group}</h3>
              <ul className="tags">{g.items.map((s) => <li key={s.name}>{s.name}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, kind }: { p: Project; kind: string }) {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  // The card re-renders its className, so it tracks its own reveal instead of relying on useReveal.
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { rootMargin: '0px 0px -10% 0px' });
    io.observe(ref.current!);
    return () => io.disconnect();
  }, []);
  const tilt = (e: RPointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty('--rx', `${((e.clientY - r.top) / r.height - 0.5) * -5}deg`);
    ref.current!.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - 0.5) * 6}deg`);
  };
  const reset = () => { ref.current?.style.setProperty('--rx', '0deg'); ref.current?.style.setProperty('--ry', '0deg'); };
  const live = p.evidence.find((e) => e.href);
  const img = p.images?.[0];
  return (
    <article className={`case card reveal${seen ? ' in' : ''}${open ? ' open' : ''}`} ref={ref} onPointerMove={tilt} onPointerLeave={reset}>
      <div className={`case-media${img ? '' : ' no-img'}`}>
        {img ? <img src={img.src} alt={img.alt} loading="lazy" /> : p.diagram ? <Diagram /> : <span className="case-mark" aria-hidden="true">{p.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}</span>}
      </div>
      <div className="case-body">
        <p className="case-meta"><span>{kind}</span><span className="status">{p.status}</span></p>
        <h3>{p.name}</h3>
        <p className="case-what">{p.what}</p>
        <p className="case-role"><b>My role:</b> {p.role}</p>
        <ul className="chips">{p.tools.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className="case-actions">
          <button className="ghost" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? 'Hide details' : 'View details'} <ChevronDown size={16} className="chev" />
          </button>
          {live && <a className="ghost link" href={live.href!} target="_blank" rel="noreferrer">Live site <ArrowUpRight size={16} /></a>}
        </div>
        <div className="case-details" hidden={!open}>
          {p.features && (<><p className="dk">What it does</p><ul className="plain">{p.features.map((f) => <li key={f}>{f}</li>)}</ul></>)}
          <dl>
            {p.challenge && <div><dt>Challenge</dt><dd>{p.challenge}</dd></div>}
            {p.result && <div><dt>Result</dt><dd>{p.result}</dd></div>}
            <div><dt>Evidence</dt><dd>{p.evidence.map((ev) => ev.href ? <a key={ev.label} href={ev.href} target="_blank" rel="noreferrer">{ev.label}</a> : <span key={ev.label}>{ev.label}</span>)}</dd></div>
          </dl>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const groups = [
    { key: 'Client and work', items: projects },
    { key: 'School and competition', items: schoolProjects },
    { key: 'Personal', items: personalProjects },
  ];
  const [filter, setFilter] = useState('All');
  const shown = groups.flatMap((g) => g.items.map((p) => ({ p, kind: g.key }))).filter((x) => filter === 'All' || x.kind === filter);
  return (
    <section id="projects" className="section">
      <SectionHead title="University and work projects" sub="What each project is, my role, the tools I used and proof it exists" />
      <div className="filters reveal" role="tablist" aria-label="Filter projects">
        {['All', ...groups.map((g) => g.key)].map((f) => (
          <button key={f} role="tab" aria-selected={filter === f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className="cases">
        {shown.map(({ p, kind }) => <ProjectCard key={p.name} p={p} kind={kind} />)}
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="section">
      <SectionHead title="Competitions, workshops and certificates" />
      <h3 className="h3 reveal">Competitions</h3>
      <div className="comp-grid">
        {competitions.map((c) => (
          <div className="card comp reveal" key={c.name}>
            {c.image && <img src={c.image.src} alt={c.image.alt} loading="lazy" />}
            <p className="xp-year">{c.year}</p>
            <p className="comp-result">{c.result}</p>
            <p className="comp-name">{c.name}</p>
            <p className="comp-detail">{c.detail}</p>
          </div>
        ))}
      </div>
      <div className="cert-grid">
        <div className="reveal">
          <h3 className="h3">Workshops</h3>
          {workshops.map((w) => (
            <div className="card cert" key={w.name}>
              <p className="xp-year">{w.date}</p>
              <p className="cert-name">{w.name}</p>
              <p className="cert-org">{w.org}</p>
              <More label="What I learned"><p className="cert-detail">{w.detail}</p></More>
            </div>
          ))}
        </div>
        <div className="reveal">
          <h3 className="h3">Certificates</h3>
          <div className="card">
            {certificates.map((c) => (
              <div className="cert-row" key={c.name}>
                <p className="cert-name">{c.name}</p>
                <p className="cert-org">{c.org}{c.date ? `, ${c.date}` : ''}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CV() {
  return (
    <section id="cv" className="section">
      <SectionHead title="Resume" sub="One page, updated October 2026" />
      <div className="cv-box card reveal">
        <p className="cv-lead">Education, experience, projects, competitions and skills on one A4 page.</p>
        <div className="cv-actions">
          {profile.resume && <a className="btn" href={profile.resume} download="Phasin_Likitphatham_Resume.pdf"><Download size={18} aria-hidden="true" /> Download PDF</a>}
          <a className="ghost link" href={resumePreviewImg} target="_blank" rel="noreferrer">Open full size <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <More label="Preview the resume here">
          <img className="cv-img" src={resumePreviewImg} alt="One-page resume of Phasin Likitphatham" loading="lazy" />
        </More>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    profile.linkedin && { label: 'LinkedIn', href: profile.linkedin },
    profile.github && { label: 'GitHub', href: profile.github },
    profile.phone && { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    profile.email && { label: profile.email, href: `mailto:${profile.email}` },
  ].filter(Boolean) as { label: string; href: string }[];
  return (
    <section id="contact" className="section contact">
      <div className="card contact-card reveal">
        <h2>Let’s build something useful.</h2>
        <p>Open to internships at tech companies and startups.</p>
        {profile.email && <a className="email" href={`mailto:${profile.email}`}><Mail size={22} /> {profile.email}</a>}
        <p className="h3 links-label">Important links</p>
        <ul className="pill-links" aria-label="Important links">
          {links.map((l) => <li key={l.label}><a href={l.href} {...(l.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}>{l.label} <ArrowUpRight size={14} /></a></li>)}
        </ul>
      </div>
    </section>
  );
}

export default function App() {
  const active = useActiveSection();
  const [menu, setMenu] = useState(false);
  useReveal();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className="nav">
        <a className="skip" href="#about">Skip to content</a>
        <span aria-hidden="true" />
        <nav aria-label="Sections" className="nav-links">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}>{n.label}</a>
          ))}
        </nav>
        <button className="menu-btn" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>
          {menu ? <X size={20} /> : <Menu size={20} />}
        </button>
        {menu && (
          <div className="menu-panel card" role="dialog" aria-label="Menu">
            {NAV.map((n) => <a key={n.id} href={`#${n.id}`} onClick={() => setMenu(false)}>{n.label}</a>)}
            {profile.resume && <a className="btn small" href={profile.resume} download="Phasin_Likitphatham_Resume.pdf"><Download size={16} /> Resume PDF</a>}
          </div>
        )}
      </header>

      <aside className="social" aria-label="Profiles">
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="on">in</a>}
        {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">gh</a>}
        {profile.email && <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={14} /></a>}
        {profile.phone && <a href={`tel:${profile.phone.replace(/\s/g, '')}`} aria-label="Phone"><Phone size={14} /></a>}
      </aside>

      <nav className="dots" aria-label="Section progress">
        {SECTIONS.map((id) => <a key={id} href={`#${id}`} aria-label={id === 'top' ? 'Home' : id} className={active === id ? 'on' : ''} />)}
      </nav>

      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Achievements />
        <CV />
        <Contact />
      </main>
    </>
  );
}
