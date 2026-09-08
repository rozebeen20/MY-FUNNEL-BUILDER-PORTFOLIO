import { Link } from 'react-router-dom'
import { PRODUCTS, formatPrice } from '../lib/data'
import { useStore } from '../lib/store'

export default function Shop() {
  const { addToCart } = useStore()

  return (
    <div className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <p className="eyebrow">The Collection</p>
        <h1 className="mt-6 font-display text-4xl text-ivory lg:text-6xl">
          The Lighting Collection
        </h1>
        <p className="mt-5 max-w-2xl text-cream">
          Statement pieces for beautifully designed spaces.
        </p>
        <p className="label-xs mt-6 inline-block border border-gold/50 px-4 py-2 text-gold">
          Portfolio demonstration — items shown for demo purposes
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article
              key={product.slug}
              className="group flex flex-col border border-border transition-all duration-300 hover:-translate-y-1 hover:border-gold"
            >
              <Link to={`/product/${product.slug}`} className="relative block overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="label-xs absolute left-4 top-4 text-gold">
                  {product.collection}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-7">
                <h2 className="font-display text-2xl text-ivory">
                  <Link
                    to={`/product/${product.slug}`}
                    className="transition-colors hover:text-gold-light"
                  >
                    {product.name}
                  </Link>
                </h2>
                <p className="mt-2 text-lg text-gold">
                  {formatPrice(product.price)}
                </p>
                <p className="mt-3 flex-1 text-cream">{product.short}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to={`/product/${product.slug}`}
                    className="btn-outline flex-1"
                  >
                    View Product
                  </Link>
                  <button
                    type="button"
                    onClick={() => addToCart(product.slug)}
                    className="btn-gold flex-1"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}