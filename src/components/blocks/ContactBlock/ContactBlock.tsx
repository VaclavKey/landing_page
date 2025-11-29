import type { ContactFormFields } from '../../../types/formFields'
import { useState } from 'react'
import type { FormRadioButtonProps } from '../../../types/ui/forms'
import { FormRadioGroup } from '../../ui/form/FormRadioGroup/FormRadioGroup'
import { FormInputField } from '../../ui/form/FormInputField/FormInputField'
import { FormTextAreaField } from '../../ui/form/FormTextAreaField/FormTextAreaField'
import { FormSubmitButton } from '../../ui/form/FormSubmitButton/FormSubmitButton'
import { Illustration } from '../../ui/Illustration/Illustration'
import contact_illustration from '../../../assets/illustrations/contact.png'
import styles from './ContactBlock.module.scss'

export const ContactBlock = () => {
  const [formData, setFormData] = useState<ContactFormFields>({
    inquiryType: 'say-hi',
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data:', formData)
  }

  const radioButtons: FormRadioButtonProps[] = [
    {
      label: 'Say hi',
      name: 'inquiryType',
      value: 'say-hi',
      checked: formData.inquiryType === 'say-hi',
      onChange: handleRadioChange,
    },
    {
      label: 'Get a Quote',
      name: 'inquiryType',
      value: 'get-quote',
      checked: formData.inquiryType === 'get-quote',
      onChange: handleRadioChange,
    }
  ]

  return (
    <div className={styles['contact-block']}>
      <div className={styles['card']}>
        <form className={styles['contact-form']} onSubmit={handleSubmit}>
          
          {/* Radio-Buttons */}
          <FormRadioGroup
            buttons={radioButtons}
          />

          {/* Input-Fields */}
          <div className={styles['fields']}>
            <FormInputField
              label="Name"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required={false}
            />
            <FormInputField
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FormTextAreaField
              label="Message"
              name="message"
              placeholder="Message"
              rows={8}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit-Button */}
          <FormSubmitButton text="Send Message" />
        </form>

        {/* Side-Illustration */}
        <Illustration className={styles['image']} src={contact_illustration} alt="Illustration" />
      </div>
    </div>
  )
}
