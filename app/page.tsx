"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useGsapHeroEntrance, useGsapScrollReveal } from "@/components/GsapAnimations";
import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
  SlideIn,
  ScaleIn,
  CountUp,
} from "@/components/AnimationComponents";

const services = [
  {
    icon: "🌐",
    title: "Website Development",
    desc: "Sleek, performant websites and web apps tailored to your brand identity and goals.",
    color: "from-cyan/20 to-cyan/5",
    border: "border-cyan/30",
  },
  {
    icon: "🎬",
    title: "Video Editing",
    desc: "Professional edits, cinematic cuts, motion graphics, and YouTube-ready content.",
    color: "from-violet/20 to-violet/5",
    border: "border-violet/30",
  },
  {
    icon: "🎨",
    title: "Logo & Thumbnail Design",
    desc: "Bold visual identities and eye-catching thumbnails that make you instantly recognizable.",
    color: "from-cyan/20 to-cyan/5",
    border: "border-cyan/30",
  },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Active Servers" },
  { value: "1+", label: "Years Experience" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  useGsapHeroEntrance(heroRef as React.RefObject<HTMLElement>);
  useGsapScrollReveal();

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pixel-grid overflow-hidden"
      >
        <div data-blob className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/10 rounded-full blur-3xl pointer-events-none" />
        <div data-blob className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div data-blob className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div data-hero-badge className="inline-flex items-center gap-2 bg-navy-light border border-cyan/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
            <span className="text-cyan text-xs font-medium font-sora uppercase tracking-widest">Digital Creative Studio</span>
          </div>

          <h1 data-hero-h1 className="font-sora font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
            <span className="text-off-white">We Build</span>
            <br />
            <span className="gradient-text text-glow-cyan">Digital Worlds</span>
          </h1>

          <p data-hero-p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            NovaPixel Studios delivers premium Minecraft hosting, stunning websites, and bold creative design — all under one roof.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link data-hero-btn href="/services" className="btn-primary px-8 py-4 rounded-xl font-sora font-semibold text-white text-base w-full sm:w-auto text-center">
              Explore Services →
            </Link>
            <Link data-hero-btn href="/service-pack" className="btn-outline px-8 py-4 rounded-xl font-sora font-semibold text-base w-full sm:w-auto text-center">
              View Packages
            </Link>
          </div>

          <div className="absolute top-20 right-16 hidden lg:block">
            <div data-pixel className="w-3 h-3 bg-cyan opacity-60 animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
          <div className="absolute bottom-32 left-20 hidden lg:block">
            <div data-pixel className="w-2 h-2 bg-violet opacity-60 animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          <div className="absolute top-40 left-32 hidden lg:block">
            <div data-pixel className="w-4 h-4 bg-cyan/30 border border-cyan/50 rotate-45 animate-pulse" style={{ animationDelay: "1.5s" }} />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-muted text-xs font-inter">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate/30 bg-navy-light py-12">
        <div className="max-w-5xl mx-auto px-6">
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="font-sora font-extrabold text-4xl gradient-text mb-1">
                    <CountUp value={stat.value} />
                  </div>
                  <div className="text-muted text-sm font-inter">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <span className="text-cyan text-xs font-sora uppercase tracking-widest mb-3 block">What We Do</span>
            <h2 className="font-sora font-bold text-4xl md:text-5xl text-off-white mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">From code to creative — we cover every angle of your digital presence.</p>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`service-card bg-gradient-to-br ${service.color} ${service.border} rounded-2xl p-6 cursor-pointer h-full`}
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="font-sora font-semibold text-off-white text-lg mb-2">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeUp delay={0.2} className="text-center mt-12">
            <Link href="/services" className="btn-outline px-8 py-3 rounded-xl font-sora font-semibold text-sm inline-block">
              View All Services
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-navy-light border-y border-slate/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideIn from="left">
              <span className="text-cyan text-xs font-sora uppercase tracking-widest mb-3 block">Why NovaPixel</span>
              <h2 className="font-sora font-bold text-4xl text-off-white mb-6">
                Built by creators,<br />
                <span className="gradient-text-reverse">for creators.</span>
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                We&apos;re not a faceless agency. We&apos;re a passionate team of developers, designers, and community builders who live and breathe the Minecraft and digital creative space. Every project gets our full attention.
              </p>
              <div className="space-y-4">
                {[
                  "Dedicated project managers for every client",
                  "Fast turnaround without sacrificing quality",
                  "Transparent pricing with no hidden fees",
                  "24/7 support for active server clients",
                ].map((point, i) => (
                  <motion.div
                    key={point}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="w-5 h-5 bg-cyan/20 border border-cyan/50 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan text-xs">✓</span>
                    </span>
                    <span className="text-muted text-sm">{point}</span>
                  </motion.div>
                ))}
              </div>
            </SlideIn>

            <SlideIn from="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "⚡", label: "Fast Delivery" },
                  { icon: "🎯", label: "Pixel Perfect" },
                  { icon: "🔒", label: "Secure & Reliable" },
                  { icon: "💬", label: "Always Available" },
                ].map((f, i) => (
                  <motion.div
                    key={f.label}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-navy border border-slate/40 rounded-2xl p-6 text-center hover:border-violet/50 transition-colors duration-300"
                  >
                    <div className="text-4xl mb-3">{f.icon}</div>
                    <div className="font-sora font-semibold text-off-white text-sm">{f.label}</div>
                  </motion.div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScaleIn>
            <div className="animated-border bg-navy-light rounded-3xl p-12">
              <h2 className="font-sora font-extrabold text-4xl md:text-5xl text-off-white mb-4">
                Ready to go <span className="gradient-text">Nova?</span>
              </h2>
              <p className="text-muted text-lg mb-8 max-w-lg mx-auto">
                Let&apos;s build something extraordinary together. Tell us your vision — we&apos;ll make it reality.
              </p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }} className="inline-block">
                <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl font-sora font-semibold text-white text-base inline-block">
                  Start Your Project →
                </Link>
              </motion.div>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
