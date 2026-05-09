import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { useLang } from '../context/LangContext'
import Reveal from './Reveal'

const CARDS = [
  {
    icon:     Mail,
    labelKey: 'contact.email',
    value:    'ayadi-mohamed@outlook.com',
    href:     'mailto:ayadi-mohamed@outlook.com',
    color:    'text-blue-400',
    bg:       'bg-blue-400/[0.08] border-blue-400/15 group-hover:bg-blue-400/[0.15] group-hover:border-blue-400/30',
  },
  {
    icon:     Phone,
    labelKey: 'contact.phone',
    value:    '+33 7 45 53 45 22',
    href:     'tel:+33745534522',
    color:    'text-violet-400',
    bg:       'bg-violet-400/[0.08] border-violet-400/15 group-hover:bg-violet-400/[0.15] group-hover:border-violet-400/30',
  },
  {
    icon:     Linkedin,
    labelKey: 'LinkedIn',
    value:    'linkedin.com/in/mohamed-ayadi',
    href:     'https://www.linkedin.com/in/mohamed-ayadi/',
    color:    'text-sky-400',
    bg:       'bg-sky-400/[0.08] border-sky-400/15 group-hover:bg-sky-400/[0.15] group-hover:border-sky-400/30',
  },
  {
    icon:     Github,
    labelKey: 'GitHub',
    value:    'github.com/mamayadi',
    href:     'http://github.com/mamayadi/',
    color:    'text-slate-300',
    bg:       'bg-white/[0.05] border-white/10 group-hover:bg-white/[0.09] group-hover:border-white/20',
  },
]

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="py-24 bg-base-alt">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="font-mono text-[13px] text-blue-400/70 tracking-wide block mb-2">{t('contact.tag')}</span>
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-tight mb-3">{t('contact.title')}</h2>
          <p className="text-slate-400 text-[17px]">{t('contact.sub')}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[780px] mx-auto">
          {CARDS.map(({ icon: Icon, labelKey, value, href, color, bg }, i) => (
            <Reveal key={labelKey} delay={i * 70}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener"
                className="group flex items-center gap-4 p-5 bg-card border border-white/[0.07] rounded-2xl hover:border-white/[0.15] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${bg} ${color}`}>
                  <Icon size={20} />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-0.5">
                    {labelKey.startsWith('contact.') ? t(labelKey) : labelKey}
                  </p>
                  <p className="text-[14px] font-medium text-slate-200 truncate">{value}</p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={16}
                  className="text-slate-600 group-hover:text-slate-400 flex-shrink-0 transition-colors"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
