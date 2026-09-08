import { Link } from 'react-router-dom'
import { FOOTER_FUNNEL, FOOTER_STUDIO } from '../lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 py-20 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <p className="font-display text-2xl tracking-[0.06em] text-ivory">
            RBCAT'S FUNNEL BUILDER
          </p>
          <p className="mt-3 text-gold">Build. Optimize. Convert.</p>
          <p className="mt-6 max-w-sm text-cream">
            Designing ecommerce experiences that turn attention into intent,
            intent into action, and action into conversion.
          </p>
          <p className="mt-8 text-sm text-cream/80">
            Portfolio demonstration. No real transactions are processed.
          </p>
        </div>

        <nav aria-label="The Funnel">
          <h2 className="label-xs text-gold">The Funnel</h2>
          <ul className="mt-6 space-y-4">
            {FOOTER_FUNNEL.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-ivory transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Studio">
          <h2 className="label-xs text-gold">Studio</h2>
          <ul className="mt-6 space-y-4">
            {FOOTER_STUDIO.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-ivory transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-[1400px] px-5 py-6 text-sm text-cream/80 lg:px-10">
          © {new Date().getFullYear()} RBCAT'S FUNNEL BUILDER — portfolio
          project.
        </p>
      </div>
    </footer>
  )
}