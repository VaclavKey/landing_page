import { NavigationSection } from './NavigationSection'
import { ContactSection } from './ContactSection'
import { FooterBottom } from './FooterBottom'
import styles from '../styles/FooterBlock.module.scss'

export const FooterBlock = () => {
  return (
    <div className={styles['footer-block']}>
      <footer className={styles['footer']}>
        <div className={styles['navigation-and-contacts']}>
          <NavigationSection />
          <ContactSection />
        </div>

        <button className={styles['team-button']}>See all team</button>

        <FooterBottom />
      </footer>
    </div>
  )
}
