import { BarChart2, Cloud, GitBranch, Layers, Plug, Terminal } from 'lucide-react'
import {
  SiAnsible,
  SiArgo,
  SiDocker,
  SiElastic,
  SiElasticsearch,
  SiGit,
  SiGitlab,
  SiGnubash,
  SiGrafana,
  SiHelm,
  SiJavascript,
  SiJenkins,
  SiKibana,
  SiKubernetes,
  SiLogstash,
  SiNodedotjs,
  SiPodman,
  SiPrometheus,
  SiPython,
  SiRedis,
  SiSonarqubeserver,
  SiTerraform,
} from 'react-icons/si'

import Reveal from './Reveal'
import { useLang } from '../context/LangContext'

// Custom SVG icons for tools not covered by react-icons/si
const AzureIcon = ({ size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.05 4.24L6.56 18.05H2L7.09 9.24L13.05 4.24ZM13.74 5.33L22 18.05H9.83L17.29 16.56L12.33 10.62L13.74 5.33Z"/>
  </svg>
)

const LokiIcon = ({ size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h12v2H3v-2z"/>
  </svg>
)

const GraviteeIcon = ({ size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M14 12h-2v2h2v1.5c-.5.3-1.2.5-2 .5-2.2 0-4-1.8-4-4s1.8-4 4-4c1.1 0 2 .4 2.8 1l1.4-1.5A5.9 5.9 0 0 0 12 6a6 6 0 0 0 0 12c1.8 0 3.4-.8 4.5-2V12H14z"/>
  </svg>
)

const TECH_ICONS = {
  'Kubernetes':         SiKubernetes,
  'Docker':             SiDocker,
  'Podman':             SiPodman,
  'HELM':               SiHelm,
  'Jenkins':            SiJenkins,
  'GitLab CI/CD':       SiGitlab,
  'ArgoCD':             SiArgo,
  'Ansible':            SiAnsible,
  'Azure':              AzureIcon,
  'Terraform':          SiTerraform,
  'Grafana':            SiGrafana,
  'Prometheus':         SiPrometheus,
  'Kibana':             SiKibana,
  'Elasticsearch':      SiElasticsearch,
  'Filebeat':           SiElastic,
  'Logstash':           SiLogstash,
  'Loki':               LokiIcon,
  'Bash / Shell':       SiGnubash,
  'Python':             SiPython,
  'JavaScript':         SiJavascript,
  'Node.js':            SiNodedotjs,
  'Git':                SiGit,
  'Gravitee (APIM/AM)': GraviteeIcon,
  'Redis':              SiRedis,
  'SonarQube':          SiSonarqubeserver,
}

const CATEGORIES = [
  {
    icon: Layers, i18n: 'skills.cat1',
    iconCls: 'text-blue-400 bg-blue-400/10',
    tagCls:  'text-blue-400 bg-blue-400/[0.08] border-blue-400/20 hover:bg-blue-400/20 hover:border-blue-400/40',
    glow:    'hover:shadow-[0_4px_32px_rgba(96,165,250,0.15)]',
    tags: ['Kubernetes', 'Docker', 'Podman', 'HELM'],
  },
  {
    icon: GitBranch, i18n: 'skills.cat2',
    iconCls: 'text-violet-400 bg-violet-400/10',
    tagCls:  'text-violet-400 bg-violet-400/[0.08] border-violet-400/20 hover:bg-violet-400/20 hover:border-violet-400/40',
    glow:    'hover:shadow-[0_4px_32px_rgba(167,139,250,0.15)]',
    tags: ['Jenkins', 'GitLab CI/CD', 'ArgoCD', 'Ansible'],
  },
  {
    icon: Cloud, i18n: 'skills.cat3',
    iconCls: 'text-emerald-400 bg-emerald-400/10',
    tagCls:  'text-emerald-400 bg-emerald-400/[0.08] border-emerald-400/20 hover:bg-emerald-400/20 hover:border-emerald-400/40',
    glow:    'hover:shadow-[0_4px_32px_rgba(52,211,153,0.15)]',
    tags: ['Azure', 'Terraform'],
  },
  {
    icon: BarChart2, i18n: 'skills.cat4',
    iconCls: 'text-teal-400 bg-teal-400/10',
    tagCls:  'text-teal-400 bg-teal-400/[0.08] border-teal-400/20 hover:bg-teal-400/20 hover:border-teal-400/40',
    glow:    'hover:shadow-[0_4px_32px_rgba(45,212,191,0.15)]',
    tags: ['Grafana', 'Prometheus', 'Kibana', 'Elasticsearch', 'Filebeat', 'Logstash', 'Loki'],
  },
  {
    icon: Terminal, i18n: 'skills.cat5',
    iconCls: 'text-orange-400 bg-orange-400/10',
    tagCls:  'text-orange-400 bg-orange-400/[0.08] border-orange-400/20 hover:bg-orange-400/20 hover:border-orange-400/40',
    glow:    'hover:shadow-[0_4px_32px_rgba(251,146,60,0.15)]',
    tags: ['Bash / Shell', 'Python', 'JavaScript', 'Node.js', 'Git'],
  },
  {
    icon: Plug, i18n: 'skills.cat6',
    iconCls: 'text-pink-400 bg-pink-400/10',
    tagCls:  'text-pink-400 bg-pink-400/[0.08] border-pink-400/20 hover:bg-pink-400/20 hover:border-pink-400/40',
    glow:    'hover:shadow-[0_4px_32px_rgba(244,114,182,0.15)]',
    tags: ['Gravitee (APIM/AM)', 'Redis', 'SonarQube'],
  },
]

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="py-16 md:py-24 bg-base-alt">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-16">
          <span className="font-mono text-[13px] text-blue-400/70 tracking-wide block mb-2">{t('skills.tag')}</span>
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-tight">{t('skills.title')}</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map(({ icon: Icon, i18n, iconCls, tagCls, glow, tags }, i) => (
            <Reveal key={i18n} delay={i * 70} from="scale">
              <div className={`shimmer-card bg-card border border-white/[0.07] rounded-xl p-6 h-full hover:border-white/[0.15] hover:-translate-y-1.5 transition-all duration-300 ${glow}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${iconCls}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-semibold">{t(i18n)}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => {
                    const TIcon = TECH_ICONS[tag]
                    return (
                      <span
                        key={tag}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium font-mono border transition-all duration-200 cursor-default ${tagCls}`}
                      >
                        {TIcon && <TIcon size={11} />}
                        {tag}
                      </span>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
