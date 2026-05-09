import { Layers, GitBranch, Cloud, BarChart2, Terminal, Plug } from 'lucide-react'
import { useLang } from '../context/LangContext'
import Reveal from './Reveal'

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
    tags: ['Gravitee APIM', 'Gravitee AM', 'Redis', 'SonarQube'],
  },
]

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="py-24 bg-base-alt">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-16">
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
                  {tags.map((tag, j) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-medium font-mono border transition-all duration-200 cursor-default ${tagCls}`}
                      style={{
                        animationDelay: `${i * 70 + j * 60}ms`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
