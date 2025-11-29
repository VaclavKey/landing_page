import type { HeadingAndSubheadingProps } from '../../../types/ui/basic'
import styles from './HeadingAndSubheading.module.scss'

export const HeadingAndSubheading = (props: HeadingAndSubheadingProps) => {
  return (
    <div className={styles['heading-and-subheading']} style={props.style}>
      <h2>{props.heading}</h2>
      <p>{props.subheading}</p>
    </div>
  )
}
