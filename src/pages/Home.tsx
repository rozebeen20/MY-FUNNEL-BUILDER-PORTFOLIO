import { Link } from 'react-router-dom'

const FUNNEL_STAGES = [
  {
    id: '01',
    title: 'Pre-Sale Page',
    copy: 'Create desire. Tell the story.',
    to: '/pre-sale',
    image: '/assets/ad-01-CVF0NlLA.jpg',
    alt: 'Pre-Sale Page',
  },
  {
    id: '02',
    title: 'Quiz Funnel',
    copy: 'Guide. Personalize. Convert.',
    to: '/quiz',
    image: '/assets/room-living-BDLOeeMe.jpg',
    alt: 'Quiz Funnel',
  },
  {
    id: '03',
    title: 'Product Detail Page',
    copy: 'Turn interest into action.',
    to: '/product/signature-gold-table-lamp',
    image: '/assets/product-table-lamp-iPeHVF87.jpg',
    alt: 'Product Detail Page',
  },
  {
    id: '04',
    title: 'CRO Redesign',
    copy: 'Identify friction. Improve the experience.',
    to: '/case-study',
    image: '/assets/style-luxury-Dl9n-Mgs.jpg',
    alt: 'CRO Redesign',
  },
  {
    id: '05',
    title: 'Checkout + Post-Purchase',
    copy: 'Close the sale. Build loyalty.',
    to: '/post-purchase',
    image: '/assets/look-balanced-DisXuxfj.jpg',
    alt: 'Checkout + Post-Purchase',
  },
]

export default function Home() {
  return (
    <>
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-20 lg:px-16 lg:py-32">
            <p className="eyebrow">RBCAT'S Funnel Builder</p>
            <h1 className="mt-8 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              From Inspiration
              <br />
              to <span className="text-gold">Illumination.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream">
              Designing ecommerce experiences that turn attention into intent,
              intent into action, and action into conversion.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/pre-sale" className="btn-gold">
                Explore The Funnel →
              </Link>
              <Link to="/case-study" className="btn-outline">
                View Case Study →
              </Link>
            </div>
            <p className="mt-12 max-w-md text-sm leading-relaxed text-cream/80">
              A portfolio project demonstrating the design, build and
              optimization of a complete ecommerce customer journey.
            </p>
          </div>

          <div className="relative min-h-[380px] lg:min-h-[720px]">
            <img
              src="/assets/hero-Dt2locjs.jpg"
              alt="Dark luxury living room lit by warm champagne-gold lighting"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 border border-gold/60 bg-ink/85 px-5 py-4">
              <p className="label-xs text-gold">Luxury Ecommerce</p>
              <p className="label-xs text-ivory">Funnel Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="eyebrow">The Complete Customer Journey</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl text-ivory lg:text-5xl">
            Every stage is designed to move the customer forward.
          </h2>
          <p className="mt-5 max-w-2xl text-cream">
            From first impression to post-purchase — traffic, ad creative,
            pre-sale, lead capture, quiz, match, product, cart, checkout,
            confirmation and the offer that follows.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {FUNNEL_STAGES.map((stage) => (
              <Link
                key={stage.id}
                to={stage.to}
                className="group flex flex-col border border-border transition-all duration-300 hover:-translate-y-1 hover:border-gold"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.alt}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="label-xs absolute left-4 top-4 text-gold">
                    {stage.id}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-ivory">
                    {stage.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-cream">{stage.copy}</p>
                  <span className="label-xs mt-6 text-gold transition-transform group-hover:translate-x-1">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Enter the funnel</p>
            <h2 className="mt-6 font-display text-4xl text-ivory lg:text-5xl">
              Start where the customer starts.
            </h2>
            <p className="mt-5 max-w-xl text-cream">
              Walk the journey exactly as a shopper would: an ad, a promise, a
              guided quiz, a personalized match, and a purchase path with
              nothing in the way.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/ad-creative" className="btn-gold">
                Start At The Ad →
              </Link>
              <Link to="/quiz" className="btn-outline">
                Take The Quiz →
              </Link>
            </div>
          </div>
          <img
            src="/assets/style-luxury-Dl9n-Mgs.jpg"
            alt="Glamorous marble and brass interior with dramatic chandelier"
            width={800}
            height={1000}
            loading="lazy"
            className="h-[460px] w-full object-cover"
          />
        </div>
      </section>
    </>
  )
}