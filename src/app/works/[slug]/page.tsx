import Image from "next/image"
import { notFound } from "next/navigation"
import { works } from "@/data/works"

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const work = works.find((w) => w.slug === slug)
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

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const work = works.find((w) => w.slug === slug)
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
