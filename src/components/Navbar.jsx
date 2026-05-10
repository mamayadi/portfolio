import { useState, useEffect } from 'react'
import { User, Cpu, Briefcase, GraduationCap, Award, Mail } from 'lucide-react'
import { useLang } from '../context/LangContext'

const SECTIONS = [
  { key: 'about',          Icon: User },
  { key: 'skills',         Icon: Cpu },
  { key: 'experience',     Icon: Briefcase },
  { key: 'education',      Icon: GraduationCap },
  { key: 'certifications', Icon: Award },
  { key: 'contact',        Icon: Mail },
]

export default function Navbar() {
  const { lang, t, toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'py-3 bg-base/90 backdrop-blur-md border-b border-white/[0.07]'
        : 'py-[18px]'
    }`}>
      <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between gap-6">

        {/* Logo */}
        <a href="#hero" className="font-mono text-xl font-semibold flex-shrink-0 hover:opacity-80 transition-opacity">
          <span className="text-blue-400">&lt;</span>MA<span className="text-blue-400">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 items-center">
          {SECTIONS.map(({ key, Icon }) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors relative group"
              >
                <Icon size={13} className="opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                {t(`nav.${key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 rounded group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="border border-white/[0.13] text-slate-400 hover:border-blue-400 hover:text-slate-100 px-3 py-1.5 rounded-full font-mono text-xs tracking-wide transition-all duration-300 flex items-center gap-1.5"
          >
            <span className="text-blue-400 font-semibold">{lang.toUpperCase()}</span>
            <span className="opacity-30">|</span>
            <span className="opacity-45">{lang === 'fr' ? 'EN' : 'FR'}</span>
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-slate-100 rounded transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-5 h-0.5 bg-slate-100 rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-slate-100 rounded transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-base/95 backdrop-blur-md border-b border-white/[0.07] transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="flex flex-col py-2">
          {SECTIONS.map(({ key, Icon }) => (
            <li key={key}>
              <a
                href={`#${key}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-6 py-3.5 text-slate-300 hover:text-blue-400 text-[15px] transition-colors"
              >
                <Icon size={16} className="opacity-60 flex-shrink-0" />
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
