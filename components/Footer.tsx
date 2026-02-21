'use client'

import { useAnimateIn } from '@/hooks/useAnimateIn'

export default function Footer() {
  const year = new Date().getFullYear()
  const section = useAnimateIn(0.3)

  return (
    <footer className="bg-ink text-white py-10 px-5 overflow-hidden">
      <div
        ref={section.ref}
        className={`animate-fade-up ${section.visible ? 'visible' : ''} max-w-content mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm`}
      >
        <div>
          <p className="font-semibold text-white">Richard Oelschlager</p>
          <p className="text-slate-400 mt-0.5">Webbutvecklare · Baserad i Växjö · Jobbar i hela Sverige</p>
        </div>

        <div className="flex flex-wrap gap-6 text-slate-400">
          <a href="tel:0764240116" className="hover:text-white transition-colors duration-200">
            0764-24 01 16
          </a>
          <a href="mailto:richard.wo77@gmail.com" className="hover:text-white transition-colors duration-200">
            richard.wo77@gmail.com
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Tillbaka upp ↑
          </a>
        </div>

        <p className="text-slate-500 text-xs">
          © {year} Richard Oelschlager
        </p>
      </div>
    </footer>
  )
}
