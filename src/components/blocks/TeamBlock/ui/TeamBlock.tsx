import type { TeamBlockProps } from '../../../../types/blocks/team'
import { TeamCard } from './TeamCard'
import styles from '../styles/TeamBlock.module.scss'

export const TeamBlock = ({ cards }: TeamBlockProps) => {
  return (
    <div className={styles['team-block']}>
      <div className={styles['cards-block']}>
        <div className={styles['cards']}>
          {cards.map((card, index) => (
            <TeamCard key={index} {...card} />
          ))}
        </div>
        <button className={styles['team-button']} type="button" aria-label="See all team">
          See all team
        </button>
      </div>
    </div>
  )
}
