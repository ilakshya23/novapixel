"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, StaggerChildren, StaggerItem, SlideIn, ScaleIn } from "@/components/AnimationComponents";

const team = [
  {
    name: "Aryan Mehta",
    role: "Founder & Lead Developer",
    avatar: "AM",
    photo: "https://i.pravatar.cc/300?img=12",
    bio: "Full-stack developer with 5+ years shipping fast, animated websites. Drives the entire technical vision of NovaPixel.",
    skills: ["Next.js", "React", "MySQL", "DevOps"],
    color: "from-violet/30 to-violet/10",
    accent: "violet",
  },
  {
    name: "Saanvi Kapoor",
    role: "Creative Director & Brand Designer",
    avatar: "SK",
    photo: "https://i.pravatar.cc/300?img=47",
    bio: "Designs brand identities and visual systems for creators and studios. 50+ logos shipped, zero boring ones.",
    skills: ["Figma", "Photoshop", "Illustrator", "Brand Strategy"],
    color: "from-cyan/30 to-cyan/10",
    accent: "cyan",
  },
  {
    name: "Devansh Rao",
    role: "Hosting & Infrastructure Lead",
    avatar: "DR",
    photo: "https://i.pravatar.cc/300?img=33",
    bio: "Manages our Minecraft hosting infrastructure, keeping latency low and uptime high for every client server.",
    skills: ["Server Infra", "DDoS Protection", "Uptime Monitoring", "Backups"],
    color: "from-violet/30 to-violet/10",
    accent: "violet",
  },
  {
    name: "Riya Sharma",
    role: "Video Editor & Motion Designer",
    avatar: "RS",
    photo: "https://i.pravatar.cc/300?img=45",
    bio: "Cinematic editor behind millions of combined views on YouTube and TikTok. Specializes in server trailers and gaming content.",
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics"],
    color: "from-cyan/30 to-cyan/10",
    accent: "cyan",
  },
  {
    name: "Karan Verma",
    role: "Full-Stack Web Developer",
    avatar: "KV",
    photo: "https://i.pravatar.cc/300?img=13",
    bio: "Builds fast, animated websites with Next.js and React. Turns Figma designs into pixel-perfect, SEO-ready experiences.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-violet/30 to-violet/10",
    accent: "violet",
  },
  {
    name: "Priya Nair",
    role: "Thumbnail & Brand Designer",
    avatar: "PN",
    photo: "https://i.pravatar.cc/300?img=44",
    bio: "Designs high-CTR thumbnails and brand assets, keeping every deliverable consistent, polished, and fast to turn around.",
    skills: ["Photoshop", "Figma", "A/B Testing", "Brand Consistency"],
    color: "from-cyan/30 to-cyan/10",
    accent: "cyan",
  },
  {
    name: "Ishaan Bose",
    role: "Server Operations Lead",
    avatar: "IB",
    photo: "https://i.pravatar.cc/300?img=51",
    bio: "Oversees hosting node performance and reliability across our entire Minecraft hosting network, day and night.",
    skills: ["Node Management", "Performance Tuning", "Anti-Cheat", "Monitoring"],
    color: "from-violet/30 to-violet/10",
    accent: "violet",
  },
  {
    name: "Ananya Singh",
    role: "Growth & Advertising Lead",
    avatar: "AS",
    photo: "https://i.pravatar.cc/300?img=48",
    bio: "Plans content calendars, social campaigns, and influencer outreach that convert audiences into communities.",
    skills: ["Social Strategy", "Ad Campaigns", "Influencer Outreach", "Analytics"],
    color: "from-cyan/30 to-cyan/10",
    accent: "cyan",
  },
];

