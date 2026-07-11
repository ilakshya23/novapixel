"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function AdSlot({ tall = false }: { tall?: boolean }) {
  return (
    <motion.div
      whileHover={{ borderColor: "rgba(0,212,255,0.5)" }}
      transition={{ duration: 0.25 }}
      className={`border-2 border-dashed border-slate/40 rounded-2xl bg-navy-light/60 flex flex-col items-center justify-center text-center px-6 py-8 ${
        tall ? "min-h-[340px]" : "min-h-[200px]"
      }`}
    >
      <span className="text-3xl mb-3">📢</span>
      <p className="text-muted text-[10px] font-sora uppercase tracking-widest mb-2">Ad Space</p>
      <p className="text-off-white text-sm font-semibold mb-1">Your Brand Here</p>
      <p className="text-muted text-xs mb-4 max-w-[180px] leading-relaxed">
        Reach thousands of server owners &amp; creators.
      </p>
      <Link
        href="/contact?role=Advertise+With+Us"
        className="text-cyan text-xs font-sora font-semibold hover:underline"
      >
        Contact us to get your ads here →
      </Link>
    </motion.div>
  );
}

// Desktop sticky sidebar — used to fill a ~30% width column
export function AdSidebar() {
  return (
    <div className="space-y-6">
      <AdSlot tall />
      <AdSlot />
    </div>
  );
}

// Single horizontal banner — used on mobile where the sidebar is hidden
export function AdBanner() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <AdSlot />
    </div>
  );
}
