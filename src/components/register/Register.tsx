import styles from './register.module.scss'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import router from 'next/router'

export const Register: React.FunctionComponent = () => {
  return (
    <div className={styles.login_container}>
      <div className={styles.login}>
        <div className={styles.login_title}>Регистраия</div>
        <div className={styles.login_block}>
          <Formik
            initialValues={{
              email: '',
              password: '',
              phone: '',
              name: '',
            }}
            onSubmit={(values, { resetForm: any }) => {
              const headers = {
                'Content-Type': 'application/json',
                Authorization: 'Bearer fefege...',
              }
              axios
                .post(
                  `http://api.xoa.macwel.live/sign-up`,
                  {
                    email: values.email,
                    phone: values.phone,
                    password: values.password,
                    name: values.name,
                  },
                  {
                    headers: headers,
                  }
                )
                .then((res) => {
                  if (res.status === 200) {
                    router.push(`/login`)
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
                  <div className={styles.login_block_login}>Имя</div>
                  <div className={styles.login_block_inputGroup}>
                    <Field
                      name="name"
                      autoComplete="name"
                      placheholder="Enter name"
                      type="name"
                    />
                    {errors.email && (
                      <p className={styles.promoTitle}>{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className={styles.login_block}>
                  <div className={styles.login_block_login}>Email</div>
                  <div className={styles.login_block_inputGroup}>
                    <Field
                      name="email"
                      autoComplete="email"
                      placheholder="Enter email"
                      type="email"
                    />
                    {errors.password && (
                      <p className={styles.promoTitle}>{errors.password}</p>
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
                <div className={styles.login_block}>
                  <div className={styles.login_block_login}>Номер телефона</div>
                  <div className={styles.login_block_inputGroup}>
                    <Field
                      name="phone"
                      autoComplete="phone"
                      placheholder="Enter phone"
                      type="text"
                    />
                    {errors.phone && (
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
