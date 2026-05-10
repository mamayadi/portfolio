import { Calendar, ChevronDown, FolderOpen, MapPin } from 'lucide-react'
import {
  SiAngular,
  SiAnsible,
  SiArgo,
  SiDocker,
  SiElasticsearch,
  SiElasticstack,
  SiGitlab,
  SiGrafana,
  SiHelm,
  SiJenkins,
  SiKubernetes,
  SiPodman,
  SiPrometheus,
  SiRedhat,
  SiRedis,
  SiSonarqubeserver,
  SiSymfony,
  SiTerraform,
} from 'react-icons/si'

import Reveal from './Reveal'
import { useLang } from '../context/LangContext'
import { useState } from 'react'

const AzureIcon = ({ size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.05 4.24L6.56 18.05H2L7.09 9.24L13.05 4.24ZM13.74 5.33L22 18.05H9.83L17.29 16.56L12.33 10.62L13.74 5.33Z"/>
  </svg>
)

const GraviteeIcon = ({ size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M14 12h-2v2h2v1.5c-.5.3-1.2.5-2 .5-2.2 0-4-1.8-4-4s1.8-4 4-4c1.1 0 2 .4 2.8 1l1.4-1.5A5.9 5.9 0 0 0 12 6a6 6 0 0 0 0 12c1.8 0 3.4-.8 4.5-2V12H14z"/>
  </svg>
)

const TECH_ICONS = {
  'Gravitee APIM/AM': GraviteeIcon,
  'Ansible':          SiAnsible,
  'Podman':           SiPodman,
  'Terraform':        SiTerraform,
  'Azure':            AzureIcon,
  'Jenkins':          SiJenkins,
  'Redis':            SiRedis,
  'ELK Stack':        SiElasticstack,
  'Grafana':          SiGrafana,
  'Kubernetes':       SiKubernetes,
  'Docker':           SiDocker,
  'HELM':             SiHelm,
  'ArgoCD':           SiArgo,
  'Prometheus':       SiPrometheus,
  'SonarQube':        SiSonarqubeserver,
  'GitLab CI/CD':     SiGitlab,
  'Elasticsearch':    SiElasticsearch,
  'Angular':          SiAngular,
  'Symfony':          SiSymfony,
  'SELinux':          SiRedhat,
}

/* Brand-inspired color per tool — all class strings are static for Tailwind JIT */
const TAG_COLORS = {
  /* Containers & Orchestration */
  'Kubernetes':       'text-blue-400   bg-blue-400/[0.08]    border-blue-400/25   hover:bg-blue-400/[0.16]   hover:border-blue-400/50',
  'Docker':           'text-sky-400    bg-sky-400/[0.08]     border-sky-400/25    hover:bg-sky-400/[0.16]    hover:border-sky-400/50',
  'Podman':           'text-purple-400 bg-purple-400/[0.08]  border-purple-400/25 hover:bg-purple-400/[0.16] hover:border-purple-400/50',
  'HELM':             'text-indigo-400 bg-indigo-400/[0.08]  border-indigo-400/25 hover:bg-indigo-400/[0.16] hover:border-indigo-400/50',
  /* CI/CD & Automation */
  'Jenkins':          'text-red-400    bg-red-400/[0.08]     border-red-400/25    hover:bg-red-400/[0.16]    hover:border-red-400/50',
  'GitLab CI/CD':     'text-orange-400 bg-orange-400/[0.08]  border-orange-400/25 hover:bg-orange-400/[0.16] hover:border-orange-400/50',
  'ArgoCD':           'text-teal-400   bg-teal-400/[0.08]    border-teal-400/25   hover:bg-teal-400/[0.16]   hover:border-teal-400/50',
  'Ansible':          'text-rose-400   bg-rose-400/[0.08]    border-rose-400/25   hover:bg-rose-400/[0.16]   hover:border-rose-400/50',
  /* Cloud & IaC */
  'Azure':            'text-cyan-400   bg-cyan-400/[0.08]    border-cyan-400/25   hover:bg-cyan-400/[0.16]   hover:border-cyan-400/50',
  'Terraform':        'text-violet-400 bg-violet-400/[0.08]  border-violet-400/25 hover:bg-violet-400/[0.16] hover:border-violet-400/50',
  /* Monitoring & Observability */
  'Grafana':          'text-amber-400  bg-amber-400/[0.08]   border-amber-400/25  hover:bg-amber-400/[0.16]  hover:border-amber-400/50',
  'Prometheus':       'text-orange-300 bg-orange-300/[0.08]  border-orange-300/25 hover:bg-orange-300/[0.16] hover:border-orange-300/50',
  'ELK Stack':        'text-yellow-400 bg-yellow-400/[0.08]  border-yellow-400/25 hover:bg-yellow-400/[0.16] hover:border-yellow-400/50',
  'Elasticsearch':    'text-yellow-300 bg-yellow-300/[0.08]  border-yellow-300/25 hover:bg-yellow-300/[0.16] hover:border-yellow-300/50',
  /* API & Platforms */
  'Gravitee APIM/AM': 'text-emerald-400 bg-emerald-400/[0.08] border-emerald-400/25 hover:bg-emerald-400/[0.16] hover:border-emerald-400/50',
  'Redis':            'text-red-400    bg-red-400/[0.08]     border-red-400/25    hover:bg-red-400/[0.16]    hover:border-red-400/50',
  'SonarQube':        'text-blue-300   bg-blue-300/[0.08]    border-blue-300/25   hover:bg-blue-300/[0.16]   hover:border-blue-300/50',
  'SELinux':          'text-slate-400  bg-slate-400/[0.08]   border-slate-400/25  hover:bg-slate-400/[0.16]  hover:border-slate-400/50',
  /* Dev Frameworks */
  'Angular':          'text-rose-500   bg-rose-500/[0.08]    border-rose-500/25   hover:bg-rose-500/[0.16]   hover:border-rose-500/50',
  'Symfony':          'text-slate-300  bg-slate-300/[0.08]   border-slate-300/25  hover:bg-slate-300/[0.16]  hover:border-slate-300/50',
}
const TAG_DEFAULT = 'text-slate-400 bg-slate-400/[0.08] border-slate-400/25 hover:bg-slate-400/[0.16] hover:border-slate-400/50'

const APRIL_ITEMS    = ['i1','i2','i3','i4','i5','i6','i7','i8','i9']
const APRIL_TAGS     = ['Gravitee APIM/AM','Ansible','Podman','Terraform','Azure','Jenkins','Redis','ELK Stack','Grafana','SELinux']
const SIFAST_GENERAL = ['g1','g2','g3','g4']
const SIFAST_TAGS    = ['Kubernetes','Docker','HELM','Jenkins','ArgoCD','Ansible','Prometheus','Grafana','SonarQube','GitLab CI/CD','Angular','Symfony']
const SIFAST_PROJECTS = [
  { key: 'proj1', items: ['p1i1','p1i2','p1i3'] },
  { key: 'proj2', items: ['p2i1','p2i2','p2i3'] },
  { key: 'proj3', items: ['p3i1','p3i2','p3i3'] },
  { key: 'proj4', items: ['p4i1','p4i2'] },
  { key: 'proj5', items: ['p5i1','p5i2'] },
]

/* Per-company accent tokens — all class names are static for Tailwind JIT */
const ACCENT = {
  green: {
    bar:     'from-green-400 via-lime-400 to-green-400',
    glow:    'from-green-400/[0.06] via-transparent to-transparent',
    role:    'text-green-400',
    dot:     'bg-green-400',
    dotGlow: 'shadow-[0_0_0_4px_rgba(99,158,48,0.2),0_0_14px_rgba(99,158,48,0.35)]',
    bullet:  'text-green-400',
    logoBg:  'bg-green-500/10 border-green-400/25 text-green-400',
    card:    'hover:border-green-400/25 hover:shadow-[0_12px_48px_rgba(99,158,48,0.09)]',
  },
  blue: {
    bar:     'from-blue-400 via-indigo-400 to-violet-400',
    glow:    'from-blue-400/[0.06] via-transparent to-transparent',
    role:    'text-blue-400',
    dot:     'bg-blue-400',
    dotGlow: 'shadow-[0_0_0_4px_rgba(96,165,250,0.2),0_0_14px_rgba(96,165,250,0.35)]',
    bullet:  'text-blue-400',
    logoBg:  'bg-blue-500/10 border-blue-500/25 text-blue-400',
    card:    'hover:border-blue-400/25 hover:shadow-[0_12px_48px_rgba(96,165,250,0.1)]',
  },
}

const COMPANIES = [
  {
    id:       'april',
    company:  'APRIL',
    date:     '10/2023 – 12/2024',
    location: 'Lyon, France',
    logo:     './assets/logos/april.svg',
    fallback: 'APR',
    accent:   'green',
    roleKey:  'exp.role_devops',
    itemKeys: APRIL_ITEMS,
    prefix:   'exp.april',
    tags:     APRIL_TAGS,
  },
  {
    id:       'sifast',
    company:  'SiFAST',
    date:     '02/2019 – 09/2023',
    location: 'Sfax, Tunisie',
    logo:     './assets/logos/sifast.jpg',
    fallback: 'SF',
    accent:   'blue',
    roleKey:  'exp.role_devops',
    itemKeys: SIFAST_GENERAL,
    prefix:   'exp.sifast',
    tags:     SIFAST_TAGS,
  },
]

function CompanyLogo({ src, fallback, logoBg }) {
  const [failed, setFailed] = useState(false)
  if (src && !failed) {
    return (
      <img
        src={src} alt={fallback} loading="lazy" decoding="async"
        onError={() => setFailed(true)}
        className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-contain p-1 md:p-1.5 bg-white flex-shrink-0"
      />
    )
  }
  return (
    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 border ${logoBg}`}>
      <span className="font-bold text-xs md:text-sm font-mono">{fallback}</span>
    </div>
  )
}

function BulletList({ items, bulletColor }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-[13px] md:text-sm text-slate-400 leading-relaxed">
          <span className={`text-[10px] mt-[4px] flex-shrink-0 ${bulletColor}`}>▸</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function Tags({ tags }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map(tag => {
        const TIcon = TECH_ICONS[tag]
        const colorCls = TAG_COLORS[tag] ?? TAG_DEFAULT
        return (
          <span
            key={tag}
            className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono border rounded-full cursor-default transition-all duration-200 ${colorCls}`}
          >
            {TIcon && <TIcon size={11} />}
            {tag}
          </span>
        )
      })}
    </div>
  )
}

