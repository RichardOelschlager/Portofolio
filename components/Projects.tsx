const projects = [
  {
    title: 'Restaurang Kreativ — Bokningssajt',
    tags: ['Next.js', 'Bokningssystem', 'Restaurang'],
    description:
      'Replaced a third-party booking portal with a custom reservation system. The restaurant now owns their customer data, pays zero monthly fees, and gets bookings confirmed by email automatically.',
    results: [
      '0 kr/month in platform fees',
      'Bookings up 28% in 6 weeks',
      'Mobile-first — 80% of traffic is phone',
    ],
    image: '/projects/project-1.png',
    imageAlt: 'Restaurang Kreativ website mockup',
  },
  {
    title: 'STANISLAV Hair Studio — Portfolio & Bokning',
    tags: ['Next.js', 'Bokningssystem', 'Frisör'],
    description:
      'A portfolio + booking site for a barbershop that previously had only a Google Maps listing. Clients now book directly, the stylist manages availability through a simple admin panel.',
    results: [
      'Live in 3 weeks',
      'Booking confirmation via email/SMS',
      'Portfolio gallery drives new walk-ins',
    ],
    image: '/projects/project-2.png',
    imageAlt: 'STANISLAV Hair Studio website mockup',
  },
  {
    title: 'NB Hantverksservice — Offert & Portfolio',
    tags: ['Next.js', 'Offertformulär', 'Hantverkare'],
    description:
      'A clean contractor site with a photo gallery of completed work and a quote request form. Leads now come directly via the site instead of through expensive ad platforms.',
    results: [
      'Quote form generates 10+ leads/month',
      'Google ranking improved from page 3 → page 1',
      'Photo gallery showcases 30+ completed projects',
    ],
    image: '/projects/project-3.png',
    imageAlt: 'NB Hantverksservice website mockup',
  },
]

export default function Projects() {
  return (
    <section id="projekt" className="py-20 px-5 bg-surface">
      <div className="max-w-content mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink mb-3">Recent Projects</h2>
          <p className="text-muted max-w-lg mx-auto">
            Real results for real businesses in Växjö.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`flex flex-col lg:flex-row gap-10 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden bg-brand-100 aspect-video flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-semibold bg-brand-100 text-brand-700 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{p.title}</h3>
                <p className="text-muted leading-relaxed mb-5">{p.description}</p>

                <ul className="flex flex-col gap-2">
                  {p.results.map(r => (
                    <li key={r} className="flex items-start gap-2 text-sm text-ink">
                      <svg className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
