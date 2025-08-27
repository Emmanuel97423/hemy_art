import Image from "next/image"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import type { Project } from "@/data/projects"
import Link from "next/link"

export function ProjectCard({ project }: { project: Project }) {
  return (



<Link href={`/projects/${project.slug}`} className="block">
<Card className="overflow-hidden transition hover:shadow-lg">
<div className="relative aspect-[4/3] w-full bg-muted">
        {project.image && (
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        )}
      </div>
      <CardHeader className="pb-0">
        <h3 className="text-base font-medium">{project.title}</h3>
        <div className="text-sm text-muted-foreground">
          {project.location} • {project.year}
        </div>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p>{project.description}</p>
      </CardContent>
</Card>
</Link>
  )
}
