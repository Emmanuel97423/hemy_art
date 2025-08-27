// src/app/page.tsx
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Instagram, Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { WorkCard } from "@/components/work-card"
import { ProjectCard } from "@/components/project-card"

import { works } from "@/data/works"
import { projects } from "@/data/projects"
import { siteConfig } from "@/data/site"

export const metadata = { title: "Accueil" }

export default function HomePage() {
  const heroWork = works[0]
  const featuredWorks = works.slice(0, 6)
  const recentProjects = projects.slice(0, 3)

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-muted/40 to-background">
        <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
              <span>Hemy Hart</span>
              <span>•</span>
              <span>Artiste visuelle</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Peinture, installation,<br className="hidden sm:block" /> stylisme & scénographie
            </h1>

            <p className="max-w-xl text-muted-foreground">
              {siteConfig.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/works">Voir les œuvres</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/projects">
                  Voir les projets
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/contact">Me contacter</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {siteConfig.location}
              </span>
              <a className="inline-flex items-center gap-2 underline decoration-dotted underline-offset-4" href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </span>
              <a className="inline-flex items-center gap-2 underline decoration-dotted underline-offset-4" href={siteConfig.instagram} target="_blank" rel="noreferrer">
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
              {heroWork?.image ? (
                <Image
                  src={heroWork.image}
                  alt={heroWork.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted to-background" />
              )}
            </div>
            {heroWork?.title && (
              <p className="mt-2 text-xs text-muted-foreground">
                Œuvre en vedette : <span className="font-medium">{heroWork.title}</span>
                {heroWork.year ? ` • ${heroWork.year}` : ""}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ŒUVRES EN VEDETTE */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Œuvres mises en avant</h2>
            <p className="text-sm text-muted-foreground">
              Sélection de pièces récentes
            </p>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/works">
              Tout voir
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredWorks.map((w) => (
            <WorkCard key={w.slug} work={w} />
          ))}
        </div>
      </section>

      {/* PROJETS RÉCENTS */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Projets récents</h2>
            <p className="text-sm text-muted-foreground">
              Résidences, installations et collaborations
            </p>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/projects">
              Tous les projets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* À PROPOS + CONTACT */}
      <section className="grid gap-8 rounded-2xl border bg-card p-6 md:grid-cols-2 md:p-10">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">À propos</h3>
          <p className="max-w-prose text-muted-foreground">
            Artiste visuelle basée à La Réunion, je tisse des liens entre matière,
            tissage et création végétale. Mon travail explore la relation à la Terre
            et aux astres à travers peinture, installation, stylisme et scénographie.
          </p>
          <Button asChild>
            <Link href="/about">En savoir plus</Link>
          </Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a className="underline decoration-dotted underline-offset-4" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              <a className="underline decoration-dotted underline-offset-4" href={siteConfig.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
          <Button asChild variant="outline">
            <Link href="/contact">
              Écrire un message
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
