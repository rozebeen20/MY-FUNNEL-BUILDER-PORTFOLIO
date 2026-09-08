import { useState, type FormEvent } from 'react'
import { isValidEmail, saveLead, type LeadSource } from '../lib/leads'

interface LeadFormProps {
  source: LeadSource
  showName?: boolean
  cta?: string
  successTitle?: string
  successCopy?: string
  compact?: boolean
  idPrefix?: string
}

type Errors = {
  firstName?: string
  email?: string
  form?: string
}

export default function LeadForm({
  source,
  showName = true,
  cta = 'Get The Guide →',
  successTitle = "You're on the list.",
  successCopy = 'Your lighting guide is on its way.',
  compact = false,
  idPrefix = source,
}: LeadFormProps) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'saving' | 'done'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next: Errors = {}
    if (showName && !firstName.trim()) {
      next.firstName = 'Please complete this field.'
    }
    if (!email.trim()) {
      next.email = 'Please complete this field.'
    } else if (!isValidEmail(email)) {
      next.email = 'Please enter a valid email address.'
    }
    setErrors(next)
    if (Object.keys(next).length > 0) return
    setStatus('saving')
    try {
      await saveLead({
        first_name: showName ? firstName : undefined,
        email,
        source,
      })
      setStatus('done')
    } catch {
      setStatus('idle')
      setErrors({ form: "We couldn't save your details. Please try again." })
    }
  }

  if (status === 'done') {
    return (
      <div className="border border-gold/60 bg-soft p-8" role="status">
        <p className="font-display text-2xl text-gold">{successTitle}</p>
        <p className="mt-2 text-cream">{successCopy}</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={compact ? '' : 'border border-border bg-soft p-8'}
    >
      <div className={showName ? 'grid gap-5 sm:grid-cols-2' : 'grid gap-5'}>
        {showName && (
          <div>
            <label htmlFor={`fn-${idPrefix}`} className="field-label">
              First Name
            </label>
            <input
              id={`fn-${idPrefix}`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="given-name"
              className="field-input"
              aria-invalid={!!errors.firstName}
              aria-describedby={
                errors.firstName ? `fn-${idPrefix}-err` : undefined
              }
            />
            {errors.firstName && (
              <p id={`fn-${idPrefix}-err`} className="mt-2 text-sm text-gold-light">
                {errors.firstName}
              </p>
            )}
          </div>
        )}
        <div>
          <label htmlFor={`em-${idPrefix}`} className="field-label">
            Email Address
          </label>
          <input
            id={`em-${idPrefix}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="field-input"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `em-${idPrefix}-err` : undefined}
          />
          {errors.email && (
            <p id={`em-${idPrefix}-err`} className="mt-2 text-sm text-gold-light">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {errors.form && (
        <p className="mt-4 text-sm text-gold-light">{errors.form}</p>
      )}

      <button
        type="submit"
        disabled={status === 'saving'}
        className="btn-gold mt-6 w-full sm:w-auto"
      >
        {status === 'saving' ? 'Saving…' : cta}
      </button>
    </form>
  )
}