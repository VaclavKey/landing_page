import type { ServiceCardProps } from '../../../../types/blocks/services'
import { SVG } from '../../../../constants/globals'
import styles from '../styles/ServiceCard.module.scss'

export const ServiceCard = (card: ServiceCardProps) => {
  return (
    <div className={styles['service-card']}>
      <div className={styles['card']} style={{ backgroundColor: card.cardBackgroundColor }}>
        <div className={styles['content']}>
          <div className={styles['composed-title']}>
            {card.texts.map((text, index) => (
              <h3
                className={styles['composed-title-text']}
                key={index}
                style={{ backgroundColor: card.textBackgroundColor }}
              >
                {text}
              </h3>
            ))}
          </div>
          <button className={styles['card-button']} type="button" aria-label="Learn more">
            <svg className={styles['card-button-icon']} viewBox="0 0 40 40" xmlns={SVG}>
              <circle className={styles['svg-circle']} fill={card.buttonArrowOuterColor} />
              <g className={styles['svg-arrow']} stroke={card.buttonArrowInnerColor}>
                <path d="M12 24 L29 14" />
                <path d="M16 11 L29 14 L26 26" />
              </g>
            </svg>
            <span className={styles['card-button-text']} style={{ color: card.buttonTextColor }}>
              Learn more
            </span>
          </button>
        </div>
        <div className={styles['media']}>
          <img className={styles['image']} src={card.image} alt={card.texts[0]} loading="lazy" />
        </div>
      </div>
    </div>
  )
}
