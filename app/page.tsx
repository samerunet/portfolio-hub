import { Card, CardContent } from "@/components/ui/card";

const projects = [
  { title: "Fariia Makeup – Booking", desc: "SEO site + booking flow", href: "#" },
  { title: "Lightweight e-Sign", desc: "PDF fields + signing + audit log", href: "#" },
  { title: "Sales Queue (Hyundai)", desc: "Live rotation + timers", href: "#" },
  { title: "NextUp Calendar", desc: "Shared team calendar + ICS export", href: "#" },
  { title: "Bookkeeping Mini-App", desc: "CSV → categories → PDF P&L", href: "#" },
  { title: "Ludo (React + Tailwind)", desc: "Playable rules + animations", href: "#" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Sami Sipahi — Frontend Engineer</h1>
        <p className="text-muted-foreground mt-2">React • Next.js • Tailwind • Firebase • UX polish</p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a key={p.title} href={p.href} className="block">
            <Card className="rounded-2xl hover:shadow transition-shadow">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </section>
    </main>
  );
}
