import { type ReactNode } from 'react'

interface PreviewFrameProps {
  label?: string
  children: ReactNode
}

export default function PreviewFrame({ label, children }: PreviewFrameProps) {
  return (
    <div className="overflow-hidden rounded-sm border border-border bg-ink">
      <div className="flex min-w-0 items-center justify-between gap-3 border-b border-border bg-soft px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-gold/60 text-gold">
            <span className="font-display text-[11px] tracking-[0.08em]">RB</span>
          </span>
          <span className="min-w-0 leading-tight">
            <span className="label-xs block text-gold">RBCAT'S</span>
            <span className="block truncate font-display text-[11px] tracking-[0.12em] text-ivory">
              FUNNEL BUILDER
            </span>
          </span>
        </div>
        {label && (
          <span className="label-xs min-w-0 shrink-0 truncate border border-gold/40 px-2.5 py-1 text-gold-light">
            {label}
          </span>
        )}
      </div>
      <div className="bg-ink">{children}</div>
    </div>
  )
}