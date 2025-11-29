import type { ProcessBlockProps } from '../../../../types/blocks/process'
import { ProcessCard } from './ProcessCard'
import styles from '../styles/ProcessBlock.module.scss'

export const ProcessBlock = ({ cards }: ProcessBlockProps) => {
  return (
    <div className={styles['process-block']}>
      <div className={styles['cards']}>
        {cards.map((card) => (
          <ProcessCard {...card} />
        ))}
      </div>
    </div>
  )
}
