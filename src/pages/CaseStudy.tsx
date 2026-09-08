import { Link } from 'react-router-dom'
import PreviewFrame from '../components/PreviewFrame'
import { formatPrice, getProduct } from '../lib/data'

const signature = getProduct('signature-gold-table-lamp')
const arc = getProduct('noir-arc-floor-lamp')
const tableLampPrice = signature ? formatPrice(signature.price) : ''
const arcPrice = arc ? formatPrice(arc.price) : ''

const ARCH = [
  { phase: 'Traffic', stage: 'Traffic', copy: 'Campaigns and editorial bring the right visitor in.' },
  { phase: 'Intent', stage: 'Pre-Sale', copy: 'A focused promise turns attention into consideration.' },
  { phase: 'Discovery', stage: 'Quiz', copy: 'Image-led questions reveal space, style and mood.' },
  { phase: 'Match', stage: 'Personalized Match', copy: 'The right product appears first — no grid to wander.' },
  { phase: 'Decision', stage: 'PDP', copy: 'Proof, value, price and trust on one contained page.' },
  { phase: 'Action', stage: 'Cart', copy: 'Adding to cart is a conscious, low-effort step.' },
  { phase: 'Purchase', stage: 'Checkout', copy: 'Contact, shipping and summary with one clear action.' },
  { phase: 'Retention', stage: 'Post-Purchase', copy: 'Confirmation, an optional upsell and a clear return path.' },
]

const BEFORE = [
  'Generic browsing',
  'Too many choices',
  'Weak discovery',
  'Unclear value proposition',
  'Competing CTAs',
  'Decision fatigue',
]

const AFTER = [
  'Focused pre-sale promise',
  'Personalized discovery',
  'Benefit-led PDP',
  'Clear primary CTA',
  'Reduced friction',
  'Stronger journey',
]

const SHOWCASE = [
  {
    chapter: '01',
    title: 'Pre-Sale Page',
    label: 'Turn attention into intent',
    caption: 'Focused promise before product selection.',
    url: 'rbcat-funnel-builder / pre-sale',
    explore: '/pre-sale',
    exploreLabel: 'Explore Experience →',
  },
  {
    chapter: '02',
    title: 'Quiz Funnel',
    label: 'Guide to a personalized match',
    caption: 'Image-led discovery reduces the cognitive load of product selection.',
    url: 'rbcat-funnel-builder / quiz',
    explore: '/quiz',
    exploreLabel: 'Take The Quiz →',
  },
  {
    chapter: '03',
    title: 'Product Detail Page',
    label: 'Proof → Value → Price → CTA → Trust',
    caption: 'Hierarchy designed to answer the buyer’s questions in sequence.',
    url: 'rbcat-funnel-builder / product',
    explore: '/product/signature-gold-table-lamp',
    exploreLabel: 'View Product →',
  },
  {
    chapter: '04',
    title: 'Checkout',
    label: 'Clear action, low friction',
    caption: 'A clean path — with honest portfolio demo messaging.',
    url: 'rbcat-funnel-builder / checkout',
    explore: '/checkout',
    exploreLabel: 'Explore Experience →',
  },
]

const HYPOTHESES = [
  {
    id: '01',
    title: 'CTA',
    observation: 'The visitor has many equal next steps and no clear priority.',
    hypothesis: 'A single dominant CTA can reduce decision friction.',
    designResponse: 'One primary action — Find My Perfect Light — above the fold, on every key stage.',
  },
  {
    id: '02',
    title: 'Discovery',
    observation: 'A product grid assumes the visitor already knows what to choose.',
    hypothesis: 'Guided questioning reduces selection effort and surfaces the right product.',
    designResponse: 'Replace browsing with a 4-step image quiz and a personalized match.',
  },
  {
    id: '03',
    title: 'PDP',
    observation: 'Description-first pages bury price and action below the fold.',
    hypothesis: 'Proof → value → price → CTA → trust answers the buyer’s questions in sequence.',
    designResponse: 'Product and rating first, then benefit, price, one CTA and trust signals.',
  },
  {
    id: '04',
    title: 'Mobile',
    observation: 'On mobile the purchase action sits far below the initial view.',
    hypothesis: 'Keeping a primary action visible reduces friction on small screens.',
    designResponse: 'Sticky Add To Cart keeps the next step one tap away.',
  },
]

