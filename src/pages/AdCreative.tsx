import { Link } from 'react-router-dom'
import { AD_CONCEPTS } from '../lib/data'

export default function AdCreative() {
  return (
    <div className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <p className="eyebrow">Stage 01 — Traffic</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl text-ivory lg:text-6xl">
          Turn Attention Into Intent.
        </h1>
        <p className="mt-5 max-w-2xl text-cream">
          Ad creative is where the funnel begins. Each concept sells the
          outcome — atmosphere — and sends the visitor to one focused promise.
        </p>
        <p className="label-xs mt-6 inline-block border border-gold/50 px-4 py-2 text-gold">
          Portfolio concepts — no performance data claimed
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {AD_CONCEPTS.map((ad) => (
            <article
              key={ad.id}
              className="group border border-border transition-colors hover:border-gold"
            >
              <div className="overflow-hidden">
                <img
                  src={ad.image}
                  alt={ad.title}
                  width={1000}
                  height={1250}
                  loading="lazy"
                  className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="label-xs text-gold">{ad.id}</p>
                <h2 className="mt-4 font-display text-2xl text-ivory">
                  {ad.title}
                </h2>
                <p className="mt-3 text-cream">{ad.copy}</p>
                <Link to="/pre-sale" className="btn-gold mt-7 w-full">
                  Find Your Perfect Light →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap items-center gap-4 border-t border-border pt-10">
          <span className="label-xs text-gold">Traffic</span>
          <span className="text-gold">→</span>
          <span className="label-xs text-ivory">Ad Creative</span>
          <span className="text-gold">→</span>
          <Link to="/pre-sale" className="label-xs text-cream underline underline-offset-4 hover:text-gold">
            Pre-Sale
          </Link>
        </div>
      </div>
    </div>
  )
}