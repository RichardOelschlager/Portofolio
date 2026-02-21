'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Tjänster', href: '#tjanster' },
  { label: 'Om mig',  href: '#om-mig'   },
  { label: 'Kontakt', href: '#kontakt'  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`nav-entrance fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-content mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg text-brand-700 tracking-tight hover:text-brand-500 transition-colors">
          Richard Oelschlager
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted hover:text-brand-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-500 after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="text-sm font-semibold bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-200 hover:-translate-y-0.5 transition-all duration-200"
          >
            Gratis konsultation
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: open ? 'rotate(90deg)' : 'rotate(0)' }}>
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      <nav
        className={`md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-5 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-ink hover:text-brand-600 transition-all duration-200 hover:translate-x-1"
              style={{ transitionDelay: open ? `${i * 50}ms` : '0ms' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="text-center font-semibold bg-brand-500 text-white px-4 py-3 rounded-lg hover:bg-brand-600 transition-colors"
            style={{ transitionDelay: open ? `${links.length * 50}ms` : '0ms' }}
          >
            Gratis konsultation
          </a>
        </div>
      </nav>
    </header>
  )
}
