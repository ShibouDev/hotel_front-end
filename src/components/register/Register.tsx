import styles from './register.module.scss'
import { useRef } from 'react'

export const Register: React.FunctionComponent = () => {
  const passwordEl = useRef(null)
  const logindEl = useRef(null)

  return (
    <div className={styles.login_container}>
      <div className={styles.login}>
        <div className={styles.login_title}>Register</div>
        <div className={styles.login_block}>
          <div className={styles.login_block_login}>Login</div>
          <div className={styles.login_block_inputGroup}>
            <input ref={logindEl} placeholder="login" />
          </div>
        </div>
        <div className={styles.login_block}>
          <div className={styles.login_block_login}>Password</div>
          <div className={styles.login_block_inputGroup}>
            <input ref={passwordEl} placeholder="password" />
          </div>
        </div>
        <div className={styles.login_actions}>
          <button>Регистрация</button>
        </div>
      </div>
    </div>
  )
}
