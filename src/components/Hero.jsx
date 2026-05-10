import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Download, MessageSquare } from 'lucide-react'

import { useLang } from '../context/LangContext'
import { AVAILABLE } from '../config'

const PARTICLES = [
  { w: 3, h: 3, top: '18%', left: '12%',  bg: 'bg-blue-400/40',   anim: 'animate-float',      delay: '0s'    },
  { w: 2, h: 2, top: '65%', left: '7%',   bg: 'bg-violet-400/30', anim: 'animate-float-slow', delay: '1s'    },
  { w: 4, h: 4, top: '30%', left: '88%',  bg: 'bg-blue-400/25',   anim: 'animate-float-med',  delay: '0.5s'  },
  { w: 2, h: 2, top: '75%', left: '82%',  bg: 'bg-violet-400/40', anim: 'animate-float',      delay: '2s'    },
  { w: 3, h: 3, top: '50%', left: '95%',  bg: 'bg-emerald-400/25',anim: 'animate-float-slow', delay: '1.5s'  },
  { w: 2, h: 2, top: '10%', left: '55%',  bg: 'bg-blue-400/20',   anim: 'animate-float-med',  delay: '0.8s'  },
  { w: 3, h: 3, top: '85%', left: '40%',  bg: 'bg-violet-400/20', anim: 'animate-float',      delay: '2.5s'  },
  { w: 2, h: 2, top: '40%', left: '3%',   bg: 'bg-blue-400/30',   anim: 'animate-float-slow', delay: '0.3s'  },
]

function CountUp({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || animated.current) return
      animated.current = true
      const start = performance.now()
      const duration = 1400
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setVal(Math.floor(eased * to))
        if (progress < 1) requestAnimationFrame(tick)
        else setVal(to)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [to])

  return <span ref={ref}>{val}{suffix}</span>
}

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-base pt-24 pb-16 px-6">
      {/* Grid background */}
      <div className="hero-grid" />

      {/* Glow blobs */}
      <div className="absolute top-[15%] right-[8%] w-[420px] h-[420px] bg-blue-400/[0.07] rounded-full blur-[80px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[280px] h-[280px] bg-violet-400/[0.05] rounded-full blur-[80px] animate-float-slow pointer-events-none" />
      <div className="absolute top-[55%] right-[30%] w-[180px] h-[180px] bg-emerald-400/[0.04] rounded-full blur-[60px] animate-float-med pointer-events-none" />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`particle ${p.bg} ${p.anim}`}
          style={{
            width: p.w * 4,
            height: p.h * 4,
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
          }}
        />
      ))}

      <div className="relative z-10 max-w-[800px] mx-auto text-center w-full">

        {/* Badge — driven by AVAILABLE in src/config.js */}
        {AVAILABLE
          ? (
            <div className="inline-flex items-center gap-2 bg-emerald-400/[0.08] border border-emerald-400/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-dot" />
              {t('hero.available')}
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 bg-red-400/[0.08] border border-red-400/20 text-red-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse-dot" />
              {t('hero.unavailable')}
            </div>
          )
        }

        <p className="text-lg text-slate-400 mb-2">{t('hero.greeting')}</p>

        <h1 className="text-[clamp(44px,8vw,78px)] font-extrabold tracking-tight leading-[1.1] mb-4 text-slate-100">
          Mohamed <span className="gradient-text">AYADI</span>
        </h1>

        <div className="flex items-center justify-center gap-1 font-mono text-[clamp(18px,3vw,26px)] text-slate-400 mb-5">
          <span className="text-blue-400">&gt;&nbsp;</span>
          <span>{t('hero.title')}</span>
          <span className="text-blue-400 animate-blink ml-0.5">|</span>
        </div>

        <p className="font-mono text-sm text-slate-600 mb-10 tracking-wide">
          {t('hero.subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mb-10 sm:mb-14 max-w-sm sm:max-w-none mx-auto">
          <a
            href="#experience"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-400 text-base rounded-lg font-medium text-sm hover:bg-blue-300 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_8px_24px_rgba(96,165,250,0.25)] hover:shadow-[0_8px_32px_rgba(96,165,250,0.45)]"
          >
            {t('hero.cta1')}
            <ArrowRight size={15} />
          </a>
          <a
            href="./CV_Mohamed_AYADI_VF.pdf"
            download
            className="flex items-center justify-center gap-2 px-6 py-3 border border-white/[0.13] text-slate-100 rounded-lg font-medium text-sm hover:border-blue-400 hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Download size={15} />
            {t('hero.cta2')}
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/[0.05] border border-white/[0.07] text-slate-400 rounded-lg font-medium text-sm hover:bg-white/[0.09] hover:text-slate-100 hover:-translate-y-0.5 transition-all duration-300"
          >
            <MessageSquare size={14} />
            {t('hero.cta3')}
          </a>
        </div>

        {/* Stats with count-up */}
        <div className="grid grid-cols-3 gap-4 sm:flex sm:justify-center sm:items-center sm:gap-7">
          <div className="text-center">
            <span className="block font-mono text-[28px] sm:text-[34px] font-bold text-blue-400 leading-[1.1]">
              <CountUp to={5} suffix="+" />
            </span>
            <span className="text-xs text-slate-400">{t('hero.stat1')}</span>
          </div>
          <div className="hidden sm:block w-px h-9 bg-white/[0.13]" />
          <div className="text-center">
            <span className="block font-mono text-[28px] sm:text-[34px] font-bold text-blue-400 leading-[1.1]">
              <CountUp to={3} />
            </span>
            <span className="text-xs text-slate-400">{t('hero.stat2')}</span>
          </div>
          <div className="hidden sm:block w-px h-9 bg-white/[0.13]" />
          <div className="text-center">
            <span className="block font-mono text-[28px] sm:text-[34px] font-bold text-blue-400 leading-[1.1]">
              <CountUp to={15} suffix="+" />
            </span>
            <span className="text-xs text-slate-400">{t('hero.stat3')}</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
        <div className="w-[22px] h-[38px] border-2 border-white/[0.13] rounded-[11px] flex justify-center pt-[5px]">
          <div className="w-[3px] h-[7px] bg-blue-400 rounded-sm animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}
