import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { StoreProvider } from '../lib/store'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import ExitIntent from './ExitIntent'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  return (
    <StoreProvider>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <CartDrawer />
      <ExitIntent />
    </StoreProvider>
  )
}