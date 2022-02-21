import styles from './aboutus.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const AboutUs: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_container}>
        <div className={styles.wrapper_container_text}>
          <div className={styles.wrapper_container_text_title}>О нас</div>
          <div className={styles.wrapper_container_text_location}>
            <a href="/" className={styles.wrapper_container_text_location_home}>
              Главная &gt;
            </a>
            <p className={styles.wrapper_container_text_location_rooms}>
              Комнаты
            </p>
          </div>
          <div className={styles.wrapper_container_info}>
            <div className={styles.wrapper_container_info_left}>
              <div className={styles.wrapper_container_info_left_title}>
                <p>Добро пожаловать в Сону!</p>
              </div>
              <div className={styles.wrapper_container_info_left_desc}>
                <p>
                  Этот отель, построенный в 1910 году в эпоху Прекрасной эпохи,
                  расположен в центре Парижа, откуда легко добраться до
                  туристических достопримечательностей города. К услугам гостей
                  со вкусом оформленные номера.
                </p>
              </div>
            </div>
            <div className={styles.wrapper_container_info_right}>
              <ul className={styles.wrapper_container_info_right_table}>
                <li>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  Скидка 20% на проживание
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  Бесплатный Ежедневный Завтрак
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>3 пары
                  постельного белья в день
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  Бесплатный Wifi
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                  Бесплатное питание
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.wrapper_container_img}>
            <div className={styles.wrapper_container_img_block1}>
              <div className={styles.wrapper_container_img_block1_textBlock}>
                <h3>Ресторан</h3>
              </div>
            </div>
            <div className={styles.wrapper_container_img_block2}>
              <div className={styles.wrapper_container_img_block2_textBlock2}>
                <h3>Путешествия & Кемпинг</h3>
              </div>
            </div>
            <div className={styles.wrapper_container_img_block3}>
              <div className={styles.wrapper_container_img_block3_textBlock3}>
                <h3>Мероприятия & Вечеринки</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper_video}>
        <div className={styles.wrapper_video_containerVideo}>
          <div className={styles.wrapper_video_containerVideo_videoText}>
            <h2>Откройте для себя наш отель и услуги.</h2>
            <p>
              Мы предлагаем вам увидеть этот сезон своими глазами в самых лучших
              красках!
            </p>
          </div>
        </div>
      </div>
      {/* <div className={styles.wrapper_gallery}>
        <div className={styles.wrapper_gallery_text}>
          <div className={styles.wrapper_gallery_text_title}>Галерея</div>
          <div className={styles.wrapper_gallery_text_desc}>
            Откройте для себя нашу работу
          </div>
        </div>
        <div className={styles.wrapper_gallery_content}>
          <div className={styles.wrapper_gallery_content_block1}>
            <div className={styles.wrapper_gallery_content_block1_item1}>
              <div className={styles.wrapper_gallery_content_block1_item_text}>
                <h3>VIP Комната</h3>
              </div>
            </div>
          </div>
          <div className={styles.wrapper_gallery_content_block2}></div>
        </div>
      </div> */}
    </div>
  )
}
