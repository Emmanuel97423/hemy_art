import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { Work } from "@/data/works"

export function WorkCard({ work }: { work: Work }) {
  return (
    <Link href={`/works/${work.slug}`} className="block">
      <Card className="overflow-hidden transition hover:shadow-lg">
        <div className="relative aspect-[4/3] w-full bg-muted">
          {work.image && (
            <Image src={work.image} alt={work.title} fill className="object-cover" />
          )}
        </div>
        <CardHeader className="pb-0">
          <h3 className="text-base font-medium">{work.title}</h3>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <div className="mt-1">{work.medium}</div>
          <div>{work.dimensions}</div>
          <div>{work.year}</div>
          {work.tags?.length ? (
            <div className="mt-2 flex flex-wrap gap-1">
              {work.tags.map((t) => (
                <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-xs">{t}</span>
              ))}
            </div>
          ) : null}

        </CardContent>
      </Card>
    </Link>
  )
}
