import type { FormSubmitButtonProps } from '../../../../types/ui/forms'
import styles from './FormSubmitButton.module.scss'

export const FormSubmitButton = (props: FormSubmitButtonProps) => {
  return (
    <button className={styles['submit-button']} type="submit" style={props.style}>
      {props.text}
    </button>
  )
}
