import styles from './slider.module.scss'
import background from '@common/img/background-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Slider: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_content}>
        <div className={styles.wrapper_content_background}>
          <img src={background.src} />
          <div className={styles.wrapper_content_background_text}>
            <div className={styles.wrapper_content_background_text_block}>
              <div
                className={styles.wrapper_content_background_text_block_textAll}
              >
                <div
                  className={
                    styles.wrapper_content_background_text_block_textAll_title
                  }
                >
                  <p>Sona A Luxury Hotel</p>
                </div>
                <div
                  className={
                    styles.wrapper_content_background_text_block_textAll_desc
                  }
                >
                  <p>
                    Лучший отель для самого запоминающегося путешествия.
                    <p> Sona A Luxury Hotel - любовь которую вы заслужили.</p>
                  </p>
                </div>
                <div
                  className={
                    styles.wrapper_content_background_text_block_textAll_button
                  }
                >
                  <a href="#whatWeDo">Узнать сейчас</a>
                </div>
              </div>
              <div
                className={
                  styles.wrapper_content_background_text_block_bookingForm
                }
              >
                <h3>Забронировать номер</h3>
                <form action="#">
                  <div
                    className={
                      styles.wrapper_content_background_text_block_bookingForm_checkDate
                    }
                  >
                    <label for="date-in">Дата въезда:</label>
                    <input
                      type="text"
                      class="date-input hasDatepicker"
                      id="date-in"
                    ></input>
                  </div>
                  <div
                    className={
                      styles.wrapper_content_background_text_block_bookingForm_checkDate
                    }
                  >
                    <label for="date-in">Дата выезда:</label>
                    <input
                      type="text"
                      className="date-input hasDatepicker"
                      id="date-out"
                    ></input>
                  </div>
                  <div
                    className={
                      styles.wrapper_content_background_text_block_bookingForm_selectOption
                    }
                  >
                    <label for="guest">кол-во человек:</label>

                    <div className={styles.select_open}>
                      <select>
                        <option value="">1 человек </option>
                        <option value="">2 человека </option>
                        <option value="">3 человека</option>
                        <option value="">4 человека</option>
                      </select>
                    </div>
                  </div>
                  <div
                    className={
                      styles.wrapper_content_background_text_block_bookingForm_selectOption
                    }
                  >
                    <label for="guest">Кол-во комнат:</label>

                    <div className={styles.select_open}>
                      <select>
                        <option value="">1 комната</option>
                        <option value="">2 комнаты</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
