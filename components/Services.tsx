'use client'

import { useState } from 'react'
import { useAnimateIn } from '@/hooks/useAnimateIn'

/* ─── Service data with example mockups ─── */

interface Service {
  title: string
  description: string
  icon: string
  example: React.ReactNode
}

export default function Services() {
  const header = useAnimateIn()
  const grid = useAnimateIn(0.05)
  const [active, setActive] = useState<number | null>(null)

  const services: Service[] = [
    {
      title: 'Företagshemsida',
      description:
        'En professionell sajt som representerar ert varumärke dygnet runt. Snabb, säker och enkel att uppdatera.',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      example: <BusinessSiteExample />,
    },
    {
      title: 'Webbutik',
      description:
        'Sälj era produkter online — dygnets alla timmar, till kunder i hela Sverige. Enkel produkthantering.',
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
      example: <EcommerceExample />,
    },
    {
      title: 'Bokningssystem',
      description:
        'Egen bokning direkt på er sajt — inga mellanhänder, inga månadsavgifter. Kunden bokar, ni får en bekräftelse.',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      example: <BookingExample />,
    },
    {
      title: 'Offertformulär',
      description:
        'Låt kunderna skicka in förfrågningar direkt på sajten. Perfekt för hantverkare och serviceföretag.',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      example: <QuoteFormExample />,
    },
    {
      title: 'Restaurang & Meny',
      description:
        'Digital meny, bordsbokning och presentationssida som passar er restaurangs stil och känsla.',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      example: <RestaurantExample />,
    },
    {
      title: 'Underhåll & Support',
      description:
        'Jag finns kvar efter lansering. Uppdateringar, säkerhet och ny funktionalitet — ni sköter er verksamhet, jag sköter sajten.',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      example: <SupportExample />,
    },
  ]

  return (
    <section id="tjanster" className="py-20 px-5 bg-white overflow-hidden">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div
          ref={header.ref}
          className={`animate-fade-up ${header.visible ? 'visible' : ''} mb-14 text-center`}
        >
          <h2 className="text-3xl font-bold text-ink mb-3">Vad jag erbjuder</h2>
          <p className="text-muted max-w-lg mx-auto">
            Allt ni behöver för att synas och växa online — för småföretag i hela Sverige.
            <br />
            <span className="text-brand-600 text-sm font-medium">
              Klicka på en tjänst för att se ett exempel.
            </span>
          </p>
        </div>

        {/* Grid */}
        <div ref={grid.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className={`animate-fade-up delay-${i + 1} ${grid.visible ? 'visible' : ''}`}>
              <button
                onClick={() => setActive(active === i ? null : i)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group cursor-pointer ${
                  active === i
                    ? 'border-brand-400 bg-brand-50 shadow-md shadow-brand-100 ring-2 ring-brand-200'
                    : 'border-slate-100 bg-surface hover:border-brand-200 hover:shadow-sm hover:-translate-y-1'
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                  active === i ? 'bg-brand-500' : 'bg-brand-100 group-hover:bg-brand-200'
                }`}>
                  <svg className={`w-5 h-5 transition-colors duration-300 ${active === i ? 'text-white' : 'text-brand-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={s.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.description}</p>

                <div className={`flex items-center gap-1 mt-3 text-xs font-semibold transition-colors duration-200 ${
                  active === i ? 'text-brand-600' : 'text-brand-400 group-hover:text-brand-500'
                }`}>
                  <span>{active === i ? 'Stäng förhandsgranskning' : 'Se exempel'}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Inline example — mobile only, shown directly below each card */}
              <div
                className={`sm:hidden mt-3 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  active === i ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {active === i && (
                  <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-2">
                    <div className="bg-slate-100 rounded-t-2xl px-4 py-3 flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="w-3 h-3 rounded-full bg-yellow-400" />
                        <span className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 bg-white rounded-lg px-3 py-1 text-xs text-muted truncate">
                        https://ert-foretag.se
                      </div>
                    </div>
                    <div className="bg-white rounded-b-2xl overflow-hidden border-t border-slate-100">
                      <div className="animate-float">{s.example}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Expanded example preview — desktop only (sm+) */}
        <div
          className={`hidden sm:block mt-8 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            active !== null ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {active !== null && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-2 sm:p-4">
              {/* Browser chrome */}
              <div className="bg-slate-100 rounded-t-2xl px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-lg px-3 py-1 text-xs text-muted truncate">
                  https://ert-foretag.se
                </div>
              </div>

              {/* Example content */}
              <div className="bg-white rounded-b-2xl overflow-hidden border-t border-slate-100">
                <div className="animate-float">
                  {services[active].example}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Example mockup components (one per service)
   ───────────────────────────────────────────── */

function BusinessSiteExample() {
  return (
    <div className="p-6 sm:p-8 space-y-6">
      {/* Nav */}
      <div className="flex items-center justify-between">
        <div className="font-bold text-brand-700">Blomsterkullen</div>
        <div className="hidden sm:flex gap-4 text-xs text-muted">
          <span>Hem</span><span>Om oss</span><span>Kontakt</span>
        </div>
      </div>
      {/* Hero area */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8">
        <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">Blomsterhandel</span>
        <h3 className="text-xl sm:text-2xl font-bold text-ink mt-3 mb-2">Blommor för alla tillfällen</h3>
        <p className="text-sm text-muted max-w-md mb-4">Handgjorda buketter med kärlek sedan 2015. Beställ online eller besök oss i butiken.</p>
        <div className="flex gap-3">
          <div className="bg-emerald-500 text-white text-xs font-semibold px-4 py-2 rounded-lg">Beställ online</div>
          <div className="border border-emerald-200 text-emerald-700 text-xs font-semibold px-4 py-2 rounded-lg">Hitta till oss</div>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-surface rounded-xl p-3">
          <div className="text-lg font-bold text-ink">500+</div>
          <div className="text-xs text-muted">Nöjda kunder</div>
        </div>
        <div className="bg-surface rounded-xl p-3">
          <div className="text-lg font-bold text-ink">4.9</div>
          <div className="text-xs text-muted">Google-betyg</div>
        </div>
        <div className="bg-surface rounded-xl p-3">
          <div className="text-lg font-bold text-ink">8 år</div>
          <div className="text-xs text-muted">I branschen</div>
        </div>
      </div>
    </div>
  )
}

function EcommerceExample() {
  const products = [
    { name: 'Handgjord ljusstake', price: '349 kr', badge: 'Populär' },
    { name: 'Keramikmugg set', price: '199 kr', badge: null },
    { name: 'Linneförkläde', price: '279 kr', badge: 'Ny' },
  ]

  return (
    <div className="p-6 sm:p-8 space-y-5">
      {/* Nav */}
      <div className="flex items-center justify-between">
        <div className="font-bold text-amber-700">Hantverksboden</div>
        <div className="flex items-center gap-3">
          <div className="text-xs text-muted hidden sm:block">Produkter</div>
          <div className="relative">
            <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
          </div>
        </div>
      </div>
      {/* Product grid */}
      <div className="grid grid-cols-3 gap-3">
        {products.map(p => (
          <div key={p.name} className="group">
            <div className="bg-amber-50 rounded-xl aspect-square flex items-center justify-center relative overflow-hidden">
              <div className="w-10 h-10 bg-amber-200 rounded-lg group-hover:scale-110 transition-transform" />
              {p.badge && (
                <span className="absolute top-2 left-2 text-[10px] font-semibold bg-amber-500 text-white px-1.5 py-0.5 rounded-full">
                  {p.badge}
                </span>
              )}
            </div>
            <p className="text-xs font-medium text-ink mt-2 truncate">{p.name}</p>
            <p className="text-xs text-brand-600 font-semibold">{p.price}</p>
          </div>
        ))}
      </div>
      {/* Cart CTA */}
      <div className="bg-amber-50 rounded-xl p-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted">Kundvagn (2 artiklar)</p>
          <p className="font-bold text-ink">548 kr</p>
        </div>
        <div className="bg-amber-600 text-white text-xs font-semibold px-4 py-2 rounded-lg">
          Till kassan →
        </div>
      </div>
    </div>
  )
}

function BookingExample() {
  const times = ['09:00', '10:30', '11:00', '13:00', '14:30', '16:00']

  return (
    <div className="p-6 sm:p-8 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="font-bold text-purple-700">Karisma Salong</div>
        <span className="text-[10px] font-semibold text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">
          Onlinebokning
        </span>
      </div>
      {/* Calendar */}
      <div className="bg-purple-50 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-semibold text-purple-800">Februari 2026</span>
          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] mb-2 text-purple-400 font-medium">
          {['Mån','Tis','Ons','Tor','Fre','Lör','Sön'].map(d => <span key={d}>{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {Array.from({ length: 28 }, (_, i) => i + 1).map(d => (
            <span
              key={d}
              className={`py-1.5 rounded-lg transition-colors ${
                d === 21
                  ? 'bg-purple-600 text-white font-bold'
                  : d > 21 && d < 27
                  ? 'text-ink hover:bg-purple-100'
                  : 'text-slate-300'
              }`}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
      {/* Time slots */}
      <div>
        <p className="text-xs font-medium text-ink mb-2">Lediga tider — Fre 21 feb</p>
        <div className="flex flex-wrap gap-2">
          {times.map((t, i) => (
            <span
              key={t}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                i === 2
                  ? 'bg-purple-600 text-white'
                  : 'bg-surface text-ink border border-slate-200 hover:border-purple-300'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function QuoteFormExample() {
  return (
    <div className="p-6 sm:p-8 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="font-bold text-orange-700">NB Hantverksservice</div>
        <span className="text-[10px] font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">
          Begär offert
        </span>
      </div>
      {/* Form mockup */}
      <div className="bg-orange-50 rounded-2xl p-5 space-y-3">
        <div>
          <label className="text-[10px] font-medium text-orange-800 block mb-1">Typ av projekt</label>
          <div className="bg-white rounded-lg border border-orange-200 px-3 py-2 text-xs text-ink flex items-center justify-between">
            <span>Badrumsrenovering</span>
            <svg className="w-3 h-3 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-[10px] font-medium text-orange-800 block mb-1">Namn</label>
            <div className="bg-white rounded-lg border border-orange-200 px-3 py-2 text-xs text-slate-400">Erik Svensson</div>
          </div>
          <div>
            <label className="text-[10px] font-medium text-orange-800 block mb-1">Telefon</label>
            <div className="bg-white rounded-lg border border-orange-200 px-3 py-2 text-xs text-slate-400">070-123 45 67</div>
          </div>
        </div>
        <div>
          <label className="text-[10px] font-medium text-orange-800 block mb-1">Beskriv projektet</label>
          <div className="bg-white rounded-lg border border-orange-200 px-3 py-4 text-xs text-slate-400 leading-relaxed">
            Vi vill renovera badrummet i vårt hus från 1975. Ca 6 kvm, behöver ny kakel, golvvärme och dusch...
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <label className="text-[10px] font-medium text-orange-800 block mb-1">Ladda upp bilder</label>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-white border-2 border-dashed border-orange-300 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="w-10 h-10 bg-orange-200 rounded-lg" />
              <div className="w-10 h-10 bg-orange-200 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="bg-orange-600 text-white text-xs font-semibold px-4 py-2.5 rounded-lg text-center">
        Skicka offertförfrågan →
      </div>
    </div>
  )
}

function RestaurantExample() {
  const menuItems = [
    { name: 'Miso Ramen', desc: 'Tonkotsu-buljong, chashu, ajitama', price: '159 kr' },
    { name: 'Yakitori Set', desc: 'Grillspett med teriyakisås', price: '129 kr' },
    { name: 'Matcha Cheesecake', desc: 'Husets dessert, serveras kall', price: '79 kr' },
  ]

  return (
    <div className="p-6 sm:p-8 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="font-bold text-rose-700">Izakaya Moshi</div>
        <div className="flex gap-2">
          <span className="text-[10px] font-semibold text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">Meny</span>
          <span className="text-[10px] font-semibold text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">Boka bord</span>
        </div>
      </div>
      {/* Hero banner */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-5 text-center">
        <p className="text-lg">🍜</p>
        <h3 className="font-bold text-ink mt-1">Japansk matkultur</h3>
        <p className="text-xs text-muted mt-1">Autentiska smaker, lokala ingredienser</p>
      </div>
      {/* Menu items */}
      <div className="space-y-3">
        <p className="text-xs font-semibold text-ink uppercase tracking-wider">Populära rätter</p>
        {menuItems.map(item => (
          <div key={item.name} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
            <div>
              <p className="text-sm font-medium text-ink">{item.name}</p>
              <p className="text-[10px] text-muted">{item.desc}</p>
            </div>
            <span className="text-xs font-semibold text-rose-600 whitespace-nowrap ml-2">{item.price}</span>
          </div>
        ))}
      </div>
      {/* Booking CTA */}
      <div className="bg-rose-600 text-white text-xs font-semibold px-4 py-2.5 rounded-lg text-center">
        Boka bord för ikväll →
      </div>
    </div>
  )
}

function SupportExample() {
  const checks = [
    { label: 'SSL-certifikat', status: 'ok' },
    { label: 'WordPress-uppdatering', status: 'ok' },
    { label: 'Säkerhetskopiering', status: 'ok' },
    { label: 'Sidladdningstid', status: 'warn', detail: '1.2s → mål: <1s' },
  ]

  return (
    <div className="p-6 sm:p-8 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="font-bold text-teal-700">Underhållsdashboard</div>
        <span className="text-[10px] font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          Allt ser bra ut
        </span>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-teal-50 rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-teal-700">99.9%</div>
          <div className="text-[10px] text-muted">Upptid</div>
        </div>
        <div className="bg-teal-50 rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-teal-700">A+</div>
          <div className="text-[10px] text-muted">Säkerhet</div>
        </div>
        <div className="bg-teal-50 rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-teal-700">1.2s</div>
          <div className="text-[10px] text-muted">Laddtid</div>
        </div>
      </div>
      {/* Checklist */}
      <div className="bg-surface rounded-2xl p-4 space-y-2.5">
        <p className="text-xs font-semibold text-ink">Månatlig hälsokontroll</p>
        {checks.map(c => (
          <div key={c.label} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              {c.status === 'ok' ? (
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
                </svg>
              )}
              <span className="text-ink">{c.label}</span>
            </div>
            {c.detail ? (
              <span className="text-amber-600 font-medium">{c.detail}</span>
            ) : (
              <span className="text-green-600 font-medium">OK</span>
            )}
          </div>
        ))}
      </div>
      {/* Cta */}
      <p className="text-[11px] text-muted text-center">
        Rapporten skickas till er varje månad. Inga överraskningar.
      </p>
    </div>
  )
}
