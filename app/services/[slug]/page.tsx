"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/services-data";
import {
  FadeUp,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
} from "@/components/AnimationComponents";

// ─── Testimonials per service ──────────────────────────────────────────────────
const testimonials: Record<string, { name: string; handle: string; avatar: string; text: string; stars: number }[]> = {
  "website-development": [
    { name: "ClutchGG", handle: "@clutchgg", avatar: "CG", text: "They built a landing page that converted at 14%. Our previous one was at 3%. The animations are stunning.", stars: 5 },
    { name: "ServerHub", handle: "@serverhub_io", avatar: "SH", text: "Full web app delivered in 3 weeks. Clean code, great design, and they're still helping us iterate.", stars: 5 },
    { name: "Zara Knox", handle: "@zaraknox_art", avatar: "ZK", text: "My portfolio site looks better than anything I could've imagined. Worth every penny.", stars: 5 },
  ],
  "minecraft-hosting": [
    { name: "PixelCraft Network", handle: "@pixelcraftmc", avatar: "PC", text: "Zero downtime in 8 months of hosting. DDoS protection actually works — we get attacked and players don't notice.", stars: 5 },
    { name: "ModpackHub", handle: "@modpackhub", avatar: "MH", text: "The 1-click modpack install is genius. Our players can get started in minutes.", stars: 5 },
    { name: "Frostbite SMP", handle: "@frostbitesmp", avatar: "FB", text: "Fast, affordable, and the panel is easy to use. Best hosting we've had.", stars: 5 },
  ],
  "video-editing": [
    { name: "StormForge", handle: "@stormforge_gg", avatar: "SF", text: "The server trailer Riley made gave us 4x our normal player signups in launch week. Incredible work.", stars: 5 },
    { name: "ClutchTV", handle: "@clutchtv", avatar: "CT", text: "My YouTube retention went up 40% after NovaPixel started editing for me. The pacing is on another level.", stars: 5 },
    { name: "MinerVerse", handle: "@minerverse", avatar: "MV", text: "Color grading, sound design, graphics — everything was polished and delivered fast.", stars: 5 },
  ],
  "brand-advertisement": [
    { name: "ClutchGG", handle: "@clutchgg", avatar: "CG", text: "60% growth in 3 months. We didn't believe it was possible, but NovaPixel delivered exactly what they promised.", stars: 5 },
    { name: "PixelCraft", handle: "@pixelcraftmc", avatar: "PC", text: "The influencer outreach campaign brought in creators I never could've reached on my own.", stars: 5 },
    { name: "NovaBrand", handle: "@novabrand_co", avatar: "NB", text: "Cross-platform strategy, content calendar, monthly reports — they handle everything so I can focus on content.", stars: 5 },
  ],
  "thumbnail-design": [
    { name: "GamerTV", handle: "@gamertv_yt", avatar: "GT", text: "My CTR went from 4% to 9% in a month. Thumbnails are the single highest-ROI thing I've invested in.", stars: 5 },
    { name: "StormForge", handle: "@stormforge_gg", avatar: "SF", text: "Consistent, on-brand, and fast. I get thumbnails back within 24 hours every time.", stars: 5 },
    { name: "CraftKing", handle: "@craftking_net", avatar: "CK", text: "Sam's designs are immediately recognizable. My subscribers know it's my video before they read the title.", stars: 5 },
  ],
  "logo-design": [
    { name: "PixelCraft Network", handle: "@pixelcraftmc", avatar: "PC", text: "The logo Sam designed has become our entire identity. Merch, banners, Discord — it works everywhere.", stars: 5 },
    { name: "StormForge Esports", handle: "@stormforge_gg", avatar: "SF", text: "Clean, professional esports logo with an animated version. Exactly what we asked for.", stars: 5 },
    { name: "ClutchGG", handle: "@clutchgg", avatar: "CG", text: "Full brand guidelines delivered with the logo. Made rolling out the rebrand so much easier.", stars: 5 },
  ],
};

