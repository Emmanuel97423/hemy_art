"use client"

import { motion } from "framer-motion"

export function Marquee({ items }: { items: string[] }) {
  const Row = ({ reverse }: { reverse?: boolean }) => (
    <motion.div
      className="flex min-w-full shrink-0 items-center gap-8 py-2"
      initial={{ x: reverse ? "-100%" : "0%" }}
      animate={{ x: reverse ? "0%" : "-100%" }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      aria-hidden
    >
      {Array.from({ length: 2 }).flatMap((_, k) =>
        items.map((label, i) => (
          <span key={`${k}-${i}-${label}`} className="whitespace-nowrap rounded-full border px-3 py-1 text-xs text-muted-foreground">
            {label}
          </span>
        )),
      )}
    </motion.div>
  )

  return (
    <div className="relative mt-6 w-full overflow-hidden border-t">
      <div className="flex">
        <Row />
        <Row reverse />
      </div>
    </div>
  )
}
