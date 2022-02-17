import styles from './login.module.scss'
import Link from 'next/link'
import { useRef } from 'react'

export const Login: React.FunctionComponent = () => {
  const passwordEl = useRef(null)
  const logindEl = useRef(null)

  return (
    <div className={styles.login_container}>
      <div className={styles.login}>
        <div className={styles.login_title}>Войти</div>
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
          <button>Войти</button>
          <div className={styles.login_actions_register}>
            <a href="register">Еще не зарегистрированы?</a>
          </div>
        </div>
      </div>
    </div>
  )
}
