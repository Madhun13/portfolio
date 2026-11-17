import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Trophy,
  Users,
  Code2,
  Sparkles,
  Send,
  MessageCircle,
  MapPin,
  Calendar,
  CodeXml,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const NAV = [
  { id: "work", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    id: "sheetx",
    category: "frontend",
    name: "SheetX",
    tagline: "An Excel-grade spreadsheet, rebuilt from first principles",
    stack: ["React.js", "TypeScript", "HTML5 Canvas"],
    points: [
      "Dynamic cell editing with formulas and cross-cell references",
      "Custom formula-evaluation engine with dependency tracking and automatic recalculation",
      "Canvas rendering with viewport virtualization and memoization — smooth at 10,000+ cells",
      "Modular component architecture built for scale, not just for a demo",
    ],
    link: "https://github.com/Madhun13/react-ts-sheets",
    linkLabel: "View source",
  },
  {
    id: "chatbot",
    category: "frontend",
    name: "Chatbot Flow Builder",
    tagline: "A visual, node-based editor for chatbot conversation logic",
    stack: ["React 18", "TypeScript", "React Flow", "Vite"],
    points: [
      "Drag-and-drop canvas for composing multi-step conversation flows",
      "Live settings panel for editing node content with instant updates",
      "Custom node types and connection logic built on React Flow primitives",
    ],
    link: "https://chatbot-flow-builder-ten-blue.vercel.app/",
    linkLabel: "Live demo",
    secondaryLink: "https://github.com/Madhun13/chatbot-flow-builder",
  },
  {
    id: "studynotion",
    category: "fullstack",
    name: "Study Notion",
    tagline: "A full-stack EdTech platform for course delivery and tracking",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    points: [
      "End-to-end course management: create, update, and structure modules and assessments",
      "Secure authentication with JWT and role-based route protection",
      "Interactive dashboard with real-time progress tracking",
      "Fully responsive across desktop and mobile",
    ],
    link: "https://github.com/Madhun13/Study-Notion",
    linkLabel: "View source",
  },
  {
    id: "spam",
    category: "ml",
    name: "Spam Classifier",
    tagline: "An NLP pipeline that separates signal from noise in email",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "TF-IDF"],
    points: [
      "TF-IDF vectorization to convert raw text into meaningful numerical features",
      "Trained and benchmarked Naive Bayes, Logistic Regression, SVM, Random Forest, and Extra Trees",
      "Voting and stacking ensembles layered on top for extra performance",
      "Best result: Extra Trees Classifier, evaluated on accuracy and precision",
    ],
    link: "#",
    linkLabel: "Source on request",
  },
];

const FILTERS = [
  { id: "all", label: "All work" },
  { id: "frontend", label: "Frontend engineering" },
  { id: "fullstack", label: "Full-stack" },
  { id: "ml", label: "Machine learning" },
];

const EXPERIENCE = [
  {
    role: "MERN Stack Developer Intern",
    org: "Agrex Technologies",
    place: "Delhi",
    time: "Jun 2025 — Jul 2025",
    points: [
      "Built a full-stack EdTech platform end to end with React, Node.js, Express, and MongoDB",
      "Shipped a responsive UI wired to RESTful APIs across frontend, backend, and database",
      "Implemented JWT-based authentication with role-based access control on protected routes",
      "Worked in Git/GitHub within a collaborative development flow",
    ],
  },
];

const EDUCATION = [
  {
    school: "National Institute of Technology, Kurukshetra",
    detail: "B.Tech, Electronics and Communication Engineering",
    time: "2022 — 2026",
    place: "Kurukshetra, Haryana",
  },
];

import madhuImg from "./madhuImg.jpeg";
const PROFILE_PHOTO = madhuImg;

const SKILLS = [
  { group: "Languages", items: ["C/C++", "Python", "MySQL", "TypeScript", "JavaScript"] },
  { group: "Frontend", items: ["React.js", "Tailwind CSS", "HTML5 Canvas"] },
  { group: "Backend & Data", items: ["Node.js", "Express", "MongoDB", "NumPy", "Pandas", "Scikit-learn"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"] },
];

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "500+ problems solved on LeetCode",
    detail: "Consistent daily practice in data structures and algorithms.",
  },
  {
    icon: Trophy,
    title: "Gold medal — Inter-NIT Handball Tournament",
    detail: "Hosted by NIT Surathkal.",
  },
  {
    icon: Users,
    title: "Captain, Institute Handball Team",
    detail: "2024 — 2026.",
  },
  {
    icon: Users,
    title: "Student Coordinator & Volunteer, SCSA",
    detail: "Managed educational events as a student coordinator.",
  },
];

