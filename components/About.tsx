'use client'

import { useAnimateIn } from '@/hooks/useAnimateIn'

export default function About() {
  const section = useAnimateIn()

  return (
    <section id="om-mig" className="py-20 px-5 bg-white overflow-hidden">
      <div ref={section.ref} className="max-w-content mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div
            className={`animate-scale-in ${section.visible ? 'visible' : ''} shrink-0 w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-brand-100 flex items-center justify-center text-5xl select-none`}
          >
            👨‍💻
          </div>

          <div className="max-w-xl">
            <span
              className={`animate-fade-right delay-1 ${section.visible ? 'visible' : ''} text-xs font-semibold uppercase tracking-widest text-brand-600 inline-block`}
            >
              About me
            </span>
            <h2
              className={`animate-fade-right delay-2 ${section.visible ? 'visible' : ''} text-3xl font-bold text-ink mt-2 mb-4`}
            >
              Hi, I&apos;m Richard.
            </h2>
            <p
              className={`animate-fade-right delay-3 ${section.visible ? 'visible' : ''} text-muted leading-relaxed mb-4`}
            >
              I&apos;m a freelance web developer based in Sweden. I work
              directly with small business owners — no account managers, no
              middle layers — just you and me building something that actually
              works for your business.
            </p>
            <p
              className={`animate-fade-right delay-4 ${section.visible ? 'visible' : ''} text-muted leading-relaxed mb-4`}
            >
              I&apos;ve built web applications used by thousands of people and now
              I apply that same craft at scale: helping restaurants,
              salons, barbershops, and contractors across Sweden get online properly.
            </p>
            <p
              className={`animate-fade-right delay-5 ${section.visible ? 'visible' : ''} text-muted leading-relaxed mb-8`}
            >
              I understand that most small business owners don&apos;t want to think
              about websites — they want to focus on their work. That&apos;s why I
              handle everything from design to deployment and am always just a
              phone call away after launch.
            </p>

            <div
              className={`animate-fade-right delay-6 ${section.visible ? 'visible' : ''} flex flex-wrap gap-5`}
            >
              <a
                href="tel:0764240116"
                className="flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors"
              >
                <PhoneIcon />
                0764-24 01 16
              </a>
              <a
                href="mailto:richard.wo77@gmail.com"
                className="flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors"
              >
                <MailIcon />
                richard.wo77@gmail.com
              </a>
              <span className="flex items-center gap-2 text-sm text-muted">
                <LocationIcon />
                Baserad i Växjö · Jobbar i hela Sverige
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
