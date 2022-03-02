import styles from './request.module.scss'
import { SideBar } from '@components/sidebar/Sidebar'
import { useEffect, useState } from 'react'
import router from 'next/router'
import axios from 'axios'
import Image from 'next/image'
import room_miniature1 from '../../common/img/room_miniature1.jpg'
import room_miniature2 from '../../common/img/room_miniature2.jpg'
import room_miniature3 from '../../common/img/room_miniature3.jpg'
import room_miniature4 from '../../common/img/room_miniature4.jpg'
import room_miniature5 from '../../common/img/room_miniature5.jpg'
import room_miniature6 from '../../common/img/room_miniature6.jpg'

export const Request: React.FunctionComponent = () => {
  const [reqs, setReqs] = useState([])
  const [token, setToken] = useState(null)
  useEffect(() => {
    return setToken(window.localStorage.getItem('token'))
  }, [])

  useEffect(() => {
    !window.localStorage.getItem('token') && router.push('/admin/auth')
  }, [])
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
  useEffect(() => {
    axios
      .post(
        `http://api.xoa.macwel.live/admin/requests`,
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
          <div className={styles.wrapper_container_header_title}>
            <p>Комнаты</p>
          </div>
          <div className={styles.wrapper_container_header_user}>
            <div className={styles.wrapper_container_header_user_nameUser}>
              <p>Admin</p>
            </div>
            <div
              className={styles.wrapper_container_header_user_iconUser}
            ></div>
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
                <p>Управление комнатами</p>
              </div>
            </div>
            <div className={styles.wrapper_container_tableTop_block_rooms}>
              <div
                className={
                  styles.wrapper_container_tableTop_block_rooms_roomsSection
                }
              >
                <div
                  className={
                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content
                  }
                >
                  <div
                    className={
                      styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box
                    }
                  >
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block
                      }
                    >
                      <div
                        className={
                          styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem
                        }
                      >
                        <Image src={room_miniature1}></Image>
                        <div
                          className={
                            styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms
                          }
                        >
                          <h4>Премиум комната</h4>
                          <h3>
                            159$
                            <span>/За одну ночь</span>
                          </h3>
                          <table>
                            <tbody>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Размер:
                                </td>
                                <td>30 м²</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Вместимость:
                                </td>
                                <td>Максимально людей - 3</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Кровать:
                                </td>
                                <td>Королевская ложа</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Услуги:
                                </td>
                                <td>Wifi, Телевизор, Ванна,...</td>
                              </tr>
                              <div
                                className={
                                  styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_form
                                }
                              >
                                <p>Время брони</p>
                                <select>
                                  <option disabled>Кол-во дней</option>
                                  <option>1 день</option>
                                  <option>7 дней</option>
                                  <option>14 дней</option>
                                  <option>30 дней</option>
                                </select>
                                <button>Забронировать</button>
                                <button className={styles.delete}>
                                  Удалить комнату из списка
                                </button>
                              </div>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block
                      }
                    >
                      <div
                        className={
                          styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem
                        }
                      >
                        <Image src={room_miniature2}></Image>
                        <div
                          className={
                            styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms
                          }
                        >
                          <h4>Семейная комната</h4>
                          <h3>
                            67$
                            <span>/За одну ночь</span>
                          </h3>
                          <table>
                            <tbody>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Размер:
                                </td>
                                <td>20 м²</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Вместимость:
                                </td>
                                <td>Максимально людей - 6</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Кровать:
                                </td>
                                <td>Двухспальные кровати</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Услуги:
                                </td>
                                <td>Wifi, Телевизор, Ванна,...</td>
                              </tr>
                              <div
                                className={
                                  styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_form
                                }
                              >
                                <p>Время брони</p>
                                <select>
                                  <option disabled>Кол-во дней</option>
                                  <option>1 день</option>
                                  <option>7 дней</option>
                                  <option>14 дней</option>
                                  <option>30 дней</option>
                                </select>
                                <button>Забронировать</button>
                                <button className={styles.delete}>
                                  Удалить комнату из списка
                                </button>
                              </div>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block
                      }
                    >
                      <div
                        className={
                          styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem
                        }
                      >
                        <Image src={room_miniature3}></Image>
                        <div
                          className={
                            styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms
                          }
                        >
                          <h4>Парная комната</h4>
                          <h3>
                            64$
                            <span>/За одну ночь</span>
                          </h3>
                          <table>
                            <tbody>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Размер:
                                </td>
                                <td>15 м²</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Вместимость:
                                </td>
                                <td>Максимально людей - 2</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Кровать:
                                </td>
                                <td>Двухспальная кровать</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Услуги:
                                </td>
                                <td>Wifi, Телевизор, Ванна,...</td>
                              </tr>
                              <div
                                className={
                                  styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_form
                                }
                              >
                                <p>Время брони</p>
                                <select>
                                  <option disabled>Кол-во дней</option>
                                  <option>1 день</option>
                                  <option>7 дней</option>
                                  <option>14 дней</option>
                                  <option>30 дней</option>
                                </select>
                                <button>Забронировать</button>
                                <button className={styles.delete}>
                                  Удалить комнату из списка
                                </button>
                              </div>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block
                      }
                    >
                      <div
                        className={
                          styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem
                        }
                      >
                        <Image src={room_miniature4}></Image>
                        <div
                          className={
                            styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms
                          }
                        >
                          <h4>Комната для компании друзей</h4>
                          <h3>
                            86$
                            <span>/За одну ночь</span>
                          </h3>
                          <table>
                            <tbody>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Размер:
                                </td>
                                <td>36 м²</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Вместимость:
                                </td>
                                <td>Максимально людей - 8</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Кровать:
                                </td>
                                <td>Двухспальные кровать</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Услуги:
                                </td>
                                <td>Wifi, Телевизор, Ванна,...</td>
                              </tr>
                              <div
                                className={
                                  styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_form
                                }
                              >
                                <p>Время брони</p>
                                <select>
                                  <option disabled>Кол-во дней</option>
                                  <option>1 день</option>
                                  <option>7 дней</option>
                                  <option>14 дней</option>
                                  <option>30 дней</option>
                                </select>
                                <button>Забронировать</button>
                                <button className={styles.delete}>
                                  Удалить комнату из списка
                                </button>
                              </div>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block
                      }
                    >
                      <div
                        className={
                          styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem
                        }
                      >
                        <Image src={room_miniature5}></Image>
                        <div
                          className={
                            styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms
                          }
                        >
                          <h4>Комната для одного</h4>
                          <h3>
                            35$
                            <span>/За одну ночь</span>
                          </h3>
                          <table>
                            <tbody>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Размер:
                                </td>
                                <td>15 м²</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Вместимость:
                                </td>
                                <td>Максимально людей - 1</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Кровать:
                                </td>
                                <td>Одноместная кровать</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Услуги:
                                </td>
                                <td>Wifi, Телевизор, Ванна,...</td>
                              </tr>
                              <div
                                className={
                                  styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_form
                                }
                              >
                                <p>Время брони</p>
                                <select>
                                  <option disabled>Кол-во дней</option>
                                  <option>1 день</option>
                                  <option>7 дней</option>
                                  <option>14 дней</option>
                                  <option>30 дней</option>
                                </select>
                                <button>Забронировать</button>
                                <button className={styles.delete}>
                                  Удалить комнату из списка
                                </button>
                              </div>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block
                      }
                    >
                      <div
                        className={
                          styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem
                        }
                      >
                        <Image src={room_miniature6}></Image>
                        <div
                          className={
                            styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms
                          }
                        >
                          <h4>Комната с бассеином</h4>
                          <h3>
                            125$
                            <span>/За одну ночь</span>
                          </h3>
                          <table>
                            <tbody>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Размер:
                                </td>
                                <td>35 м²</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Вместимость:
                                </td>
                                <td>Максимально людей - 3</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Кровать:
                                </td>
                                <td>Двухспальные кровати</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  Услуги:
                                </td>
                                <td>Wifi, Телевизор, Ванна,...</td>
                              </tr>
                              <div
                                className={
                                  styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_form
                                }
                              >
                                <p>Время брони</p>
                                <select>
                                  <option disabled>Кол-во дней</option>
                                  <option>1 день</option>
                                  <option>7 дней</option>
                                  <option>14 дней</option>
                                  <option>30 дней</option>
                                </select>
                                <button>Забронировать</button>
                                <button className={styles.delete}>
                                  Удалить комнату из списка
                                </button>
                              </div>
                            </tbody>
                          </table>
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
    </div>
  )
}
