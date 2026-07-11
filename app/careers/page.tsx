"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/AnimationComponents";

type Opening = {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  icon: string;
  accent: "cyan" | "violet";
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
};

const openings: Opening[] = [
  {
    id: "graphic-designer",
    title: "Graphic Designer — Thumbnails & Logos",
    department: "Design",
    type: "Freelance / Project",
    location: "Remote",
    icon: "🖼️",
    accent: "cyan",
    description: "You have an eye for what stops a scroll and makes a viewer click. From high-CTR YouTube thumbnails to polished brand logos, you'll be the visual backbone of client deliverables.",
    responsibilities: [
      "Design YouTube thumbnails optimised for high CTR",
      "Create logos and brand identity kits for new clients",
      "Produce brand guideline documents with colour, type, and usage rules",
      "Deliver A/B variant sets for thumbnail testing",
      "Collaborate with the Creative Director on new client briefs",
    ],
    requirements: [
      "Proficiency in Photoshop or Figma (or both)",
      "Portfolio showing at least 5 thumbnails and 3 logo projects",
      "Understanding of design principles: hierarchy, contrast, colour theory",
      "Fast turnaround — some deliverables have 24-hour windows",
    ],
    niceToHave: ["Experience in Illustrator for vector work", "Motion graphics skills in After Effects"],
  },
  {
    id: "video-editor",
    title: "Video Editor & Motion Designer",
    department: "Video",
    type: "Freelance / Project",
    location: "Remote",
    icon: "🎬",
    accent: "violet",
    description: "We're scaling our video department and need an editor who understands gaming content, knows how to hold viewer attention, and can deliver cinematic-quality server trailers.",
    responsibilities: [
      "Edit YouTube videos, shorts, and server trailers",
      "Apply colour grading and sound design to finished cuts",
      "Create motion graphics and animated overlays",
      "Export final deliverables in platform-optimised formats",
      "Iterate on feedback quickly and communicate progress",
    ],
    requirements: [
      "Solid experience with Premiere Pro or DaVinci Resolve",
      "Portfolio of at least 3 edited gaming / content videos",
      "Basic knowledge of After Effects for motion work",
      "Understanding of pacing, storytelling, and retention editing",
    ],
    niceToHave: ["Experience with Minecraft cinematic shots / shaders", "Familiarity with sound design tools"],
  },
  {
    id: "web-developer",
    title: "Frontend Web Developer",
    department: "Development",
    type: "Part-Time / Project",
    location: "Remote",
    icon: "🌐",
    accent: "cyan",
    description: "Help us build stunning client websites that convert. You'll work with Next.js and Tailwind CSS to bring Figma designs to life with smooth animations and flawless performance.",
    responsibilities: [
      "Develop responsive websites with Next.js and Tailwind CSS",
      "Implement Framer Motion animations per design specs",
      "Optimise pages for Core Web Vitals and SEO",
      "Collaborate with the design team from wireframe to launch",
      "Maintain and update existing client websites",
    ],
    requirements: [
      "Solid experience with React and Next.js",
      "Proficiency in TypeScript and Tailwind CSS",
      "Portfolio of at least 2 shipped websites",
      "Eye for detail and pixel-perfect implementation",
    ],
    niceToHave: ["Experience with Framer Motion or GSAP", "Knowledge of CMS platforms (Sanity, Contentful)"],
  },
  {
    id: "social-media-manager",
    title: "Social Media & Growth Manager",
    department: "Marketing",
    type: "Part-Time",
    location: "Remote",
    icon: "📣",
    accent: "violet",
    description: "Drive brand growth for NovaPixel and our clients across Twitter/X, YouTube, TikTok, and Instagram. Plan campaigns, write copy, analyse results, and outreach to creators.",
    responsibilities: [
      "Plan and schedule content calendars across platforms",
      "Write engaging copy for posts, ads, and campaign briefs",
      "Run targeted ad campaigns and track ROI",
      "Reach out and negotiate with influencers and creators",
      "Prepare monthly analytics reports for clients",
    ],
    requirements: [
      "1+ year in social media management or growth marketing",
      "Strong written English and copy skills",
      "Comfortable reading analytics dashboards (Meta Ads, YouTube Studio)",
      "Understanding of the gaming / content creator niche",
    ],
    niceToHave: ["Experience with Discord community promotion", "Canva or basic design skills for social assets"],
  },
];

