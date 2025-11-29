import { Illustration } from '../../../ui/Illustration/Illustration'
import headerIllustration from '../../../../assets/illustrations/header.png'
import styles from '../styles/Header.module.scss'

export const Header = () => {
  return (
    <div className={styles['header']}>
      <div className={styles['content']}>
        <div className={styles['texts']}>
          <h1 className={styles['title']}>Navigating the digital landscape for success</h1>
          <p className={styles['description']}>
            Our digital marketing agency helps businesses grow and succeed online through a range of
            services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className={styles['consult-button']}>Book a consultation</button>
        </div>
        <Illustration
          className={styles['image']}
          maxWidth={600}
          src={headerIllustration}
          alt="Header Illustration"
        />
      </div>
    </div>
  )
}
