import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { formatPrice, getProduct } from '../lib/data'
import { isValidEmail } from '../lib/leads'
import { useStore } from '../lib/store'

export default function Checkout() {
  const { cart, subtotal, shipping, total, placeOrder } = useStore()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'placing'>('idle')

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      set(key)(e.target.value),
    'aria-invalid': !!errors[key],
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next: Record<string, string> = {}
    if (!form.email.trim()) next.email = 'Please complete this field.'
    else if (!isValidEmail(form.email)) next.email = 'Please enter a valid email address.'
    if (!form.country) next.country = 'Please select your country.'
    if (!form.firstName.trim()) next.firstName = 'Please complete this field.'
    if (!form.lastName.trim()) next.lastName = 'Please complete this field.'
    if (!form.address.trim()) next.address = 'Please complete this field.'
    if (!form.city.trim()) next.city = 'Please complete this field.'
    if (!form.state.trim()) next.state = 'Please complete this field.'
    if (!form.zip.trim()) next.zip = 'Please complete this field.'
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setStatus('placing')
    placeOrder(form.email.trim(), total)
    navigate('/post-purchase')
  }

  const errorText = (key: string) =>
    errors[key] && (
      <p className="mt-2 text-sm text-gold-light" role="alert">
        {errors[key]}
      </p>
    )

  if (cart.length === 0) {
    return (
      <div className="flex justify-center px-5 py-28 lg:px-10">
        <div className="max-w-md text-center">
          <p className="eyebrow">Checkout</p>
          <h1 className="mt-6 font-display text-4xl text-ivory">
            Your cart is ready for something beautiful.
          </h1>
          <p className="mt-4 text-cream">
            Add a piece you love, then checkout is one step away.
          </p>
          <Link to="/shop" className="btn-gold mt-8">
            Explore Collection →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="px-5 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <p className="eyebrow">Checkout</p>
        <h1 className="mt-6 font-display text-4xl text-ivory lg:text-5xl">
          Secure Checkout
        </h1>
        <p className="mt-4 text-cream">
          Portfolio demonstration — no real payment will be processed and no
          card information is requested.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-12 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start">
          <div className="space-y-12">
            <section>
              <h2 className="label-xs text-gold">Contact Information</h2>
              <div className="mt-5">
                <label htmlFor="co-email" className="field-label">
                  Email Address
                </label>
                <input
                  id="co-email"
                  type="email"
                  autoComplete="email"
                  className="field-input"
                  {...field('email')}
                />
                {errorText('email')}
              </div>
            </section>

            <section>
              <h2 className="label-xs text-gold">Shipping Address</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="co-country" className="field-label">
                    Country
                  </label>
                  <select
                    id="co-country"
                    className="field-input field-select"
                    {...field('country')}
                  >
                    <option value="">Select country…</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="European Union">European Union</option>
                  </select>
                  {errorText('country')}
                </div>
                <div>
                  <label htmlFor="co-zip" className="field-label">
                    ZIP / Postal Code
                  </label>
                  <input id="co-zip" autoComplete="postal-code" className="field-input" {...field('zip')} />
                  {errorText('zip')}
                </div>
                <div>
                  <label htmlFor="co-first" className="field-label">
                    First Name
                  </label>
                  <input id="co-first" autoComplete="given-name" className="field-input" {...field('firstName')} />
                  {errorText('firstName')}
                </div>
                <div>
                  <label htmlFor="co-last" className="field-label">
                    Last Name
                  </label>
                  <input id="co-last" autoComplete="family-name" className="field-input" {...field('lastName')} />
                  {errorText('lastName')}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="co-address" className="field-label">
                    Address
                  </label>
                  <input id="co-address" autoComplete="address-line1" className="field-input" {...field('address')} />
                  {errorText('address')}
                </div>
                <div>
                  <label htmlFor="co-city" className="field-label">
                    City
                  </label>
                  <input id="co-city" autoComplete="address-level2" className="field-input" {...field('city')} />
                  {errorText('city')}
                </div>
                <div>
                  <label htmlFor="co-state" className="field-label">
                    State / Region
                  </label>
                  <input id="co-state" autoComplete="address-level1" className="field-input" {...field('state')} />
                  {errorText('state')}
                </div>
              </div>
            </section>

            <section>
              <h2 className="label-xs text-gold">Payment</h2>
              <div className="mt-5 border border-gold/50 bg-soft p-8">
                <div className="flex items-center gap-4">
                  <span className="label-xs border border-gold px-3 py-1.5 text-gold">
                    Portfolio Demo
                  </span>
                  <p className="font-display text-xl text-ivory">
                    No real payment will be processed.
                  </p>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="border border-border bg-ink p-5">
                    <p className="label-xs text-cream">Card (demo)</p>
                    <p className="mt-2 text-sm text-cream/70">
                      Card details are not collected or stored in this demo.
                    </p>
                  </div>
                  <div className="border border-border bg-ink p-5">
                    <p className="label-xs text-cream">Order value</p>
                    <p className="mt-2 text-gold">{formatPrice(total)}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="border border-border bg-soft p-7 lg:sticky lg:top-24">
            <h2 className="label-xs text-gold">Order Summary</h2>
            <ul className="mt-6 space-y-5">
              {cart.map((item) => {
                const product = getProduct(item.slug)
                if (!product) return null
                return (
                  <li key={item.slug} className="flex gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      width={120}
                      height={160}
                      loading="lazy"
                      className="h-20 w-16 object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-display text-base text-ivory">
                        {product.name}
                      </p>
                      {item.finish && (
                        <p className="label-xs mt-1 text-cream">Finish: {item.finish}</p>
                      )}
                      <p className="mt-1 text-sm text-cream">
                        Qty {item.qty} × {formatPrice(product.price)}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <dl className="mt-6 space-y-2 border-t border-border pt-5 text-cream">
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

            <button
              type="submit"
              disabled={status === 'placing'}
              className="btn-gold mt-7 w-full"
            >
              {status === 'placing' ? 'Placing…' : 'Place Order →'}
            </button>
            <p className="mt-4 text-center text-sm text-cream/70">
              Demo checkout — no real payment is processed.
            </p>
          </aside>
        </form>
      </div>
    </div>
  )
}