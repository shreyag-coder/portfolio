import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Leadership } from './components/Leadership'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <div id="top" className="min-h-svh">
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
