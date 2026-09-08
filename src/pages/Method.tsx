const STEPS = [
  {
    id: '01',
    title: 'Discover',
    copy: 'Understand audience, offer, intent and friction.',
  },
  {
    id: '02',
    title: 'Design',
    copy: 'Create an experience around clarity and motivation.',
  },
  {
    id: '03',
    title: 'Optimize',
    copy: 'Identify friction and improve the conversion path.',
  },
  {
    id: '04',
    title: 'Convert',
    copy: 'Guide customers toward action.',
  },
]

export default function Method() {
  return (
    <div className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1000px]">
        <p className="label-xs text-gold">RBCAT'S Funnel Builder</p>
        <h1 className="mt-6 font-display text-4xl tracking-[0.06em] text-ivory lg:text-6xl">
          The Method
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-cream">
          Four disciplines, applied in order, to every experience I design — an
          editorial approach to turning attention into intent and action into
          conversion.
        </p>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {STEPS.map((step) => (
            <article
              key={step.id}
              className="grid gap-4 py-10 md:grid-cols-[120px_1fr] md:gap-8"
            >
              <p className="font-display text-3xl text-gold">{step.id}</p>
              <div>
                <h2 className="font-display text-2xl text-ivory lg:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-3 max-w-xl text-cream">{step.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <blockquote className="mt-16 border-l border-gold pl-8">
          <p className="font-display text-2xl leading-relaxed text-ivory lg:text-3xl">
            “Every build is a hypothesis. The funnel tells us where to look
            next.”
          </p>
        </blockquote>
      </div>
    </div>
  )
}