const LINKS = {
  github: "https://github.com/Madhun13",
  linkedin: "https://www.linkedin.com/in/madhu-nain-65a427269",
  leetcode: "https://leetcode.com/u/MadhuNain/",
  email: "nainmadhu1316@gmail.com",
};

/* ------------------------------------------------------------------ */
/*  SMALL HELPERS                                                      */
/* ------------------------------------------------------------------ */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: visible ? "translateY(0)" : "translateY(18px)",
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

const WORDS = ["full-stack web apps", "canvas-rendered tools", "ML pipelines", "things that scale"];
const NAV_IDS = ["work", "projects", "experience", "education", "skills", "contact"];
const STATS = [
  { to: 500, suffix: "+", label: "LeetCode problems solved" },
  { to: 10000, suffix: "+", label: "cells rendered smoothly in SheetX" },
  { to: 4, suffix: "", label: "projects shipped" },
  { text: "Gold", label: "Inter-NIT handball" },
];

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Hero background: drifting nodes that connect to each other and to the cursor */
function NetworkCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext("2d");
    const still = prefersReduced();
    const m = { x: -999, y: -999 };
    let pts = [], raf = 0, running = false, w = 0, h = 0;

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = c.getBoundingClientRect();
      w = r.width; h = r.height;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(90, Math.floor((w * h) / 14000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        if (!still) { p.x += p.vx; p.y += p.vy; }
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, 6.283);
        ctx.fillStyle = "rgba(94,234,212,0.7)";
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(94,234,212,${(1 - d / 130) * 0.22})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - m.x, a.y - m.y);
        if (dm < 170) {
          ctx.strokeStyle = `rgba(228,168,85,${(1 - dm / 170) * 0.7})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(m.x, m.y); ctx.stroke();
        }
      }
      raf = running && !still ? requestAnimationFrame(frame) : 0;
    };

    const start = () => { if (!running) { running = true; frame(); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };
    const move = (e) => {
      const r = c.getBoundingClientRect();
      m.x = e.clientX - r.left; m.y = e.clientY - r.top;
    };
    const leave = () => { m.x = m.y = -999; };

    build();
    const obs = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()));
    obs.observe(c);
    window.addEventListener("resize", build);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", leave);
    return () => {
      stop(); obs.disconnect();
      window.removeEventListener("resize", build);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}

function Typewriter({ words }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState(prefersReduced() ? words[0] : "");
  const [del, setDel] = useState(false);
  useEffect(() => {
    if (prefersReduced()) return;
    const w = words[i];
    let t;
    if (!del && txt === w) t = setTimeout(() => setDel(true), 1600);
    else if (del && txt === "") { setDel(false); setI((i + 1) % words.length); }
    else t = setTimeout(() => setTxt(del ? w.slice(0, txt.length - 1) : w.slice(0, txt.length + 1)), del ? 35 : 70);
    return () => clearTimeout(t);
  }, [txt, del, i, words]);
  return <span className="text-copper">{txt}<span className="caret" /></span>;
}

function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced()) { setN(to); return; }
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / 1400, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString("en-US")}{suffix}</span>;
}

/* Card that tilts toward the pointer and lights up under it */
function Tilt({ children, className = "" }) {
  const ref = useRef(null);
  const move = (e) => {
    if (prefersReduced() || e.pointerType === "touch") return;
    const el = ref.current, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-3px)`;
  };
  const leave = () => { ref.current.style.transform = ""; };
  return <div ref={ref} className={className} onPointerMove={move} onPointerLeave={leave}>{children}</div>;
}

function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement;
      ref.current.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`;
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return <div ref={ref} className="scroll-bar" aria-hidden="true" />;
}

function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    if (prefersReduced() || !window.matchMedia("(hover: hover)").matches) return;
    const f = (e) => { ref.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`; };
    window.addEventListener("pointermove", f);
    return () => window.removeEventListener("pointermove", f);
  }, []);
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}

