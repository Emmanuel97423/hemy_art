export const metadata = { title: "À propos" }

export default function AboutPage() {
  return (
    <section className="prose max-w-none dark:prose-invert">
      <h1>À propos</h1>
      <p>
        Née en 1993 en Polynésie, adoptée en région bordelaise, je vis à La Réunion depuis 2005.
        Formée à l’ILOI (animation traditionnelle), j’ai évolué vers la peinture et une pratique
        protéiforme reliant matière, tissage et création végétale.
      </p>
      <p>
        Mon travail explore la relation à la Terre et aux astres — une synergie entre les éléments
        du vivant (minéral, végétal, animal) — déclinée en installation, upcycling textile, peinture,
        performance dansée et musique.
      </p>
      <p className="text-sm text-muted-foreground">
        Contact : hemyartcontact@gmail.com • +262 692 712 810
      </p>
    </section>
  )
}
