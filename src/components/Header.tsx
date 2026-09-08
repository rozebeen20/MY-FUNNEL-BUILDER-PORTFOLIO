import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../lib/data'
import { useStore } from '../lib/store'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from './Icons'

export default function Header() {
  const { count, openCart } = useStore()
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `label-xs border-b pb-1 transition-colors ${
      isActive
        ? '!border-gold !text-gold'
        : 'border-transparent text-cream hover:text-gold-light'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <Link
          to="/"
          aria-label="RBCAT'S FUNNEL BUILDER — home"
          className="group flex items-center gap-3"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/60 text-gold transition-colors group-hover:border-gold">
            <span className="font-display text-sm tracking-[0.08em]">RB</span>
          </span>
          <span className="leading-tight">
            <span className="label-xs block text-gold">RBCAT'S</span>
            <span className="block font-display text-base tracking-[0.12em] text-ivory">
              FUNNEL BUILDER
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex lg:gap-6 xl:gap-8" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              className={navClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search the collection"
            aria-expanded={searchOpen}
            className="p-2 text-cream transition-colors hover:text-gold"
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart, ${count} item${count === 1 ? '' : 's'}`}
            className="relative p-2 text-cream transition-colors hover:text-gold"
          >
            <ShoppingBagIcon />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center bg-gold px-1 text-[10px] font-semibold text-ink">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex items-center gap-2 p-2 text-cream transition-colors hover:text-gold lg:hidden"
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border bg-soft px-5 py-4 lg:px-10">
          <form
            className="mx-auto flex max-w-[1400px] items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="site-search" className="sr-only">
              Search the lighting collection
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="Search the collection…"
              className="field-input"
            />
            <Link
              to="/shop"
              onClick={() => setSearchOpen(false)}
              className="btn-gold whitespace-nowrap"
            >
              Browse Shop
            </Link>
          </form>
        </div>
      )}

      {menuOpen && (
        <nav
          className="border-t border-border bg-ink px-5 pb-6 pt-2 lg:hidden"
          aria-label="Mobile"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `label-xs block border-b border-border py-4 text-cream ${
                  isActive ? '!text-gold' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/work-with-me"
            onClick={() => setMenuOpen(false)}
            className="btn-gold mt-6 w-full"
          >
            Work With Me
          </Link>
        </nav>
      )}
    </header>
  )
}