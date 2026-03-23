import { useState } from 'react'
import styles from '../assets/Style/navbar.module.css'

const links = ['Menu', 'About', 'Specials', 'Contact']

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>🍕</span>
          <span className={styles.logoText}>La Fornace</span>
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#contact" className={styles.navCta}>Reserve a Table</a>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={open ? styles.barOpen : ''} />
          <span className={open ? styles.barOpen : ''} />
          <span className={open ? styles.barOpen : ''} />
        </button>
      </div>
    </header>
  )
}