"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, SlideIn, StaggerChildren, StaggerItem } from "@/components/AnimationComponents";

const services = [
  "Website Development", "Minecraft Hosting", "Video Editing",
  "Brand Advertisement", "Thumbnail Design", "Logo Design", "Service Pack / Bundle", "Other",
];

const contactCards = [
  { icon: "💬", label: "Discord", value: "discord.gg/novapixel", sub: "Fastest response" },
  { icon: "📧", label: "Email", value: "hello@novapixel.studio", sub: "Within 24 hours" },
  { icon: "🌐", label: "Timezone", value: "UTC — Global Team", sub: "Available worldwide" },
];

const steps = ["We review your request", "Schedule a discovery call", "Send a custom proposal", "Kick off your project"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", discord: "", service: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full bg-navy border border-slate/40 rounded-xl px-4 py-3.5 text-off-white text-sm font-inter placeholder-muted/50 focus:outline-none focus:border-cyan/60 focus:ring-1 focus:ring-cyan/30 transition-all duration-200";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 pixel-grid overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-violet/10 rounded-full blur-3xl pointer-events-none" />
        <FadeUp className="max-w-4xl mx-auto text-center">
          <span className="text-cyan text-xs font-sora uppercase tracking-widest mb-4 block">Let&apos;s Talk</span>
          <h1 className="font-sora font-extrabold text-5xl md:text-6xl text-off-white mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Ready to start something great? Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </FadeUp>
      </section>

      {/* Contact Section */}
      <section className="py-12 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left — Info */}
          <SlideIn from="left">
            <div className="space-y-8">
              <div>
                <h2 className="font-sora font-bold text-xl text-off-white mb-4">Get in touch</h2>
                <p className="text-muted text-sm leading-relaxed">We respond to all inquiries within 24 hours. For urgent matters, reach us directly on Discord.</p>
              </div>

              <StaggerChildren staggerDelay={0.1}>
                {contactCards.map((c) => (
                  <StaggerItem key={c.label}>
                    <motion.div
                      whileHover={{ borderColor: "rgba(0,212,255,0.4)", x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-4 bg-navy-light border border-slate/30 rounded-xl p-4 transition-colors duration-300"
                    >
                      <span className="text-2xl">{c.icon}</span>
                      <div>
                        <div className="text-xs text-muted font-sora uppercase tracking-widest mb-0.5">{c.label}</div>
                        <div className="text-off-white text-sm font-medium">{c.value}</div>
                        <div className="text-cyan text-xs mt-0.5">{c.sub}</div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-navy-light border border-slate/30 rounded-xl p-5"
              >
                <h3 className="font-sora font-semibold text-off-white text-sm mb-4">What happens next?</h3>
                <div className="space-y-3">
                  {steps.map((step, i) => (
                    <motion.div
                      key={step}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <span className="w-6 h-6 bg-gradient-to-br from-cyan to-violet rounded-full flex items-center justify-center text-white text-xs font-sora font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-muted text-sm">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </SlideIn>

          {/* Right — Form */}
          <SlideIn from="right" className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-navy-light border border-cyan/30 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-gradient-to-br from-cyan to-violet rounded-3xl flex items-center justify-center mb-6 mx-auto"
                  >
                    <span className="text-4xl">🚀</span>
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="font-sora font-bold text-3xl text-off-white mb-4"
                  >
                    Message <span className="gradient-text">Sent!</span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-muted text-base max-w-sm"
                  >
                    Thanks for reaching out! We&apos;ll review your request and get back to you within 24 hours.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-navy-light border border-slate/30 rounded-2xl p-8"
                >
                  <h2 className="font-sora font-bold text-xl text-off-white mb-6">Tell us about your project</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-muted text-xs font-sora uppercase tracking-wider mb-2 block">Your Name *</label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Alex Johnson" className={inputClass} />
                      </div>
                      <div>
                        <label className="text-muted text-xs font-sora uppercase tracking-wider mb-2 block">Email *</label>
                        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-muted text-xs font-sora uppercase tracking-wider mb-2 block">Discord Username</label>
                        <input type="text" name="discord" value={form.discord} onChange={handleChange} placeholder="username#0000" className={inputClass} />
                      </div>
                      <div>
                        <label className="text-muted text-xs font-sora uppercase tracking-wider mb-2 block">Service Needed *</label>
                        <select name="service" required value={form.service} onChange={handleChange} className={inputClass}>
                          <option value="">Select a service...</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-muted text-xs font-sora uppercase tracking-wider mb-2 block">Estimated Budget</label>
                      <select name="budget" value={form.budget} onChange={handleChange} className={inputClass}>
                        <option value="">Select range (optional)</option>
                        <option>Under $50</option>
                        <option>$50 – $150</option>
                        <option>$150 – $500</option>
                        <option>$500 – $1,000</option>
                        <option>$1,000+</option>
                        <option>Let&apos;s discuss</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-muted text-xs font-sora uppercase tracking-wider mb-2 block">Project Details *</label>
                      <textarea name="message" required value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your project, goals, timeline, and anything else we should know..." className={inputClass + " resize-none"} />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary w-full py-4 rounded-xl font-sora font-semibold text-white text-base"
                    >
                      Send Message →
                    </motion.button>
                    <p className="text-muted text-xs text-center">
                      We never share your information. See our <a href="#" className="text-cyan hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </SlideIn>
        </div>
      </section>
    </>
  );
}
