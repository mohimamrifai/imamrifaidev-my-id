
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import Scroll from './components/Scroll'

export default function Home() {
  

  return (
    <>
      <Scroll />
      <main className='lg:mt-20 dark:bg-gray-900 dark:text-white'>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
