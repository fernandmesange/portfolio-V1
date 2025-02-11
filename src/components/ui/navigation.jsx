import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button className="md:hidden text-muted-foreground hover:text-accent" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
          <span className="sr-only">Menu</span>
        </button>

        <div
          className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-8 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-background md:bg-transparent p-4 md:p-0`}
        >
          <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>
            À propos
          </a>
          <a href="#experience" className="nav-link" onClick={() => setIsOpen(false)}>
            Expérience
          </a>
          <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>
            Projets
          </a>
          <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

