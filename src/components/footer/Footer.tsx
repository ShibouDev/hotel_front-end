import styles from './footer.module.scss'
import Logo from '@common/img/logoWhite.jpg'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

export const Footer: React.FunctionComponent = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerWrapper_container}>
        <div className={styles.footerWrapper_container_text}>
          <div className={styles.footerWrapper_container_text_block}>
            <div className={styles.footerWrapper_container_text_block_about}>
              <div
                className={styles.footerWrapper_container_text_block_about_logo}
              >
                <a href="#">
                  <Image src={Logo}></Image>
                </a>
              </div>
              <div
                className={styles.footerWrapper_container_text_block_about_desk}
              >
                <p>Лучший отель для самого запоминающегося путешествия.</p>
                <p>Sona A Luxury Hotel - любовь которую вы заслужили</p>
              </div>
              <div
                className={
                  styles.footerWrapper_container_text_block_about_social
                }
              >
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faVk}></FontAwesomeIcon>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className={styles.footerWrapper_container_text_block_contact}>
              <h6>Связаться с нами</h6>
              <ul>
                <li>+79123037544</li>
                <li>info.shibou@gmail.com</li>
                <li>856 Cordia Extension Apt. 356, Lake, United State</li>
              </ul>
            </div>
            <div
              className={styles.footerWrapper_container_text_block_newLatest}
            >
              <h6>Последние обновления</h6>
              <p>Получать последние обновления на почту</p>
              <form
                action="#"
                className={
                  styles.footerWrapper_container_text_block_newLatest_form
                }
              >
                <input type="text" placeholder="Email"></input>
                <button type="submit">
                  <FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerWrapper_copyright}>
        <div className={styles.footerWrapper_copyright_containerCopyright}>
          <div
            className={
              styles.footerWrapper_copyright_containerCopyright_content
            }
          >
            <div
              className={
                styles.footerWrapper_copyright_containerCopyright_content_textLeft
              }
            >
              <ul>
                <li>
                  <a href="terms">Условия пользования</a>
                </li>
                <li>
                  <a href="#">Приватность</a>
                </li>
                <li>
                  <a href="cookies">Использование cookies</a>
                </li>
              </ul>
            </div>
            <div
              className={
                styles.footerWrapper_copyright_containerCopyright_content_textRight
              }
            >
              <div
                className={
                  styles.footerWrapper_copyright_containerCopyright_content_textRight_terms
                }
              >
                <p>Copyright © 2022 All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