const milestones = [
  { year: "2021", event: "NovaPixel Studios founded with a focus on Minecraft hosting" },
  { year: "2022", event: "Expanded into brand and graphic design services" },
  { year: "2023", event: "Launched web development and video editing departments" },
  { year: "2024", event: "Crossed 200 completed projects and 50+ active server clients" },
  { year: "2025", event: "Introduced Full Nova premium bundle packages" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 pixel-grid overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideIn from="left">
              <span className="text-cyan text-xs font-sora uppercase tracking-widest mb-4 block">Our Story</span>
              <h1 className="font-sora font-extrabold text-5xl md:text-6xl text-off-white mb-6">
                About <span className="gradient-text">NovaPixel</span>
              </h1>
              <p className="text-muted text-lg leading-relaxed mb-6">
                NovaPixel Studios started with a simple belief: creators and server owners deserve top-tier digital support without the agency price tags and corporate coldness.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                We&apos;re a remote team of developers, designers, and hosting specialists who genuinely love what we do. That passion shows in every site we ship, every logo we craft, and every server we help run smoothly.
              </p>
              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl font-sora font-semibold text-white inline-block">
                    Work With Us →
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Link href="/careers" className="btn-outline px-8 py-4 rounded-xl font-sora font-semibold inline-block">
                    Join the Team
                  </Link>
                </motion.div>
              </div>
            </SlideIn>

            <SlideIn from="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🎯", title: "Precision", desc: "Every pixel matters. We don't ship work we're not proud of." },
                  { icon: "🤝", title: "Partnership", desc: "You're not a ticket number. We're invested in your success." },
                  { icon: "⚡", title: "Speed", desc: "Fast without cutting corners. We respect your deadlines." },
                  { icon: "🔮", title: "Innovation", desc: "We stay ahead of the curve so your project stays fresh." },
                ].map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ scale: 1.04, borderColor: "rgba(124,58,237,0.5)" }}
                    className="bg-navy-light border border-slate/30 rounded-2xl p-5 transition-colors duration-300"
                  >
                    <div className="text-2xl mb-3">{v.icon}</div>
                    <h3 className="font-sora font-semibold text-off-white text-sm mb-2">{v.title}</h3>
                    <p className="text-muted text-xs leading-relaxed">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-navy-light border-y border-slate/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "8", label: "Team Members", accent: "cyan" },
              { value: "200+", label: "Projects Completed", accent: "violet" },
              { value: "50+", label: "Active Server Clients", accent: "cyan" },
              { value: "6", label: "Services Offered", accent: "violet" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center py-6"
              >
                <div className="font-sora font-extrabold text-4xl gradient-text mb-2">{s.value}</div>
                <div className="text-muted text-sm font-inter">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <span className="text-cyan text-xs font-sora uppercase tracking-widest mb-3 block">The People</span>
            <h2 className="font-sora font-bold text-4xl text-off-white">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted mt-4 max-w-xl mx-auto text-sm">
              Eight specialists — each the best at what they do. Together we cover everything from code to community.
            </p>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`service-card bg-gradient-to-br ${member.color} bg-navy border border-slate/30 rounded-2xl p-6 text-center h-full flex flex-col`}
                >
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-4 flex-shrink-0 bg-gradient-to-br from-cyan to-violet flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="font-sora font-bold text-white text-lg">${member.avatar}</span>`;
                      }}
                    />
                  </div>
                  <h3 className="font-sora font-bold text-off-white mb-1">{member.name}</h3>
                  <p className={`text-xs mb-3 ${member.accent === "cyan" ? "text-cyan" : "text-violet-bright"}`}>{member.role}</p>
                  <p className="text-muted text-xs leading-relaxed mb-4 flex-1">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5 justify-center mt-auto">
                    {member.skills.map((skill) => (
                      <span key={skill} className="bg-navy/60 border border-slate/40 text-muted text-xs px-2 py-0.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-navy-light border-t border-slate/30">
        <div className="max-w-3xl mx-auto">
          <FadeUp className="text-center mb-16">
            <span className="text-cyan text-xs font-sora uppercase tracking-widest mb-3 block">Journey</span>
            <h2 className="font-sora font-bold text-4xl text-off-white">
              Our <span className="gradient-text">Timeline</span>
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-violet to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  className="flex gap-8 items-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex-shrink-0 w-16 flex flex-col items-center">
                    <motion.div
                      className="w-4 h-4 rounded-full border-2 z-10 mt-1"
                      style={{
                        backgroundColor: i % 2 === 0 ? "#00D4FF" : "#7C3AED",
                        borderColor: i % 2 === 0 ? "#00D4FF" : "#7C3AED",
                        boxShadow: `0 0 10px ${i % 2 === 0 ? "#00D4FF" : "#7C3AED"}`,
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 + 0.2, type: "spring", stiffness: 300 }}
                    />
                  </div>
                  <motion.div
                    whileHover={{ borderColor: "rgba(0,212,255,0.4)", x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 bg-navy border border-slate/30 rounded-xl p-5 transition-colors duration-300"
                  >
                    <span className="text-xs font-sora font-bold gradient-text mb-2 block">{m.year}</span>
                    <p className="text-off-white text-sm">{m.event}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 border-t border-slate/30">
        <ScaleIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-sora font-bold text-3xl text-off-white mb-4">Want to be part of the story?</h2>
            <p className="text-muted mb-8">
              Whether you&apos;re a client or a creator looking to join our team — we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl font-sora font-semibold text-white inline-block">
                  Get In Touch
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link href="/careers" className="btn-outline px-10 py-4 rounded-xl font-sora font-semibold inline-block">
                  View Open Roles
                </Link>
              </motion.div>
            </div>
          </div>
        </ScaleIn>
      </section>
    </>
  );
}
