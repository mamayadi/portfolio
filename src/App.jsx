import { lazy, Suspense } from 'react'
import { LangProvider } from './context/LangContext'

// Eager — always above the fold
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy — split into separate chunks, loaded as user scrolls
const About         = lazy(() => import('./components/About'))
const Skills        = lazy(() => import('./components/Skills'))
const Experience    = lazy(() => import('./components/Experience'))
const Education     = lazy(() => import('./components/Education'))
const Certifications = lazy(() => import('./components/Certifications'))
const Contact       = lazy(() => import('./components/Contact'))
const Footer        = lazy(() => import('./components/Footer'))

function SectionSkeleton() {
  return (
    <div className="py-24 flex justify-center items-center">
      <div className="w-8 h-8 rounded-full border-2 border-blue-400/30 border-t-blue-400 animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </LangProvider>
  )
}
