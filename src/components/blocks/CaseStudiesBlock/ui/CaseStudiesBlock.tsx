import type { CaseStudyBlockProps } from '../../../../types/blocks/caseStudy'
import { CaseStudyCard } from './CaseStudyCard'
import { SVG } from '../../../../constants/globals'
import styles from '../styles/CaseStudiesBlock.module.scss'

export const CaseStudiesBlock = ({ cards }: CaseStudyBlockProps) => {
  return (
    <div className={styles['case-studies-block']}>
      <div className={styles['cards']}>
        {cards.map((card, index) => (
          <>
            <CaseStudyCard key={index} text={card.text} />

            {/* Card-Separator */}
            {index !== cards.length - 1 && <svg className={styles['vertical-line']} xmlns={SVG} />}
          </>
        ))}
      </div>
    </div>
  )
}
