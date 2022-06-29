import styles from './login.module.scss'
// import Link from 'next/link'
import { useRef } from 'react'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import regauth from '../../common/img/regauth.jpg'
import * as Yup from 'yup';

const AddContactSchema = Yup.object().shape({
    email: Yup.string()
    .min(8, 'Короткий email!')
    .max(50, 'Слишком длинный email!')
    .required('Введите email'),
    password: Yup.string()
    .min(8, 'Короткий пароль!')
    .max(50, 'Слишком длинный пароль!')
    .required('Введите пароль'),
});

export const Login = () => {
  
  return (
    <div className={styles.container}>
    <img src={regauth}></img>
      <div className={styles.login}>
        <div className={styles.login_title}>Войти</div>
        <div className={styles.login_block}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={AddContactSchema}
            onSubmit={(values, { setErrors, resetForm: any }) => {
              const headers = {
                'Content-Type': 'application/json',
                Authorization: 'Bearer fefege...',
              }
              axios
                .post(
                  `http://api.xoa.macwel.live/auth/login`,
                  {
                    email: values.email,
                    password: values.password,
                  },
                  {
                    headers,
                  }
                )
                .then((res) => {
                  if (res.status === 200) {
                    window.localStorage.setItem('token', res.data.token)
                    window.localStorage.setItem('user', JSON.stringify(res.data.user))
                    window.location.href="/"
                  }

                })
                .catch((err) => {
                  const a = JSON.parse(err.request.response)
                  setErrors({msg: a.message})
                })
            }}
            render={({ values, errors }) => (
              <Form>
                <div className={styles.login_block}>
                  <div className={styles.login_block_login}>Email</div>
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
                  {errors.msg && (
                      <p className={styles.promoTitle}>{errors.msg}</p>
                    )}
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
export default Login
