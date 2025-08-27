"use client"

import { useMemo } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

export function TagFilter({ allTags }: { allTags: string[] }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const active = useMemo(() => new Set(searchParams.getAll("tag")), [searchParams])
  const hasActive = active.size > 0

  function toggle(tag: string) {
    const sp = new URLSearchParams(searchParams.toString())
    const current = sp.getAll("tag")
    if (current.includes(tag)) {
      // retire ce tag
      const next = current.filter((t) => t !== tag)
      sp.delete("tag")
      next.forEach((t) => sp.append("tag", t))
    } else {
      sp.append("tag", tag)
    }
    router.push(`${pathname}?${sp.toString()}`, { scroll: false })
  }

  function clear() {
    const sp = new URLSearchParams(searchParams.toString())
    sp.delete("tag")
    router.push(`${pathname}?${sp.toString()}`, { scroll: false })
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {allTags.map((tag) => {
        const isActive = active.has(tag)
        return (
          <Button
            key={tag}
            size="sm"
            variant={isActive ? "default" : "outline"}
            onClick={() => toggle(tag)}
            className="rounded-full"
          >
            {tag}
          </Button>
        )
      })}
      {hasActive && (
        <Button size="sm" variant="ghost" onClick={clear}>
          Réinitialiser
        </Button>
      )}
    </div>
  )
}
