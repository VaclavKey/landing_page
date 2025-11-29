import type { FormTextAreaFieldProps } from '../../../../types/ui/forms'
import styles from './FormTextAreaField.module.scss'

export const FormTextAreaField = (props: FormTextAreaFieldProps) => {
  return (
    <div className={styles['textarea-field']} style={props.style}>
      {props.label && (
        <label
          className={`${styles['input-label']} ${props.required ? styles['required'] : styles['']}`}
          htmlFor={props.name}
        >
          {props.label}
        </label>
      )}

      <textarea
        className={styles['textarea']}
        name={props.name}
        placeholder={props.placeholder}
        rows={props.rows}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </div>
  )
}