export default function Experience() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <section id="experience" className="py-16 md:py-24 bg-base">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-16">
          <span className="font-mono text-[13px] text-blue-400/70 tracking-wide block mb-2">{t('exp.tag')}</span>
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-tight">{t('exp.title')}</h2>
        </Reveal>

        <div className="relative max-w-[880px] mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 timeline-gradient opacity-30 rounded-full" />

          <div className="flex flex-col gap-10">
            {COMPANIES.map(({ id, company, date, location, logo, fallback, accent, roleKey, itemKeys, prefix, tags }, i) => {
              const ac = ACCENT[accent]
              const role = t(roleKey)
              const items = itemKeys.map(k => t(`${prefix}.${k}`))

              return (
                <Reveal key={id} from={i % 2 === 0 ? 'left' : 'right'} delay={i * 120} className="relative pl-[46px] md:pl-[58px]">
                  {/* Timeline dot */}
                  <div className={`absolute left-[11px] top-5 w-[18px] h-[18px] rounded-full border-[3px] border-base z-10 ${ac.dot} ${ac.dotGlow}`} />

                  {/* Card */}
                  <div className={`shimmer-card bg-card border border-white/[0.07] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${ac.card}`}>

                    {/* Colored accent bar */}
                    <div className={`h-[3px] bg-gradient-to-r ${ac.bar}`} />

                    {/* Header */}
                    <div className="relative px-4 md:px-6 pt-4 md:pt-5 pb-3 md:pb-4 border-b border-white/[0.07]">
                      <div className={`absolute inset-0 bg-gradient-to-br ${ac.glow} pointer-events-none`} />

                      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4">
                        {/* Logo + name + role */}
                        <div className="flex items-center gap-3">
                          <CompanyLogo src={logo} fallback={fallback} logoBg={ac.logoBg} />
                          <div>
                            <h3 className="text-[16px] md:text-[18px] font-bold tracking-tight leading-tight">{company}</h3>
                            <span className={`text-xs md:text-sm font-medium ${ac.role}`}>{role}</span>
                          </div>
                        </div>

                        {/* Date + location
                            Mobile : single row, full width, below logo row
                            Desktop: two rows, right-aligned                  */}
                        <div className="flex items-center gap-2 sm:flex-col sm:items-end sm:gap-1">
                          <span className="flex items-center gap-1 font-mono text-[11px] text-slate-400 whitespace-nowrap">
                            <Calendar size={10} />{date}
                          </span>
                          <span className="text-slate-700 text-[10px] sm:hidden">·</span>
                          <span className="flex items-center gap-1 text-[11px] text-slate-500 whitespace-nowrap">
                            <MapPin size={10} />{location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="px-4 md:px-6 py-4 md:py-5 space-y-4">
                      <BulletList items={items} bulletColor={ac.bullet} />

                      {/* SiFAST projects accordion */}
                      {id === 'sifast' && (
                        <>
                          <button
                            type="button"
                            onClick={() => setOpen(o => !o)}
                            className="relative z-10 w-full flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 border border-white/[0.07] rounded-lg text-[13px] md:text-sm font-mono text-blue-400 hover:bg-blue-400/[0.06] hover:border-blue-400/30 transition-all duration-300"
                          >
                            <span className="flex items-center gap-2">
                              <FolderOpen size={14} />
                              {open ? t('exp.sifast.showLess') : t('exp.sifast.showMore')}
                            </span>
                            <ChevronDown size={14} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                          </button>

                          <div style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows 400ms ease' }}>
                            <div style={{ overflow: 'hidden' }}>
                              <div className="flex flex-col gap-4 pt-1">
                                {SIFAST_PROJECTS.map(({ key, items: pItems }) => (
                                  <div key={key} className="border-b border-white/[0.07] pb-4 last:border-0 last:pb-0">
                                    <h4 className="font-mono text-xs font-semibold text-violet-400 mb-3 flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                                      {t(`exp.sifast.${key}`)}
                                    </h4>
                                    <BulletList items={pItems.map(k => t(`exp.sifast.${k}`))} bulletColor="text-violet-400" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Tags */}
                      <Tags tags={tags} />
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
