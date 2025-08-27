"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState("sending")
    const form = e.currentTarget
    const data = new FormData(form)
    // IMPORTANT : envoyer vers le fichier statique dans /public
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any).toString(),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setState("ok")
    } catch {
      setState("err")
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 max-w-lg">
      {/* DOIT correspondre au nom déclaré dans __forms.html */}
      <input type="hidden" name="form-name" value="contact" />

      <Input name="name" placeholder="Votre nom" required />
      <Input type="email" name="email" placeholder="Votre email" required />
      <Textarea name="message" placeholder="Votre message" rows={6} required />
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Envoi..." : "Envoyer"}
        </Button>
        {state === "ok" && <span className="text-sm text-green-600">Message bien envoyé ✨</span>}
        {state === "err" && <span className="text-sm text-red-600">Échec d’envoi, réessayez.</span>}
      </div>
    </form>
  )
}
