// app/projects/_client.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type Item = { title: string; desc: string; href: string };

const items: Item[] = [
  { title: "Project A", desc: "Short description", href: "/projects/a" },
  { title: "Project B", desc: "Short description", href: "/projects/b" },
  { title: "Project C", desc: "Short description", href: "/projects/c" },
];

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectsClient() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-semibold md:text-4xl">Projects</h1>

      <motion.ul
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={list}
        initial="hidden"
        animate="show"
      >
        {items.map((p) => (
          <motion.li key={p.title} variants={card}>
            <a href={p.href} className="block">
              <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur-md">
                <CardContent className="p-6">
                  <div className="mb-6 h-32 rounded-2xl bg-gradient-to-br from-white/10 via-white/0 to-white/5" />
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
}
