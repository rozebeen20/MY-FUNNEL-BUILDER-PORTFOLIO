import { type ReactNode } from 'react'

interface PreviewFrameProps {
  url: string
  children: ReactNode
}

export default function PreviewFrame({ url, children }: PreviewFrameProps) {
  return (
    <div className="overflow-hidden rounded-sm border border-border bg-ink">
      <div className="flex items-center gap-2 border-b border-border bg-soft px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-gold/70" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-gold/40" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-gold/25" aria-hidden="true" />
        <span className="ml-3 min-w-0 flex-1 truncate border border-border bg-ink px-3 py-1 text-[11px] tracking-wide text-cream/80">
          {url}
        </span>
        <span className="label-xs shrink-0 px-1 text-gold">SIMULATED</span>
      </div>
      <div className="bg-ink">{children}</div>
    </div>
  )
}