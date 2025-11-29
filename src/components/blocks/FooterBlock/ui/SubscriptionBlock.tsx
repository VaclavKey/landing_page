import { useState } from 'react'
import styles from '../styles/SubscriptionBlock.module.scss'

export const SubscriptionBlock = () => {
  const [emailData, setEmailData] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmailData(e.target.value)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email: ', emailData)
  }

  return (
    <div className={styles['subscription-block']}>
      <form className={styles['subscription-form']} onSubmit={handleSubmit}>
        <div className={styles['subscription-form-field']}>
          <input
            className={styles['subscription-form-input']}
            type="email"
            name="email"
            placeholder="Email"
            value={emailData}
            onChange={handleChange}
            required
          />
        </div>

        <button className={styles['subscription-form-submit-button']} type="submit">
          Subscribe to news
        </button>
      </form>
    </div>
  )
}
