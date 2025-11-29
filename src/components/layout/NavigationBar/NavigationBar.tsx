import { Link } from 'react-router-dom'
import logo from '../../../assets/logos/navigation-bar.png'
import styles from './navigationBar.module.scss'
import { useState } from 'react'
import { NAVIGATION_LINKS } from '../../../constants/navigationLinks'

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={styles['navigation-bar']}>
      <Link className={styles['home-button']} to="/home" onClick={closeMenu}>
        <div className={styles['media']}>
          <img src={logo} alt="Positivus" className={styles['navigation-bar-logo']} />
        </div>
      </Link>

      <button
        className={`${styles['burger']} ${isMenuOpen ? styles['burger-open'] : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles['burger-icon-stick']}></span>
        <span className={styles['burger-icon-stick']}></span>
        <span className={styles['burger-icon-stick']}></span>
      </button>

      <nav className={`${styles['navigation-bar-nav']} ${isMenuOpen ? styles['nav-open'] : ''}`}>
        {NAVIGATION_LINKS.map((link) => (
          <Link className={styles['navbar-link']} key={link.to} to={link.to} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
        <button className={styles['navigation-bar-button']}>Request a quote</button>
      </nav>

      {isMenuOpen && <div className={styles['overlay']} onClick={closeMenu} />}
    </header>
  )
}
