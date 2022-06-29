import styles from './sidebar.module.scss'
import Logo from '../../common/img/logoWhite.jpg'
import overview from '../icon/icons/overview.svg'
import tickets from '../icon/icons/tickets.svg'
import settings from '../icon/icons/settings.svg'
import { useLocation } from "react-router-dom";
import { Router } from 'react-router-dom';
export const SideBar = () => {
  const location = useLocation();
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_title}>
      <img src={Logo}/>
      </div>
      <div className={styles.sidebar_items}>
        <div
          className={
            location.pathname === '/admin'
              ? `${styles.sidebar_items_overwiew} &&
            ${styles.activePage}
            `
              : styles.sidebar_items_overwiew
          }
          onClick={() => window.location.href =('/admin')}
        >
          <img src={overview} className={styles.icon} />
          Обзор
        </div>
        <div
          className={
            location.pathname === '/admin/rooms'
              ? `${styles.sidebar_items_request} &&
                    ${styles.activePage}
                  `
              : styles.sidebar_items_request
          }
          onClick={() => window.location.href =('/admin/rooms')}
        >
          <img src={tickets} className={styles.icon} />
          Комнаты
        </div>
        
      </div>
    </div>
  )
}
export default SideBar
