"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function SiteNavbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <div className="sticky top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-4xl items-center justify-between rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/10">
        <Link href="/" className="font-medium tracking-tight">Sami</Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/projects" className="opacity-90 transition hover:opacity-100">Projects</Link>
          <Link href="/about" className="opacity-90 transition hover:opacity-100">About</Link>
          <Link href="/contact" className="opacity-90 transition hover:opacity-100">Contact</Link>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-white/20 px-2 py-1 opacity-90 transition hover:opacity-100"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>
    </div>
  );
}
