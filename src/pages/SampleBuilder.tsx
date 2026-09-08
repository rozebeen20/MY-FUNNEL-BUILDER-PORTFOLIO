import { useState } from 'react'
import { Link } from 'react-router-dom'
import PreviewFrame from '../components/PreviewFrame'
import { PRODUCTS, QUIZ_QUESTIONS, formatPrice } from '../lib/data'
import { useStore } from '../lib/store'

const SHIPPING_FLAT = 18

const STAGES = [
  { id: 'Pre-Sale', href: '/pre-sale', url: 'rbcat-funnel-builder / pre-sale' },
  { id: 'Quiz Funnel', href: '/quiz', url: 'rbcat-funnel-builder / quiz' },
  { id: 'PDP', href: '/product', url: 'rbcat-funnel-builder / product' },
  { id: 'CRO Redesign', href: '/case-study', url: 'rbcat-funnel-builder / case-study' },
  { id: 'Checkout', href: '/checkout', url: 'rbcat-funnel-builder / checkout' },
]

const ATMOSPHERE = QUIZ_QUESTIONS[2]

const BEFORE_ITEMS = [
  'Weak hierarchy',
  'Unclear CTA',
  'Too much friction',
  'Unclear product value',
]

const AFTER_ITEMS = [
  'Focused hierarchy',
  'Clear value',
  'Stronger CTA',
  'Reduced friction',
  'Clearer decision path',
]

const goldLink =
  'inline-flex w-fit items-center gap-2 bg-gold px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-light'

const outlineLink =
  'inline-flex w-fit items-center gap-2 border border-border px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:border-gold hover:text-gold-light'

function PreSalePreview({
  product,
}: {
  product: (typeof PRODUCTS)[number]
}) {
  return (
    <PreviewFrame url={STAGES[0].url}>
      <div className="relative h-64 overflow-hidden lg:h-80">
        <img
          src="/assets/hero-Dt2locjs.jpg"
          alt="Warmly lit luxury living room at night"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="absolute inset-0 flex flex-col justify-center gap-3 px-6">
          <p className="text-[9px] uppercase tracking-[0.24em] text-gold">
            RBCAT'S FUNNEL BUILDER · Stage 01
          </p>
          <p className="font-display text-2xl leading-tight text-ivory lg:text-3xl">
            Your home deserves
            <br />
            better light.
          </p>
          <p className="max-w-xs text-[11px] text-cream">
            Atmosphere is designed, not delegated. One considered piece changes
            the whole feeling of a room.
          </p>
          <div className="mt-1 flex items-center gap-3">
            <span className="text-sm text-gold">{product.name}</span>
            <span className="text-sm text-gold-light">{formatPrice(product.price)}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border p-5">
        <p className="text-[11px] text-cream">One promise. One next step.</p>
        <Link to={STAGES[0].href} className={goldLink}>
          Experience Pre-Sale →
        </Link>
      </div>
    </PreviewFrame>
  )
}

