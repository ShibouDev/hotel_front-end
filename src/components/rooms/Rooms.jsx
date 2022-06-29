import styles from './rooms.module.scss'
import room_miniature1 from '../../common/img/room_miniature1.jpg'
import room_miniature2 from '../../common/img/room_miniature2.jpg'
import room_miniature3 from '../../common/img/room_miniature3.jpg'
import room_miniature4 from '../../common/img/room_miniature4.jpg'
import room_miniature5 from '../../common/img/room_miniature5.jpg'
import room_miniature6 from '../../common/img/room_miniature6.jpg'
import { useState, useEffect } from 'react'
import axios from 'axios'
export const Rooms = () => {
  const [room, setRoom] = useState([])
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
  }, [])
  return (
    <div className={styles.wrapper}>
      
      <div className={styles.wrapper_content}>
        <div className={styles.wrapper_content_text}>
          <div className={styles.wrapper_content_text_title}>Все комнаты</div>
          <div className={styles.wrapper_content_text_location}>
            <a href="/" className={styles.wrapper_content_text_location_home}>
              Главная &gt;
            </a>
            <p className={styles.wrapper_content_text_location_rooms}>
              Комнаты
            </p>
          </div>
        </div>
        
        <div className={styles.wrapper_content_roomsSection}>
          <div className={styles.wrapper_content_roomsSection_content}>
            <div className={styles.wrapper_content_roomsSection_content_box}>
            {room.length !== 0 ? (
        room.map((el) => (
              <div
                className={
                  styles.wrapper_content_roomsSection_content_box_block
                }
              >
                <div
                  className={
                    styles.wrapper_content_roomsSection_content_box_block_roomItem
                  }
                >
                  <img src={el.img}></img>
                  <div
                    className={
                      styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms
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
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Размер:
                          </td>
                          <td>{el.size} м²</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Вместимость:
                          </td>
                          <td>Максимально людей - {el.capacity}</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Кровать:
                          </td>
                          <td>{el.bed}</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Услуги:
                          </td>
                          <td>Wifi, Телевизор, Ванна,...</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href={`/Room/${el._id}`} className={styles.desc}>
                      Полная информация
                    </a>
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
  )
    }
    export default Rooms