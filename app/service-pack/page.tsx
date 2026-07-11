"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, StaggerChildren, StaggerItem, ScaleIn } from "@/components/AnimationComponents";
import { AdSidebar, AdBanner } from "@/components/AdBlock";

const packs = [
  {
    name: "Starter", tagline: "Perfect for getting started",
    price: 99, originalPrice: 132, discount: "25% OFF", highlight: false, color: "border-slate/40", badge: null,
    services: ["Logo Design", "Thumbnail Design (5 pcs)", "Basic Website (3 pages)"],
    cta: "Get Starter Pack",
  },
  {
    name: "Creator", tagline: "For growing content creators",
    price: 249, originalPrice: 332, discount: "25% OFF", highlight: true, color: "border-cyan/50", badge: "Most Popular",
    services: ["Logo Design", "Thumbnail Design (15 pcs)", "Video Editing (3 videos)", "Brand Advertisement", "Custom Website"],
    cta: "Get Creator Pack",
  },
  {
    name: "Hosting Pro", tagline: "For serious Minecraft servers",
    price: 399, originalPrice: 532, discount: "25% OFF", highlight: false, color: "border-violet/40", badge: "Best Value",
    services: ["Minecraft Hosting", "Logo + Branding", "Server Trailer (Video)", "Website Development", "Brand Advertisement"],
    cta: "Get Hosting Pro Pack",
  },
  {
    name: "Full Nova", tagline: "The complete studio experience",
    price: 899, originalPrice: 1199, discount: "25% OFF", highlight: false, color: "border-violet/30", badge: "Premium",
    services: ["Everything in Hosting Pro", "Full Brand Advertisement", "Monthly Thumbnail Design", "Monthly Video Editing", "Priority Support 24/7", "Dedicated Account Manager", "Monthly Analytics Report"],
    cta: "Get Full Nova Pack",
  },
];

const addons = [
  { name: "Extra Thumbnail", desc: "Additional thumbnail designs" },
  { name: "Extra Logo Concept", desc: "Additional logo concept round" },
  { name: "Monthly Hosting", desc: "Continued hosting plans" },
  { name: "Extra Video Edit", desc: "Per-video editing service" },
  { name: "SEO Package", desc: "Full website SEO optimization" },
  { name: "Social Ad Creative", desc: "Extra ad creative for campaigns" },
];

const faqs = [
  { q: "How does custom pricing work?", a: "We assess your requirements and provide a detailed quote. No hidden fees — what we quote is what you pay." },
  { q: "Can I mix services from different packs?", a: "Absolutely. Our packs are a starting point. We can build a fully custom bundle around exactly what you need." },
  { q: "How long does a project take?", a: "Timelines vary by scope. Simple designs take 1–3 days; full server setups or websites can take 1–4 weeks. We always give realistic timelines upfront." },
  { q: "Do you offer revisions?", a: "Yes — all creative work (design, video, logos) includes revision rounds. Specific numbers depend on the package." },
];

export default function ServicePackPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 pixel-grid overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-violet/10 rounded-full blur-3xl pointer-events-none" />
        <FadeUp className="max-w-4xl mx-auto text-center">
          <span className="text-cyan text-xs font-sora uppercase tracking-widest mb-4 block">Bundled Packages</span>
          <h1 className="font-sora font-extrabold text-5xl md:text-6xl text-off-white mb-6">
            Service <span className="gradient-text">Packs</span>
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Pre-configured bundles that combine our most popular services at the best value. All prices are custom-quoted — contact us to get started.
          </p>
        </FadeUp>
      </section>

      {/* Mobile ad banner */}
      <div className="lg:hidden pt-4">
        <AdBanner />
      </div>

      {/* Packs Grid */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8">
          <div className="lg:col-span-7">
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
              {packs.map((pack) => (
                <StaggerItem key={pack.name}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative bg-navy-light border ${pack.color} rounded-2xl p-6 flex flex-col h-full ${pack.highlight ? "glow-cyan" : ""}`}
                  >
                    {pack.badge && (
                      <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-sora font-semibold whitespace-nowrap ${pack.highlight ? "bg-cyan text-navy" : "bg-violet text-white"}`}>
                        {pack.badge}
                      </span>
                    )}
                    <div className="mb-6 pt-2">
                      <h2 className="font-sora font-extrabold text-2xl text-off-white mb-1">{pack.name}</h2>
                      <p className="text-muted text-sm mb-4">{pack.tagline}</p>
                      <div className="flex items-end gap-2">
                        <span className="font-sora font-extrabold text-3xl text-off-white">${pack.price}</span>
                        <span className="text-muted text-sm line-through mb-1">${pack.originalPrice}</span>
                      </div>
                      <span className={`inline-block mt-2 text-[10px] font-sora font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${pack.highlight ? "bg-cyan/15 text-cyan" : "bg-violet/15 text-violet-bright"}`}>
                        {pack.discount}
                      </span>
                    </div>
                    <ul className="space-y-3 flex-1 mb-8">
                      {pack.services.map((s) => (
                        <li key={s} className="flex items-start gap-2.5">
                          <span className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs ${pack.highlight ? "bg-cyan/20 text-cyan" : "bg-violet/20 text-violet-bright"}`}>✓</span>
                          <span className="text-off-white text-sm">{s}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block text-center py-3 px-6 rounded-xl font-sora font-semibold text-sm transition-all duration-300 ${pack.highlight ? "btn-primary text-white" : "btn-outline"}`}
                    >
                      {pack.cta}
                    </Link>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
            <FadeUp delay={0.3} className="text-center mt-8">
              <p className="text-muted text-sm">Prices shown reflect our current limited-time discount. Need something different? We also build fully custom bundles — reach out for a free consultation.</p>
            </FadeUp>
          </div>

          {/* Ad Sidebar — ~30% width */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="lg:sticky lg:top-24">
              <AdSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-6 bg-navy-light border-t border-slate/30">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-12">
            <span className="text-cyan text-xs font-sora uppercase tracking-widest mb-3 block">Extras</span>
            <h2 className="font-sora font-bold text-3xl text-off-white">Add-<span className="gradient-text">Ons</span></h2>
            <p className="text-muted mt-3 max-w-md mx-auto text-sm">Customize any pack with these optional extras to perfectly fit your needs.</p>
          </FadeUp>
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-4" staggerDelay={0.07}>
            {addons.map((addon) => (
              <StaggerItem key={addon.name}>
                <motion.div whileHover={{ scale: 1.04, borderColor: "rgba(0,212,255,0.4)" }} className="service-card bg-navy border border-slate/30 rounded-xl p-5 transition-colors duration-300">
                  <div className="w-2 h-2 bg-cyan rounded-full mb-3" />
                  <h3 className="font-sora font-semibold text-off-white text-sm mb-1">{addon.name}</h3>
                  <p className="text-muted text-xs">{addon.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeUp className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl text-off-white">Common <span className="gradient-text">Questions</span></h2>
          </FadeUp>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ borderColor: "rgba(0,212,255,0.3)" }}
                className="bg-navy-light border border-slate/30 rounded-xl p-6 transition-colors duration-300"
              >
                <h3 className="font-sora font-semibold text-off-white mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
