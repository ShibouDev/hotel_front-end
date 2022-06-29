import styles from './register.module.scss'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import Spline from '@splinetool/react-spline';
import regauth from '../../common/img/regauth.jpg'
import * as Yup from 'yup';

const AddContactSchema = Yup.object().shape({
  email: Yup.string()
  .min(8, 'Короткий email!')
  .max(50, 'Слишком длинный email!')
  .required('Введите email'),
  name: Yup.string()
  .min(2, 'Короткое имя!')
  .max(50, 'Длинное имя!')
  .required('Введите имя'),
  password: Yup.string()
  .min(8, 'Короткий пароль!')
  .max(50, 'Слишком длинный пароль!')
  .required('Введите пароль'),
  phone: Yup.string()
  .min(8, 'Короткий номер телефона!')
  .max(50, 'Динный номер телефона!')
  .required('Введите номер телефона'),
});

export const Register = () => {
  return (
    <div className={styles.container}>
    <img src={regauth}></img>
      <div className={styles.login}>
        <div className={styles.login_title}>Регистраия</div>
        <div className={styles.login_block}>
          <Formik
            initialValues={{
              email: '',
              name: '',
              phone: '',
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
                  `http://api.xoa.macwel.live/auth/register`,
                  {
                    email: values.email,
                    name: values.name,
                    telephone: values.phone,
                    password: values.password,
                  },
                  {
                    headers: headers,
                  }
                )
                .then((res) => {
                  if (res.status === 200) {
                      window.location.href= "/"
                  } else {
                  }
                })
                .catch((err) => {
                  console.log(err)
                })
            }}
            
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
                      <p className={styles.promoTitle}>{errors.name}</p>
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
                      <p className={styles.promoTitle}>{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div className={styles.login_actions}>
                  <button>Зарегестрироваться</button>
                  <div className={styles.login_actions_register}>
                    <a href="login">У меня уже есть аккаунт</a>
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
export default Register
