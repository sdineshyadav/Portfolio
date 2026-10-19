import { useEffect, useState } from 'react'
import { CodeXml, Download, Menu, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { personal } from '../../data/personal'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact', contact: true },
]

function Navbar() {
  const location = useLocation()
  const [openPath, setOpenPath] = useState<string | null>(null)
  const menuOpen = openPath === location.pathname

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenPath(null)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink className="brand" to="/" aria-label={`${personal.name}, home`}>
          <span className="brand-mark" aria-hidden="true">{personal.initials}</span>
          <span>{personal.name}</span>
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setOpenPath(menuOpen ? null : location.pathname)}
        >
          {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
        <nav
          id="primary-navigation"
          className={`nav-links${menuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map(({ label, to, contact }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link${contact ? ' contact-link' : ''}${isActive ? ' active' : ''}`}
              onClick={() => setOpenPath(null)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        {location.pathname === '/' && (
          <div className="home-nav-actions">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <CodeXml size={16} aria-hidden="true" />
            </a>
            <a className="home-resume-link" href={personal.resumePath} download>
              <Download size={13} aria-hidden="true" /> Download Resume
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
