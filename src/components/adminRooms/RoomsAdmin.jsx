import styles from './adminRooms.module.scss'
import { SideBar } from '../sidebar/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'
export const AdminRooms = () => {
  const [room, setRoom] = useState([])
  const [token, setToken] = useState(window.localStorage.getItem('token'))
  const del = (id,e) => {
    axios
    .post(`/room/delete`, {id},{
      headers: {
        "Authorization": token
      }
    })
    .then((res) => {
      if(res.status === 200){
        setRoom(res.data.rooms)
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(() => {
    !token && (window.location.href = ('/'))
  }, [])
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
  useEffect(() => {
    axios
    .get(`/room/gets`)
    .then((res) => {
      if (res.status === 200) {
        setRoom(res.data.rooms)
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
                <p>Комнаты</p>
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
                <div className={styles.table_content_roomsSection}>
          <div className={styles.table_content_roomsSection_content}>
            <div className={styles.table_content_roomsSection_content_box}>
            {room.length !== 0 ? (
            room.map((el) => (
              <div
                className={
                  styles.table_content_roomsSection_content_box_block
                }
              >
                <div
                  className={
                    styles.table_content_roomsSection_content_box_block_roomItem
                  }
                >
                  <img src={el.img}></img>
                  <div
                    className={
                      styles.table_content_roomsSection_content_box_block_roomItem_textRooms
                    }
                  >
                    <h4>{el.name}</h4>
                    <h3>
                      {el.cost}$
                      <span>/За одну ночь</span>
                    </h3>
                    <table>
                      <tbody>
                        <tr>
                          <td
                            className={
                              styles.table_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Размер:
                          </td>
                          <td>{el.size} м²</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.table_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Вместимость:
                          </td>
                          <td>Максимально людей - {el.capacity}</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.table_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Кровать:
                          </td>
                          <td>{el.bed}</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.table_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Услуги:
                          </td>
                          <td>Wifi, Телевизор, Ванна,...</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className={styles.buttonDesc}>
                    <a onClick={del.bind(this,el._id)} className={styles.buttonDesc_delete}>
                      Удалить
                    </a>
                    <a href={`/Room/${el._id}`} className={styles.buttonDesc_fullInfo}>
                      Полная информация
                    </a>
                    </div>
                    </div>
                  </div>
                  </div>
                  ))
    ) : (
      <div></div>
    )}
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
export default AdminRooms