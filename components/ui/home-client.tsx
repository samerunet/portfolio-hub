"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type Project = { title: string; desc: string; href: string; tag?: string };

const projects: Project[] = [
  { title: "Fariia Makeup — Booking", desc: "SEO site + booking flow", href: "/projects/fariia-booking", tag: "Flagship" },
  { title: "Lightweight e-Sign", desc: "PDF fields, signing, audit log", href: "/projects/esign" },
  { title: "Sales Queue (Hyundai)", desc: "Live rotation + timers", href: "/projects/sales-queue" },
  { title: "NextUp Calendar", desc: "Shared team calendar + ICS", href: "/projects/nextup-calendar" },
  { title: "Bookkeeping Mini-App", desc: "CSV → categories → PDF P&L", href: "/projects/bookkeeping" },
  { title: "Ludo (React + Tailwind)", desc: "Playable rules + animations", href: "/projects/ludo" },
];

const list = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};
const card = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function HomeClient() {
  return (
    <main className="relative min-h-dvh">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <p className="text-sm tracking-wide text-muted-foreground">PORTFOLIO</p>
        <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Sami Sipahi
          <span className="block bg-clip-text text-transparent [background-image:linear-gradient(90deg,#fff,rgba(255,255,255,0.55))]">
            Frontend Engineer
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
          React • Next.js • Tailwind • Firebase — focused on fast, accessible, product-ready interfaces.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold md:text-3xl">Selected Work</h2>
          <a href="/projects" className="text-sm text-muted-foreground hover:underline">See all</a>
        </div>

        <motion.ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" variants={list} initial="hidden" animate="show">
          {projects.map((p) => (
            <motion.li
              key={p.title}
              variants={card}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.45, margin: "-10% 0px -25% 0px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a
                href={p.href}
                className="block"
                whileHover={{ y: -6, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 300, damping: 24, mass: 0.6 }}
              >
                <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur-md">
                  <CardContent className="p-6">
                    <motion.div
                      className="mb-10 h-36 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-white/0 to-white/5"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    {p.tag && (
                      <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-xs tracking-wide opacity-90">
                        {p.tag}
                      </span>
                    )}
                    <h3 className="mt-2 text-lg font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium opacity-80 transition">
                      View case study <span className="ml-1">→</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </main>
  );
}
