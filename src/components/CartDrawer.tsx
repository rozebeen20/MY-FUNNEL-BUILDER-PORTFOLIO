import { Link } from 'react-router-dom'
import { formatPrice, getProduct } from '../lib/data'
import { useStore } from '../lib/store'
import { XIcon } from './Icons'

export default function CartDrawer() {
  const {
    cart,
    cartOpen,
    closeCart,
    setQty,
    removeFromCart,
    subtotal,
    shipping,
    total,
  } = useStore()

  if (!cartOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-ink/80"
      />
      <aside
        role="dialog"
        aria-label="Your cart"
        className="absolute right-0 top-0 flex h-full w-full flex-col border-l border-border bg-background sm:w-[440px]"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="label-xs text-gold">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-cream hover:text-gold"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <div className="pt-12 text-center">
              <p className="font-display text-2xl text-ivory">
                Your cart is ready for something beautiful.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-gold mt-8 inline-flex"
              >
                Explore Collection →
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {cart.map((item) => {
                const product = getProduct(item.slug)
                if (!product) return null
                return (
                  <li
                    key={item.slug}
                    className="flex gap-4 border-b border-border pb-6"
                  >
                    <Link to={`/product/${product.slug}`} onClick={closeCart}>
                      <img
                        src={product.image}
                        alt={product.name}
                        width={240}
                        height={320}
                        loading="lazy"
                        className="h-24 w-20 object-cover"
                      />
                    </Link>
                    <div className="flex-1">
                      <Link
                        to={`/product/${product.slug}`}
                        onClick={closeCart}
                        className="font-display text-lg text-ivory hover:text-gold-light"
                      >
                        {product.name}
                      </Link>
                      {item.finish && (
                        <p className="label-xs mt-1 text-cream">
                          Finish: {item.finish}
                        </p>
                      )}
                      <p className="mt-1 text-gold">{formatPrice(product.price)}</p>
                      <div className="mt-3 flex items-center gap-4">
                        <div className="flex items-center border border-border">
                          <button
                            type="button"
                            aria-label={`Decrease quantity of ${product.name}`}
                            onClick={() => setQty(item.slug, item.qty - 1)}
                            className="px-3 py-1 text-cream hover:text-gold"
                          >
                            −
                          </button>
                          <span className="px-3 text-ivory">{item.qty}</span>
                          <button
                            type="button"
                            aria-label={`Increase quantity of ${product.name}`}
                            onClick={() => setQty(item.slug, item.qty + 1)}
                            className="px-3 py-1 text-cream hover:text-gold"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.slug)}
                          className="label-xs text-cream underline underline-offset-4 hover:text-gold"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-border px-6 py-6">
            <dl className="space-y-2 text-cream">
              <div className="flex justify-between gap-6">
                <dt>Subtotal</dt>
                <dd className="text-ivory">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt>Shipping</dt>
                <dd className="text-ivory">{formatPrice(shipping)}</dd>
              </div>
              <div className="flex justify-between gap-6 border-t border-border pt-3 text-lg">
                <dt className="text-ivory">Total</dt>
                <dd className="text-gold">{formatPrice(total)}</dd>
              </div>
            </dl>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="btn-gold mt-6 inline-flex w-full"
            >
              Checkout Securely →
            </Link>
          </div>
        )}
      </aside>
    </div>
  )
}