function QuizPreview({
  product,
}: {
  product: (typeof PRODUCTS)[number]
}) {
  const [selected, setSelected] = useState<string | null>(null)
  return (
    <PreviewFrame url={STAGES[1].url}>
      <div className="p-5">
        <div className="flex items-center gap-2">
          {['Location', 'Style', 'Atmosphere', 'Look'].map((label, i) => (
            <span
              key={label}
              className={`flex h-6 w-6 items-center justify-center rounded-full border text-[9px] ${
                i <= 1
                  ? 'border-gold bg-gold text-ink'
                  : i === 2
                    ? 'border-gold bg-ink text-gold'
                    : 'border-gold/40 text-cream'
              }`}
              aria-hidden="true"
            >
              {i <= 1 ? '✓' : String(i + 1).padStart(2, '0')}
            </span>
          ))}
          <span className="label-xs ml-auto text-gold">03 / 04</span>
        </div>

        <p className="mt-4 font-display text-lg text-ivory lg:text-xl">
          {ATMOSPHERE.question}
        </p>
        <p className="mt-1 text-[11px] text-cream">{ATMOSPHERE.subheading}</p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {ATMOSPHERE.options.map((opt) => {
            const isSelected = selected === opt.value
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setSelected(opt.value)}
                aria-pressed={isSelected}
                className={`group relative h-24 overflow-hidden border text-left transition-colors lg:h-28 ${
                  isSelected ? 'border-2 border-gold' : 'border-border hover:border-gold/70'
                }`}
              >
                <img
                  src={opt.image}
                  alt={`${opt.title} — ${opt.description}`}
                  width={400}
                  height={500}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-300 ${
                    isSelected ? 'scale-105' : 'group-hover:scale-105'
                  }`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[9px] uppercase tracking-[0.14em] text-ivory">
                  {opt.title}
                </span>
                {isSelected && (
                  <span className="absolute right-2 top-2 flex items-center gap-1 bg-gold px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-ink">
                    ✓ Selected
                  </span>
                )}
              </button>
            )
          })}
        </div>

        <p className="mt-4 text-[11px] text-cream">
          {selected
            ? `Your match would be tuned toward ${product.name} — ${formatPrice(product.price)}.`
            : 'Choose an answer — every choice is image-based.'}
        </p>

        <div className="mt-4 flex items-center justify-between gap-4">
          <span className="label-xs text-gold">Let's find yours</span>
          <Link to={STAGES[1].href} className={goldLink}>
            Take The Quiz →
          </Link>
        </div>
      </div>
    </PreviewFrame>
  )
}

function PdpPreview({
  product,
  onAdd,
}: {
  product: (typeof PRODUCTS)[number]
  onAdd: () => void
}) {
  return (
    <PreviewFrame url={`${STAGES[2].url} / ${product.slug}`}>
      <div className="grid grid-cols-[1fr_1.2fr] gap-5 p-5">
        <div className="relative h-48 overflow-hidden border border-border lg:h-56">
          <img
            src={product.image}
            alt={product.name}
            width={600}
            height={800}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-[9px] uppercase tracking-[0.2em] text-gold">
            {product.collection}
          </p>
          <p className="mt-1 font-display text-base leading-snug text-ivory">
            {product.name}
          </p>
          <p className="mt-1 text-[11px] text-gold-light">
            ★★★★★ {product.rating.toFixed(1)}{' '}
            <span className="text-cream/80">Sample rating</span>
          </p>
          <p className="mt-1 text-lg text-gold">{formatPrice(product.price)}</p>
          <p className="mt-2 text-[11px] text-cream">{product.short}</p>
        </div>
      </div>
      <div className="border-t border-border px-5 py-3">
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {product.benefits.map((b) => (
            <li key={b.title} className="flex items-center gap-1.5 text-[11px] text-cream">
              <span className="text-gold">✓</span> {b.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border p-5">
        <div>
          <button type="button" onClick={onAdd} className={goldLink}>
            Add To Cart
          </button>
          <p className="label-xs mt-2 text-cream">Adds to your sample cart</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Link to={`/product/${product.slug}`} className={outlineLink}>
            View Product →
          </Link>
          <span className="text-[10px] text-cream">
            Secure Checkout · Careful Packaging · Easy Returns
          </span>
        </div>
      </div>
    </PreviewFrame>
  )
}

function CroPreview() {
  return (
    <PreviewFrame url={STAGES[3].url}>
      <div className="grid grid-cols-2 divide-x divide-border">
        <div className="p-5">
          <p className="label-xs text-cream">Before</p>
          <p className="mt-3 font-display text-base text-ivory">Generic browsing</p>
          <ul className="mt-4 space-y-2">
            {BEFORE_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[11px] text-cream/80">
                <span className="text-gold">×</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <p className="label-xs text-gold">After</p>
          <p className="mt-3 font-display text-base text-ivory">Guided conversion</p>
          <ul className="mt-4 space-y-2">
            {AFTER_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[11px] text-cream">
                <span className="text-gold">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border p-5">
        <p className="max-w-[240px] text-[11px] text-cream">
          A friction audit for the lighting funnel — hypothesis, not a measured
          result.
        </p>
        <Link to={STAGES[3].href} className={goldLink}>
          View CRO Case Study →
        </Link>
      </div>
    </PreviewFrame>
  )
}

function CheckoutPreview({
  product,
}: {
  product: (typeof PRODUCTS)[number]
}) {
  const total = product.price + SHIPPING_FLAT
  return (
    <PreviewFrame url={STAGES[4].url}>
      <div className="grid gap-5 p-5 sm:grid-cols-2">
        <div className="min-w-0">
          <p className="text-[9px] uppercase tracking-[0.2em] text-gold">Contact</p>
          <div className="mt-2 border border-border bg-soft px-3 py-2 text-[11px] text-cream/80">
            you@example.com
          </div>
          <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-gold">Shipping</p>
          <div className="mt-2 space-y-2">
            <div className="border border-border bg-soft px-3 py-2 text-[11px] text-cream/80">
              123 Your Street
            </div>
            <div className="border border-border bg-soft px-3 py-2 text-[11px] text-cream/80">
              City · ZIP
            </div>
          </div>
        </div>
        <div className="min-w-0 border border-border bg-soft p-4">
          <p className="text-[9px] uppercase tracking-[0.2em] text-gold">Order Summary</p>
          <div className="mt-3 flex items-start gap-2">
            <img
              src={product.image}
              alt={product.name}
              width={100}
              height={140}
              loading="lazy"
              className="h-12 w-10 shrink-0 object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-[11px] text-ivory">{product.name}</p>
              <p className="text-[11px] text-gold">{formatPrice(product.price)}</p>
            </div>
          </div>
          <dl className="mt-3 space-y-1 border-t border-border pt-2 text-[11px] text-cream">
            <div className="flex justify-between">
              <dt>Shipping</dt>
              <dd>${SHIPPING_FLAT}</dd>
            </div>
            <div className="flex justify-between text-ivory">
              <dt>Total</dt>
              <dd className="text-gold">{formatPrice(total)}</dd>
            </div>
          </dl>
          <Link
            to={STAGES[4].href}
            className={`${goldLink} mt-3 w-full items-center justify-center`}
          >
            Place Demo Order →
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2 border-t border-border px-5 py-3">
        <span className="label-xs border border-gold/60 px-2 py-1 text-gold-light">
          Portfolio Demo
        </span>
        <span className="text-[10px] text-cream">
          No payment will be processed
        </span>
      </div>
      <p className="px-5 pb-4 text-[10px] uppercase tracking-[0.16em] text-cream/70">
        Portfolio demo — no payment will be processed.
      </p>
    </PreviewFrame>
  )
}

export default function SampleBuilder() {
  const [stageIndex, setStageIndex] = useState(0)
  const [productIndex, setProductIndex] = useState(0)
  const { addToCart } = useStore()

  const stage = STAGES[stageIndex]
  const product = PRODUCTS[productIndex]

  return (
    <div className="overflow-x-hidden px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <p className="eyebrow">Interactive Portfolio Demo</p>
        <h1 className="mt-6 font-display text-4xl leading-tight text-ivory lg:text-6xl">
          Build A
          <br />
          <em className="not-italic text-gold">Sample Funnel.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-cream">
          Explore how different conversion stages shape the customer journey —
          from first impression to purchase. Pick a stage, choose a product,
          and watch the preview change.
        </p>
        <p className="label-xs mt-6 inline-block border border-gold/50 px-4 py-2 text-gold">
          Portfolio Sample · Demo Only
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-[300px_1fr] lg:grid-cols-[380px_1fr]">
          <aside className="space-y-12 lg:sticky lg:top-28 lg:self-start">
            <section>
              <h2 className="label-xs text-gold">01 / Funnel Stage</h2>
              <div className="mt-5 flex flex-col gap-3">
                {STAGES.map((s, i) => {
                  const isActive = i === stageIndex
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setStageIndex(i)}
                      aria-pressed={isActive}
                      aria-current={isActive ? 'step' : undefined}
                      className={`relative w-full border px-5 py-4 text-left transition-all duration-200 ${
                        isActive
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-border text-cream hover:border-gold/60 hover:text-ivory'
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-0 h-full w-0.5 transition-colors duration-200 ${
                          isActive ? 'bg-gold' : 'bg-transparent'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="label-xs">
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full align-middle bg-gold/60" />
                        {String(i + 1).padStart(2, '0')} · {s.id}
                      </span>
                    </button>
                  )
                })}
              </div>
            </section>

            <section>
              <h2 className="label-xs text-gold">02 / Sample Product</h2>
              <div className="mt-5 flex flex-col gap-3">
                {PRODUCTS.map((p, i) => {
                  const isActive = i === productIndex
                  return (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => setProductIndex(i)}
                      aria-pressed={isActive}
                      className={`flex w-full items-center gap-4 border p-3 text-left transition-all duration-200 ${
                        isActive
                          ? 'border-gold bg-gold/10'
                          : 'border-border hover:border-gold/60'
                      }`}
                    >
                      <span className="h-16 w-14 shrink-0 overflow-hidden border border-border bg-ink">
                        <img
                          src={p.image}
                          alt=""
                          width={112}
                          height={128}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span className="min-w-0">
                        <strong
                          className={`block text-sm ${
                            isActive ? 'text-ivory' : 'text-cream'
                          }`}
                        >
                          {p.name}
                        </strong>
                        <small className="label-xs mt-1 block text-cream">
                          Portfolio sample · Demo only
                        </small>
                      </span>
                    </button>
                  )
                })}
              </div>
            </section>
          </aside>

          <div>
            <div className="flex items-center justify-between gap-4 border border-border bg-soft px-6 py-4">
              <span className="label-xs text-gold">Live Sample Preview</span>
              <span className="label-xs text-cream">{stage.id}</span>
            </div>

            <div className="border border-t-0 border-border">
              {stageIndex === 0 && <PreSalePreview product={product} />}
              {stageIndex === 1 && <QuizPreview product={product} />}
              {stageIndex === 2 && (
                <PdpPreview
                  product={product}
                  onAdd={() => addToCart(product.slug)}
                />
              )}
              {stageIndex === 3 && <CroPreview />}
              {stageIndex === 4 && <CheckoutPreview product={product} />}
            </div>

            <div className="mt-8 border border-gold/50 bg-soft p-8">
              <p className="label-xs text-gold">Portfolio-Safe Demo Mode</p>
              <p className="mt-4 max-w-2xl text-cream">
                This builder is a visual sample. Products shown are portfolio
                demonstrations — no real transaction, order or payment is
                processed, and no personal data is collected. Where a CTA
                navigates to a live page, it opens the corresponding portfolio
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}