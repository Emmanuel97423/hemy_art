import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"

export const metadata = { title: "Projets" }

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight">Projets</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
