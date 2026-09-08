import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { isValidEmail } from '../lib/leads'

const PROJECT_TYPES = [
  'Full Funnel Build',
  'Landing Page',
  'Quiz or Interactive Experience',
  'CRO Audit',
  'Something Else',
]

export default function WorkWithMe() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    projType: '',
    message: '',
  })
  const [error, setError] = useState<'email' | 'required' | null>(null)

  function submit(e: FormEvent) {
    e.preventDefault()
    const required: (keyof typeof form)[] = ['name', 'email', 'projType', 'message']
    const missing = required.some((k) => !form[k].trim())
    if (missing) {
      setError('required')
      return
    }
    if (!isValidEmail(form.email)) {
      setError('email')
      return
    }
    setError(null)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex justify-center px-5 py-28 lg:px-10">
        <div className="max-w-xl text-center">
          <p className="eyebrow">Work With Me</p>
          <h1 className="mt-8 font-display text-4xl text-ivory lg:text-5xl">
            Message received.
          </h1>
          <p className="mt-5 text-cream">
            Thanks — I&apos;ll get back to you shortly about{' '}
            <span className="text-ivory">{form.projType}</span>. While you
            wait, the funnel below shows the experience I design.
          </p>
          <a href="#funnel" className="btn-outline mt-8">
            Scroll The Funnel →
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <p className="label-xs text-gold">Work With Me</p>
        <h1 className="mt-6 font-display text-4xl leading-tight text-ivory lg:text-6xl">
          Ready To Build
          <br />
          <span className="text-gold">A Better Funnel?</span>
        </h1>
        <p className="mt-6 max-w-2xl text-cream">
          Tell me about your product and your audience, and I&apos;ll show you
          the path that turns attention into conversion.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="border border-gold/50 bg-soft p-8 lg:p-12">
            <h2 className="label-xs text-gold">Start A Project</h2>
            <p className="mt-3 text-sm text-cream/70">
              Portfolio demonstration — submissions are not sent anywhere.
            </p>

            <form onSubmit={submit} noValidate className="mt-8 space-y-5">
              <div>
                <label htmlFor="ww-name" className="field-label">
                  Name
                </label>
                <input
                  id="ww-name"
                  autoComplete="name"
                  className="field-input"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="ww-email" className="field-label">
                  Email
                </label>
                <input
                  id="ww-email"
                  type="email"
                  autoComplete="email"
                  className="field-input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="ww-type" className="field-label">
                  Project Type
                </label>
                <select
                  id="ww-type"
                  className="field-input field-select"
                  value={form.projType}
                  onChange={(e) => setForm({ ...form, projType: e.target.value })}
                >
                  <option value="">Select project type…</option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="ww-message" className="field-label">
                  Tell Me About Your Project
                </label>
                <textarea
                  id="ww-message"
                  rows={5}
                  className="field-input resize-y"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {error === 'email' && (
                <p className="text-sm text-gold-light" role="alert">
                  Please enter a valid email address.
                </p>
              )}
              {error === 'required' && (
                <p className="text-sm text-gold-light" role="alert">
                  Please complete every field.
                </p>
              )}

              <button type="submit" className="btn-gold w-full">
                Start A Project →
              </button>
            </form>
          </div>

          <div id="funnel" className="scroll-mt-24">
            <h2 className="label-xs text-gold">What You Get</h2>
            <ol className="mt-6 space-y-6">
              {[
                ['01', 'A clear concept', 'The message and progression each step must deliver.'],
                ['02', 'A guided experience', 'Pre-sale, quiz, match and product pages as one path.'],
                ['03', 'A defined experiment', 'Hypotheses, baseline and a way to measure results.'],
                ['04', 'A system, not a page', 'Built to be optimized page by page, stage by stage.'],
              ].map(([id, title, copy]) => (
                <li key={id} className="grid gap-2 border border-border p-6 md:grid-cols-[60px_1fr]">
                  <p className="font-display text-2xl text-gold">{id}</p>
                  <div>
                    <h3 className="font-display text-xl text-ivory">{title}</h3>
                    <p className="mt-1 text-cream">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 border border-gold/50 bg-soft p-6">
              <h3 className="label-xs text-gold">See it live</h3>
              <p className="mt-2 text-sm text-cream">
                Skip the paperwork — take the quiz and get matched right now.
              </p>
              <Link to="/quiz" className="btn-outline mt-5">
                Take The Quiz →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}