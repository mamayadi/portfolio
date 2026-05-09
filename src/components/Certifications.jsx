import { ExternalLink, Shield } from 'lucide-react'
import { useLang } from '../context/LangContext'
import Reveal from './Reveal'

function AzureLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M13.05 4.24L6.56 18.05H2L7.09 9.24L13.05 4.24ZM13.74 5.33L22 18.05H9.83L17.29 16.56L12.33 10.62L13.74 5.33Z"/>
    </svg>
  )
}

function TerraformLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M1.9 1.9v6.5l5.65 3.26V5.16L1.9 1.9zm7.1 4.1v9.8l5.65 3.26V9.26L9 6zm7.1 3.26v6.52l5.65-3.26V7.9l-5.65 3.26z"/>
    </svg>
  )
}

const CERTS = [
  {
    nameKey:  'cert.azure',
    issuer:   'Microsoft',
    code:     'AZ-104',
    logo:     AzureLogo,
    accent:   'blue',
    iconBg:   'bg-blue-500/15 border-blue-500/30 text-blue-400',
    glow:     'hover:shadow-[0_0_40px_rgba(96,165,250,0.18)]',
    badge:    'bg-blue-500/10 border-blue-500/20 text-blue-400',
    href:     'https://learn.microsoft.com/en-us/users/mohamedayadi-5198/credentials/ebbc93d595550b34',
  },
  {
    nameKey:  'cert.terraform',
    issuer:   'HashiCorp',
    code:     '003',
    logo:     TerraformLogo,
    accent:   'violet',
    iconBg:   'bg-violet-500/15 border-violet-500/30 text-violet-400',
    glow:     'hover:shadow-[0_0_40px_rgba(167,139,250,0.18)]',
    badge:    'bg-violet-500/10 border-violet-500/20 text-violet-400',
    href:     'https://www.credly.com/badges/e72c08db-6938-48d5-9fe3-0b74c66c4eb5',
  },
  {
    nameKey:  'cert.devsecops',
    issuer:   'Practical DevSecOps',
    code:     'CDP',
    logo:     () => <Shield size={30} />,
    accent:   'emerald',
    iconBg:   'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
    glow:     'hover:shadow-[0_0_40px_rgba(52,211,153,0.18)]',
    badge:    'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    href:     'https://www.credly.com/badges/57211fc1-84d5-436a-be56-f3eecf4e1a10',
  },
]

export default function Certifications() {
  const { t } = useLang()

  return (
    <section id="certifications" className="py-24 bg-base">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="font-mono text-[13px] text-blue-400/70 tracking-wide block mb-2">{t('cert.tag')}</span>
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold tracking-tight">{t('cert.title')}</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto">
          {CERTS.map(({ nameKey, issuer, code, logo: Logo, iconBg, glow, badge, href }, i) => (
            <Reveal key={nameKey} delay={i * 80}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col p-6 bg-card border border-white/[0.07] rounded-2xl hover:border-white/[0.15] hover:-translate-y-1.5 transition-all duration-300 ${glow}`}
              >
                {/* Top row: icon + external link */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-[54px] h-[54px] rounded-xl border flex items-center justify-center flex-shrink-0 ${iconBg}`}>
                    <Logo />
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-slate-600 group-hover:text-slate-400 transition-colors mt-1"
                  />
                </div>

                {/* Issuer */}
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1.5">
                  {issuer}
                </span>

                {/* Cert name */}
                <h3 className="text-[15px] font-semibold leading-snug mb-4 flex-1">
                  {t(nameKey)}
                </h3>

                {/* Code badge */}
                <div>
                  <span className={`inline-flex items-center px-2.5 py-1 text-[11px] font-mono border rounded-md ${badge}`}>
                    {code}
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
