import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatPrice, getProduct } from '../lib/data'
import { useStore } from '../lib/store'

const TRUST = ['Secure checkout', 'Carefully packaged', 'Easy returns']

export default function Product() {
  const { slug } = useParams<{ slug: string }>()
  const product = getProduct(slug)
  const { addToCart } = useStore()
  const [activeImage, setActiveImage] = useState(0)
  const [finish, setFinish] = useState<string | null>(
    product?.finishes[0] ?? null,
  )
  const [qty, setQty] = useState(1)

  if (!product) {
    return (
      <div className="px-5 py-28 text-center lg:px-10">
        <p className="eyebrow">Product Detail Page</p>
        <h1 className="mt-6 font-display text-4xl text-ivory">
          Product not found.
        </h1>
        <p className="mt-4 text-cream">It may have moved or no longer exists.</p>
        <Link to="/shop" className="btn-gold mt-8">
          Back To Collection →
        </Link>
      </div>
    )
  }

  const handleAdd = () => addToCart(product.slug, qty, finish)

  return (
    <div className="px-5 py-14 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-cream">
          <Link to="/shop" className="label-xs underline underline-offset-4 hover:text-gold">
            Shop
          </Link>
          <span className="text-gold">→</span>
          <span className="label-xs text-gold">{product.name}</span>
        </nav>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <img
              src={product.gallery[activeImage]}
              alt={product.name}
              width={1000}
              height={1000}
              className="w-full border border-border object-cover"
            />
            <div className="mt-4 grid grid-cols-3 gap-4">
              {product.gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1} of ${product.name}`}
                  className={`border p-0.5 transition-colors ${
                    i === activeImage ? 'border-gold' : 'border-border hover:border-gold/60'
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    width={600}
                    height={600}
                    loading="lazy"
                    className="h-24 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="label-xs text-gold">{product.collection}</p>
            <h1 className="mt-3 font-display text-3xl text-ivory lg:text-4xl">
              {product.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <p className="text-2xl text-gold">{formatPrice(product.price)}</p>
              <p className="text-sm text-gold-light">
                ★★★★★ {product.rating.toFixed(1)}{' '}
                <span className="text-cream/70">— sample rating (portfolio demo)</span>
              </p>
            </div>

            <p className="mt-6 text-cream">{product.description}</p>

            <h2 className="label-xs mt-8 text-gold">Benefits</h2>
            <ul className="mt-4 space-y-4">
              {product.benefits.map((b) => (
                <li key={b.title} className="border border-border p-5">
                  <h3 className="font-display text-lg text-ivory">{b.title}</h3>
                  <p className="mt-1 text-sm text-cream">{b.copy}</p>
                </li>
              ))}
            </ul>

            <h2 className="label-xs mt-8 text-gold">Finish</h2>
            <div
              className="mt-4 flex flex-wrap gap-3"
              role="group"
              aria-label="Select finish"
            >
              {product.finishes.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFinish(f)}
                  aria-pressed={finish === f}
                  className={`label-xs border px-5 py-3 transition-all duration-200 ${
                    finish === f
                      ? 'border-gold bg-gold text-ink'
                      : 'border-border text-cream hover:border-gold/70 hover:text-ivory'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <h2 className="label-xs mt-8 text-gold">Quantity</h2>
            <div className="mt-4 flex items-center border border-border">
              <div className="flex items-center">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-xl text-cream hover:text-gold"
                >
                  −
                </button>
                <span className="min-w-8 px-2 text-center text-ivory" aria-live="polite">
                  {qty}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-3 text-xl text-cream hover:text-gold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-8">
              <button type="button" onClick={handleAdd} className="btn-gold w-full sm:w-auto">
                Add To Cart
              </button>
            </div>

            <ul className="mt-8 space-y-2">
              {TRUST.map((t) => (
                <li key={t} className="flex items-center gap-3 text-cream">
                  <span className="text-gold">✓</span> {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-cream/70">
              Portfolio demonstration — checkout does not process real payments.
            </p>

            <h2 className="label-xs mt-10 text-gold">Product Details</h2>
            <dl className="mt-4 divide-y divide-border border-y border-border">
              {product.details.map((d) => (
                <div key={d.label} className="flex justify-between gap-6 py-3.5">
                  <dt className="text-cream">{d.label}</dt>
                  <dd className="text-right text-ivory">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-ink/95 px-5 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg text-ivory">{product.name}</p>
            <p className="text-gold">{formatPrice(product.price)}</p>
          </div>
          <button type="button" onClick={handleAdd} className="btn-gold">
            Add To Cart
          </button>
        </div>
      </div>

      <div className="h-20 lg:hidden" aria-hidden="true" />
    </div>
  )
}