import Image from "next/image"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  const title = project?.title ?? "Projet"
  const description = project?.description ?? "Projet — Hemy Art"
  const images = project?.image ? [{ url: project.image }] : []
  return { title, description, openGraph: { title, description, images } }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-sm text-muted-foreground">
          {project.location ? `${project.location} • ` : ""}
          {project.year ?? ""}
        </p>
      </header>

      {project.image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
      )}

      {project.description && (
        <p className="max-w-2xl text-muted-foreground">{project.description}</p>
      )}

      {project.links?.length ? (
        <ul className="mt-4 list-inside list-disc text-sm text-muted-foreground">
          {project.links.map((l) => (
            <li key={l.href}>
              <a className="underline" href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