// ─── Pricing tiers per service ─────────────────────────────────────────────────
const pricingPlans: Record<string, { name: string; price: string; period: string; features: string[]; highlight: boolean; cta: string }[]> = {
  "website-development": [
    { name: "Landing Page", price: "$199", period: "one-time", highlight: false, cta: "Get Page", features: ["Up to 3 sections", "Mobile responsive", "SEO basics", "Contact form", "Delivery in 7 days"] },
    { name: "Full Website", price: "$499", period: "one-time", highlight: true, cta: "Build Site", features: ["Up to 8 pages", "Custom animations", "SEO optimization", "CMS integration", "3 revision rounds", "Delivery in 3 weeks"] },
    { name: "Web App", price: "$999+", period: "one-time", highlight: false, cta: "Get Quote", features: ["Full custom web app", "Auth & user accounts", "Database & API", "Dashboard UI", "Ongoing support plan"] },
  ],
  "minecraft-hosting": [
    { name: "Starter", price: "$7", period: "/ month", highlight: false, cta: "Start Hosting", features: ["2GB RAM", "Unlimited storage", "DDoS protection", "Auto backups", "24/7 uptime"] },
    { name: "Pro", price: "$18", period: "/ month", highlight: true, cta: "Go Pro", features: ["6GB RAM", "Unlimited storage", "Priority DDoS protection", "Hourly backups", "1-click modpacks", "24/7 support"] },
    { name: "Network", price: "$45", period: "/ month", highlight: false, cta: "Network Plan", features: ["16GB RAM", "Multi-server panel", "Dedicated node option", "Real-time monitoring", "Custom domain", "Dedicated support"] },
  ],
  "video-editing": [
    { name: "Single Edit", price: "$49", period: "one-time", highlight: false, cta: "Order Edit", features: ["Up to 15 min video", "Basic cuts & transitions", "Text overlays", "Background music", "2 revision rounds"] },
    { name: "Pro Edit", price: "$129", period: "one-time", highlight: true, cta: "Pro Edit", features: ["Up to 30 min video", "Motion graphics", "Color grading", "Sound design", "3 revision rounds", "Delivery in 5 days"] },
    { name: "Monthly Package", price: "$349", period: "/ month", highlight: false, cta: "Monthly", features: ["Up to 8 videos / month", "All Pro features", "Thumbnail included", "Priority turnaround", "Dedicated editor"] },
  ],
  "brand-advertisement": [
    { name: "Kickstart", price: "$149", period: "one-time", highlight: false, cta: "Kickstart", features: ["Brand audit", "3-platform strategy", "Content calendar (1 month)", "2 ad creatives", "Setup report"] },
    { name: "Growth Campaign", price: "$299", period: "/ month", highlight: true, cta: "Start Campaign", features: ["All platforms", "Monthly content calendar", "4 ad creatives / month", "Influencer outreach", "Analytics report"] },
    { name: "Full Management", price: "$599", period: "/ month", highlight: false, cta: "Full Manage", features: ["Everything in Growth", "Paid ad management", "Budget optimization", "Weekly reports", "Dedicated strategist"] },
  ],
  "thumbnail-design": [
    { name: "Single", price: "$19", period: "one-time", highlight: false, cta: "Order Now", features: ["1 thumbnail", "2 revision rounds", "PNG + PSD export", "Delivery in 24h"] },
    { name: "Pack of 10", price: "$149", period: "one-time", highlight: true, cta: "Get Pack", features: ["10 thumbnails", "A/B variants included", "3 revision rounds each", "Brand template saved", "Delivery in 5 days"] },
    { name: "Monthly", price: "$199", period: "/ month", highlight: false, cta: "Subscribe", features: ["Unlimited thumbnails", "Priority turnaround", "Dedicated designer", "Brand consistency", "Video title suggestions"] },
  ],
  "logo-design": [
    { name: "Starter Logo", price: "$79", period: "one-time", highlight: false, cta: "Get Logo", features: ["2 initial concepts", "2 revision rounds", "PNG & SVG export", "Delivery in 5 days"] },
    { name: "Brand Kit", price: "$199", period: "one-time", highlight: true, cta: "Full Brand Kit", features: ["4 concepts", "Unlimited revisions", "Full vector files", "Animated logo variant", "Brand guidelines PDF", "Full ownership"] },
    { name: "Premium Identity", price: "$399", period: "one-time", highlight: false, cta: "Premium", features: ["Everything in Brand Kit", "Social media kit", "Merchandise-ready files", "Business card design", "Priority designer"] },
  ],
};

