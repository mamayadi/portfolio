import { ChevronDown, MapPin, Calendar, Clock, FolderOpen } from 'lucide-react'
import {
  SiKubernetes, SiDocker, SiHelm, SiPodman,
  SiJenkins, SiGitlab, SiAnsible, SiArgo,
  SiTerraform,
  SiGrafana, SiPrometheus, SiElasticsearch, SiElasticstack,
  SiRedis, SiSonarqubeserver,
  SiAngular, SiSymfony,
} from 'react-icons/si'

import Reveal from './Reveal'
import { useLang } from '../context/LangContext'
import { useState } from 'react'

// Custom SVG icons (shared with Skills.jsx)
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
}

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
        className="w-12 h-12 rounded-xl object-contain p-1.5 bg-white flex-shrink-0"
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
      {tags.map(tag => {
        const TIcon = TECH_ICONS[tag]
        return (
          <span
            key={tag}
            className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono bg-white/[0.04] border border-white/[0.07] text-slate-500 rounded hover:text-blue-400 hover:border-blue-400/25 hover:bg-blue-400/[0.04] transition-all duration-300"
          >
            {TIcon && <TIcon size={11} />}
            {tag}
          </span>
        )
      })}
    </div>
  )
}

function DurationBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-slate-500 bg-white/[0.04] border border-white/[0.07] px-2 py-0.5 rounded">
      <Clock size={9} />
      {label}
    </span>
  )
}

function CardHeader({ logo, company, role, date, duration, location }) {
  return (
    <div className="flex flex-wrap justify-between gap-x-4 gap-y-3 px-6 pt-6 pb-4 border-b border-white/[0.07]">
      {/* Left: logo + company + role */}
      <div className="flex items-center gap-4">
        {logo}
        <div>
          <h3 className="text-xl font-bold mb-0.5">{company}</h3>
          <span className="text-sm text-blue-400 font-medium">{role}</span>
        </div>
      </div>
      {/* Right: date + duration + location — left on mobile, right on desktop */}
      <div className="flex flex-col items-start sm:items-end gap-1.5 justify-center">
        <span className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
          <Calendar size={11} />
          {date}
        </span>
        <DurationBadge label={duration} />
        <span className="flex items-center gap-1.5 text-xs text-slate-600">
          <MapPin size={11} />
          {location}
        </span>
      </div>
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
    <section id="experience" className="py-16 md:py-24 bg-base">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-16">
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
              <CardHeader
                logo={
                  <CompanyLogo
                    src="./assets/logos/april.svg"
                    fallbackText="APR"
                    bg="bg-orange-500/10 border-orange-500/25"
                    textColor="text-orange-400"
                  />
                }
                company="APRIL"
                role={t('exp.role_devops')}
                date="10/2023 – 12/2024"
                duration="1 yr 2 mos"
                location="Lyon, France"
              />
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
              <CardHeader
                logo={
                  <CompanyLogo
                    src="./assets/logos/sifast.jpg"
                    fallbackText="SF"
                    bg="bg-blue-500/10 border-blue-500/25"
                    textColor="text-blue-400"
                  />
                }
                company="SiFAST"
                role={t('exp.role_devops')}
                date="02/2019 – 09/2023"
                duration="4 yrs 7 mos"
                location="Sfax, Tunisie"
              />
              <div className="px-6 py-5">
                <BulletList items={SIFAST_GENERAL.map(k => t(`exp.sifast.${k}`))} />

                {/* Accordion trigger */}
                <button
                  type="button"
                  onClick={() => setOpen(o => !o)}
                  className="relative z-10 w-full flex items-center justify-between px-4 py-2.5 border border-white/[0.07] rounded-lg text-sm font-mono text-blue-400 hover:bg-blue-400/[0.06] hover:border-blue-400/30 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <FolderOpen size={14} />
                    {open ? t('exp.sifast.showLess') : t('exp.sifast.showMore')}
                  </span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                </button>

                {/* CSS grid accordion — smooth animation without max-height issues */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: open ? '1fr' : '0fr',
                    transition: 'grid-template-rows 400ms ease, margin-top 400ms ease',
                    marginTop: open ? '16px' : '0',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div className="flex flex-col gap-4">
                      {SIFAST_PROJECTS.map(({ key, items }) => (
                        <div key={key} className="border-b border-white/[0.07] pb-4 last:border-0 last:pb-0">
                          <h4 className="font-mono text-xs font-semibold text-violet-400 mb-3">{t(`exp.sifast.${key}`)}</h4>
                          <BulletList items={items.map(k => t(`exp.sifast.${k}`))} />
                        </div>
                      ))}
                    </div>
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
