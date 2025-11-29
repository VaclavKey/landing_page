interface BaseFormProps {
  label?: string
  name?: string
  value?: string | number | readonly string[]
  required?: boolean
  style?: React.CSSProperties
}

export interface FormRadioGroupProps {
  readonly buttons: readonly FormRadioButtonProps[]
  style?: React.CSSProperties
}

export interface FormRadioButtonProps extends BaseFormProps {
  checked?: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export interface FormInputFieldProps extends BaseFormProps {
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export interface FormTextAreaFieldProps extends BaseFormProps {
  rows?: number
  placeholder?: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

export interface FormSubmitButtonProps {
  text: string
  style?: React.CSSProperties
}