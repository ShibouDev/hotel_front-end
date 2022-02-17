import styles from './rooms.module.scss'
import Image from 'next/image'
import room_miniature1 from '../../common/img/room_miniature1.jpg'
import room_miniature2 from '../../common/img/room_miniature2.jpg'
import room_miniature3 from '../../common/img/room_miniature3.jpg'
import room_miniature4 from '../../common/img/room_miniature4.jpg'
import room_miniature5 from '../../common/img/room_miniature5.jpg'
import room_miniature6 from '../../common/img/room_miniature6.jpg'

export const Rooms: React.FunctionComponent = () => {
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
