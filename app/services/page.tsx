"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/services-data";
import { FadeUp, StaggerContainer, StaggerItem, TiltCard } from "@/components/AnimationComponents";
import { AdSidebar, AdBanner } from "@/components/AdBlock";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 pixel-grid overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-violet/10 rounded-full blur-3xl pointer-events-none" />
        <FadeUp className="max-w-4xl mx-auto text-center">
          <span className="text-cyan text-xs font-sora uppercase tracking-widest mb-4 block">What We Offer</span>
          <h1 className="font-sora font-extrabold text-5xl md:text-6xl text-off-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Six specialized services — each with its own dedicated page, team, portfolio, and pricing. Click any service to dive in.
          </p>
        </FadeUp>
      </section>

      {/* Mobile ad banner */}
      <div className="lg:hidden pt-8">
        <AdBanner />
      </div>

      {/* Services Grid */}
      <section className="py-12 pb-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8">
          <div className="lg:col-span-6">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.08}>
              {services.map((service, i) => (
                <StaggerItem key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <TiltCard className={`service-card bg-gradient-to-br ${service.color} bg-navy-light border ${service.accent === "cyan" ? "border-cyan/20" : "border-violet/20"} rounded-2xl p-7 h-full flex flex-col group`}>
                      {/* Number + Icon */}
                      <div className="flex items-start justify-between mb-5">
                        <span className="text-4xl">{service.icon}</span>
                        <span className="text-slate/40 font-sora font-extrabold text-3xl">{String(i + 1).padStart(2, "0")}</span>
                      </div>

                      <h2 className="font-sora font-bold text-xl text-off-white mb-3 group-hover:gradient-text transition-all">{service.title}</h2>
                      <p className="text-muted text-sm leading-relaxed flex-1">{service.desc}</p>

                      {/* Feature pills */}
                      <div className="flex flex-wrap gap-2 mt-5 mb-5">
                        {service.features.slice(0, 3).map((f) => (
                          <span key={f} className="text-xs bg-navy/60 border border-slate/30 text-muted px-2.5 py-1 rounded-full">{f}</span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className={`flex items-center gap-2 text-sm font-sora font-semibold ${service.accent === "cyan" ? "text-cyan" : "text-violet-bright"} group-hover:gap-3 transition-all`}>
                        View Service
                        <motion.span animate={{}} className="inline-block">→</motion.span>
                      </div>
                    </TiltCard>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Ad Sidebar — ~30% width */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="lg:sticky lg:top-24">
              <AdSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-navy-light border-t border-slate/30">
        <FadeUp className="max-w-3xl mx-auto text-center">
          <h2 className="font-sora font-bold text-3xl text-off-white mb-4">Need a bundle?</h2>
          <p className="text-muted mb-8">Check out our pre-built Service Packs — or reach out and we&apos;ll design something custom.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link href="/service-pack" className="btn-primary px-8 py-3 rounded-xl font-sora font-semibold text-white inline-block">View Packages</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link href="/contact" className="btn-outline px-8 py-3 rounded-xl font-sora font-semibold inline-block">Talk to Us</Link>
            </motion.div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
