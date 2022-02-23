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
            <button type="submit">Отправить</button>
          </div>
          <div className={styles.wrapper_container_info_maps}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75060.86647034707!2d-118.30866158188985!3d33.754128042021485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z0JvQvtGBLdCQ0L3QtNC20LXQu9C10YEsINCa0LDQu9C40YTQvtGA0L3QuNGPLCDQodCo0JA!5e0!3m2!1sru!2sru!4v1645627779573!5m2!1sru!2sru"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
