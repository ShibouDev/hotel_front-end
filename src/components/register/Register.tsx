import styles from './register.module.scss'
import { useRef } from 'react'

export const Register: React.FunctionComponent = () => {
  const passwordEl = useRef(null)
  const logindEl = useRef(null)

  return (
    <div className={styles.login_container}>
      <div className={styles.login}>
        <div className={styles.login_title}>Регистраия</div>
        <div className={styles.login_block}>
          <div className={styles.login_block_login}>Логин</div>
          <div className={styles.login_block_inputGroup}>
            <input ref={logindEl} placeholder="Логин" />
          </div>
        </div>
        <div className={styles.login_block}>
          <div className={styles.login_block_login}>Пароль</div>
          <div className={styles.login_block_inputGroup}>
            <input ref={passwordEl} placeholder="Пароль" />
          </div>
        </div>
        <div className={styles.login_actions}>
          <button>Регистрация</button>
        </div>
      </div>
    </div>
  )
}
