"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/AnimationComponents";

const services = [
  "Website Development", "Minecraft Hosting", "Video Editing",
  "Brand Advertisement", "Thumbnail Design", "Logo Design",
];

export default function Footer() {
  return (
    <footer className="bg-navy-light border-t border-slate/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-cyan to-violet rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm font-sora">NP</span>
                </div>
                <span className="font-sora font-bold text-xl text-off-white">
                  Nova<span className="gradient-text">Pixel</span> Studios
                </span>
              </div>
              <p className="text-muted text-sm leading-relaxed max-w-xs">
                We craft digital experiences that elevate your brand — from Minecraft worlds to stunning websites and everything in between.
              </p>
              <div className="flex gap-4 mt-6">
                {["Discord", "Twitter", "YouTube"].map((s) => (
                  <motion.a
                    key={s}
                    href="#"
                    whileHover={{ scale: 1.08, borderColor: "rgba(0,212,255,0.6)", color: "#00D4FF" }}
                    transition={{ duration: 0.2 }}
                    className="text-xs text-muted border border-slate/40 px-3 py-1.5 rounded-full transition-colors duration-200"
                  >
                    {s}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-sora font-semibold text-off-white mb-4 text-sm uppercase tracking-widest">Navigation</h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" }, { href: "/services", label: "Services" },
                  { href: "/service-pack", label: "Service Pack" }, { href: "/about", label: "About Us" },
                  { href: "/careers", label: "Join Us" }, { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      <Link href={link.href} className="text-muted hover:text-cyan text-sm transition-colors duration-200">
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-sora font-semibold text-off-white mb-4 text-sm uppercase tracking-widest">Services</h3>
              <ul className="space-y-2">
                {services.slice(0, 6).map((s) => (
                  <li key={s}>
                    <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      <Link href="/services" className="text-muted hover:text-cyan text-sm transition-colors duration-200">
                        {s}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>

        {/* Bottom bar */}
        <div className="border-t border-slate/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">© {new Date().getFullYear()} NovaPixel Studios. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted hover:text-off-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted hover:text-off-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
