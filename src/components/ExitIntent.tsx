import { useEffect, useState } from 'react'
import LeadForm from './LeadForm'
import { XIcon } from './Icons'

const SEEN_KEY = 'rbcat-exit-intent-seen'

export default function ExitIntent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (
      window.matchMedia('(max-width: 1023px)').matches ||
      window.sessionStorage.getItem(SEEN_KEY)
    ) {
      return
    }
    function onMouseOut(e: MouseEvent) {
      // Only fire on a real leave toward the top of the viewport.
      if (e.clientY > 0) return
      window.sessionStorage.setItem(SEEN_KEY, '1')
      setOpen(true)
      document.removeEventListener('mouseout', onMouseOut)
    }
    document.addEventListener('mouseout', onMouseOut)
    return () => document.removeEventListener('mouseout', onMouseOut)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-6">
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-ink/85"
      />
      <div
        role="dialog"
        aria-label="Before you go"
        className="relative w-full max-w-lg border border-gold/50 bg-background p-10"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 text-cream hover:text-gold"
        >
          <XIcon className="h-5 w-5" />
        </button>
        <p className="eyebrow">Before you go…</p>
        <h2 className="mt-4 font-display text-3xl text-ivory">
          Take the lighting guide with you.
        </h2>
        <p className="mt-3 text-cream">
          Get our lighting guide and discover pieces curated for beautifully
          designed spaces.
        </p>
        <div className="mt-6">
          <LeadForm
            source="exit-intent"
            showName={false}
            compact
            cta="Send Me The Guide →"
            idPrefix="exit"
          />
        </div>
      </div>
    </div>
  )
}