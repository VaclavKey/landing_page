import { SubscriptionBlock } from './SubscriptionBlock'
import styles from '../styles/ContactSection.module.scss'

export const ContactSection = () => {
  return (
    <section className={styles['contact-section']}>
      <div className={styles['contact-block']}>
        <h4 className={styles['contact-heading']}>Contact us:</h4>

        <div className={styles['contact-info']}>
          <p className={styles['contact-info-text']}>Email: info@positivus.com</p>
          <p className={styles['contact-info-text']}>Phone: 555-567-8901</p>
          <p className={styles['contact-info-text']}>
            {`Address: 1234 Main St \nMoonstone City, Stardust State 12345`}
          </p>
        </div>
      </div>

      <SubscriptionBlock />
    </section>
  )
}
