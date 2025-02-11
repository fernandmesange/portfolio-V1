export function Experience() {
    return (
      <section id="experience" className="mb-24">
        <h2 className="section-heading">Expérience</h2>
        <div className="space-y-12">
          <div className="grid gap-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Lead Developer</h3>
                <p className="text-accent">Entreprise Tech</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground">2022 — Présent</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Développement d&apos;applications web performantes</li>
              <li>Direction d&apos;une équipe de 5 développeurs</li>
              <li>Mise en place de bonnes pratiques et de standards de code</li>
            </ul>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-secondary rounded text-xs font-mono">React</span>
              <span className="px-2 py-1 bg-secondary rounded text-xs font-mono">TypeScript</span>
              <span className="px-2 py-1 bg-secondary rounded text-xs font-mono">Node.js</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  