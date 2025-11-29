import { HorizontalLine } from '../../../ui/HorizontalLine/HorizontalLine'
import { Link } from 'react-router-dom'
import styles from '../styles/FooterBottom.module.scss'

export const FooterBottom = () => {
  return (
    <div className={styles['footer-bottom']}>
      <HorizontalLine style={{ backgroundColor: '#FFFFFF'}} />

      <div className={styles['copyright-and-policy']}>
        <p className={styles['copyright-and-policy-text']}>
          © 2023 Positivus. All Rights Reserved.
        </p>
        <Link
          to="/privacy_policy"
          className={`${styles['copyright-and-policy-text']} ${styles['policy-text']}`}
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}
