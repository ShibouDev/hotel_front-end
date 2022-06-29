import styles from './aboutus.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Popup from 'reactjs-popup';
import Play from '../../svg/play.svg'
import "../../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import styleOverlay from './overlay.css'
import hotel from '../../common/video/hotel.mp4'
export const AboutUs = () => {
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
              О нас
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
                  расположен в центре Лос-Анджелеса, откуда легко добраться до
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
            <Popup trigger={<img src={Play} style={{width:'100px', height: '170px', paddingTop: '50px'}}></img>}
            modal
            lockScroll
            overlayStyle={styleOverlay}>
            
              {close=> (
                <Player
                playsInline
                fluid={false}
                width={1000}
                height={600}
                autoPlay
                poster="/assets/poster.png"
                src={hotel}
                />
              )}
            </Popup>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs
