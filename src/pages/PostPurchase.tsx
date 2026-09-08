import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FALLBACK_ORDER_ID, formatPrice, getProduct } from '../lib/data'
import { useStore } from '../lib/store'

export default function PostPurchase() {
  const { order, addToCart, openCart } = useStore()
  const [added, setAdded] = useState(false)

  const orderId = order?.id ?? FALLBACK_ORDER_ID
  const luna = getProduct('luna-glass-pendant')!

  function addLuna() {
    addToCart(luna.slug, 1)
    setAdded(true)
  }

  return (
    <div className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1000px] text-center">
        <p className="label-xs border border-gold/50 px-4 py-2 text-gold">
          Order Confirmation — Portfolio Demo
        </p>
        <h1 className="mt-8 font-display text-5xl text-ivory lg:text-7xl">
          Thank You.
        </h1>
        <p className="mt-4 text-xl text-cream">Your order is confirmed.</p>
        <p className="mt-3 font-display text-2xl text-gold">{orderId}</p>
        <p className="mt-4 text-sm text-cream/70">
          Portfolio demonstration — no real payment was processed.
        </p>
      </div>

      <section className="mx-auto mt-20 max-w-[1000px] border-t border-border pt-16">
        <p className="text-center text-cream">Beautiful lighting works best together.</p>
        <h2 className="mt-4 text-center font-display text-3xl text-ivory lg:text-5xl">
          Complete The Look
        </h2>

        <div className="mt-12 grid gap-10 border border-border bg-soft p-8 lg:grid-cols-2 lg:items-center lg:p-12">
          <img
            src={luna.image}
            alt={luna.name}
            width={800}
            height={1000}
            loading="lazy"
            className="w-full border border-border object-cover"
          />
          <div>
            <p className="label-xs text-gold">{luna.collection}</p>
            <h3 className="mt-3 font-display text-2xl text-ivory lg:text-3xl">
              {luna.name}
            </h3>
            <p className="mt-2 text-xl text-gold">{formatPrice(luna.price)}</p>
            <p className="mt-4 text-cream">{luna.short}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={addLuna}
                className="btn-gold"
              >
                Add To My Order →
              </button>
              <Link to="/shop" className="btn-outline">
                Continue Shopping →
              </Link>
            </div>
            {added && (
              <p className="mt-4 text-sm text-gold-light" role="status">
                Added to your order — review it in the cart.
              </p>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button type="button" onClick={openCart} className="label-xs text-cream underline underline-offset-4 hover:text-gold">
            View Cart →
          </button>
        </div>
      </section>
    </div>
  )
}