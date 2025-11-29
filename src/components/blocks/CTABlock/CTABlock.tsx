import cta_illustration from '../../../assets/illustrations/cta.png'
import styles from './CTABlock.module.scss'

export const CTABlock = () => {
  return (
    <div className={styles['cta-block']}>
      <div className={styles['card']}>
        {/* Main Content */}
        <div className={styles['content']}>
          <h3 className={styles['heading']}>Let’s make things happen</h3>
          <p className={styles['text']}>
            Contact us today to learn more about how our digital marketing services can help your
            business grow and succeed online.
          </p>
          <button
            className={styles['cta-button']}
            type="button"
            aria-label="Get your free proposal"
          >
            Get your free proposal
          </button>
        </div>

        {/* Side-Illustration */}
        <div className={styles['media']}>
          <img
            className={styles['image']}
            src={cta_illustration}
            alt="Team collaboration illustration"
          />
        </div>
      </div>
    </div>
  )
}
