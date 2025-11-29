import { Header } from './Header'
import { Logotypes } from './Logotypes'
import styles from '../styles/LandingPageBlock.module.scss'

export const LandingPageBlock = () => {
  return (
    <div className={styles['landing-page-block']}>
      <div className={styles['content']}>
        <Header />
        <Logotypes />
      </div>
    </div>
  )
}
