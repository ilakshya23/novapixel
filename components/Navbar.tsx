"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services-data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/service-pack", label: "Service Pack" },
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Join Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); setServicesOpen(false); }, [pathname]);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isServicesActive = pathname === "/services" || pathname.startsWith("/services/");

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md border-b border-slate/30 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan to-violet rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-sm font-sora">NP</span>
            </div>
          </div>
          <span className="font-sora font-bold text-xl text-off-white">
            Nova<span className="gradient-text">Pixel</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href={navLinks[0].href} className="relative nav-link text-sm font-medium font-inter">
            {navLinks[0].label}
            {pathname === navLinks[0].href && (
              <motion.div layoutId="nav-indicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan to-violet rounded-full" transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} />
            )}
          </Link>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={openServices} onMouseLeave={scheduleCloseServices}>
            <Link
              href="/services"
              className="relative nav-link text-sm font-medium font-inter flex items-center gap-1.5"
            >
              Services
              <motion.svg
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                width="10" height="10" viewBox="0 0 10 10" fill="none"
              >
                <path d="M1.5 3L5 6.5L8.5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
              {isServicesActive && (
                <motion.div layoutId="nav-indicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan to-violet rounded-full" transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} />
              )}
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[560px]"
                >
                  <div className="bg-navy-light border border-slate/30 rounded-2xl shadow-2xl shadow-black/40 p-4 grid grid-cols-2 gap-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services#${s.slug}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-navy transition-colors duration-150 group"
                      >
                        <span className="text-lg">{s.icon}</span>
                        <span className="text-off-white text-xs font-inter group-hover:text-cyan transition-colors">{s.title}</span>
                      </Link>
                    ))}
                    <div className="col-span-2 border-t border-slate/20 mt-2 pt-3 flex items-center justify-between px-3">
                      <Link href="/services" className="text-cyan text-xs font-sora font-semibold hover:underline">
                        View All Services →
                      </Link>
                      <Link href="/services#work-demo" className="text-violet-bright text-xs font-sora font-semibold hover:underline">
                        See Work Demo →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className="relative nav-link text-sm font-medium font-inter">
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan to-violet rounded-full"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold text-white font-sora inline-block">
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-0.5 bg-off-white origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-0.5 bg-off-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-0.5 bg-off-white origin-center"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-navy-light border-t border-slate/30"
          >
            <div className="px-6 py-6 flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                <Link
                  href="/"
                  className={`block text-base py-2 border-b border-slate/20 font-inter transition-colors duration-200 ${
                    pathname === "/" ? "text-cyan" : "text-muted hover:text-off-white"
                  }`}
                >
                  Home
                </Link>
              </motion.div>

              {/* Mobile Services accordion */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.06 }}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex items-center justify-between text-base py-2 border-b border-slate/20 font-inter transition-colors duration-200 ${
                    isServicesActive ? "text-cyan" : "text-muted hover:text-off-white"
                  }`}
                >
                  Services
                  <motion.svg animate={{ rotate: mobileServicesOpen ? 180 : 0 }} width="12" height="12" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 3L5 6.5L8.5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-3"
                    >
                      {services.map((s) => (
                        <Link key={s.slug} href={`/services#${s.slug}`} className="flex items-center gap-2 py-2 text-muted hover:text-cyan text-sm font-inter transition-colors">
                          <span>{s.icon}</span>{s.title}
                        </Link>
                      ))}
                      <Link href="/services" className="block py-2 text-cyan text-sm font-sora font-semibold">View All Services →</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navLinks.slice(1).map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: (i + 2) * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-base py-2 border-b border-slate/20 font-inter transition-colors duration-200 ${
                      pathname === link.href ? "text-cyan" : "text-muted hover:text-off-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (navLinks.length + 2) * 0.06 }}
              >
                <Link href="/contact" className="btn-primary px-5 py-3 rounded-lg text-sm font-semibold text-white font-sora text-center block mt-2">
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
