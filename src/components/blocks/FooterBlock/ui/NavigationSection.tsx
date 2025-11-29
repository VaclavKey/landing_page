import { Link } from 'react-router-dom'
import { NAVIGATION_LINKS } from '../../../../constants/navigationLinks'
import { SOCIAL_LINKS } from '../../../../constants/socialLinks'
import logo from '../../../../assets/logos/footer-navigation-bar.png'
import styles from '../styles/NavigationSection.module.scss'

export const NavigationSection = () => {
  return (
    <section className={styles['navigation-section']}>
      <Link className={styles['home-button']} to="/home">
        <img className={styles['navigation-logo']} src={logo} alt="Positivius" />
      </Link>

      <nav className={styles['navbar']}>
        {NAVIGATION_LINKS.map((link) => (
          <Link className={styles['navbar-link']} key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>

      <nav className={styles['social-links']}>
        {SOCIAL_LINKS.map((link) => (
          <a className={styles['social-link']} key={link.url} href={link.url}>
            <img className={styles['social-link-icon']} src={link.src} alt={link.alt} />
          </a>
        ))}
      </nav>
    </section>
  )
}
