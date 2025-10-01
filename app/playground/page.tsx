"use client";
import { motion } from "framer-motion";

export default function Playground() {
  return (
    <main style={{ minHeight: "100dvh", display: "grid", placeItems: "center", background: "#0b0c0f" }}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: [0, 3, 0] }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        style={{ width: 160, height: 160, borderRadius: 24, background: "linear-gradient(135deg,#8b5cf6,#22d3ee)" }}
      />
    </main>
  );
}
