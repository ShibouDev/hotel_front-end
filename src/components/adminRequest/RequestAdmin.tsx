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
          <div className={styles.wrapper_container_header_user}></div>
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
                <p>???????????????????? ??????????????????</p>
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
                          <h4>?????????????? ??????????????</h4>
                          <h3>
                            159$
                            <span>/???? ???????? ????????</span>
                          </h3>
                          <table>
                            <tbody>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ????????????:
                                </td>
                                <td>30 ????</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ??????????????????????:
                                </td>
                                <td>?????????????????????? ?????????? - 3</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ??????????????:
                                </td>
                                <td>?????????????????????? ????????</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ????????????:
                                </td>
                                <td>Wifi, ??????????????????, ??????????,...</td>
                              </tr>
                              <div
                                className={
                                  styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_form
                                }
                              >
                                <p>?????????? ??????????</p>
                                <select>
                                  <option disabled>??????-???? ????????</option>
                                  <option>1 ????????</option>
                                  <option>7 ????????</option>
                                  <option>14 ????????</option>
                                  <option>30 ????????</option>
                                </select>
                                <button>??????????????????????????</button>
                                <button className={styles.delete}>
                                  ?????????????? ?????????????? ???? ????????????
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
                          <h4>???????????????? ??????????????</h4>
                          <h3>
                            67$
                            <span>/???? ???????? ????????</span>
                          </h3>
                          <table>
                            <tbody>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ????????????:
                                </td>
                                <td>20 ????</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ??????????????????????:
                                </td>
                                <td>?????????????????????? ?????????? - 6</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ??????????????:
                                </td>
                                <td>???????????????????????? ??????????????</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ????????????:
                                </td>
                                <td>Wifi, ??????????????????, ??????????,...</td>
                              </tr>
                              <div
                                className={
                                  styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_form
                                }
                              >
                                <p>?????????? ??????????</p>
                                <select>
                                  <option disabled>??????-???? ????????</option>
                                  <option>1 ????????</option>
                                  <option>7 ????????</option>
                                  <option>14 ????????</option>
                                  <option>30 ????????</option>
                                </select>
                                <button>??????????????????????????</button>
                                <button className={styles.delete}>
                                  ?????????????? ?????????????? ???? ????????????
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
                          <h4>???????????? ??????????????</h4>
                          <h3>
                            64$
                            <span>/???? ???????? ????????</span>
                          </h3>
                          <table>
                            <tbody>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ????????????:
                                </td>
                                <td>15 ????</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ??????????????????????:
                                </td>
                                <td>?????????????????????? ?????????? - 2</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ??????????????:
                                </td>
                                <td>???????????????????????? ??????????????</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ????????????:
                                </td>
                                <td>Wifi, ??????????????????, ??????????,...</td>
                              </tr>
                              <div
                                className={
                                  styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_form
                                }
                              >
                                <p>?????????? ??????????</p>
                                <select>
                                  <option disabled>??????-???? ????????</option>
                                  <option>1 ????????</option>
                                  <option>7 ????????</option>
                                  <option>14 ????????</option>
                                  <option>30 ????????</option>
                                </select>
                                <button>??????????????????????????</button>
                                <button className={styles.delete}>
                                  ?????????????? ?????????????? ???? ????????????
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
                          <h4>?????????????? ?????? ???????????????? ????????????</h4>
                          <h3>
                            86$
                            <span>/???? ???????? ????????</span>
                          </h3>
                          <table>
                            <tbody>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ????????????:
                                </td>
                                <td>36 ????</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ??????????????????????:
                                </td>
                                <td>?????????????????????? ?????????? - 8</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ??????????????:
                                </td>
                                <td>???????????????????????? ??????????????</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ????????????:
                                </td>
                                <td>Wifi, ??????????????????, ??????????,...</td>
                              </tr>
                              <div
                                className={
                                  styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_form
                                }
                              >
                                <p>?????????? ??????????</p>
                                <select>
                                  <option disabled>??????-???? ????????</option>
                                  <option>1 ????????</option>
                                  <option>7 ????????</option>
                                  <option>14 ????????</option>
                                  <option>30 ????????</option>
                                </select>
                                <button>??????????????????????????</button>
                                <button className={styles.delete}>
                                  ?????????????? ?????????????? ???? ????????????
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
                          <h4>?????????????? ?????? ????????????</h4>
                          <h3>
                            35$
                            <span>/???? ???????? ????????</span>
                          </h3>
                          <table>
                            <tbody>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ????????????:
                                </td>
                                <td>15 ????</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ??????????????????????:
                                </td>
                                <td>?????????????????????? ?????????? - 1</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ??????????????:
                                </td>
                                <td>?????????????????????? ??????????????</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ????????????:
                                </td>
                                <td>Wifi, ??????????????????, ??????????,...</td>
                              </tr>
                              <div
                                className={
                                  styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_form
                                }
                              >
                                <p>?????????? ??????????</p>
                                <select>
                                  <option disabled>??????-???? ????????</option>
                                  <option>1 ????????</option>
                                  <option>7 ????????</option>
                                  <option>14 ????????</option>
                                  <option>30 ????????</option>
                                </select>
                                <button>??????????????????????????</button>
                                <button className={styles.delete}>
                                  ?????????????? ?????????????? ???? ????????????
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
                          <h4>?????????????? ?? ??????????????????</h4>
                          <h3>
                            125$
                            <span>/???? ???????? ????????</span>
                          </h3>
                          <table>
                            <tbody>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ????????????:
                                </td>
                                <td>35 ????</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ??????????????????????:
                                </td>
                                <td>?????????????????????? ?????????? - 3</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ??????????????:
                                </td>
                                <td>???????????????????????? ??????????????</td>
                              </tr>
                              <tr>
                                <td
                                  className={
                                    styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_tdstyle
                                  }
                                >
                                  ????????????:
                                </td>
                                <td>Wifi, ??????????????????, ??????????,...</td>
                              </tr>
                              <div
                                className={
                                  styles.wrapper_container_tableTop_block_rooms_roomsSection_content_box_block_roomItem_textRooms_form
                                }
                              >
                                <p>?????????? ??????????</p>
                                <select>
                                  <option disabled>??????-???? ????????</option>
                                  <option>1 ????????</option>
                                  <option>7 ????????</option>
                                  <option>14 ????????</option>
                                  <option>30 ????????</option>
                                </select>
                                <button>??????????????????????????</button>
                                <button className={styles.delete}>
                                  ?????????????? ?????????????? ???? ????????????
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
