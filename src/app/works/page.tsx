import { works } from "@/data/works"
import { WorkCard } from "@/components/work-card"
import { TagFilter } from "@/components/tag-filter"

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export const metadata = { title: "Œuvres" }

export default function WorksPage({ searchParams }: Props) {
  const selected = normalize(searchParams?.tag) // string | string[] → string[]
  const allTags = getAllTags()
  const filtered = selected.length
    ? works.filter((w) => w.tags?.some((t) => selected.includes(t)))
    : works

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Œuvres</h1>
          <p className="text-sm text-muted-foreground">
            {filtered.length} pièce(s){selected.length ? ` • filtre: ${selected.join(", ")}` : ""}
          </p>
        </div>
        <TagFilter allTags={allTags} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((w) => (
          <WorkCard key={w.slug} work={w} />
        ))}
      </div>
    </section>
  )
}

function normalize(input: string | string[] | undefined): string[] {
  if (!input) return []
  return Array.isArray(input) ? input : [input]
}

function getAllTags(): string[] {
  const set = new Set<string>()
  for (const w of works) (w.tags ?? []).forEach((t) => set.add(t))
  return Array.from(set).sort((a, b) => a.localeCompare(b))
}
