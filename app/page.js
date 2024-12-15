import Hero from '../components/commons/Hero'
import Projects from '../components/commons/Projects'
import Footer from '../components/commons/Footer'
import CtaContact from '../components/commons/CtaContact'

// Berdasarkan analisis komponen yang ada, beberapa saran untuk portfolio website:

// 1. Setelah Hero section:
// - Tambahkan About/Profile section untuk menjelaskan background, skills, dan pengalaman
// - Tambahkan Tech Stack section untuk menampilkan teknologi yang dikuasai

// 2. Setelah Projects section: 
// - Tambahkan Testimonials/Reviews dari klien sebelumnya
// - Tambahkan Work Experience/Timeline section

// 3. Sebelum CtaContact:
// - Tambahkan Blog/Articles section untuk sharing knowledge
// - Tambahkan Achievement/Certification section

// 4. Tambahan yang bisa dipertimbangkan:
// - Dark/Light mode toggle
// - Animasi scroll yang lebih smooth
// - Loading state
// - Filter projects berdasarkan kategori

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
