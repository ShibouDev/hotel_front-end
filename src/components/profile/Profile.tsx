import styles from './profile.module.scss'
import Image from 'next/image'
import room_miniature1 from '../../common/img/room_miniature1.jpg'
import room_miniature2 from '../../common/img/room_miniature2.jpg'
import room_miniature3 from '../../common/img/room_miniature3.jpg'
import room_miniature4 from '../../common/img/room_miniature4.jpg'
import room_miniature5 from '../../common/img/room_miniature5.jpg'
import room_miniature6 from '../../common/img/room_miniature6.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'
export const Profile: React.FunctionComponent = () => {
  const [token, setToken] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      setToken(window.localStorage.getItem('token'))
    } else {
      setToken(false)
    }
  }, [])

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer fefege...',
  }
  useEffect(() => {
    if (token !== '') {
      axios
        .post(
          `http://127.0.0.1:3231/profile`,
          {
            token,
          },
          {
            headers: headers,
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data.user)
          }
        })
        .catch((err) => {
          console.log(token)
          console.log(err)
        })
    }
  }, [token])
  return (
    <div className={styles.wrapper}>
      {user === '' ? (
        <div>Вы не авторизированы</div>
      ) : (
        <div className={styles.wrapper_content}>
          <div className={styles.wrapper_content_text}>
            <div className={styles.wrapper_content_text_title}>
              Личный кабинет
            </div>
            <div className={styles.wrapper_content_text_name}>
              <p className={styles.wrapper_content_text_name_yourName}>
                Ваше имя: {user.name}
              </p>
              <p className={styles.wrapper_content_text_name_yourName}>
                Номер телефона: {user.phone}
              </p>
              <p className={styles.wrapper_content_text_name_textStyle}>
                Комнаты которые вы забронировали:
              </p>
            </div>
          </div>
          <div className={styles.wrapper_content_roomsSection}>
            <div className={styles.wrapper_content_roomsSection_content}>
              <div className={styles.wrapper_content_roomsSection_content_box}>
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
                    <Image src={room_miniature1}></Image>
                    <div
                      className={
                        styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms
                      }
                    >
                      <h4>Premium King Room</h4>
                      <h3>
                        159$
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
                              Size:
                            </td>
                            <td>30 ft</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Capacity:
                            </td>
                            <td>Max persion 3</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Bed:
                            </td>
                            <td>King Beds</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Services:
                            </td>
                            <td>Wifi, Television, Bathroom,...</td>
                          </tr>
                        </tbody>
                      </table>
                      <a href="roomInfo" className={styles.desc}>
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
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
                    <Image src={room_miniature2}></Image>
                    <div
                      className={
                        styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms
                      }
                    >
                      <h4>Premium King Room</h4>
                      <h3>
                        159$
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
                              Size:
                            </td>
                            <td>30 ft</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Capacity:
                            </td>
                            <td>Max persion 3</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Bed:
                            </td>
                            <td>King Beds</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Services:
                            </td>
                            <td>Wifi, Television, Bathroom,...</td>
                          </tr>
                        </tbody>
                      </table>
                      <a href="#" className={styles.desc}>
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
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
                    <Image src={room_miniature3}></Image>
                    <div
                      className={
                        styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms
                      }
                    >
                      <h4>Premium King Room</h4>
                      <h3>
                        159$
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
                              Size:
                            </td>
                            <td>30 ft</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Capacity:
                            </td>
                            <td>Max persion 3</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Bed:
                            </td>
                            <td>King Beds</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Services:
                            </td>
                            <td>Wifi, Television, Bathroom,...</td>
                          </tr>
                        </tbody>
                      </table>
                      <a href="#" className={styles.desc}>
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
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
                    <Image src={room_miniature4}></Image>
                    <div
                      className={
                        styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms
                      }
                    >
                      <h4>Premium King Room</h4>
                      <h3>
                        159$
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
                              Size:
                            </td>
                            <td>30 ft</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Capacity:
                            </td>
                            <td>Max persion 3</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Bed:
                            </td>
                            <td>King Beds</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Services:
                            </td>
                            <td>Wifi, Television, Bathroom,...</td>
                          </tr>
                        </tbody>
                      </table>
                      <a href="#" className={styles.desc}>
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
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
                    <Image src={room_miniature5}></Image>
                    <div
                      className={
                        styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms
                      }
                    >
                      <h4>Premium King Room</h4>
                      <h3>
                        159$
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
                              Size:
                            </td>
                            <td>30 ft</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Capacity:
                            </td>
                            <td>Max persion 3</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Bed:
                            </td>
                            <td>King Beds</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Services:
                            </td>
                            <td>Wifi, Television, Bathroom,...</td>
                          </tr>
                        </tbody>
                      </table>
                      <a href="#" className={styles.desc}>
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
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
                    <Image src={room_miniature6}></Image>
                    <div
                      className={
                        styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms
                      }
                    >
                      <h4>Premium King Room</h4>
                      <h3>
                        159$
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
                              Size:
                            </td>
                            <td>30 ft</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Capacity:
                            </td>
                            <td>Max persion 3</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Bed:
                            </td>
                            <td>King Beds</td>
                          </tr>
                          <tr>
                            <td
                              className={
                                styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                              }
                            >
                              Services:
                            </td>
                            <td>Wifi, Television, Bathroom,...</td>
                          </tr>
                        </tbody>
                      </table>
                      <a href="#" className={styles.desc}>
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