// ─── Adjacent services for "explore more" ──────────────────────────────────────
function getAdjacentServices(slug: string) {
  const idx = services.findIndex((s) => s.slug === slug);
  const prev = services[(idx - 1 + services.length) % services.length];
  const next = services[(idx + 1) % services.length];
  return [prev, next].filter((s) => s.slug !== slug).slice(0, 3);
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceTestimonials = testimonials[service.slug] ?? [];
  const plans = pricingPlans[service.slug] ?? [];
  const adjacent = getAdjacentServices(service.slug);

  const isCyan = service.accent === "cyan";
  const accentColor = isCyan ? "text-cyan" : "text-violet-bright";
  const accentBg = isCyan ? "bg-cyan" : "bg-violet";
  const accentBorder = isCyan ? "border-cyan/40" : "border-violet/40";
  const accentGlow = isCyan ? "glow-cyan" : "glow-violet";

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center pixel-grid overflow-hidden pt-24 pb-16 px-6">
        {/* Glow blobs */}
        <div className={`absolute top-1/3 ${isCyan ? "left-1/4" : "right-1/4"} w-[500px] h-[500px] ${isCyan ? "bg-cyan/8" : "bg-violet/10"} rounded-full blur-3xl pointer-events-none`} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full">
          {/* Breadcrumb */}
          <FadeIn>
            <div className="flex items-center gap-2 text-xs text-muted font-inter mb-8">
              <Link href="/" className="hover:text-cyan transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-cyan transition-colors">Services</Link>
              <span>/</span>
              <span className={accentColor}>{service.title}</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              {/* Badge */}
              <motion.div
                className={`inline-flex items-center gap-2 border ${accentBorder} rounded-full px-4 py-2 mb-6 bg-navy-light`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className={`w-2 h-2 ${accentBg} rounded-full animate-pulse`} />
                <span className={`${accentColor} text-xs font-sora uppercase tracking-widest`}>NovaPixel Service</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                className="font-sora font-extrabold text-4xl md:text-6xl text-off-white leading-tight mb-5"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-6xl mr-4">{service.icon}</span>
                <br />
                <span className="gradient-text">{service.title}</span>
              </motion.h1>

              <motion.p
                className="text-muted text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {service.desc}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <Link href="/contact" className="btn-primary px-7 py-3.5 rounded-xl font-sora font-semibold text-white inline-block">
                    Get a Quote →
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <a href="#pricing" className="btn-outline px-7 py-3.5 rounded-xl font-sora font-semibold inline-block">
                    View Pricing
                  </a>
                </motion.div>
              </motion.div>
            </SlideInLeft>

            {/* Feature chips */}
            <SlideInRight>
              <div className="bg-navy-light border border-slate/30 rounded-2xl p-8">
                <p className={`text-xs font-sora uppercase tracking-widest ${accentColor} mb-5`}>What&apos;s Included</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feat, i) => (
                    <motion.div
                      key={feat}
                      className="flex items-center gap-2.5 bg-navy border border-slate/30 rounded-xl px-4 py-3 hover:border-cyan/30 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${accentBg}`} />
                      <span className="text-off-white text-xs font-inter">{feat}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Team on this service */}
                <div className="mt-6 pt-6 border-t border-slate/20">
                  <p className="text-xs text-muted font-sora uppercase tracking-widest mb-4">Your Team</p>
                  <div className="flex gap-3">
                    {service.team.map((member) => (
                      <div key={member.name} className="flex items-center gap-2">
                        <div className={`w-8 h-8 bg-gradient-to-br ${isCyan ? "from-cyan to-violet" : "from-violet to-cyan"} rounded-lg flex items-center justify-center`}>
                          <span className="text-white text-xs font-sora font-bold">{member.avatar}</span>
                        </div>
                        <div>
                          <div className="text-off-white text-xs font-sora font-semibold">{member.name}</div>
                          <div className="text-muted text-xs">{member.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* ── Our Work ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-navy-light border-y border-slate/30">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <span className={`text-xs font-sora uppercase tracking-widest mb-3 block ${accentColor}`}>Portfolio</span>
            <h2 className="font-sora font-bold text-4xl md:text-5xl text-off-white">
              Our <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted mt-4 max-w-lg mx-auto">
              Real results for real clients — here&apos;s what we&apos;ve built with {service.title}.
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {service.work.map((item, i) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className={`bg-navy border ${accentBorder} rounded-2xl p-6 h-full relative overflow-hidden`}
                  whileHover={{ y: -6, borderColor: isCyan ? "rgba(0,212,255,0.6)" : "rgba(124,58,237,0.6)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Background number */}
                  <div className="absolute top-4 right-4 font-sora font-extrabold text-6xl text-slate/10 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <span className={`inline-block ${isCyan ? "bg-cyan/10 text-cyan border-cyan/30" : "bg-violet/10 text-violet-bright border-violet/30"} border text-xs font-sora px-3 py-1 rounded-full mb-4`}>
                    {item.tag}
                  </span>
                  <h3 className="font-sora font-bold text-off-white text-lg mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>

                  {/* Accent line */}
                  <div className={`mt-6 h-0.5 w-12 ${accentBg} rounded-full`} />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Testimonials / Feedback ──────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <span className={`text-xs font-sora uppercase tracking-widest mb-3 block ${accentColor}`}>Client Feedback</span>
            <h2 className="font-sora font-bold text-4xl md:text-5xl text-off-white">
              What Clients <span className="gradient-text">Say</span>
            </h2>
            <p className="text-muted mt-4 max-w-lg mx-auto">
              Don&apos;t take our word for it — here&apos;s what people who&apos;ve worked with us say.
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {serviceTestimonials.map((t, i) => (
              <StaggerItem key={t.name}>
                <motion.div
                  className="bg-navy-light border border-slate/30 rounded-2xl p-6 h-full flex flex-col"
                  whileHover={{ y: -4, borderColor: isCyan ? "rgba(0,212,255,0.35)" : "rgba(124,58,237,0.35)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <motion.span
                        key={si}
                        className="text-yellow-400 text-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + si * 0.05 }}
                        viewport={{ once: true }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-off-white text-sm leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate/20">
                    <div className={`w-10 h-10 bg-gradient-to-br ${isCyan ? "from-cyan to-violet" : "from-violet to-cyan"} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xs font-sora font-bold">{t.avatar}</span>
                    </div>
                    <div>
                      <div className="text-off-white text-sm font-sora font-semibold">{t.name}</div>
                      <div className={`text-xs ${accentColor}`}>{t.handle}</div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Overall rating */}
          <FadeUp delay={0.3} className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-navy-light border border-slate/30 rounded-full px-6 py-3">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-off-white font-sora font-semibold">5.0</span>
              <span className="text-muted text-sm">from 30+ reviews</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-6 bg-navy-light border-y border-slate/30">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <span className={`text-xs font-sora uppercase tracking-widest mb-3 block ${accentColor}`}>Transparent Pricing</span>
            <h2 className="font-sora font-bold text-4xl md:text-5xl text-off-white">
              Choose Your <span className="gradient-text">Plan</span>
            </h2>
            <p className="text-muted mt-4 max-w-lg mx-auto">
              All plans include dedicated support. Not sure which fits? Contact us and we&apos;ll help you decide.
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {plans.map((plan, i) => (
              <StaggerItem key={plan.name}>
                <motion.div
                  className={`relative bg-navy border rounded-2xl p-7 flex flex-col h-full ${plan.highlight ? `${accentBorder} ${accentGlow}` : "border-slate/30"}`}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {plan.highlight && (
                    <motion.div
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 ${accentBg} text-white text-xs font-sora font-bold px-5 py-1.5 rounded-full whitespace-nowrap`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.12, type: "spring" }}
                    >
                      Most Popular
                    </motion.div>
                  )}

                  <div className="mb-6 pt-1">
                    <h3 className="font-sora font-bold text-xl text-off-white mb-1">{plan.name}</h3>
                    <div className="flex items-end gap-1 mt-3">
                      <span className="font-sora font-extrabold text-4xl gradient-text">{plan.price}</span>
                      <span className="text-muted text-sm mb-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 flex-1 mb-7">
                    {plan.features.map((feat, fi) => (
                      <motion.li
                        key={feat}
                        className="flex items-start gap-2.5 text-sm text-off-white"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: fi * 0.04 }}
                        viewport={{ once: true }}
                      >
                        <span className={`w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center rounded text-xs ${plan.highlight ? `${isCyan ? "bg-cyan/20 text-cyan" : "bg-violet/20 text-violet-bright"}` : "bg-slate/30 text-muted"}`}>
                          ✓
                        </span>
                        {feat}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/contact"
                      className={`block text-center py-3 rounded-xl font-sora font-semibold text-sm transition-all ${plan.highlight ? "btn-primary text-white" : "btn-outline"}`}
                    >
                      {plan.cta}
                    </Link>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4} className="text-center mt-10">
            <p className="text-muted text-sm">
              Need something custom?{" "}
              <Link href="/contact" className={`${accentColor} hover:underline font-semibold`}>
                Talk to us →
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <ScaleIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="animated-border bg-navy-light rounded-3xl p-12">
              <FadeUp>
                <span className="text-5xl mb-6 block">{service.icon}</span>
                <h2 className="font-sora font-extrabold text-4xl text-off-white mb-4">
                  Ready for <span className="gradient-text">{service.title}?</span>
                </h2>
                <p className="text-muted text-lg mb-8 max-w-lg mx-auto">
                  Let&apos;s talk about your project. We respond within 24 hours and offer free consultations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                    <Link href="/contact" className="btn-primary px-9 py-4 rounded-xl font-sora font-semibold text-white inline-block">
                      Start Your Project →
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                    <Link href="/services" className="btn-outline px-9 py-4 rounded-xl font-sora font-semibold inline-block">
                      All Services
                    </Link>
                  </motion.div>
                </div>
              </FadeUp>
            </div>
          </div>
        </ScaleIn>
      </section>

      {/* ── Explore More Services ────────────────────────────────── */}
      {adjacent.length > 0 && (
        <section className="py-16 px-6 bg-navy-light border-t border-slate/30">
          <div className="max-w-5xl mx-auto">
            <FadeUp className="text-center mb-10">
              <h3 className="font-sora font-bold text-2xl text-off-white">
                Explore More <span className="gradient-text">Services</span>
              </h3>
            </FadeUp>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.1}>
              {adjacent.map((s) => (
                <StaggerItem key={s.slug}>
                  <Link href={`/services/${s.slug}`}>
                    <motion.div
                      className="service-card bg-navy border border-slate/30 rounded-xl p-5 flex items-center gap-4"
                      whileHover={{ borderColor: "rgba(0,212,255,0.4)", x: 4 }}
                    >
                      <span className="text-3xl">{s.icon}</span>
                      <div>
                        <div className="font-sora font-semibold text-off-white text-sm">{s.title}</div>
                        <div className="text-muted text-xs mt-0.5 line-clamp-1">{s.desc.slice(0, 55)}…</div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </>
  );
}
