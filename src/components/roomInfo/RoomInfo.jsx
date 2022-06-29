import styles from './roomInfo.module.scss'
import room_info1 from '../../common/img/room_info1.jpg'
import Popup from 'reactjs-popup';
import React, { useEffect,useState } from 'react';
import styleOverlay from './overlay.css'
import axios from 'axios';


export const RoomInfo = (id) => {
  const token = localStorage.getItem('token');
  const [room, setRoom] = useState([])
  useEffect(() => {
    axios
    .get(`/room/get?id=${id.id}`)
    .then((res) => {
      if (res.status === 200) {
        // console.log(res.data.room)
        setRoom(res.data.room)
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const sendForm = (e) => {
    e.preventDefault()
    axios
    .post(`/room/rent`,{
      roomId: id.id,
      count: e.target.count.value,
      checkInDate: e.target.entry.value,
      checkOutDate: e.target.Departure.value
    },{
      headers: {
        "Authorization": token
      }
    })
    .then((res) => {
      if (res.status === 200) {
        window.location.href = '/profile'
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_content}>
        <div className={styles.wrapper_content_text}>
          <div className={styles.wrapper_content_text_title}>
            Полная информация о комнате
          </div>
          <div className={styles.wrapper_content_text_location}>
            <a
              href="rooms"
              className={styles.wrapper_content_text_location_home}
            >
              Комнаты &gt;
            </a>
            <p className={styles.wrapper_content_text_location_rooms}>
              Полная информация о комнате
            </p>
          </div>
        </div>
      </div>
      <div className={styles.wrapper_roomDetails}>
        <div className={styles.wrapper_roomDetails_content}>
          <div className={styles.wrapper_roomDetails_content_block}>
            <div className={styles.wrapper_roomDetails_content_block_box}>
              <div
                className={styles.wrapper_roomDetails_content_block_box_info}
              >
                <img src={room.img}></img>
                <div
                  className={
                    styles.wrapper_roomDetails_content_block_box_info_text
                  }
                >
                  <div
                    className={
                      styles.wrapper_roomDetails_content_block_box_info_text_title
                    }
                  >
                    <h3>{room.name}</h3>
                    <div
                      className={
                        styles.wrapper_roomDetails_content_block_box_info_text_title_right
                      }
                    >
                      <div
                        className={
                          styles.wrapper_roomDetails_content_block_box_info_text_title_right_bookingNow
                        }
                      >
                      </div>
                    </div>
                  </div>
                  <h2>
                    {room.cost}$
                    <span>/за ночь</span>
                  </h2>
                  <table>
                    <tbody>
                      <tr>
                        <td
                          className={
                            styles.wrapper_roomDetails_content_block_box_info_text_tdStyle
                          }
                        >
                          Размер:
                        </td>
                        <td>{room.size} м2</td>
                      </tr>
                      <tr>
                        <td
                          className={
                            styles.wrapper_roomDetails_content_block_box_info_text_tdStyle
                          }
                        >
                          Вместимость:
                        </td>
                        <td> {room.capacity} человек</td>
                      </tr>
                      <tr>
                        <td
                          className={
                            styles.wrapper_roomDetails_content_block_box_info_text_tdStyle
                          }
                        >
                          Кровать:
                        </td>
                        <td>{room.bed}</td>
                      </tr>
                      <tr>
                        <td
                          className={
                            styles.wrapper_roomDetails_content_block_box_info_text_tdStyle
                          }
                        >
                          Услуги:
                        </td>
                        <td>Wifi, ТВ, Ванна,...</td>
                      </tr>
                    </tbody>
                  </table>
                  <p
                    className={
                      styles.wrapper_content_roomsSection_content_block_box_info_text_textP
                    }
                  >
                    {room.desc}
                  </p>
                  <div className={styles.buttonPop}>
                  {
                    token ? (<Popup trigger={<button className={styles.button}>Забронировать</button>}
                        modal
                        nested
                        overlayStyle={styleOverlay}
                        >
                          {close=> (
                            <div className={styles.modal}>
                              <button className={styles.modal_close} onClick={close}>
                              &times;
                              </button>
                              <div className={styles.modal_headerModal}>Бронирование</div>
                              <form onSubmit={sendForm} className={styles.modal_contentModal}>
                                <select name='count'>
                                  <option disabled>Кол-во человек</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                </select>
                                <div className={styles.input1}>
                                <p>Выберите дату заселения</p>
                                <input type="date" name="entry" min="2022-06-13">
                                </input>
                                </div>
                                <div className={styles.input2}>
                                <p>Выберите дату высиления</p>
                                <input type="date" name="Departure" min="2022-06-13"></input>
                                </div>
                                <button style={{marginTop: '10px', borderRadius: '5px', border:"none", background:'#19191a', color:'white'}} type="submit">Забронировать</button>
                              </form>
                            </div>
                          )}
                        </Popup>) : (<div></div>)
                  }
                  
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
export default RoomInfo
