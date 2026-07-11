"use client";

import { useEffect, useRef } from "react";

// Lightweight GSAP-style hero entrance using Web Animations API + framer-motion
// This file loads GSAP dynamically to avoid SSR issues

export function useGsapHeroEntrance(containerRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let gsap: typeof import("gsap").gsap | undefined;

    async function init() {
      const { gsap: g } = await import("gsap");
      gsap = g;

      const badge = el!.querySelector("[data-hero-badge]");
      const h1 = el!.querySelector("[data-hero-h1]");
      const p = el!.querySelector("[data-hero-p]");
      const btns = el!.querySelectorAll("[data-hero-btn]");
      const blobs = el!.querySelectorAll("[data-blob]");
      const pixels = el!.querySelectorAll("[data-pixel]");

      // Set initial states
      gsap!.set([badge, h1, p, ...Array.from(btns)], {
        opacity: 0,
        y: 30,
      });
      gsap!.set(blobs, { scale: 0.6, opacity: 0 });
      gsap!.set(pixels, { scale: 0, opacity: 0 });

      // Animate blobs first (background)
      gsap!.to(blobs, {
        scale: 1,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Animate content with stagger
      const tl = gsap!.timeline({ delay: 0.1 });
      tl.to(badge, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
        .to(h1, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.3")
        .to(p, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .to(
          Array.from(btns),
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power3.out" },
          "-=0.3"
        )
        .to(
          pixels,
          { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)" },
          "-=0.2"
        );
    }

    init();
  }, [containerRef]);
}

export function useGsapScrollReveal() {
  useEffect(() => {
    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Connect Lenis to ScrollTrigger
      const lenis = (window as typeof window & { lenis?: { on: (event: string, cb: (e: { actualScroll: number }) => void) => void } }).lenis;
      if (lenis) {
        lenis.on("scroll", (e: { actualScroll: number }) => {
          ScrollTrigger.update();
        });
      }

      // Animate elements with data-gsap-reveal
      const elements = document.querySelectorAll("[data-gsap-reveal]");
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Parallax on blobs
      const parallaxEls = document.querySelectorAll("[data-parallax]");
      parallaxEls.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.parallax || "0.3");
        gsap.to(el, {
          y: () => -ScrollTrigger.maxScroll(window) * speed * 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }

    init();
  }, []);
}
