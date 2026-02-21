'use client'

import { useState, FormEvent } from 'react'
import { useAnimateIn } from '@/hooks/useAnimateIn'

// Replace YOUR_FORM_ID with your actual Formspree form ID after setup at formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const section = useAnimateIn()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="py-20 px-5 bg-surface overflow-hidden">
      <div ref={section.ref} className="max-w-content mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`animate-fade-left ${section.visible ? 'visible' : ''}`}>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Kontakt
            </span>
            <h2 className="text-3xl font-bold text-ink mt-2 mb-4">
              Redo att komma igång?
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Fyll i formuläret så hör jag av mig inom 24 timmar.
              Första mötet är alltid gratis — vi tittar på vad ni behöver
              och jag berättar vad det skulle kosta.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="tel:0764240116"
                className="flex items-center gap-3 text-ink hover:text-brand-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0 group-hover:bg-brand-200 transition-colors">
                  <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">Ring direkt</p>
                  <p className="font-semibold">0764-24 01 16</p>
                </div>
              </a>

              <a
                href="mailto:richard.wo77@gmail.com"
                className="flex items-center gap-3 text-ink hover:text-brand-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0 group-hover:bg-brand-200 transition-colors">
                  <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">E-post</p>
                  <p className="font-semibold">richard.wo77@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-ink">
                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">Adress</p>
                  <p className="font-semibold">Klangens väg 16, Växjö</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`animate-fade-right delay-2 ${section.visible ? 'visible' : ''} bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow duration-300`}>
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-ink text-lg mb-2">Tack för ditt meddelande!</h3>
                <p className="text-muted text-sm">Jag återkommer inom 24 timmar.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="name">
                      Namn *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ert namn"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-ink placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="company">
                      Företag
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Företagsnamn"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-ink placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="email">
                    E-post *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="er@epost.se"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-ink placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="service">
                    Vad är ni intresserade av?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition bg-white"
                  >
                    <option value="">Välj tjänst...</option>
                    <option value="Företagshemsida">Företagshemsida</option>
                    <option value="Webbutik">Webbutik / E-handel</option>
                    <option value="Bokningssystem">Bokningssystem</option>
                    <option value="Offertformulär">Offertformulär</option>
                    <option value="Övrigt">Övrigt / Vet ej</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="message">
                    Berätta lite mer *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Beskriv ert företag och vad ni letar efter..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-ink placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600 bg-red-50 px-4 py-2.5 rounded-lg">
                    Något gick fel. Försök igen eller ring direkt på 0764-24 01 16.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-200 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-brand-200"
                >
                  {status === 'loading' ? 'Skickar...' : 'Skicka meddelande'}
                </button>

                <p className="text-xs text-muted text-center">
                  Jag svarar inom 24 timmar. Inget spam, lovar.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
