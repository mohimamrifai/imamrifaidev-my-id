
import Hero from './components/Hero'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='mt-32 lg:mt-20'>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
