import { Link } from 'react-router-dom'
import LeadForm from '../components/LeadForm'
import { QUIZ_QUESTIONS, formatPrice, recommendMatch } from '../lib/data'
import { useStore } from '../lib/store'

export default function Match() {
  const { answers, resetQuiz, isQuizComplete } = useStore()
  const product = recommendMatch(answers)

  if (!isQuizComplete) {
    return (
      <div className="px-5 py-28 text-center lg:px-10">
        <p className="eyebrow">Your Personalized Match</p>
        <h1 className="mt-6 font-display text-4xl text-ivory">
          Take the quiz first.
        </h1>
        <p className="mt-4 text-cream">
          Four questions and we&apos;ll match you with a piece for your space.
        </p>
        <Link to="/quiz" className="btn-gold mt-8">
          Start The Quiz →
        </Link>
      </div>
    )
  }

  return (
    <div className="px-5 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <p className="eyebrow">Your Personalized Match</p>
        <h1 className="mt-6 font-display text-4xl text-ivory lg:text-6xl">
          Your Perfect Match
        </h1>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <img
            src={product.image}
            alt={product.name}
            width={1000}
            height={1000}
            className="w-full border border-border object-cover"
          />

          <div>
            <p className="label-xs text-gold">{product.collection}</p>
            <h2 className="mt-3 font-display text-3xl text-ivory lg:text-4xl">
              {product.name}
            </h2>
            <p className="mt-3 text-2xl text-gold">{formatPrice(product.price)}</p>
            <p className="mt-6 text-cream">
              Based on your space, style, atmosphere, and preferred look, this
              piece is a strong match for your home.
            </p>

            <h3 className="label-xs mt-10 text-gold">Why It Matches</h3>
            <dl className="mt-5 divide-y divide-border border-y border-border">
              {QUIZ_QUESTIONS.map((q) => (
                <div key={q.key} className="flex justify-between gap-6 py-4">
                  <dt className="label-xs text-cream">{q.label}</dt>
                  <dd className="text-right text-ivory">
                    {answers[q.key]}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to={`/product/${product.slug}`} className="btn-gold">
                View My Match →
              </Link>
              <button type="button" onClick={resetQuiz} className="btn-outline">
                Retake Quiz
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-border pt-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl text-ivory">
              Email My Match
            </h2>
            <p className="mt-3 text-cream">
              We&apos;ll send your match and the lighting guide so you can
              decide later.
            </p>
          </div>
          <LeadForm
            source="quiz"
            showName={false}
            cta="Email My Match →"
            successTitle="Sent to your inbox."
            successCopy="Your match and lighting guide are on their way."
            idPrefix="match"
          />
        </div>
      </div>
    </div>
  )
}