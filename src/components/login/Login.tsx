import styles from './login.module.scss'
import Link from 'next/link'
import { useRef } from 'react'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import router from 'next/router'

export const Login: React.FunctionComponent = () => {
  const passwordEl = useRef(null)
  const logindEl = useRef(null)

  return (
    <div className={styles.login_container}>
      <div className={styles.login}>
        <div className={styles.login_title}>Войти</div>
        <div className={styles.login_block}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values, { resetForm: any }) => {
              const headers = {
                'Content-Type': 'application/json',
                Authorization: 'Bearer fefege...',
              }
              axios
                .post(
                  `http://api.xoa.macwel.live/sign-in`,
                  {
                    email: values.email,
                    password: values.password,
                  },
                  {
                    headers: headers,
                  }
                )
                .then((res) => {
                  if (res.status === 200) {
                    window.localStorage.setItem('token', res.data.token)
                    router.push(`/profile`)
                  }
                })
                .catch((err) => {
                  console.log(err)
                })
            }}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ values, errors }) => (
              <Form>
                <div className={styles.login_block}>
                  <div className={styles.login_block_login}>Логин</div>
                  <div className={styles.login_block_inputGroup}>
                    <Field
                      name="email"
                      autoComplete="email"
                      placheholder="Enter email"
                      type="email"
                    />
                    {errors.email && (
                      <p className={styles.promoTitle}>{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className={styles.login_block}>
                  <div className={styles.login_block_login}>Пароль</div>
                  <div className={styles.login_block_inputGroup}>
                    <Field
                      name="password"
                      autoComplete="password"
                      placheholder="Enter password"
                      type="password"
                    />
                    {errors.password && (
                      <p className={styles.promoTitle}>{errors.password}</p>
                    )}
                  </div>
                </div>
                <div className={styles.login_actions}>
                  <button>Войти</button>
                  <div className={styles.login_actions_register}>
                    <a href="register">Еще не зарегистрированы?</a>
                  </div>
                </div>
              </Form>
            )}
          ></Formik>
        </div>
      </div>
    </div>
  )
}
