import styles from './profile.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
export const Profile = () => {
  const [token, setToken] = useState('')
  const [user, setUser] = useState([])
  const [name, setName] = useState({})
  const [phone, setPhone] = useState({})

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      setToken(window.localStorage.getItem('token'))
      setName(JSON.parse(window.localStorage.getItem('user')).name)
      setPhone(JSON.parse(window.localStorage.getItem('user')).telephone)
    } else {
      window.location.href = '/';
    }
  }, [])
  useEffect(() => {
    if (token !== '') {
      axios
        .post(
          `/room/getRentRoom`,
          {},
          {
            headers: {
              "Authorization": token,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data.rooms)
          }
        })
        .catch((err) => {
        })
    }
  }, [token])

  const cancelRent = (e) => {
    axios
        .post(
          `/room/cancelRentRoom`,
          {
            roomId: e.target.id,
          },
          {
            headers: {
              "Authorization": token,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            window.location.reload()
          }
        })
        .catch((err) => {
        })
  }
  return (
    <div className={styles.wrapper}>
      { !token ? (
        <div>Вы не авторизированы</div>
      ) : (
        <div className={styles.wrapper_content}>
          <div className={styles.wrapper_content_text}>
            <div className={styles.wrapper_content_text_title}>
              Личный кабинет
            </div>
            <div className={styles.wrapper_content_text_name}>
              <p className={styles.wrapper_content_text_name_yourName}>
                Ваше имя: {name}
              </p>
              <p className={styles.wrapper_content_text_name_yourName}>
                Номер телефона: {phone}
              </p>
              <p className={styles.wrapper_content_text_name_textStyle}>
                Комнаты которые вы забронировали:
              </p>
            </div>
          </div>
          <div className={styles.wrapper_content_roomsSection}>
            <div className={styles.wrapper_content_roomsSection_content}>
              <div className={styles.wrapper_content_roomsSection_content_box}>
              { user ? 
                user.map(el => (
                  (
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
                    <img src={el.roomId.img}></img>
                    <div
                      className={
                        styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms
                      }
                    >
                      <h4>{el.roomId.name}</h4>
                      <h3>
                        {el.roomId.cost}$
                        <span>/Pernight</span>
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
                            <td>{el.roomId.size} м²</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Кол-во персон:
                            </td>
                            <td>{el.count}</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Кровать:
                            </td>
                            <td>{el.roomId.bed}</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Услуги:
                            </td>
                            <td>Wifi, Television, Bathroom,...</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Дата заселения:
                            </td>
                            <td>{el.checkInDate}</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Дата выселения:
                            </td>
                            <td>{el.checkOutDate}</td>
                          </tr>
                        </tbody>
                      </table>
                      <button type="button" id={el._id} onClick={cancelRent.bind()} className={styles.desc}>
                        Отменить бронирование
                      </button>
                    </div>
                  </div>
                </div>
              )
                )) : (
                  <div>Забронированных комнат нет</div>
                )
                
              }
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Profile
