import type { IllustrationProps } from '../../../types/ui/basic'
import styles from './Illustration.module.scss'

export const Illustration = (props: IllustrationProps) => {
  return (
    <div className={styles['media']}>
      <img 
        className={props.className} 
        style={props.style} 
        src={props.src} 
        alt={props.alt} 
      />
    </div>
  )
}
