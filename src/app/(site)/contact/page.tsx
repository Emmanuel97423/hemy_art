import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export const metadata = { title: "Contact" }

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>

      {/* Netlify Forms : nécessite un rendu HTML au build */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="space-y-3 max-w-lg"
      >
        <input type="hidden" name="form-name" value="contact" />
        <Input name="name" placeholder="Votre nom" required />
        <Input type="email" name="email" placeholder="Votre email" required />
        <Textarea name="message" placeholder="Votre message" rows={6} required />
        <Button type="submit">Envoyer</Button>
      </form>

      <p className="text-sm text-muted-foreground">
        Ou écrivez-moi directement : <a className="underline" href="mailto:hemyartcontact@gmail.com">hemyartcontact@gmail.com</a>
      </p>
    </section>
  )
}
