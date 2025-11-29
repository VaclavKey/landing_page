import type { FormRadioGroupProps } from '../../../../types/ui/forms'
import { FormRadioButton } from '../FormRadioButton/FormRadioButton'
import styles from './FormRadioGroup.module.scss'

export const FormRadioGroup = (props: FormRadioGroupProps) => {
  return (
    <div className={styles['radio-group']} style={props.style}>
      {props.buttons.map((button, index) => (
        <FormRadioButton 
          key={index}
          label={button.label}
          name={button.name}
          value={button.value}
          checked={button.checked}
          onChange={button.onChange}
        />
      ))}
    </div>
  )
}
