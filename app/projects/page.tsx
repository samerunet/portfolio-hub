// app/page.tsx
import { Card, CardContent } from "@/components/ui/card";

type Project = {
  title: string;
  desc: string;
  href: string;
  tag?: string;
};

const projects: Project[] = [
  { title: "Fariia Makeup — Booking", desc: "SEO site + booking flow", href: "/projects/fariia-booking", tag: "Flagship" },
  { title: "Lightweight e-Sign", desc: "PDF fields, signing, audit log", href: "/projects/esign" },
  { title: "Sales Queue (Hyundai)", desc: "Live rotation + timers", href: "/projects/sales-queue" },
  { title: "NextUp Calendar", desc: "Shared team calendar + ICS", href: "/projects/nextup-calendar" },
  { title: "Bookkeeping Mini-App", desc: "CSV → categories → PDF P&L", href: "/projects/bookkeeping" },
  { title: "Ludo (React + Tailwind)", desc: "Playable rules + animations", href: "/projects/ludo" },
];

export default function Home() {
  return (
    <main className="relative min-h-dvh">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <p className="text-sm tracking-wide text-neutral-400">PORTFOLIO</p>
        <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Sami Sipahi
          <span className="block bg-clip-text text-transparent [background-image:linear-gradient(90deg,#fff,rgba(255,255,255,0.55))]">
            Frontend Engineer
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-neutral-300 md:text-lg">
          React • Next.js • Tailwind • Firebase — focused on fast, accessible, product-ready interfaces.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition-[transform,background,shadow,opacity] hover:-translate-y-[1px] hover:bg-white/10 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] active:translate-y-0"
          >
            View Projects
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium opacity-80 transition hover:opacity-100"
          >
            Resume
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold md:text-3xl">Selected Work</h2>
          <a href="/projects" className="text-sm text-neutral-400 hover:underline">
            See all
          </a>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.title}>
              <a href={p.href} className="group relative block" aria-label={p.title}>
                {/* hover sheen */}
                <span
                  className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0) 100%)",
                  }}
                />
                <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 will-change-transform group-hover:-translate-y-1 group-hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] group-active:translate-y-0">
                  <CardContent className="p-6">
                    <div className="mb-10 h-36 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-white/0 to-white/5 transition-all duration-300 group-hover:scale-[1.02]" />
                    {p.tag ? (
                      <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-xs tracking-wide opacity-90">
                        {p.tag}
                      </span>
                    ) : null}
                    <h3 className="mt-2 text-lg font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-1 text-sm text-neutral-300">{p.desc}</p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium opacity-80 transition group-hover:opacity-100">
                      View case study
                      <span className="ml-1 translate-x-0 transition-transform group-hover:translate-x-0.5">→</span>
                    </div>
                  </CardContent>
                </Card>
                {/* soft halo */}
                <span
                  className="pointer-events-none absolute inset-0 -z-20 rounded-[28px] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(40% 60% at 50% 50%, rgba(255,255,255,0.12), transparent 60%)",
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-16 pt-4 text-sm text-neutral-400">
        © {new Date().getFullYear()} Sami Sipahi. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}
