import { useState } from 'react'
import { GraduationCap } from 'lucide-react'
import { useLang } from '../context/LangContext'
import Reveal from './Reveal'

const DEGREES = [
  {
    key:    'edu.deg1',
    school: 'Institut Polytechnique Privé des Sciences Avancées Sfax',
    date:   '2019 – 2022 · Sfax, Tunisie',
    href:   'https://www.ipsas-ens.net/',
    logo:   './assets/logos/ipsas.png',
  },
  {
    key:    'edu.deg2',
    school: "Institut Supérieur d'Informatique et de Multimédia de Sfax",
    date:   '2016 – 2019 · Sfax, Tunisie',
    href:   'https://isimsf.rnu.tn/',
    logo:   './assets/logos/isims.jpg',
  },
]

function SchoolLogo({ src, alt }) {
  const [failed, setFailed] = useState(false)

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className="w-14 h-14 rounded-lg object-contain p-1.5 bg-white flex-shrink-0"
      />
    )
  }

  return (
    <div className="w-14 h-14 rounded-lg bg-blue-400/[0.08] border border-blue-400/15 flex items-center justify-center flex-shrink-0 text-blue-400">
      <GraduationCap size={28} />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[860px] mx-auto">
          {DEGREES.map(({ key, school, date, href, logo }, i) => (
            <Reveal key={key} delay={i * 80} from={i === 0 ? 'left' : 'right'}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 p-5 md:p-7 bg-card border border-white/[0.07] rounded-xl hover:border-blue-400/30 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(96,165,250,0.1)] transition-all duration-300 h-full group"
              >
                <SchoolLogo src={logo} alt={school} />
                <div>
                  <h3 className="text-[15px] font-semibold mb-2 group-hover:text-blue-400 transition-colors">{t(key)}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-2">{school}</p>
                  <p className="font-mono text-xs text-slate-600 mb-3">{date}</p>
                  <span className="inline-flex px-3 py-1 text-xs font-medium bg-blue-400/[0.08] border border-blue-400/20 text-blue-400 rounded-full">
                    {t('edu.mention')}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