const IMPACT = [
  'Clearer intent',
  'Faster discovery',
  'Stronger product understanding',
  'Lower friction',
  'More confident action',
]

function ChapterRail() {
  return (
    <div className="mt-10 hidden items-center md:flex" aria-hidden="true">
      {[1, 2, 3, 4].map((n) => (
        <div key={n} className="flex flex-1 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 font-display text-xs text-gold">
            {String(n).padStart(2, '0')}
          </span>
          {n < 4 && <span className="h-px flex-1 bg-gold/40" />}
        </div>
      ))}
    </div>
  )
}

export default function CaseStudy() {
  return (
    <div className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <p className="eyebrow">CRO Case Study</p>
        <h1 className="mt-6 font-display text-4xl leading-tight text-ivory lg:text-6xl">
          From Browsing
          <br />
          <span className="text-gold">to Buying.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-cream">
          An ecommerce funnel designed to move visitors from attention to
          intent, product discovery, purchase, and post-purchase.
        </p>
        <p className="label-xs mt-6 inline-block border border-gold/50 px-4 py-2 text-gold">
          Portfolio strategy demonstration — no fabricated performance claims
          are presented.
        </p>

        <section className="mt-16 border border-border bg-soft p-8 lg:p-12">
          <h2 className="label-xs text-gold">Funnel Architecture</h2>
          <p className="mt-3 max-w-2xl text-sm text-cream">
            Eight stages, one connected customer journey — each step owns a
            single conversion phase.
          </p>

          <ol className="mt-8">
            {ARCH.map((step, i) => (
              <li key={step.stage} className="relative pl-12 lg:pl-16">
                <span
                  className="absolute left-0 top-5 flex h-8 w-8 items-center justify-center rounded-full border font-display text-xs text-gold"
                  style={{ borderColor: 'var(--gold)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {i < ARCH.length - 1 && (
                  <span
                    className="absolute left-4 top-[3.25rem] bottom-0 w-px bg-gold/40"
                    aria-hidden="true"
                  />
                )}
                <div className="grid gap-1 border-b border-border py-5 md:grid-cols-[150px_1fr] md:gap-6">
                  <p className="label-xs pt-1 text-gold">{step.phase}</p>
                  <div>
                    <p className="font-display text-xl text-ivory">{step.stage}</p>
                    <p className="mt-1 text-sm text-cream">{step.copy}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <p className="label-xs mt-8 text-cream/70">
            Conversion architecture only — not a statement of measured results.
          </p>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <div className="border border-border bg-soft p-8">
            <p className="label-xs text-gold">Before</p>
            <h2 className="mt-3 font-display text-2xl text-ivory">Generic Browsing</h2>
            <ul className="mt-6 space-y-3">
              {BEFORE.map((item) => (
                <li key={item} className="flex items-center gap-3 text-cream">
                  <span className="text-gold">×</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center py-2 text-2xl text-gold lg:px-2" aria-hidden="true">
            ↓
          </div>

          <div className="border border-gold/50 p-8">
            <p className="label-xs text-gold">After</p>
            <h2 className="mt-3 font-display text-2xl text-ivory">Guided Conversion</h2>
            <ul className="mt-6 space-y-3">
              {AFTER.map((item) => (
                <li key={item} className="flex items-center gap-3 text-cream">
                  <span className="text-gold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="label-xs text-cream/70 lg:col-span-3">
            Before / After is a design framing, not a measured result.
          </p>
        </section>

        <section className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Visual Showcase</p>
              <h2 className="mt-4 font-display text-3xl text-ivory lg:text-4xl">
                The Funnel, Visually.
              </h2>
            </div>
            <p className="label-xs inline-block border border-gold/50 px-4 py-2 text-gold">
              Portfolio design demonstration — simulated layouts, not screenshots
            </p>
          </div>

          <ChapterRail />

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <article className="border border-border bg-soft">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
                <p className="label-xs text-gold">{SHOWCASE[0].chapter} — {SHOWCASE[0].title}</p>
              </div>
              <div className="p-6">
                <p className="label-xs mb-5 text-cream">{SHOWCASE[0].label}</p>
                <PreviewFrame url={SHOWCASE[0].url}>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src="/assets/hero-Dt2locjs.jpg"
                      alt="Warmly lit luxury living room at night"
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
                    <div className="absolute inset-0 flex flex-col justify-center gap-3 px-6">
                      <p className="text-[9px] uppercase tracking-[0.24em] text-gold">
                        Stage 02 — Pre-Sale
                      </p>
                      <p className="font-display text-lg leading-tight text-ivory lg:text-xl">
                        Transform Your Space.
                        <br />
                        Change How It Feels.
                      </p>
                      <span className="inline-flex w-fit items-center bg-gold px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink">
                        Find My Perfect Light →
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
                    {['Atmosphere', 'Define', 'Elevate'].map((word) => (
                      <div key={word} className="px-3 py-3">
                        <p className="text-[9px] text-cream">{word}</p>
                      </div>
                    ))}
                  </div>
                </PreviewFrame>
                <p className="mt-5 text-sm text-cream">{SHOWCASE[0].caption}</p>
                <Link to={SHOWCASE[0].explore} className="label-xs mt-4 inline-block text-gold underline underline-offset-4 transition-colors hover:text-gold-light">
                  {SHOWCASE[0].exploreLabel}
                </Link>
              </div>
            </article>

            <article className="border border-border bg-soft">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
                <p className="label-xs text-gold">{SHOWCASE[1].chapter} — {SHOWCASE[1].title}</p>
              </div>
              <div className="p-6">
                <p className="label-xs mb-5 text-cream">{SHOWCASE[1].label}</p>
                <PreviewFrame url={SHOWCASE[1].url}>
                  <div className="px-5 py-5">
                    <div className="flex items-center gap-2">
                      {['Location', 'Style', 'Atmosphere', 'Look'].map((label, i) => (
                        <span
                          key={label}
                          className={`flex h-6 w-6 items-center justify-center rounded-full border text-[9px] ${
                            i <= 1 ? 'border-gold bg-gold text-ink' : 'border-gold/40 text-cream'
                          }`}
                          aria-hidden="true"
                        >
                          {i === 1 ? '✓' : String(i + 1).padStart(2, '0')}
                        </span>
                      ))}
                      <span className="label-xs ml-auto text-gold">2 / 4</span>
                    </div>
                    <p className="mt-4 font-display text-lg text-ivory">
                      What&apos;s your interior style?
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {[
                        { label: 'Modern', img: '/assets/style-modern-BVVEcaGQ.jpg' },
                        { label: 'Minimalist', img: '/assets/style-minimalist-5YM85Yo6.jpg' },
                        { label: 'Contemporary', img: '/assets/style-contemporary-Bb15a22k.jpg' },
                        { label: 'Luxury / Glam.', img: '/assets/style-luxury-Dl9n-Mgs.jpg' },
                      ].map((opt, i) => (
                        <div
                          key={opt.label}
                          className={`relative h-16 overflow-hidden border ${
                            i === 0 ? 'border-2 border-gold' : 'border-border'
                          }`}
                        >
                          <img
                            src={opt.img}
                            alt={`${opt.label} interior style`}
                            width={400}
                            height={500}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                          <span className="absolute bottom-2 left-2 text-[9px] uppercase tracking-[0.14em] text-ivory">
                            {opt.label}
                          </span>
                          {i === 0 && (
                            <span className="absolute right-2 top-2 bg-gold px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-ink">
                              Selected
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <span className="bg-gold px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink">
                        Next →
                      </span>
                    </div>
                  </div>
                </PreviewFrame>
                <p className="mt-5 text-sm text-cream">{SHOWCASE[1].caption}</p>
                <Link to={SHOWCASE[1].explore} className="label-xs mt-4 inline-block text-gold underline underline-offset-4 transition-colors hover:text-gold-light">
                  {SHOWCASE[1].exploreLabel}
                </Link>
              </div>
            </article>

            <article className="border border-border bg-soft">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
                <p className="label-xs text-gold">{SHOWCASE[2].chapter} — {SHOWCASE[2].title}</p>
              </div>
              <div className="p-6">
                <p className="label-xs mb-5 text-cream">{SHOWCASE[2].label}</p>
                <PreviewFrame url={SHOWCASE[2].url}>
                  <div className="grid grid-cols-[1fr_1.15fr] gap-4 p-5">
                    <div className="relative h-44 overflow-hidden border border-border">
                      <img
                        src="/assets/product-table-lamp-iPeHVF87.jpg"
                        alt="Signature Gold Table Lamp"
                        width={600}
                        height={800}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gold">
                        Signature Collection
                      </p>
                      <p className="mt-1 font-display text-base leading-snug text-ivory">
                        Signature Gold Table Lamp
                      </p>
                      <p className="mt-1 text-[11px] text-gold-light">
                        ★★★★★ <span className="text-cream/80">Sample rating</span>
                      </p>
                      <p className="mt-1 text-lg text-gold">{tableLampPrice}</p>
                      <ul className="mt-2 space-y-1">
                        {['Modern Design', 'Premium Materials', 'Warm Ambient Light'].map((b) => (
                          <li key={b} className="flex items-center gap-1.5 text-[11px] text-cream">
                            <span className="text-gold">✓</span> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-border px-5 py-3">
                    <span className="bg-gold px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink">
                      Add To Cart
                    </span>
                    <span className="text-[9px] text-cream">Secure Checkout · Careful Packaging</span>
                  </div>
                </PreviewFrame>
                <p className="mt-5 text-sm text-cream">{SHOWCASE[2].caption}</p>
                <Link to={SHOWCASE[2].explore} className="label-xs mt-4 inline-block text-gold underline underline-offset-4 transition-colors hover:text-gold-light">
                  {SHOWCASE[2].exploreLabel}
                </Link>
              </div>
            </article>

            <article className="border border-border bg-soft">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
                <p className="label-xs text-gold">{SHOWCASE[3].chapter} — {SHOWCASE[3].title}</p>
              </div>
              <div className="p-6">
                <p className="label-xs mb-5 text-cream">{SHOWCASE[3].label}</p>
                <PreviewFrame url={SHOWCASE[3].url}>
                  <div className="grid grid-cols-2 gap-4 p-5">
                    <div className="min-w-0">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gold">
                        Contact & Shipping
                      </p>
                      <div className="mt-2 space-y-2">
                        <div className="border border-border bg-soft px-3 py-2 text-[11px] text-cream/80">
                          you@example.com
                        </div>
                        <div className="border border-border bg-soft px-3 py-2 text-[11px] text-cream/80">
                          123 Your Street
                        </div>
                        <div className="border border-border bg-soft px-3 py-2 text-[11px] text-cream/80">
                          City · ZIP
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 border border-border bg-soft p-4">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gold">
                        Order Summary
                      </p>
                      <div className="mt-3 flex items-start gap-2">
                        <img
                          src="/assets/product-arc-lamp-RlYNwts8.jpg"
                          alt="Noir Arc Floor Lamp"
                          width={100}
                          height={140}
                          loading="lazy"
                          className="h-12 w-10 shrink-0 object-cover"
                        />
                        <div className="min-w-0">
                          <p className="truncate text-[11px] text-ivory">Noir Arc Floor Lamp</p>
                          <p className="text-[11px] text-gold">{arcPrice}</p>
                        </div>
                      </div>
                      <dl className="mt-3 space-y-1 border-t border-border pt-2 text-[11px] text-cream">
                        <div className="flex justify-between">
                          <dt>Shipping</dt>
                          <dd>$18</dd>
                        </div>
                        <div className="flex justify-between text-ivory">
                          <dt>Total</dt>
                          <dd className="text-gold">{arcPrice}</dd>
                        </div>
                      </dl>
                      <span className="mt-3 block bg-gold px-3 py-2 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-ink">
                        Place Order →
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 border-t border-border px-5 py-3">
                    <span className="label-xs border border-gold/60 px-2 py-1 text-gold-light">
                      Portfolio Demo
                    </span>
                    <span className="text-[10px] text-cream">No real payment will be processed</span>
                  </div>
                </PreviewFrame>
                <p className="mt-5 text-sm text-cream">{SHOWCASE[3].caption}</p>
                <Link to={SHOWCASE[3].explore} className="label-xs mt-4 inline-block text-gold underline underline-offset-4 transition-colors hover:text-gold-light">
                  {SHOWCASE[3].exploreLabel}
                </Link>
              </div>
            </article>
          </div>

          <p className="label-xs mt-8 text-cream/70">
            These visuals are simulated layouts based on the project’s own
            components — not client screenshots. No products, results or
            second-hand claims beyond the accompanying text are represented.
          </p>
        </section>

        <section className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">CRO Hypotheses</p>
              <h2 className="mt-4 font-display text-3xl text-ivory lg:text-4xl">
                The Reasoning
              </h2>
            </div>
            <p className="label-xs inline-block border border-border px-4 py-2 text-cream">
              Hypotheses — not measured results
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {HYPOTHESES.map((h) => (
              <article key={h.id} className="border border-border p-8">
                <p className="label-xs text-gold">{h.id}</p>
                <h3 className="mt-4 font-display text-2xl text-ivory">{h.title}</h3>
                <dl className="mt-6 space-y-6">
                  <div>
                    <dt className="label-xs text-cream">Observation</dt>
                    <dd className="mt-2 text-cream">{h.observation}</dd>
                  </div>
                  <div className="flex items-center gap-3 text-gold" aria-hidden="true">
                    <span className="h-px flex-1 bg-gold/40" />
                    <span className="text-sm">↓</span>
                    <span className="h-px flex-1 bg-gold/40" />
                  </div>
                  <div>
                    <dt className="label-xs text-cream">Hypothesis</dt>
                    <dd className="mt-2 text-cream">{h.hypothesis}</dd>
                  </div>
                  <div className="flex items-center gap-3 text-gold" aria-hidden="true">
                    <span className="h-px flex-1 bg-gold/40" />
                    <span className="text-sm">↓</span>
                    <span className="h-px flex-1 bg-gold/40" />
                  </div>
                  <div>
                    <dt className="label-xs text-gold">Design Response</dt>
                    <dd className="mt-2 text-ivory">{h.designResponse}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border border-gold/50 bg-soft p-8 lg:p-12">
          <h2 className="label-xs text-gold">Projected Impact</h2>
          <p className="mt-4 max-w-2xl font-display text-2xl text-ivory lg:text-3xl">
            The goal is guided conversion at every stage — not a number.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {IMPACT.map((item) => (
              <li key={item} className="label-xs border border-border px-4 py-2 text-cream">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm text-cream">
            Portfolio strategy demonstration. No fabricated conversion
            percentages or customer performance claims are presented. Results
            would only be measured through a live experiment with a defined
            baseline and control.
          </p>
        </section>
      </div>
    </div>
  )
}