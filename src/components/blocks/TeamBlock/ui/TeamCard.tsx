import socialIcon from '../../../../assets/social-icons/linkedin-dark.png'
import type { TeamCardProps } from '../../../../types/blocks/team'
import { HorizontalLine } from '../../../ui/HorizontalLine/HorizontalLine'
import { Illustration } from '../../../ui/Illustration/Illustration'
import styles from '../styles/TeamCard.module.scss'

export const TeamCard = ({ avatar, name, position, description }: TeamCardProps) => {
  return (
    <div className={styles['team-card']}>
      <div className={styles['card']}>
        <div className={styles['card-heading']}>
          <Illustration maxWidth={102} src={avatar} alt={name} />
          <label className={styles['card-identity']}>
            <h4 className={styles['card-identity-name']}>{name}</h4>
            <p className={styles['card-identity-position']}>{position}</p>
          </label>
          <Illustration 
            className={styles['social-icon']}
            maxWidth={38} 
            src={socialIcon} 
            alt="Social icon" 
           />
        </div>
        <HorizontalLine />
        <p className={styles['card-description']}>{description}</p>
      </div>
    </div>
  )
}
