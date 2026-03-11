// src/components/Navbar.jsx

import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#" className="navbar__logo">
        Dipped<span>.</span>
      </a>

      {/* Desktop links */}
      <ul className="navbar__links">
        <li><button onClick={() => scrollTo('products')}>Our Treats</button></li>
        <li><button onClick={() => scrollTo('gallery')}>Gallery</button></li>
        <li><button onClick={() => scrollTo('order')}>Order</button></li>
      </ul>

      {/* CTA */}
      <button
        className="navbar__cta"
        onClick={() => scrollTo('order')}
      >
        Order Now
      </button>

      {/* Mobile hamburger */}
      <button
        className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <button onClick={() => scrollTo('products')}>Our Treats</button>
        <button onClick={() => scrollTo('gallery')}>Gallery</button>
        <button onClick={() => scrollTo('order')}>Order</button>
        <button
          className="navbar__cta"
          onClick={() => scrollTo('order')}
        >
          Order Now
        </button>
      </div>
    </nav>
  )
}

export default Navbar