const perks = [
  { icon: "🌍", title: "Fully Remote", desc: "Work from anywhere in the world. We care about output, not office hours." },
  { icon: "⏰", title: "Flexible Hours", desc: "Set your own schedule. We have core overlap hours but no 9-to-5 rigidity." },
  { icon: "📈", title: "Grow With Us", desc: "As NovaPixel scales, so do your responsibilities — and your earnings." },
  { icon: "🤝", title: "Collaborative Team", desc: "A tight-knit crew that respects your work, shares feedback openly, and celebrates wins." },
  { icon: "💸", title: "Competitive Pay", desc: "Project rates and retainer options. We pay fairly and on time, always." },
  { icon: "🎮", title: "Work on Cool Stuff", desc: "Gaming, design, code, communities — we do work that's actually fun to talk about." },
];

const departments = ["All", "Development", "Design", "Video", "Marketing"];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeDept === "All" ? openings : openings.filter((o) => o.department === activeDept);

  const [appForm, setAppForm] = useState({ name: "", email: "", discord: "", role: "", portfolio: "", message: "" });
  const [appSubmitted, setAppSubmitted] = useState(false);

  const handleAppChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setAppForm({ ...appForm, [e.target.name]: e.target.value });
  };

  const handleAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppSubmitted(true);
  };

  const applyForRole = (title: string) => {
    setAppForm((f) => ({ ...f, role: title }));
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const appInputClass = "w-full bg-navy border border-slate/40 rounded-xl px-4 py-3.5 text-off-white text-sm font-inter placeholder-muted/50 focus:outline-none focus:border-cyan/60 focus:ring-1 focus:ring-cyan/30 transition-all duration-200";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 pixel-grid overflow-hidden">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-violet/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan/8 rounded-full blur-3xl pointer-events-none" />
        <FadeUp className="max-w-4xl mx-auto text-center">
          <span className="text-cyan text-xs font-sora uppercase tracking-widest mb-4 block">We&apos;re Hiring</span>
          <h1 className="font-sora font-extrabold text-5xl md:text-6xl text-off-white mb-6">
            Join <span className="gradient-text">NovaPixel</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
            We&apos;re a remote team of passionate builders — developers, designers, editors, and community builders. If you love gaming and digital craft, you&apos;ll fit right in.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="flex items-center gap-2 bg-navy-light border border-slate/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
              <span className="text-off-white text-sm font-inter">{openings.length} open positions</span>
            </div>
            <div className="flex items-center gap-2 bg-navy-light border border-slate/30 rounded-full px-4 py-2">
              <span className="text-off-white text-sm font-inter">🌍 Fully Remote</span>
            </div>
            <div className="flex items-center gap-2 bg-navy-light border border-slate/30 rounded-full px-4 py-2">
              <span className="text-off-white text-sm font-inter">⚡ Fast Application Process</span>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Perks */}
      <section className="py-16 px-6 bg-navy-light border-y border-slate/30">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-12">
            <span className="text-cyan text-xs font-sora uppercase tracking-widest mb-3 block">Why NovaPixel</span>
            <h2 className="font-sora font-bold text-3xl text-off-white">
              Why you&apos;ll <span className="gradient-text">love it here</span>
            </h2>
          </FadeUp>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {perks.map((perk) => (
              <StaggerItem key={perk.title}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(0,212,255,0.4)" }}
                  transition={{ duration: 0.25 }}
                  className="bg-navy border border-slate/30 rounded-2xl p-6 transition-colors duration-300"
                >
                  <span className="text-3xl mb-4 block">{perk.icon}</span>
                  <h3 className="font-sora font-semibold text-off-white mb-2">{perk.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{perk.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-12">
            <span className="text-cyan text-xs font-sora uppercase tracking-widest mb-3 block">Open Roles</span>
            <h2 className="font-sora font-bold text-4xl text-off-white">
              Current <span className="gradient-text">Openings</span>
            </h2>
          </FadeUp>

          {/* Department filter */}
          <FadeUp delay={0.1} className="flex flex-wrap gap-2 justify-center mb-10">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-4 py-1.5 rounded-full text-xs font-sora font-semibold transition-all duration-200 ${
                  activeDept === dept
                    ? "bg-gradient-to-r from-cyan to-violet text-white shadow-lg shadow-cyan/20"
                    : "bg-navy-light border border-slate/30 text-muted hover:text-off-white hover:border-slate/60"
                }`}
              >
                {dept}
              </button>
            ))}
          </FadeUp>

          {/* Openings list */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((opening, i) => (
                <motion.div
                  key={opening.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-navy-light border border-slate/30 rounded-2xl overflow-hidden"
                >
                  {/* Card header — always visible */}
                  <button
                    onClick={() => setExpandedId(expandedId === opening.id ? null : opening.id)}
                    className="w-full text-left p-6 flex flex-col sm:flex-row sm:items-center gap-4 group"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className={`w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center text-2xl ${opening.accent === "cyan" ? "bg-cyan/10" : "bg-violet/10"}`}>
                        {opening.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-sora font-bold text-off-white group-hover:text-cyan transition-colors truncate">{opening.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="text-muted text-xs font-inter">{opening.department}</span>
                          <span className="text-slate text-xs">·</span>
                          <span className="text-muted text-xs font-inter">{opening.type}</span>
                          <span className="text-slate text-xs">·</span>
                          <span className="text-muted text-xs font-inter">{opening.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className={`text-xs font-sora font-semibold px-3 py-1 rounded-full ${opening.accent === "cyan" ? "bg-cyan/10 text-cyan" : "bg-violet/10 text-violet-bright"}`}>
                        {opening.department}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedId === opening.id ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-muted"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.div>
                    </div>
                  </button>

                  {/* Expanded detail */}
                  <AnimatePresence>
                    {expandedId === opening.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 pt-0 border-t border-slate/20">
                          <p className="text-muted text-sm leading-relaxed mt-6 mb-8 max-w-3xl">{opening.description}</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Responsibilities */}
                            <div>
                              <h4 className="font-sora font-semibold text-off-white text-sm uppercase tracking-widest mb-4">
                                Responsibilities
                              </h4>
                              <ul className="space-y-2.5">
                                {opening.responsibilities.map((r) => (
                                  <li key={r} className="flex items-start gap-2.5">
                                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${opening.accent === "cyan" ? "bg-cyan" : "bg-violet-bright"}`} />
                                    <span className="text-muted text-sm leading-relaxed">{r}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Requirements + nice to have */}
                            <div className="space-y-6">
                              <div>
                                <h4 className="font-sora font-semibold text-off-white text-sm uppercase tracking-widest mb-4">
                                  Requirements
                                </h4>
                                <ul className="space-y-2.5">
                                  {opening.requirements.map((r) => (
                                    <li key={r} className="flex items-start gap-2.5">
                                      <span className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs ${opening.accent === "cyan" ? "bg-cyan/15 text-cyan" : "bg-violet/15 text-violet-bright"}`}>✓</span>
                                      <span className="text-muted text-sm leading-relaxed">{r}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {opening.niceToHave && (
                                <div>
                                  <h4 className="font-sora font-semibold text-off-white text-sm uppercase tracking-widest mb-4">
                                    Nice to Have
                                  </h4>
                                  <ul className="space-y-2.5">
                                    {opening.niceToHave.map((r) => (
                                      <li key={r} className="flex items-start gap-2.5">
                                        <span className="text-muted text-sm flex-shrink-0 mt-0.5">+</span>
                                        <span className="text-muted text-sm leading-relaxed">{r}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Apply CTA */}
                          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <motion.button
                              type="button"
                              onClick={() => applyForRole(opening.title)}
                              whileHover={{ scale: 1.04 }}
                              whileTap={{ scale: 0.97 }}
                              className="btn-primary px-8 py-3 rounded-xl font-sora font-semibold text-white inline-block"
                            >
                              Apply for this Role →
                            </motion.button>
                            <p className="text-muted text-xs">
                              Send us your Discord username, a short intro, and any relevant work / portfolio links.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-muted font-inter"
            >
              No openings in this department right now. Check back soon or send a general application below.
            </motion.div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-24 px-6 bg-navy-light border-t border-slate/30 scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <FadeUp className="text-center mb-10">
            <span className="text-cyan text-xs font-sora uppercase tracking-widest mb-4 block">Don&apos;t See Your Role? Apply Anyway</span>
            <h2 className="font-sora font-bold text-3xl text-off-white mb-4">Apply to <span className="gradient-text">NovaPixel</span></h2>
            <p className="text-muted max-w-xl mx-auto">
              Fill out the form below for a specific role or a general application — we&apos;d love to hear from you.
            </p>
          </FadeUp>

          <AnimatePresence mode="wait">
            {appSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-navy border border-cyan/30 rounded-2xl p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-cyan to-violet rounded-3xl flex items-center justify-center mb-6 mx-auto"
                >
                  <span className="text-4xl">🎉</span>
                </motion.div>
                <h3 className="font-sora font-bold text-2xl text-off-white mb-3">Application <span className="gradient-text">Sent!</span></h3>
                <p className="text-muted text-sm max-w-sm mx-auto">
                  Thanks for applying! We review every application and will reach out within a few days if it&apos;s a fit.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-navy border border-slate/30 rounded-2xl p-8"
              >
                <form onSubmit={handleAppSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-muted text-xs font-sora uppercase tracking-wider mb-2 block">Your Name *</label>
                      <input type="text" name="name" required value={appForm.name} onChange={handleAppChange} placeholder="Jamie Rivera" className={appInputClass} />
                    </div>
                    <div>
                      <label className="text-muted text-xs font-sora uppercase tracking-wider mb-2 block">Email *</label>
                      <input type="email" name="email" required value={appForm.email} onChange={handleAppChange} placeholder="you@example.com" className={appInputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-muted text-xs font-sora uppercase tracking-wider mb-2 block">Discord Username</label>
                      <input type="text" name="discord" value={appForm.discord} onChange={handleAppChange} placeholder="username#0000" className={appInputClass} />
                    </div>
                    <div>
                      <label className="text-muted text-xs font-sora uppercase tracking-wider mb-2 block">Role You&apos;re Applying For *</label>
                      <select name="role" required value={appForm.role} onChange={handleAppChange} className={appInputClass}>
                        <option value="">Select a role...</option>
                        {openings.map((o) => <option key={o.id} value={o.title}>{o.title}</option>)}
                        <option value="General Application">General Application</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-muted text-xs font-sora uppercase tracking-wider mb-2 block">Portfolio / Work Links</label>
                    <input type="text" name="portfolio" value={appForm.portfolio} onChange={handleAppChange} placeholder="Link to your portfolio, GitHub, or past work" className={appInputClass} />
                  </div>
                  <div>
                    <label className="text-muted text-xs font-sora uppercase tracking-wider mb-2 block">Tell Us About Yourself *</label>
                    <textarea name="message" required value={appForm.message} onChange={handleAppChange} rows={5} placeholder="A short intro, your experience, and why you'd be a great fit..." className={appInputClass + " resize-none"} />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full py-4 rounded-xl font-sora font-semibold text-white text-base"
                  >
                    Submit Application →
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          <FadeUp delay={0.2} className="text-center mt-8">
            <Link href="/about" className="text-muted text-sm hover:text-cyan transition-colors">
              Want to meet the team first? →
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
