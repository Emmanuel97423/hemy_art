"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function HeroVisual({ image, title }: { image?: string; title?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, rotate: -1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-muted shadow-2xl"
    >
      {image ? (
        <Image
          src={image}
          alt={title ?? "Hemy Art"}
          fill
          priority
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--muted)),transparent_60%),radial-gradient(circle_at_70%_80%,hsl(var(--primary))/20,transparent_60%)]" />
      )}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
    </motion.div>
  )
}
