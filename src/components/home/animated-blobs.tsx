"use client"

import { motion } from "framer-motion"

export function AnimatedBlobs() {
  const base = { transition: { duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" as const } }
  return (
    <>
      <motion.div
        className="pointer-events-none absolute -left-20 top-[-10%] h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(var(--primary)/.35), transparent 70%)" }}
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={{ x: -20, y: 30, scale: 1.1 }}
        {...base}
      />
      <motion.div
        className="pointer-events-none absolute right-[-10%] top-[10%] h-96 w-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(var(--muted-foreground)/.35), transparent 65%)" }}
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={{ x: 30, y: -20, scale: 1.08 }}
        {...base}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[-10%] left-1/3 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(var(--foreground)/.12), transparent 60%)" }}
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={{ x: -10, y: -20, scale: 1.06 }}
        {...base}
      />
    </>
  )
}
