import type { CaseStudyBlockProps } from '../../../../types/blocks/caseStudy'
import { CaseStudyCard } from './CaseStudyCard'
import { SVG } from '../../../../constants/globals'
import styles from '../styles/CaseStudiesBlock.module.scss'
import React from 'react'

export const CaseStudiesBlock = ({ cards }: CaseStudyBlockProps) => {
  return (
    <div className={styles['case-studies-block']}>
      <div className={styles['cards']}>
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            <CaseStudyCard text={card.text} />

            {/* Card-Separator */}
            {index !== cards.length - 1 && <svg className={styles['vertical-line']} xmlns={SVG} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
