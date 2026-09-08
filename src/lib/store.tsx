import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { getProduct, type Answers } from './data'

export interface CartItem {
  slug: string
  qty: number
  finish?: string | null
}

export interface Order {
  id: string
  lines: CartItem[]
  email: string
  total: number
}

interface State {
  cart: CartItem[]
  cartOpen: boolean
  answers: Answers
  order: Order | null
}

const STORAGE_KEY = 'rbcat-funnel-state'

const initialState: State = {
  cart: [],
  cartOpen: false,
  answers: {},
  order: null,
}

function loadState(): State {
  if (typeof window === 'undefined') return initialState
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return initialState
    const parsed = JSON.parse(raw) as Partial<State>
    return {
      cart: Array.isArray(parsed.cart) ? parsed.cart : [],
      cartOpen: false,
      answers: parsed.answers && typeof parsed.answers === 'object' ? parsed.answers : {},
      order: parsed.order ?? null,
    }
  } catch {
    return initialState
  }
}

const SHIPPING_FLAT = 18

export interface StoreValue {
  cart: CartItem[]
  cartOpen: boolean
  answers: Answers
  order: Order | null
  count: number
  subtotal: number
  shipping: number
  total: number
  addToCart: (slug: string, qty?: number, finish?: string | null) => void
  setQty: (slug: string, qty: number) => void
  removeFromCart: (slug: string) => void
  openCart: () => void
  closeCart: () => void
  answer: (key: string, value: string) => void
  resetQuiz: () => void
  placeOrder: (email: string, total: number) => Order
  isQuizComplete: boolean
}

const StoreContext = createContext<StoreValue | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(loadState)
  const stateRef = useRef(state)

  useEffect(() => {
    stateRef.current = state
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          cart: state.cart,
          answers: state.answers,
          order: state.order,
        }),
      )
    } catch {
      /* storage unavailable */
    }
  }, [state])

  const update = useCallback((patch: Partial<State>) => {
    setState((prev) => ({ ...prev, ...patch }))
  }, [])

  const addToCart = useCallback(
    (slug: string, qty = 1, finish: string | null = null) => {
      setState((prev) => {
        const existing = prev.cart.find((i) => i.slug === slug)
        const cart = existing
          ? prev.cart.map((i) =>
              i.slug === slug
                ? { ...i, qty: i.qty + qty, finish: finish ?? i.finish }
                : i,
            )
          : [...prev.cart, { slug, qty, finish }]
        return { ...prev, cart, cartOpen: true }
      })
    },
    [],
  )

  const setQty = useCallback((slug: string, qty: number) => {
    setState((prev) => ({
      ...prev,
      cart:
        qty <= 0
          ? prev.cart.filter((i) => i.slug !== slug)
          : prev.cart.map((i) => (i.slug === slug ? { ...i, qty } : i)),
    }))
  }, [])

  const removeFromCart = useCallback((slug: string) => {
    setState((prev) => ({
      ...prev,
      cart: prev.cart.filter((i) => i.slug !== slug),
    }))
  }, [])

  const openCart = useCallback(() => update({ cartOpen: true }), [update])
  const closeCart = useCallback(() => update({ cartOpen: false }), [update])

  const answer = useCallback(
    (key: string, value: string) => {
      update({ answers: { ...stateRef.current.answers, [key]: value } })
    },
    [update],
  )

  const resetQuiz = useCallback(() => update({ answers: {} }), [update])

  const placeOrder = useCallback(
    (email: string, total: number): Order => {
      const order: Order = {
        id: `#LI-${10000 + Math.floor(Math.random() * 89999)}`,
        lines: stateRef.current.cart,
        email,
        total,
      }
      update({ order, cart: [], cartOpen: false })
      return order
    },
    [update],
  )

  const value = useMemo<StoreValue>(() => {
    const subtotal = state.cart.reduce((sum, item) => {
      const product = getProduct(item.slug)
      return sum + (product ? product.price * item.qty : 0)
    }, 0)
    const shipping = state.cart.length === 0 ? 0 : SHIPPING_FLAT
    const count = state.cart.reduce((sum, i) => sum + i.qty, 0)
    return {
      cart: state.cart,
      cartOpen: state.cartOpen,
      answers: state.answers,
      order: state.order,
      count,
      subtotal,
      shipping,
      total: subtotal + shipping,
      addToCart,
      setQty,
      removeFromCart,
      openCart,
      closeCart,
      answer,
      resetQuiz,
      placeOrder,
      isQuizComplete: ['location', 'style', 'atmosphere', 'look'].every(
        (key) => !!state.answers[key],
      ),
    }
  }, [
    state,
    addToCart,
    setQty,
    removeFromCart,
    openCart,
    closeCart,
    answer,
    resetQuiz,
    placeOrder,
  ])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore(): StoreValue {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}