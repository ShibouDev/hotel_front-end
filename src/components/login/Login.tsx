import styles from './login.module.scss'
import Link from 'next/link'
import { useRef } from 'react'

export const Login: React.FunctionComponent = () => {
  const passwordEl = useRef(null)
  const logindEl = useRef(null)

  return (
    <div className={styles.login_container}>
      <div className={styles.login}>
        <div className={styles.login_title}>Login</div>
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
          <button>Войти</button>
          <div className={styles.login_actions_register}>
            <a href="register">Еще не зарегистрированы?</a>
          </div>
        </div>
      </div>
    </div>
  )
}
