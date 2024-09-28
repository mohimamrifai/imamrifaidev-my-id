import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import CtaContact from './components/CtaContact'

export default function Home() {
  return (
    <>
      <main className=' dark:bg-gray-900 dark:text-white'>
        <Hero />
        <Projects />
        <CtaContact />
      </main>
      <Footer />
    </>
  )
}
