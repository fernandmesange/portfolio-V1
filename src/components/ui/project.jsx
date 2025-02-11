import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Projects() {
  return (
    <section id="projects" className="mb-24">
      <h2 className="section-heading">Projets</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-secondary/50 border-secondary">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-foreground">Projet 1</CardTitle>
              <div className="flex gap-2">
                <a href="#" className="text-muted-foreground hover:text-accent">
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent">
                  <ExternalLink className="w-5 h-5" />
                  <span className="sr-only">Site web</span>
                </a>
              </div>
            </div>
            <CardDescription>Une application web moderne</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Description détaillée du projet et de ses fonctionnalités principales.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-background rounded text-xs font-mono">React</span>
              <span className="px-2 py-1 bg-background rounded text-xs font-mono">Next.js</span>
              <span className="px-2 py-1 bg-background rounded text-xs font-mono">TypeScript</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

