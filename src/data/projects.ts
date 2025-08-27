export type Project = {
  slug: string
  title: string
  year?: string | number
  role?: string
  location?: string
  description?: string
  image?: string
  links?: { href: string; label: string }[]
}

export const projects: Project[] = [
  {
    slug: "dpnk",
    title: "DPNK — Résidence / Performance",
    year: 2020,
    location: "La Friche",
    description:
      "Projet ‘Dan Port néna son kèr’ autour de la multiculturalité et de l’identité réunionnaise ; restitution à La Friche.",
    image: "/images/projects/dpnk.jpg",
  },
  {
    slug: "off-dakar",
    title: "OFF de la Biennale de Dakar — « Tisseran »",
    year: 2022,
    location: "Maison Serveaux",
    description:
      "Installation tissée : vecteur de la notion de porte, vagues tissées ‘ouvrent la voie vers l’inconnu’.",
    image: "/images/projects/off-dakar.jpg",
  },
  {
    slug: "tressaz-bourbon",
    title: "Tressaz Bourbon — Stylisme & Scénographie",
    year: 2023,
    location: "Vieux Domaine — Saint-Pierre",
    description:
      "Collaboration artistique et stylistique (matière goni, mix de matières) — ancrage territorial, histoire & fiction.",
    image: "/images/projects/tressaz-bourbon.jpg",
  },
  {
    slug: "kabar-expo",
    title: "Kabar Expo — Installation « La Reine Kaf »",
    year: 2023,
    location: "Médiathèque François Mitterrand",
    description:
      "Présentation avec le collectif Dalon la pintir (20 déc. 2023).",
    image: "/images/projects/kabar-expo.jpg",
  },
  {
    slug: "armont-amwin",
    title: "Armont amwin — Création stylistique (clip)",
    year: 2021,
    description:
      "Création ‘L’esprit’ pour le clip d’Alexandre LA PREF (Sayaman).",
    image: "/images/projects/armont-amwin.jpg",
  },
  {
    slug: "rwa-kaf-clip",
    title: "Rwa Kaf — Clip",
    year: 2021,
    description: "Participation clip (projet lié à Armont Amwin).",
    image: "/images/projects/rwa-kaf.jpg",
  },
]
