import { useState } from 'react'
import { ExternalLink, GraduationCap, MapPin } from 'lucide-react'
import { useLang } from '../context/LangContext'
import Reveal from './Reveal'

const DEGREES = [
  {
    key:      'edu.deg1',
    school:   'Institut Polytechnique Privé des Sciences Avancées Sfax',
    dateRange:'2019 – 2022',
    location: 'Sfax, Tunisie',
    href:     'https://www.ipsas-ens.net/',
    logo:     './assets/logos/ipsas.png',
    accent:   'blue',
  },
  {
    key:      'edu.deg2',
    school:   "Institut Supérieur d'Informatique et de Multimédia de Sfax",
    dateRange:'2016 – 2019',
    location: 'Sfax, Tunisie',
    href:     'https://isimsf.rnu.tn/',
    logo:     './assets/logos/isims.jpg',
    accent:   'violet',
  },
]

const ACCENT = {
  blue: {
    dot:    'bg-blue-400',
    ring:   'text-blue-400 border-blue-400/40 bg-blue-400/[0.08]',
    date:   'text-blue-400',
    badge:  'bg-blue-400/[0.08] border-blue-400/20 text-blue-400',
    hover:  'hover:border-blue-400/30 hover:shadow-[0_8px_32px_rgba(96,165,250,0.12)]',
    title:  'group-hover:text-blue-400',
  },
  violet: {
    dot:    'bg-violet-400',
    ring:   'text-violet-400 border-violet-400/40 bg-violet-400/[0.08]',
    date:   'text-violet-400',
    badge:  'bg-violet-400/[0.08] border-violet-400/20 text-violet-400',
    hover:  'hover:border-violet-400/30 hover:shadow-[0_8px_32px_rgba(167,139,250,0.12)]',
    title:  'group-hover:text-violet-400',
  },
}

function SchoolLogo({ src, alt }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return null
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="w-10 h-10 rounded-lg object-contain p-1 bg-white flex-shrink-0"
    />
  )
}

function TimelineCard({ entry, t }) {
  const { key, school, dateRange, location, href, logo, accent } = entry
  const ac = ACCENT[accent]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col p-6 bg-card border border-white/[0.07] rounded-xl transition-all duration-300 hover:-translate-y-1 ${ac.hover}`}
    >
      <ExternalLink
        size={14}
        className="absolute top-4 right-4 text-slate-400"
      />
      <div className="flex items-center gap-3 mb-3">
        <SchoolLogo src={logo} alt={school} />
        <span className={`font-mono text-xs font-semibold tracking-widest ${ac.date}`}>
          {dateRange}
        </span>
      </div>
      <h3 className={`text-[15px] font-bold mb-2 transition-colors ${ac.title}`}>
        {t(key)}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-3">{school}</p>
      <p className="font-mono text-[11px] text-slate-600 flex items-center gap-1 mb-4">
        <MapPin size={10} />
        {location}
      </p>
      <span className={`self-start inline-flex px-3 py-1 text-xs font-medium rounded-full border ${ac.badge}`}>
        {t('edu.mention')}
      </span>
    </a>
  )
}

function TimelineIcon({ accent, size = 16 }) {
  const ac = ACCENT[accent]
  return (
    <div className="flex flex-col items-center flex-shrink-0">
      <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 ${ac.ring}`}>
        <GraduationCap size={size} />
      </div>
      <div className={`w-3 h-3 rounded-full mt-3 ${ac.dot}`} />
    </div>
  )
}

export default function Education() {
  const { t } = useLang()

  return (
    <section id="education" className="py-16 md:py-24 bg-base-alt">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-16">
          <span className="font-mono text-[13px] text-blue-400/70 tracking-wide block mb-2">{t('edu.tag')}</span>
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-tight">{t('edu.title')}</h2>
        </Reveal>

        <div className="relative max-w-[860px] mx-auto">
          {/* Timeline line — left-edge on mobile, centred on desktop */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px timeline-gradient opacity-30" />

          <div className="flex flex-col gap-10 md:gap-16">
            {DEGREES.map((entry, i) => {
              const isLeft = i % 2 === 0

              return (
                <Reveal key={entry.key} delay={i * 120} from={isLeft ? 'left' : 'right'}>
                  {/* ── Mobile: icon left, card right ── */}
                  <div className="md:hidden flex items-start gap-5">
                    <TimelineIcon accent={entry.accent} size={14} />
                    <div className="flex-1">
                      <TimelineCard entry={entry} t={t} />
                    </div>
                  </div>

                  {/* ── Desktop: alternating left / right ── */}
                  <div className="hidden md:grid grid-cols-[1fr_80px_1fr] items-start">
                    <div>
                      {isLeft && <TimelineCard entry={entry} t={t} />}
                    </div>
                    <div className="flex justify-center pt-4">
                      <TimelineIcon accent={entry.accent} />
                    </div>
                    <div>
                      {!isLeft && <TimelineCard entry={entry} t={t} />}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
