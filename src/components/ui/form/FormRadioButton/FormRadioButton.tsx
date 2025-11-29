import type { FormRadioButtonProps } from '../../../../types/ui/forms'
import styles from './FormRadioButton.module.scss'

export const FormRadioButton = (props: FormRadioButtonProps) => {
  return (
    <label className={styles['radio-label']} style={props.style}>
      <input
        className={styles['radio-button']}
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      <span className={styles['radio-button-text']}>{props.label}</span>
    </label>
  )
}
