import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Shield, Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/membership', label: 'Membership' },
    { to: '/schemes', label: 'Schemes' },
    { to: '/news', label: 'News' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <Shield size={24} className="brand-icon" />
          NPCWS
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`nav-links${isOpen ? ' open' : ''}`}>
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
