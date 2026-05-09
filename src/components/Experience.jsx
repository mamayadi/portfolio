import { ChevronDown, MapPin } from 'lucide-react'

import Reveal from './Reveal'
import { useLang } from '../context/LangContext'
import { useState } from 'react'

const APRIL_ITEMS = ['i1','i2','i3','i4','i5','i6','i7','i8','i9']
const APRIL_TAGS  = ['Gravitee APIM/AM','Ansible','Podman','Terraform','Azure','Jenkins','Redis','ELK Stack','Grafana','SELinux']

const SIFAST_GENERAL = ['g1','g2','g3','g4']
const SIFAST_TAGS    = ['Kubernetes','Docker','HELM','Jenkins','ArgoCD','Ansible','Prometheus','Grafana','SonarQube','GitLab CI/CD','Angular','Symfony']

const SIFAST_PROJECTS = [
  { key: 'proj1', items: ['p1i1','p1i2','p1i3'] },
  { key: 'proj2', items: ['p2i1','p2i2','p2i3'] },
  { key: 'proj3', items: ['p3i1','p3i2','p3i3'] },
  { key: 'proj4', items: ['p4i1','p4i2'] },
  { key: 'proj5', items: ['p5i1','p5i2'] },
]

function CompanyLogo({ src, fallbackText, bg, textColor }) {
  const [imgFailed, setImgFailed] = useState(false)

  if (src && !imgFailed) {
    return (
      <img
        src={src}
        alt={fallbackText}
        onError={() => setImgFailed(true)}
        className="w-12 h-12 rounded-xl object-contain p-1.5 bg-white"
      />
    )
  }

  return (
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border ${bg}`}>
      <span className={`font-bold text-sm font-mono ${textColor}`}>{fallbackText}</span>
    </div>
  )
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
          <span className="text-blue-400 text-xs mt-[3px] flex-shrink-0">▸</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function Tags({ tags }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-4">
      {tags.map(tag => (
        <span key={tag} className="px-2.5 py-1 text-[11px] font-mono bg-white/[0.04] border border-white/[0.07] text-slate-500 rounded hover:text-blue-400 hover:border-blue-400/25 hover:bg-blue-400/[0.04] transition-all duration-300">
          {tag}
        </span>
      ))}
    </div>
  )
}

function TimelineCard({ children }) {
  return (
    <div className="shimmer-card bg-card border border-white/[0.07] rounded-xl overflow-hidden hover:border-white/[0.13] hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(96,165,250,0.1)] transition-all duration-300">
      {children}
    </div>
  )
}

export default function Experience() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <section id="experience" className="py-24 bg-base">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="font-mono text-[13px] text-blue-400/70 tracking-wide block mb-2">{t('exp.tag')}</span>
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-tight">{t('exp.title')}</h2>
        </Reveal>

        {/* Timeline */}
        <div className="relative max-w-[880px] mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 timeline-gradient opacity-30 rounded-full animate-timeline-grow" />

          {/* ── APRIL ── */}
          <Reveal from="left" className="relative pl-[58px] mb-10">
            <div className="absolute left-[11px] top-[22px] w-[18px] h-[18px] rounded-full bg-blue-400 border-[3px] border-base shadow-[0_0_0_4px_rgba(96,165,250,0.25),0_0_16px_rgba(96,165,250,0.4)] z-10" />
            <TimelineCard>
              <div className="flex flex-wrap justify-between gap-4 px-6 pt-6 pb-4 border-b border-white/[0.07]">
                <div className="flex items-center gap-4">
                  <CompanyLogo
                    src="./assets/logos/april.svg"
                    fallbackText="APR"
                    bg="bg-orange-500/10 border-orange-500/25"
                    textColor="text-orange-400"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-0.5">APRIL</h3>
                    <span className="text-sm text-blue-400 font-medium">{t('exp.role_devops')}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 justify-center">
                  <span className="font-mono text-xs text-slate-400">10/2023 – 12/2024</span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-600">
                    <MapPin size={11} />Lyon, France
                  </span>
                </div>
              </div>
              <div className="px-6 py-5">
                <BulletList items={APRIL_ITEMS.map(k => t(`exp.april.${k}`))} />
                <Tags tags={APRIL_TAGS} />
              </div>
            </TimelineCard>
          </Reveal>

          {/* ── SiFAST ── */}
          <Reveal from="right" delay={120} className="relative pl-[58px]">
            <div className="absolute left-[11px] top-[22px] w-[18px] h-[18px] rounded-full bg-blue-400 border-[3px] border-base shadow-[0_0_0_4px_rgba(96,165,250,0.25),0_0_16px_rgba(96,165,250,0.4)] z-10" />
            <TimelineCard>
              <div className="flex flex-wrap justify-between gap-4 px-6 pt-6 pb-4 border-b border-white/[0.07]">
                <div className="flex items-center gap-4">
                  <CompanyLogo
                    src="./assets/logos/sifast.jpg"
                    fallbackText="SF"
                    bg="bg-blue-500/10 border-blue-500/25"
                    textColor="text-blue-400"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-0.5">SiFAST</h3>
                    <span className="text-sm text-blue-400 font-medium">{t('exp.role_devops')}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 justify-center">
                  <span className="font-mono text-xs text-slate-400">02/2019 – 09/2023</span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-600">
                    <MapPin size={11} />Sfax, Tunisie
                  </span>
                </div>
              </div>
              <div className="px-6 py-5">
                <BulletList items={SIFAST_GENERAL.map(k => t(`exp.sifast.${k}`))} />

                {/* Accordion */}
                <button
                  onClick={() => setOpen(o => !o)}
                  className="w-full flex items-center justify-between px-4 py-2.5 border border-white/[0.07] rounded-lg text-sm font-mono text-blue-400 hover:bg-blue-400/[0.04] hover:border-blue-400/30 transition-all duration-300 mb-0"
                >
                  {t('exp.sifast.showMore')}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-[3000px] mt-4' : 'max-h-0'}`}>
                  <div className="flex flex-col gap-4">
                    {SIFAST_PROJECTS.map(({ key, items }) => (
                      <div key={key} className="border-b border-white/[0.07] pb-4 last:border-0 last:pb-0">
                        <h4 className="font-mono text-xs font-semibold text-violet-400 mb-3">{t(`exp.sifast.${key}`)}</h4>
                        <BulletList items={items.map(k => t(`exp.sifast.${k}`))} />
                      </div>
                    ))}
                  </div>
                </div>

                <Tags tags={SIFAST_TAGS} />
              </div>
            </TimelineCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
