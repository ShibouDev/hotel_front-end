import styles from './adminIndex.module.scss'
import { useEffect, useState } from 'react'
import { SideBar } from '../sidebar/Sidebar'
import axios from 'axios'
import { push } from 'react-burger-menu'
export const AdminIndex = () => {
  const [activeBlock, setActiveBlock] = useState(2)
  const [reqCounter, setReqCounter] = useState(null)
  const [reqCounterFinall, setreqCounterFinall] = useState(null)
  const [reqCounterCall, setreqCounterCall] = useState(null)
  const [token, setToken] = useState(window.localStorage.getItem('token'))
  useEffect(() => {
    !token && (window.location.href = ('/'))
  }, [])
    const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  }
    axios
    .post(`/admin/check`,{

    },
    {
      headers,
    }).then((res) =>  {
      if(res.status === 200){
        // window.location.href=('/admin')
        }
      })
      .catch((err) =>{
        window.location.href=('/')
      })
  axios
    .post(
      `http://api.xoa.macwel.live/admin/stats`,
      {},
      {
        headers,
      }
    )
    .then((res) => {
      if (res.status === 200) {
        setReqCounter(res.data.rentRooms)
        setreqCounterFinall(res.data.freeRooms)
      }
    })
    .catch((err) => {
      console.log(1)
    })
  return (
    <div className={styles.indexWrapper}>
      <SideBar />
      <div className={styles.indexWrapper_Overview}>
        <div className={styles.indexWrapper_Overview_header}>
          <div className={styles.indexWrapper_Overview_header_user}></div>
        </div>
        <div className={styles.indexWrapper_Overview_content}>
          <div className={styles.indexWrapper_Overview_content_description}>
            <div
              onClick={() => setActiveBlock(1)}
              className={
                activeBlock === 1
                  ? `${styles.indexWrapper_Overview_content_description_block} && ${styles.activeBlock}`
                  : styles.indexWrapper_Overview_content_description_block
              }
            >
              <p>Забронированных комнат</p>
              <p>{reqCounter}</p>
            </div>
            <div
              onClick={() => setActiveBlock(2)}
              className={
                activeBlock === 2
                  ? `${styles.indexWrapper_Overview_content_description_block} && ${styles.activeBlock}`
                  : styles.indexWrapper_Overview_content_description_block
              }
            >
              <p>Cвободных комнат</p>
              <p>{reqCounterFinall}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AdminIndex
