import { LOGOTYPES_LIST_ITEMS } from '../../../../constants/logotypesListItems'
import styles from '../styles/Logotypes.module.scss'

export const Logotypes = () => {
  return (
    <div className={styles['logotypes']}>
      <div className={styles['content']}>
        <ul className={styles['logotypes-list']}>
          {LOGOTYPES_LIST_ITEMS.map((item) => (
            <li className={styles['logo']}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <div className={styles['media']}>
                  <img className={styles['image']} src={item.src} alt={item.alt} />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
