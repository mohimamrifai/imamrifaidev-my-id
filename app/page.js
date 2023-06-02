
import Hero from './components/Hero'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Scroll from './components/Scroll'

export default function Home() {
  return (
    <>
      <Navbar />
      <Scroll />
      <main className='mt-32 lg:mt-20'>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