function useActive(ids) {
  const [a, setA] = useState("");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setA(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids]);
  return a;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const active = useActive(NAV_IDS);

  const handleFormChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name || "Anonymous"} (${form.email || "no email given"})`
    );
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const visibleProjects =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="ink-root min-h-screen">
      <style>{`
        .ink-root {
          --bg: #0E1420;
          --bg-alt: #131B2B;
          --card: #161F31;
          --line: rgba(231,236,243,0.09);
          --line-strong: rgba(231,236,243,0.18);
          --text: #E9EEF5;
          --text-dim: #90A0B7;
          --text-dimmer: #64748B;
          --copper: #E4A855;
          --copper-dim: #B98844;
          --teal: #5EEAD4;
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
        }
        .ink-root .font-display { font-family: 'Space Grotesk', 'Inter', sans-serif; }
        .ink-root .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .ink-root .bg-ink { background-color: var(--bg); }
        .ink-root .bg-ink-alt { background-color: var(--bg-alt); }
        .ink-root .bg-card { background-color: var(--card); }
        .ink-root .border-line { border-color: var(--line); }
        .ink-root .border-line-strong { border-color: var(--line-strong); }
        .ink-root .text-copper { color: var(--copper); }
        .ink-root .text-teal { color: var(--teal); }
        .ink-root .text-dim { color: var(--text-dim); }
        .ink-root .text-dimmer { color: var(--text-dimmer); }
        .ink-root .bg-copper { background-color: var(--copper); }
        .ink-root .border-copper { border-color: var(--copper); }
        .ink-root .border-teal { border-color: var(--teal); }
        .ink-root .hover-card:hover { border-color: var(--line-strong); background-color: #182337; }
        .ink-root .chip { transition: border-color .2s ease, color .2s ease, background-color .2s ease; }
        .ink-root .chip-active { background-color: var(--copper); color: #241705; border-color: var(--copper); }
        .ink-root .chip-idle { color: var(--text-dim); border-color: var(--line-strong); }
        .ink-root .chip-idle:hover { color: var(--text); border-color: var(--copper-dim); }
        .ink-root .nav-link { position: relative; color: var(--text-dim); transition: color .2s ease; }
        .ink-root .nav-link:hover { color: var(--text); }
        .ink-root a { text-decoration: none; }
        .ink-root .icon-btn { border: 1px solid var(--line-strong); transition: border-color .2s ease, color .2s ease, transform .15s ease; color: var(--text-dim); }
        .ink-root .icon-btn:hover { border-color: var(--copper); color: var(--copper); transform: translateY(-2px); }
        .ink-root .cta-primary { background-color: var(--copper); color: #241705; transition: opacity .2s ease, transform .15s ease; }
        .ink-root .cta-primary:hover { opacity: 0.9; transform: translateY(-2px); }
        .ink-root .cta-ghost { border: 1px solid var(--line-strong); color: var(--text); transition: border-color .2s ease, transform .15s ease; }
        .ink-root .cta-ghost:hover { border-color: var(--teal); transform: translateY(-2px); }
        @keyframes drawTrace { to { stroke-dashoffset: 0; } }
        .ink-root .trace-path { stroke-dasharray: 1400; stroke-dashoffset: 1400; animation: drawTrace 2.4s ease forwards 0.3s; }
        @keyframes floatDot { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .ink-root .float-dot { animation: floatDot 3s ease-in-out infinite; }
        .ink-root .section-rule { width: 56px; height: 2px; background-color: var(--copper); margin: 14px auto 0; }
        .ink-root .pill-btn { border-radius: 999px; transition: transform .15s ease, opacity .2s ease, border-color .2s ease; }
        .ink-root .pill-primary { background-color: var(--copper); color: #241705; }
        .ink-root .pill-primary:hover { transform: translateY(-2px); opacity: 0.92; }
        .ink-root .pill-ghost { border: 1px solid var(--line-strong); color: var(--text); }
        .ink-root .pill-ghost:hover { transform: translateY(-2px); border-color: var(--teal); }
        .ink-root .field { width: 100%; background-color: #0F1622; border: 1px solid var(--line-strong); border-radius: 10px; padding: 12px 14px; color: var(--text); font-family: 'Inter', sans-serif; font-size: 14px; transition: border-color .2s ease; }
        .ink-root .field:focus { outline: none; border-color: var(--teal); }
        .ink-root .field::placeholder { color: var(--text-dimmer); }
        .ink-root .circle-btn { width: 42px; height: 42px; border-radius: 999px; border: 1px solid var(--line-strong); display: flex; align-items: center; justify-content: center; color: var(--text-dim); transition: border-color .2s ease, color .2s ease, transform .15s ease; }
        .ink-root .circle-btn:hover { border-color: var(--copper); color: var(--copper); transform: translateY(-2px) rotate(6deg); }
        .ink-root .connect-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ink-root .avatar-ring { border: 2px solid var(--line-strong); transition: border-color .3s ease, transform .3s ease; }
        .ink-root .hover-card:hover .avatar-ring { border-color: var(--copper); }
        .ink-root .hover-card { transition: border-color .2s ease, background-color .2s ease, transform .2s ease; }
        .ink-root .hover-card:hover { transform: translateY(-3px); }
        .ink-root .scroll-bar { position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 60; transform-origin: left; transform: scaleX(0); background: linear-gradient(90deg, var(--copper), var(--teal)); }
        .ink-root .cursor-glow { position: fixed; top: 0; left: 0; width: 500px; height: 500px; border-radius: 50%; pointer-events: none; z-index: 1; background: radial-gradient(circle, rgba(94,234,212,0.07), transparent 65%); }
        @media (hover: none) { .ink-root .cursor-glow { display: none; } }
        .ink-root .nav-active { color: var(--copper); }
        @keyframes shine { to { background-position: 200% center; } }
        .ink-root .grad-text { background: linear-gradient(90deg, var(--text), var(--copper), var(--teal), var(--text)); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; animation: shine 7s linear infinite; }
        .ink-root .badge { display: inline-flex; align-items: center; gap: 8px; font-family: 'JetBrains Mono', monospace; font-size: 12px; padding: 6px 14px; border: 1px solid var(--line-strong); border-radius: 999px; color: var(--text-dim); background: rgba(94,234,212,0.06); }
        @keyframes pulse { 70% { box-shadow: 0 0 0 9px rgba(94,234,212,0); } 100% { box-shadow: 0 0 0 0 rgba(94,234,212,0); } }
        .ink-root .pulse-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--teal); box-shadow: 0 0 0 0 rgba(94,234,212,0.6); animation: pulse 2s infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .ink-root .caret { display: inline-block; width: 2px; height: 1em; background: var(--copper); margin-left: 3px; vertical-align: -0.12em; animation: blink 1s steps(1) infinite; }
        .ink-root .hero-fade { position: absolute; left: 0; right: 0; bottom: 0; height: 160px; background: linear-gradient(transparent, var(--bg)); pointer-events: none; }
        .ink-root .tilt-card { transition: transform .15s ease-out, border-color .2s ease, background-color .2s ease; }
        .ink-root .tilt-card::before { content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; opacity: 0; transition: opacity .25s ease; background: radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(228,168,85,0.12), transparent 60%); }
        .ink-root .tilt-card:hover::before { opacity: 1; }
        @media (prefers-reduced-motion: reduce) {
          .ink-root *, .ink-root *::before { animation: none !important; transition: none !important; }
          .ink-root .trace-path { stroke-dashoffset: 0; }
          .ink-root .grad-text { -webkit-text-fill-color: var(--text); }
        }
      `}</style>
      <ScrollProgress />
      <CursorGlow />

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-line" style={{ backgroundColor: "rgba(14,20,32,0.85)" }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("top")} className="font-display text-lg font-bold tracking-tight">
            Madhu<span className="text-copper">.</span>
          </button>
          <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className={`nav-link ${active === n.id ? "nav-active" : ""}`}>
                {n.label}
              </button>
            ))}
          </nav>
          <button
            className="md:hidden icon-btn rounded-md p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4 font-mono text-sm">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className={`nav-link text-left ${active === n.id ? "nav-active" : ""}`}>
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <div className="relative overflow-hidden">
      <NetworkCanvas />
      <div className="hero-fade" />
      <section id="top" className="relative max-w-4xl mx-auto px-6 pt-24 pb-24 md:pt-32 md:pb-32 text-center">
        <div className="badge mb-6"><span className="pulse-dot" /> Open to full-time SDE roles</div>
        <p className="font-mono text-sm text-dim mb-3">👋 Hey, I'm</p>
        <h1 className="grad-text font-display text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.05] mb-3">
          Madhu
        </h1>
        <p className="font-display text-2xl md:text-3xl font-bold text-dim mb-3 min-h-[2.4rem]">
          I build <Typewriter words={WORDS} />
        </p>
        <svg viewBox="0 0 320 40" className="w-48 h-auto mx-auto mb-8">
          <path
            d="M0,20 L60,20 L72,4 L88,36 L104,4 L120,36 L136,20 L184,20 L196,8 L212,32 L228,20 L320,20"
            fill="none"
            stroke="#5EEAD4"
            strokeWidth="2"
            className="trace-path"
          />
        </svg>
        <p className="text-dim text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          A B.Tech student at NIT Kurukshetra who prefers shipping the hard
          subsystem — a formula engine, an auth layer, a canvas renderer —
          over the easy wrapper around one. Currently open to full-time SDE roles.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button onClick={() => scrollTo("projects")} className="pill-btn pill-primary px-6 py-3 font-mono text-sm font-medium flex items-center gap-2">
            <Code2 size={16} /> View my work
          </button>
          <button onClick={() => scrollTo("contact")} className="pill-btn pill-ghost px-6 py-3 font-mono text-sm font-medium flex items-center gap-2">
            <Send size={16} /> Get in touch
          </button>
        </div>
        <div className="flex items-center justify-center gap-3">
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="icon-btn rounded-md p-2.5" aria-label="GitHub"><Github size={18} /></a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="icon-btn rounded-md p-2.5" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={LINKS.leetcode} target="_blank" rel="noreferrer" className="icon-btn rounded-md p-2.5 font-mono text-xs px-3" aria-label="LeetCode">LC</a>
          <a href={`mailto:${LINKS.email}`} className="icon-btn rounded-md p-2.5" aria-label="Email"><Mail size={18} /></a>
        </div>
      </section>
      </div>

      {/* STATS */}
      <section className="border-t border-line">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((st) => (
            <Reveal key={st.label}>
              <p className="font-display text-4xl font-bold text-copper">
                {st.text ? st.text : <CountUp to={st.to} suffix={st.suffix} />}
              </p>
              <p className="font-mono text-xs text-dim mt-2">{st.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="work" className="border-t border-line bg-ink-alt">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold">About me</h2>
            </Reveal>
            <Reveal delay={60}><div className="section-rule" /></Reveal>
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-center max-w-4xl mx-auto mb-16">
            <Reveal delay={100} className="md:col-span-2 flex justify-center">
              <div className="avatar-ring rounded-full p-1.5 w-56 h-56 flex items-center justify-center overflow-hidden">
                {PROFILE_PHOTO ? (
                  <img src={PROFILE_PHOTO} alt="Madhu" className="w-full h-full object-cover rounded-full" style={{ objectPosition: "50% 15%" }} />
                ) : (
                  <div className="w-full h-full rounded-full flex items-center justify-center bg-card">
                    <span className="font-display text-6xl font-bold text-copper">M</span>
                  </div>
                )}
              </div>
            </Reveal>
            <Reveal delay={180} className="md:col-span-3">
              <div className="bg-card border border-line rounded-xl p-6 md:p-8">
                <p className="text-dim leading-relaxed">
                  Full-stack developer specializing in <strong style={{color:"var(--text)", fontWeight:600}}>React, Node.js, Express, and MongoDB</strong>. Skilled at building
                  responsive, scalable applications and shipping the parts most
                  people skip — <strong style={{color:"var(--text)", fontWeight:600}}>formula engines, auth layers, canvas
                  renderers</strong>. Passionate about clean code, intuitive UI, and
                  full-stack ownership from database to pixel.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Reveal delay={100}>
              <div>
                <Code2 className="text-teal mb-3" size={22} />
                <h3 className="font-display font-semibold mb-2">Systems, not screens</h3>
                <p className="text-dim text-sm leading-relaxed">
                  I gravitate toward the part of an app most people skip — a
                  dependency-tracked formula engine, a JWT auth layer, a
                  virtualized canvas renderer.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div>
                <Briefcase className="text-teal mb-3" size={22} />
                <h3 className="font-display font-semibold mb-2">Full-stack by necessity</h3>
                <p className="text-dim text-sm leading-relaxed">
                  From MongoDB schemas to React state trees, I've shipped
                  every layer of an EdTech platform, in an internship and on
                  my own.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div>
                <Trophy className="text-teal mb-3" size={22} />
                <h3 className="font-display font-semibold mb-2">Discipline off-screen too</h3>
                <p className="text-dim text-sm leading-relaxed">
                  Captaining the institute handball team and coordinating
                  student welfare events taught me the same thing shipping
                  software does: show up consistently.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-4">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Projects</h2>
            </Reveal>
            <Reveal delay={60}><div className="section-rule" /></Reveal>
          </div>
          <Reveal delay={100}>
            <p className="text-dim text-center max-w-lg mx-auto mb-10">
              A few things I've shipped that actually hold up under real use.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`chip font-mono text-xs px-4 py-2 rounded-full border ${filter === f.id ? "chip-active" : "chip-idle"}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {visibleProjects.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <Tilt className="hover-card tilt-card bg-card border border-line rounded-xl p-6 h-full flex flex-col relative">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-copper border rounded-full px-3 py-1 self-start mb-4" style={{ borderColor: "rgba(228,168,85,0.35)" }}>
                    {p.category === "ml" ? "Machine learning" : p.category === "fullstack" ? "Full-stack" : "Frontend"}
                  </span>
                  <div className="icon-btn rounded-lg w-11 h-11 flex items-center justify-center mb-4">
                    <CodeXml size={20} />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{p.name}</h3>
                  <p className="text-dim text-sm mb-4">{p.tagline}</p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {p.points.map((pt, idx) => (
                      <li key={idx} className="text-sm text-dim flex gap-2">
                        <span className="text-teal mt-1">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map((s) => (
                      <span key={s} className="font-mono text-[11px] text-copper rounded px-2 py-1" style={{ border: "1px solid rgba(228,168,85,0.3)" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-line">
                    <div className="flex items-center gap-4 font-mono text-xs">
                      {p.secondaryLink ? (
                        <a href={p.secondaryLink} target="_blank" rel="noreferrer" className="text-dim flex items-center gap-1 hover:text-teal">
                          <Github size={14} /> Code
                        </a>
                      ) : p.link !== "#" && (
                        <a href={p.link} target="_blank" rel="noreferrer" className="text-dim flex items-center gap-1 hover:text-teal">
                          <Github size={14} /> Code
                        </a>
                      )}
                    </div>
                    {p.link === "#" ? (
                      <span className="circle-btn" style={{ opacity: 0.4, cursor: "default" }} aria-label="Source on request">
                        <ArrowRight size={16} />
                      </span>
                    ) : (
                      <a href={p.link} target="_blank" rel="noreferrer" className="circle-btn" aria-label={p.linkLabel}>
                        <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-line bg-ink-alt">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Experience</h2>
            </Reveal>
            <Reveal delay={60}><div className="section-rule" /></Reveal>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="hover-card bg-card border border-line rounded-xl p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="icon-btn rounded-lg w-11 h-11 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={20} />
                    </div>
                    <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                      <div>
                        <h3 className="font-display text-lg font-bold">{e.role}</h3>
                        <p className="text-copper font-mono text-sm">{e.org} · {e.place}</p>
                      </div>
                      <p className="font-mono text-xs text-dimmer whitespace-nowrap">{e.time}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-15" style={{ paddingLeft: "60px" }}>
                    {e.points.map((pt, idx) => (
                      <li key={idx} className="text-sm text-dim flex gap-2">
                        <span className="text-teal mt-1">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Education</h2>
            </Reveal>
            <Reveal delay={60}><div className="section-rule" /></Reveal>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {EDUCATION.map((ed, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="hover-card bg-card border border-line rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                  <div className="icon-btn rounded-lg w-14 h-14 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">{ed.school}</h3>
                    <p className="text-dim mb-3">{ed.detail}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-dimmer">
                      <span className="flex items-center gap-1.5"><Calendar size={14} /> {ed.time}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={14} /> {ed.place}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-line bg-ink-alt">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Skills &amp; expertise</h2>
            </Reveal>
            <Reveal delay={60}><div className="section-rule" /></Reveal>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {SKILLS.map((s, i) => (
              <Reveal key={s.group} delay={i * 80}>
                <div className="hover-card bg-card border border-line rounded-xl p-5 h-full">
                  <h3 className="font-display font-semibold mb-3">{s.group}</h3>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span key={it} className="text-sm text-dim border border-line-strong rounded-md px-2.5 py-1">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Leadership &amp; achievements</h2>
            </Reveal>
            <Reveal delay={60}><div className="section-rule" /></Reveal>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {ACHIEVEMENTS.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={i} delay={i * 90}>
                  <div className="hover-card flex gap-4 bg-card border border-line rounded-xl p-5">
                    <Icon className="text-copper shrink-0" size={20} />
                    <div>
                      <p className="font-display font-semibold text-sm mb-1">{a.title}</p>
                      <p className="text-dim text-sm">{a.detail}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section id="contact" className="border-t border-line bg-ink-alt">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Get in touch</h2>
            </Reveal>
            <Reveal delay={60}><div className="section-rule" /></Reveal>
            <Reveal delay={100}>
              <p className="text-dim max-w-lg mx-auto mt-5">
                Have a project in mind or want to collaborate? I'd love to hear from you.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
            <Reveal delay={140}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="text-teal" size={22} />
                  <h3 className="font-display text-xl font-bold">Let's connect</h3>
                </div>
                <p className="text-dim text-sm mb-6">
                  I'm always open to discussing new projects, creative ideas,
                  or opportunities to be part of your vision.
                </p>
                <div className="space-y-4">
                  <a href={`mailto:${LINKS.email}`} className="hover-card flex items-center gap-4 bg-card border border-line rounded-xl p-4">
                    <span className="connect-icon" style={{ backgroundColor: "rgba(226,74,74,0.15)" }}>
                      <Mail size={18} style={{ color: "#E77373" }} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display font-semibold text-sm">Email</p>
                      <p className="text-dim text-xs break-all">{LINKS.email}</p>
                    </div>
                  </a>
                  <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover-card flex items-center gap-4 bg-card border border-line rounded-xl p-4">
                    <span className="connect-icon" style={{ backgroundColor: "rgba(94,161,245,0.15)" }}>
                      <Linkedin size={18} style={{ color: "#7FB0F0" }} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display font-semibold text-sm">LinkedIn</p>
                      <p className="text-dim text-xs">linkedin.com/in/madhu-nain-65a427269</p>
                    </div>
                  </a>
                  <a href={LINKS.github} target="_blank" rel="noreferrer" className="hover-card flex items-center gap-4 bg-card border border-line rounded-xl p-4">
                    <span className="connect-icon" style={{ backgroundColor: "rgba(230,236,243,0.1)" }}>
                      <Github size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display font-semibold text-sm">GitHub</p>
                      <p className="text-dim text-xs">github.com/Madhun13</p>
                    </div>
                  </a>
                  <a href={LINKS.leetcode} target="_blank" rel="noreferrer" className="hover-card flex items-center gap-4 bg-card border border-line rounded-xl p-4">
                    <span className="connect-icon" style={{ backgroundColor: "rgba(94,234,212,0.15)" }}>
                      <span className="font-mono text-xs font-bold" style={{ color: "var(--teal)" }}>LC</span>
                    </span>
                    <div className="min-w-0">
                      <p className="font-display font-semibold text-sm">LeetCode</p>
                      <p className="text-dim text-xs">500+ problems solved</p>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <form onSubmit={handleFormSubmit} className="bg-card border border-line rounded-xl p-6 md:p-8 space-y-5">
                <div>
                  <label className="block font-mono text-xs text-dim mb-2">Your name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleFormChange("name")}
                    className="field"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-dim mb-2">Your email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleFormChange("email")}
                    className="field"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-dim mb-2">Your message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Hey! I'd like to discuss..."
                    value={form.message}
                    onChange={handleFormChange("message")}
                    className="field"
                    style={{ resize: "vertical" }}
                  />
                </div>
                <button type="submit" className="pill-btn pill-primary w-full py-3 font-mono text-sm font-medium flex items-center justify-center gap-2">
                  <Send size={16} /> Send message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <p className="font-mono text-xs text-dimmer">© 2026 Madhu. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="icon-btn rounded-md p-2" aria-label="GitHub"><Github size={16} /></a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="icon-btn rounded-md p-2" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href={`mailto:${LINKS.email}`} className="icon-btn rounded-md p-2" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
          <p className="font-mono text-xs text-dimmer text-center">
            Built with <span className="text-copper">React</span>, <span className="text-teal">Tailwind CSS</span>, and way too much coffee.
          </p>
        </div>
      </footer>
    </div>
  );
}