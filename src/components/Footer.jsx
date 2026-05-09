import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-base border-t border-white/[0.07] py-7 text-center">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="font-mono text-[18px] font-semibold mb-2">
          <span className="text-blue-400">&lt;</span>MA<span className="text-blue-400">/&gt;</span>
        </div>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Mohamed AYADI · {t('footer.role')}
        </p>
      </div>
    </footer>
  )
}
