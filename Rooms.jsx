import styles from './rooms.module.scss'
import room_miniature1 from '../../common/img/room_miniature1.jpg'
import room_miniature2 from '../../common/img/room_miniature2.jpg'
import room_miniature3 from '../../common/img/room_miniature3.jpg'
import room_miniature4 from '../../common/img/room_miniature4.jpg'
import room_miniature5 from '../../common/img/room_miniature5.jpg'
import room_miniature6 from '../../common/img/room_miniature6.jpg'
import Room from '../room/Room'

export const Rooms = () => {
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
                  <img src={room_miniature1}></img>
                  <div
                    className={
                      styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms
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
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Размер:
                          </td>
                          <td>30 м²</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Вместимость:
                          </td>
                          <td>Максимально людей - 3</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Кровать:
                          </td>
                          <td>Королевская ложа</td>
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
                    <a href="Room" className={styles.desc}>
                      Полная информация
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
                  <img src={room_miniature2}></img>
                  <div
                    className={
                      styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms
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
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Размер:
                          </td>
                          <td>20 м²</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Вместимость:
                          </td>
                          <td>Максимально людей - 6</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Кровать:
                          </td>
                          <td>Двухспальные кровати</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Услуги:
                          </td>
                          <td>Wifi, Телевизор, Ванная,...</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#" className={styles.desc}>
                      Полная информация
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
                  <img src={room_miniature3}></img>
                  <div
                    className={
                      styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms
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
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Размер:
                          </td>
                          <td>15 м²</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Вместимость:
                          </td>
                          <td>Максимально людей - 2</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Кровать:
                          </td>
                          <td>Двухспальная кровать</td>
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
                    <a href="#" className={styles.desc}>
                      Полная информация
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
                  <img src={room_miniature4}></img>
                  <div
                    className={
                      styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms
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
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Размер:
                          </td>
                          <td>36 м²</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Вместимость:
                          </td>
                          <td>Максимально людей - 8</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Кровать:
                          </td>
                          <td>Двухспальные кровати</td>
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
                    <a href="#" className={styles.desc}>
                      Полная информация
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
                  <img src={room_miniature5}></img>
                  <div
                    className={
                      styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms
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
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Размер:
                          </td>
                          <td>15 м²</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Вместимость:
                          </td>
                          <td>Максимально людей - 1</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Кровать:
                          </td>
                          <td>Одноместная кровать</td>
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
                    <a href="#" className={styles.desc}>
                      Полная информация
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
                  <img src={room_miniature6}></img>
                  <div
                    className={
                      styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms
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
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Размер:
                          </td>
                          <td>35 м²</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Вместимость:
                          </td>
                          <td>Максимально людей - 3</td>
                        </tr>
                        <tr>
                          <td
                            className={
                              styles.wrapper_content_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                            }
                          >
                            Кровать:
                          </td>
                          <td>Двухспальные кровати</td>
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
                    <a href="#" className={styles.desc}>
                      Полная информация
                    </a>
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
export default Room
