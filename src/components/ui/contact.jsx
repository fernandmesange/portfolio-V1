import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="mb-24">
      <h2 className="section-heading">Contact</h2>
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg mb-8 text-muted-foreground">
          Je suis actuellement à la recherche de nouvelles opportunités. N&apos;hésitez pas à me contacter si vous avez
          des questions ou si vous souhaitez discuter d&apos;un projet.
        </p>
        <Button asChild>
          <a href="mailto:email@example.com" className="font-mono">
            <Mail className="mr-2 h-4 w-4" />
            Me contacter
          </a>
        </Button>
      </div>
    </section>
  )
}

