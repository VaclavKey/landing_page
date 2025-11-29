import type { HorizontalLineProps } from '../../../types/ui/basic'
import styles from './HorizontalLine.module.scss'

export const HorizontalLine = (props: HorizontalLineProps) => {
  return <div className={styles['horizontal-line']} style={props.style} />
}
