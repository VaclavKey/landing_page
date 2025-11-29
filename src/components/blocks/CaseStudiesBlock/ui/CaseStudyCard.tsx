import type { CaseStudyCardProps } from '../../../../types/blocks/caseStudy'
import { SVG } from '../../../../constants/globals'
import styles from '../styles/CaseStudyCard.module.scss'

export const CaseStudyCard = ({ text }: CaseStudyCardProps) => {
  return (
    <div className={styles['case-study-card']}>
      <div className={styles['card']}>
        <p className={styles['text']}>{text}</p>
        <button className={styles['card-button']} type="button" aria-label="Learn more">
          <span className={styles['card-button-text']}>Learn more</span>
          <svg className={styles['card-button-icon']} viewBox="0 0 40 40" xmlns={SVG}>
            <g className={styles['svg-arrow']}>
              <path d="M12 24 L29 14" />
              <path d="M16 11 L29 14 L26 26" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}
