import styles from './header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../common/img/logo.webp'
import { slide as Menu } from 'react-burger-menu'
import { Slant as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import axios from 'axios'
import './birger.css'


export const Header = () => {
  const token = localStorage.getItem('token');
  const logout = () => {
    localStorage.removeItem('token')
    window.location.href="/"
  } 

  const [isOpen, setOpen] = useState(false)
  const [setState] = useState(true)
  const showSettings = (data, e) => {
  isOpen = setOpen ? Menu : console.log(1)
  }
  const styled = {
    bmBurgerButton: {
      position: 'absolute',
      width: '33px',
      height: '21px',
      left: '36px',
      top: '30px',
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: 'auto',
      width: '100%',
    },
    bmMenu: {
      // background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column',
    },
    bmItem: {
      display: 'inline-block',
      color: 'white',
      fontWeight: '600',
      paddingTop: '10px'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.6)'
    },
  }
  return (
    <div className={styles.wrapper}>
      <div id='test1' className={styles.wrapper_content}>
        <Burger>
          <Menu styles={ styled } >
            <a id="home" className="menu-item" href="/">Главная</a>
            <a id="about" className="menu-item" href="/rooms">Комнаты</a>
            <a id="contact" className="menu-item" href="/aboutus">О нас</a>
            <a className="menu-item--small" href="/feedback">Обратная связь</a>
            { token ? 
            <a onClick={logout}>Выйти</a>
            : <a href="/login">Авторизация</a>
          }
            </Menu>
        </Burger>
        
        <div id='test2'  className={styles.wrapper_content_headerTop}>
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
            {
              token ? 
              <div className={styles.buttons}>
              <div className={styles.onebutton}>
              <a href="/profile">Профиль</a>
              </div>
              <div >
              <button className={styles.button} onClick={logout}>Выйти</button>
              </div>
              </div> : <a href="/login" className={styles.button}>
              Авторизация
            </a>
            }
            
            
          </div>
        </div>
        <div className={styles.wrapper_content_headerButtom}>
          <div className={styles.wrapper_content_headerButtom_leftHeader}>
            <div
              className={styles.wrapper_content_headerButtom_leftHeader_logo}
            >
              <a href="/">
                <img src={Logo} />
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
                  <a href="Rooms">Комнаты</a>
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
export default Header