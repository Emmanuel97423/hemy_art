export const metadata = { title: "Contact" }

import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>

      <ContactForm />

      <p className="text-sm text-muted-foreground">
        Ou écrivez-moi directement :
        {" "}
        <a className="underline" href="mailto:hemyartcontact@gmail.com">
          hemyartcontact@gmail.com
        </a>
      </p>
    </section>
  )
}
