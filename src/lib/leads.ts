export interface Lead {
  id: string
  first_name?: string
  email: string
  source: string
  created_at: string
}

export type LeadSource =
  | 'pre-sale'
  | 'quiz'
  | 'personalized-match'
  | 'exit-intent'
  | 'work-with-me'

const LEADS_KEY = 'rbcat-funnel-leads'

const STORES = {
  read<T>(key: string, fallback: T): T {
    if (typeof window === 'undefined') return fallback
    try {
      const raw = window.localStorage.getItem(key)
      return raw ? (JSON.parse(raw) as T) : fallback
    } catch {
      return fallback
    }
  },
  write(key: string, value: unknown) {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* storage unavailable — demo continues without persistence */
    }
  },
}

// Local portfolio store. No backend credentials are bundled with this demo;
// swapping saveLead() for a real API (e.g. Supabase `leads` table) requires
// only changing this single function.
export async function saveLead(input: {
  first_name?: string
  email: string
  source: LeadSource
}): Promise<void> {
  await new Promise((r) => setTimeout(r, 350)) // simulate a network round-trip
  const email = input.email.trim().toLowerCase()
  const leads = STORES.read<Lead[]>(LEADS_KEY, [])
  const exists = leads.some(
    (l) => l.email === email && l.source === input.source,
  )
  if (exists) return // idempotent — treat a repeat as a success, never a duplicate
  leads.push({
    id: crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
    first_name: input.first_name?.trim() || undefined,
    email,
    source: input.source,
    created_at: new Date().toISOString(),
  })
  STORES.write(LEADS_KEY, leads)
}

export const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())