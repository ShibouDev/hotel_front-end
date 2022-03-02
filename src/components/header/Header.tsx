import styles from './header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Logo from '@common/img/logo.webp'
import Image from 'next/image'

export const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_content}>
        <div className={styles.wrapper_content_headerTop}>
          <div className={styles.wrapper_content_headerTop_left}>
            <div className={styles.wrapper_content_headerTop_left_number}>
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              <a href="tel:+79123037544">+79123037544</a>
            </div>
            <div className={styles.wrapper_content_headerTop_left_mail}>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              <a
                href="mailto:info.shibou@gmail.com?subject=Sona%20a%20Luxuru%20hotel%20Support%20Me!&body=please%2C%20help%20me!"
                target="_blank"
                className={styles.wrapper_content_headerTop_left_mail_mailP}
              >
                info.shibou@gmail.com
              </a>
            </div>
          </div>
          <div className={styles.wrapper_content_headerTop_social}>
            <a href="https://facebook.com/" className={styles.link}>
              <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
            </a>
            <a href="https://twitter.com/" className={styles.link}>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
            <a href="https://vk.com/" className={styles.link}>
              <FontAwesomeIcon icon={faVk}></FontAwesomeIcon>
            </a>
            <a href="https://instagram.com/" className={styles.link}>
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
          </div>
          <div className={styles.wrapper_content_headerTop_bookingNow}>
            <a href="login" className={styles.button}>
              Авторизация
            </a>
          </div>
        </div>
        <div className={styles.wrapper_content_headerButtom}>
          <div className={styles.wrapper_content_headerButtom_leftHeader}>
            <div
              className={styles.wrapper_content_headerButtom_leftHeader_logo}
            >
              <a href="/">
                <Image src={Logo} />
              </a>
            </div>
          </div>
          <div className={styles.wrapper_content_headerButtom_navMenu}>
            <div
              className={styles.wrapper_content_headerButtom_navMenu_mainMenu}
            >
              <ul>
                <li>
                  <a href="/">Главная</a>
                </li>
                <li>
                  <a href="rooms">Комнаты</a>
                </li>
                <li>
                  <a href="aboutUs">О нас</a>
                </li>
                <li>
                  <a href="feedback">Обратная связь</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
