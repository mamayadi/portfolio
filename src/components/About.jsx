import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

import Reveal from './Reveal'
import { useLang } from '../context/LangContext'

const CONTACT_LINKS = [
  { icon: MapPin,   label: 'Lyon, France',                   href: null },
  { icon: Mail,     label: 'ayadi-mohamed@outlook.com',       href: 'mailto:ayadi-mohamed@outlook.com' },
  { icon: Phone,    label: '07 45 53 45 22',                  href: 'tel:+33745534522' },
  { icon: Linkedin, label: 'LinkedIn',                        href: 'https://www.linkedin.com/in/mohamed-ayadi/' },
  { icon: Github,   label: 'GitHub',                          href: 'http://github.com/mamayadi/' },
]

const LANGS = [
  { flagCode: 'fr', nameKey: 'lang.fr', lvlKey: 'lang.fr_lvl' },
  { flagCode: 'gb', nameKey: 'lang.en', lvlKey: 'lang.en_lvl' },
  { flagCode: 'tn', nameKey: 'lang.ar', lvlKey: 'lang.ar_lvl' },
]

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="py-16 md:py-24 bg-base">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-16">
          <span className="font-mono text-[13px] text-blue-400/70 tracking-wide block mb-2">{t('about.tag')}</span>
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-tight">{t('about.title')}</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-14 items-start">

          {/* Left — avatar + contact */}
          <Reveal from="left" className="flex flex-col items-center gap-6 lg:items-start">
            {/* Avatar */}
            <div className="relative w-[190px] h-[190px] flex-shrink-0 mx-auto">
              {/* Spinning gradient ring */}
              <div className="absolute -inset-[5px] rounded-full avatar-ring-bg animate-spin-slow z-0" />
              {/* Dark mask to create ring gap */}
              <div className="absolute -inset-[2px] rounded-full bg-[#030712] z-[1]" />
              {/* Fallback initials (shown if image fails) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-violet-400 flex items-center justify-center text-5xl font-bold text-[#030712] z-[2]">
                MA
              </div>
              {/* Profile photo */}
              <img
                src="./assets/profile.png"
                alt="Mohamed AYADI"
                className="absolute inset-0 w-full h-full rounded-full object-cover object-top z-[3]"
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-2 w-full">
              {CONTACT_LINKS.map(({ icon: Icon, label, href }) => {
                const cls = "flex items-center gap-3 px-4 py-2.5 bg-card border border-white/[0.07] rounded-lg text-sm text-slate-400 transition-all duration-300 hover:border-blue-400/50 hover:text-blue-400 hover:bg-blue-400/[0.04]"
                return href
                  ? <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener" className={cls}>
                      <Icon size={14} className="text-blue-400 flex-shrink-0" />{label}
                    </a>
                  : <div key={label} className={cls}>
                      <Icon size={14} className="text-blue-400 flex-shrink-0" />{label}
                    </div>
              })}
            </div>
          </Reveal>

          {/* Right — bio + languages */}
          <Reveal from="right" delay={100} className="pt-2">
            <p className="text-slate-400 text-[15px] leading-[1.85] mb-5">{t('about.p1')}</p>
            <p className="text-slate-400 text-[15px] leading-[1.85] mb-8">{t('about.p2')}</p>

            <h3 className="text-[15px] font-semibold mb-3">{t('about.languages')}</h3>
            <div className="flex flex-col gap-2">
              {LANGS.map(({ flagCode, nameKey, lvlKey }) => (
                <div key={nameKey} className="flex items-center gap-3 px-4 py-2.5 bg-card border border-white/[0.07] rounded-lg text-sm">
                  <img
                    src={`https://flagcdn.com/24x18/${flagCode}.png`}
                    srcSet={`https://flagcdn.com/48x36/${flagCode}.png 2x`}
                    width="24"
                    height="18"
                    alt={flagCode}
                    className="rounded-sm flex-shrink-0"
                  />
                  <span className="flex-1 font-medium">{t(nameKey)}</span>
                  <span className="font-mono text-xs text-blue-400">{t(lvlKey)}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
