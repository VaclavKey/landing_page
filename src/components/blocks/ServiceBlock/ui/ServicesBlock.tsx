import type { ServicesBlockProps } from '../../../../types/blocks/services'
import { ServiceCard } from './ServiceCard'
import styles from '../styles/ServicesBlock.module.scss'

export const ServicesBlock = ({ cards }: ServicesBlockProps) => {
  return (
    <div className={styles['services-block']}>
      <div className={styles['cards']}>
        {cards.map((card, index) => (
          <ServiceCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}
