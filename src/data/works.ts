export type Work = {
  slug: string
  title: string
  year?: number | string
  dimensions?: string
  medium?: string
  image?: string
  tags?: string[]
  description?: string
}

export const works: Work[] = [
  {
    slug: "triptyque-banian",
    title: "Triptyque banian",
    year: 2020,
    dimensions: "300 × 100 cm",               // PORTFOLIO 2025
    medium: "Acrylique sur lin",              // PORTFOLIO 2025
    image: "/images/works/triptyque-banian.jpg",
    tags: ["peinture"],
  },
  {
    slug: "farafina",
    title: "Farafina",
    year: 2021,
    dimensions: "120 × 70 cm",                // 2025 + 2020-23
    medium: "Acrylique au couteau sur bois",  // PORTFOLIO 2025
    image: "/images/works/farafina.jpg",
    tags: ["peinture"],
    description: "Maison Serveaux.",          // lieu (facultatif)
  },
  {
    slug: "storm",
    title: "STORM",
    year: 2022,
    dimensions: "60 × 70 cm",
    image: "/images/works/storm.jpg",
    tags: ["peinture"],
    description: "Concept : renaissance.",    // Portefolio 2020–23
  },
  {
    slug: "phoenix-deau",
    title: "PHOENIX D’EAU",
    year: 2021,
    dimensions: "50 × 70 cm",
    image: "/images/works/phoenix-deau.jpg",
    tags: ["peinture"],
    description: "Concept : arbre de vie.",   // Portefolio 2020–23
  },
  {
    slug: "tamarin",
    title: "TAMARIN",
    year: 2021,
    image: "/images/works/tamarin.jpg",
    tags: ["peinture"],
    // dimensions non précisées dans les extraits fournis
  },
  {
    slug: "once-upon-a-time",
    title: "ONCE UPON A TIME",
    year: "2022–2023",
    dimensions: "109 × 139 cm",
    image: "/images/works/once-upon-a-time.jpg",
    tags: ["peinture"],
    description: "Concept : cinq éléments.",  // Portefolio 2020–23
  },
  {
    slug: "mantha-ray",
    title: "MANTHA RAY",
    year: 2021,
    dimensions: "120 × 90 cm",
    image: "/images/works/mantha-ray.jpg",
    tags: ["peinture"],
    description: "Concept : équilibre.",      // Portefolio 2020–23
  },
]
