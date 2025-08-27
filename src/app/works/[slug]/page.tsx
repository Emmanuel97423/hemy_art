import Image from "next/image"
import { notFound } from "next/navigation"
import { works } from "@/data/works"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }))
}

export function generateMetadata({ params }: Props) {
  const work = works.find((w) => w.slug === params.slug)
  return {
    title: work ? work.title : "Œuvre",
    description: work?.description ?? "Œuvre — Hemy Art",
    openGraph: {
      title: work?.title,
      description: work?.description,
      images: work?.image ? [{ url: work.image }] : [],
    },
  }
}

export default function WorkDetailPage({ params }: Props) {
  const work = works.find((w) => w.slug === params.slug)
  if (!work) return notFound()

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{work.title}</h1>
        <p className="text-sm text-muted-foreground">
          {work.medium} {work.dimensions ? `• ${work.dimensions}` : ""} {work.year ? `• ${work.year}` : ""}
        </p>
      </header>

      {work.image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
          <Image src={work.image} alt={work.title} fill className="object-cover" />
        </div>
      )}

      {work.description && <p className="max-w-2xl text-muted-foreground">{work.description}</p>}
    </article>
  )
}
