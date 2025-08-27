import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Hemy Hart — Artiste visuelle
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Peinture, installation, stylisme & scénographie.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild><Link href="/works">Voir les œuvres</Link></Button>
            <Button asChild variant="outline"><Link href="/projects">Voir les projets</Link></Button>
          </div>
        </div>
        <div className="aspect-[4/3] w-full max-w-md rounded-2xl bg-muted md:w-1/2" />
      </div>
    </section>
  )
}
