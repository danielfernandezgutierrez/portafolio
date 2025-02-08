import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Tech from '@/components/sections/Tech'
import Projects from '@/components/sections/Projects'
import Certs from '@/components/sections/Certs'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="home" className="min-h-screen scroll-mt-16 md:scroll-mt-0">
        <Hero />
      </section>
      <section id="about" className="min-h-screen scroll-mt-16 md:scroll-mt-0">
        <About />
      </section>
      <section id="tech" className="min-h-screen scroll-mt-16 md:scroll-mt-0">
        <Tech />
      </section>
      <section id="projects" className="min-h-screen scroll-mt-16 md:scroll-mt-0">
        <Projects />
      </section>
      <section id="certs" className="min-h-screen scroll-mt-16 md:scroll-mt-0">
        <Certs />
      </section>
      <section id="contact" className="min-h-screen scroll-mt-16 md:scroll-mt-0">
        <Contact />
      </section>
      < Footer />
    </div>
  )
}