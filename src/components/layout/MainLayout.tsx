import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function MainLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className={`site-shell${location.pathname === '/' ? ' home-theme' : ''}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
