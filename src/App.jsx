import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { Navigation } from "./components/ui/navigation"
import { About } from "./components/ui/about"
import { Experience } from "./components/ui/experience"
import { Projects } from "./components/ui/project"
import { Contact } from "./components/ui/contact"

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24 md:px-8 max-w-5xl">
        <header className="mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">Fernand Mesange</h1>
          <h2 className="text-xl md:text-2xl mb-6 text-accent">Développeur Full Stack</h2>
          <p className="max-w-xl text-muted-foreground text-lg">
            Je crée des applications web et mobile performantes et accessibles avec une attention particulière aux détails.
          </p>
        </header>

        <About />
        <Experience />
        <Projects />
        <Contact />

        <footer className="fixed bottom-0 left-0 p-4 flex gap-4">
          <a href="https://github.com" className="text-muted-foreground hover:text-accent">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" className="text-muted-foreground hover:text-accent">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:email@example.com" className="text-muted-foreground hover:text-accent">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
          <a href="/cv.pdf" className="text-muted-foreground hover:text-accent">
            <FileText className="w-5 h-5" />
            <span className="sr-only">CV</span>
          </a>
        </footer>
      </main>
    </div>
  )
}

