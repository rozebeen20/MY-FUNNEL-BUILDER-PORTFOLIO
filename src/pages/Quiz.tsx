import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckIcon } from '../components/Icons'
import { QUIZ_QUESTIONS } from '../lib/data'
import { useStore } from '../lib/store'

export default function Quiz() {
  const navigate = useNavigate()
  const { answers, answer } = useStore()
  const [step, setStep] = useState(0)

  const question = QUIZ_QUESTIONS[step]
  const selected = answers[question.key]

  function handleNext() {
    if (step < QUIZ_QUESTIONS.length - 1) {
      setStep((s) => s + 1)
    } else {
      navigate('/match')
    }
  }

  return (
    <div className="lg:grid lg:min-h-[calc(100vh-73px)] lg:grid-cols-[380px_1fr]">
      <aside className="border-b border-border bg-ink px-5 py-8 lg:sticky lg:top-[73px] lg:h-[calc(100vh-73px)] lg:border-b-0 lg:border-r lg:px-10 lg:py-14">
        <p className="label-xs text-gold">RBCAT'S</p>
        <p className="font-display text-xl tracking-[0.1em] text-ivory">
          FUNNEL BUILDER
        </p>
        <h1 className="mt-10 font-display text-3xl text-ivory lg:mt-16 lg:text-4xl">
          Find Your Perfect Light
        </h1>
        <p className="mt-4 hidden text-cream lg:block">
          A personalized lighting experience for a more beautiful home.
        </p>

        <p className="label-xs mt-8 text-gold">
          Step {step + 1} of {QUIZ_QUESTIONS.length}
        </p>
        <p className="mt-2 font-display text-2xl text-ivory">
          {question.question}
        </p>

        <ol className="mt-8 hidden space-y-4 lg:block">
          {QUIZ_QUESTIONS.map((q, i) => (
            <li key={q.key} className="flex items-center gap-3">
              <span
                className={`flex h-7 w-7 items-center justify-center border text-[11px] ${
                  i === step
                    ? 'border-gold bg-gold text-ink'
                    : i < step
                      ? 'border-gold text-gold'
                      : 'border-border text-cream'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={`label-xs ${i === step ? 'text-gold' : 'text-cream'}`}>
                {q.label}
              </span>
            </li>
          ))}
        </ol>
      </aside>

      <section className="px-5 py-10 lg:px-14 lg:py-14">
        <div className="flex items-center gap-3">
          {QUIZ_QUESTIONS.map((q, i) => (
            <div key={q.key} className="flex flex-1 items-center gap-3">
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs ${
                    i <= step ? 'border-gold bg-gold text-ink' : 'border-gold/50 bg-ink text-cream'
                  }`}
                  aria-current={i === step ? 'step' : undefined}
                >
                  {i < step ? (
                    <CheckIcon className="h-4 w-4" />
                  ) : (
                    String(i + 1).padStart(2, '0')
                  )}
                </span>
                <span className={`label-xs hidden sm:inline ${i === step ? 'text-gold' : 'text-cream'}`}>
                  {q.label}
                </span>
              </div>
              {i < QUIZ_QUESTIONS.length - 1 && <span className="h-px flex-1 bg-gold/40" />}
            </div>
          ))}
          <span className="label-xs shrink-0 text-gold">
            {step + 1} / {QUIZ_QUESTIONS.length}
          </span>
        </div>

        <h2 className="mt-12 font-display text-3xl text-ivory lg:text-5xl">
          {question.question}
        </h2>
        <p className="mt-3 text-cream">{question.subheading}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {question.options.map((option, i) => {
            const isSelected = selected === option.value
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => answer(question.key, option.value)}
                aria-pressed={isSelected}
                className={`group relative overflow-hidden border text-left transition-all duration-300 ${
                  isSelected
                    ? '-translate-y-1 border-2 border-gold shadow-[0_18px_40px_-20px_rgba(217,173,85,0.6)]'
                    : 'border-border hover:-translate-y-1 hover:border-gold/70'
                }`}
              >
                <img
                  src={option.image}
                  alt={`${option.title} — ${option.description}`}
                  width={800}
                  height={1000}
                  loading={step === 0 ? 'eager' : 'lazy'}
                  className={`h-64 w-full object-cover transition-transform duration-500 ${isSelected ? 'scale-105' : 'group-hover:scale-105'}`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                <span className="label-xs absolute left-4 top-4 text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {isSelected && (
                  <span className="absolute right-4 top-4 flex items-center gap-2 bg-gold px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
                    <CheckIcon className="h-3.5 w-3.5" /> Selected
                  </span>
                )}
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <span>
                    <span className="block font-display text-xl text-ivory">
                      {option.title}
                    </span>
                    <span className="mt-1 block text-sm text-cream">
                      {option.description}
                    </span>
                  </span>
                  <span className="text-gold transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="btn-outline"
          >
            ← Back
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!selected}
            className="btn-gold"
          >
            {step === QUIZ_QUESTIONS.length - 1 ? 'See My Match →' : 'Next →'}
          </button>
        </div>

        {!selected && (
          <p className="mt-4 text-right text-sm text-cream/80">
            Select an option to continue.
          </p>
        )}
      </section>
    </div>
  )
}