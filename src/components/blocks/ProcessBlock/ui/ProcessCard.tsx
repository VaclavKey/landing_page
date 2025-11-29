import type { ProcessCardProps } from '../../../../types/blocks/process'
import { useState } from 'react'
import plusIcon from '../../../../assets/icons/plus.png'
import minusIcon from '../../../../assets/icons/minus.png'
import styles from '../styles/ProcessCard.module.scss'

export const ProcessCard = ({ index, title, description }: ProcessCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles['process-card']}>
      <div
        className={`${styles['card']} ${isOpen ? styles.open : ''}`}
        style={{ backgroundColor: isOpen ? '#B9FF66' : '#F3F3F3' }}
      >
        <div className={styles['content']}>
          <label className={styles['card-label']}>
            <h1 className={styles['card-index']}>{index}</h1>
            <h3 className={styles['card-title']}>{title}</h3>
          </label>
          <button className={styles['card-button']} onClick={() => setIsOpen(!isOpen)}>
            <img
              className={styles['card-button-icon']}
              src={isOpen ? minusIcon : plusIcon}
              alt={isOpen ? '-' : '+'}
            />
          </button>
        </div>
        <div className={`${styles['inner-content']} ${isOpen ? styles['open'] : ''}`}>
          <hr className={styles['horizontal-line']} />
          <p className={styles['card-description']}>{description}</p>
        </div>
      </div>
    </div>
  )
}
