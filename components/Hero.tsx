export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-5 bg-gradient-to-br from-brand-50 via-white to-white overflow-hidden">
      <div className="max-w-content mx-auto">
        <div className="max-w-2xl">
          <span className="hero-anim-1 inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-brand-600 bg-brand-100 px-3 py-1 rounded-full">
            Webbutvecklare · Sverige
          </span>

          <h1 className="hero-anim-2 text-4xl sm:text-5xl font-bold text-ink leading-tight mb-5">
            Din webbyrå —{' '}
            <br className="hidden sm:block" />
            <span className="text-brand-600">utan mellanhanden.</span>
          </h1>

          <p className="hero-anim-3 text-lg text-muted leading-relaxed mb-8 max-w-xl">
            Jag bygger moderna, snabba hemsidor, webbutiker och bokningssystem
            för småföretag i hela Sverige. Inga dyra byråer, inga onödiga avgifter —
            bara resultat som syns.
          </p>

          <div className="hero-anim-4 flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              className="text-center font-semibold bg-brand-500 text-white px-7 py-3.5 rounded-xl hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-200 hover:-translate-y-1 transition-all duration-200 shadow-md shadow-brand-200"
            >
              Boka gratis konsultation
            </a>
            <a
              href="#tjanster"
              className="text-center font-semibold text-brand-700 bg-white border border-brand-200 px-7 py-3.5 rounded-xl hover:bg-brand-50 hover:-translate-y-1 transition-all duration-200"
            >
              Se mina tjänster →
            </a>
          </div>

          <div className="hero-anim-5 mt-12 flex flex-wrap gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Mobilanpassat från grunden</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Leverans inom 2–4 veckor</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Remote-vänligt — var du än finns i Sverige</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-brand-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}
