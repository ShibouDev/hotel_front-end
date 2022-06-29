import styles from './settings.module.scss'
import { SideBar } from '../sidebar/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'
export const AdminSettings = () => {
  const [reqs, setReqs] = useState([])
  const [token, setToken] = useState(null)
  useEffect(() => {
    return setToken(window.localStorage.getItem('token'))
  }, [])

  useEffect(() => {
  }, [])
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
  useEffect(() => {
    axios
      .post(
        `http://api.xoa.macwel.live/admin/getSettings`,
        {},
        {
          headers,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setReqs(res.data.requests)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [token])
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.wrapper_container}>
        <div className={styles.wrapper_container_header}>
          <div className={styles.wrapper_container_header_user}>
          </div>
        </div>
        <div className={styles.wrapper_container_tableTop}>
          <div className={styles.wrapper_container_tableTop_block}>
            <div
              className={styles.wrapper_container_tableTop_block_headerBlock}
            >
              <div
                className={
                  styles.wrapper_container_tableTop_block_headerBlock_text
                }
              >
                <p>Настройки администраторов</p>
              </div>
              <div
                className={
                  styles.wrapper_container_tableTop_block_headerBlock_sort
                }
              >
                <p></p>
              </div>
            </div>
            <div className={styles.table}>
              <div className={styles.table_content}>
                <div className={styles.table_content_blockVisible}>
                  <div className={styles.table_content_blockVisible_info}>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    <p>Иванов Дмитрий Ильич</p>
                  </div>
                  <div
                    className={`${styles.table_content_blockVisible_info} ${styles.table_content_blockVisible_active}`}
                  >
                    <div
                      className={styles.table_content_blockVisible_active_func}
                    >
                     
                      <div
                        className={
                          styles.table_content_blockVisible_active_func_delete
                        }
                      >
                        <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                        <p>Удалить</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AdminSettings