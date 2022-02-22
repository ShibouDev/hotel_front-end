import styles from './feedback.module.scss'

export const Feedback: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_container}>
        <div className={styles.wrapper_container_info}>
          <div className={styles.wrapper_container_info_text}>
            <h2>Обратная связь</h2>
            <p>
              Если у вас появились вопросы вы всегда можете задать их нам! Мы
              всегда рады помогать вам
            </p>
            <table>
              <tbody>
                <tr>
                  <td className={styles.wrapper_container_info_text_co}>
                    Адрес
                  </td>
                  <td>856 Cordia Extension Apt. 356, Lake, US</td>
                </tr>
                <tr>
                  <td className={styles.wrapper_container_info_text_co}>
                    Телефон
                  </td>
                  <td>+79123037544</td>
                </tr>
                <tr>
                  <td className={styles.wrapper_container_info_text_co}>
                    Email
                  </td>
                  <td>info.shibou@gmail.com</td>
                </tr>
                <tr>
                  <td className={styles.wrapper_container_info_text_co}>
                    Факс
                  </td>
                  <td>+79123037544</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.wrapper_container_info_blockForm}>
            <div className={styles.wrapper_container_info_blockForm_name}>
              <input type="text" placeholder="Ваше имя" />
            </div>
            <div className={styles.wrapper_container_info_blockForm_email}>
              <input type="text" placeholder="Email" />
            </div>
            <div className={styles.wrapper_container_info_blockForm_message}>
              <input type="text" placeholder="Ваше сообщение" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
