import type { FormInputFieldProps } from '../../../../types/ui/forms'
import styles from './FormInputField.module.scss'

export const FormInputField = (props: FormInputFieldProps) => {
  return (
    <div className={styles['input-field']} style={props.style}>
      {props.label && (
        <label
          className={`${styles['input-label']} ${props.required ? styles['required'] : styles['']}`}
          htmlFor={props.name}
        >
          {props.label}
        </label>
      )}

      <input
        className={styles['input']}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </div>
  )
}
