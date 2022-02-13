import styles from './header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import logo from '@common/img/logo.webp'

export const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_content}>
        <div className={styles.wrapper_content_headerTop}>
          <div className={styles.wrapper_content_headerTop_left}>
            <div className={styles.wrapper_content_headerTop_left_number}>
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              <p>+79123037544</p>
            </div>
            <div className={styles.wrapper_content_headerTop_left_mail}>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              <p>info.shibou@gmail.com</p>
            </div>
          </div>
          <div className={styles.wrapper_content_headerTop_social}>
            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faVk}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </div>
          <div className={styles.wrapper_content_headerTop_bookingNow}>
            <a href="#" className={styles.button}>
              Booking Now
            </a>
          </div>
        </div>
        <div className={styles.wrapper_content_headerButtom}>
          <div className={styles.wrapper_content_headerButtom_leftHeader}>
            <div
              className={styles.wrapper_content_headerButtom_leftHeader_logo}
            >
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
