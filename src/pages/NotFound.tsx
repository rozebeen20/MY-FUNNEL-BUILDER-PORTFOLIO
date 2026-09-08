import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex justify-center px-5 py-28 lg:px-10 lg:py-40">
      <div className="max-w-xl text-center">
        <p className="label-xs text-gold">404 — Page Not Found</p>
        <h1 className="mt-8 font-display text-5xl leading-tight text-ivory lg:text-6xl">
          Looks like this path took a wrong turn.
        </h1>
        <p className="mt-6 text-lg text-cream">
          The funnel isn&apos;t broken — this page just doesn&apos;t exist.
        </p>
        <Link to="/" className="btn-gold mt-10">
          Back To Funnel →
        </Link>
      </div>
    </div>
  )
}