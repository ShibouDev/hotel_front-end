import styles from './roomInfo.module.scss'
import Image from 'next/image'
import room_info1 from '../../common/img/room_info1.jpg'

export const RoomInfo: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_content}>
        <div className={styles.wrapper_content_text}>
          <div className={styles.wrapper_content_text_title}>Our Rooms</div>
          <div className={styles.wrapper_content_text_location}>
            <a href="/" className={styles.wrapper_content_text_location_home}>
              Home &gt;
            </a>
            <p className={styles.wrapper_content_text_location_rooms}>Rooms</p>
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
                <Image src={room_info1}></Image>
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
                    <h3>Premium King Room</h3>
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
                        <a href="login">Booking Now</a>
                      </div>
                    </div>
                  </div>
                  <h2>
                    159$
                    <span>/Pernight</span>
                  </h2>
                  <table>
                    <tbody>
                      <tr>
                        <td
                          className={
                            styles.wrapper_roomDetails_content_block_box_info_text_tdStyle
                          }
                        >
                          Size:
                        </td>
                        <td>30 ft</td>
                      </tr>
                      <tr>
                        <td
                          className={
                            styles.wrapper_roomDetails_content_block_box_info_text_tdStyle
                          }
                        >
                          Capacity:
                        </td>
                        <td>Max persion 3</td>
                      </tr>
                      <tr>
                        <td
                          className={
                            styles.wrapper_roomDetails_content_block_box_info_text_tdStyle
                          }
                        >
                          Bed:
                        </td>
                        <td>King Beds</td>
                      </tr>
                      <tr>
                        <td
                          className={
                            styles.wrapper_roomDetails_content_block_box_info_text_tdStyle
                          }
                        >
                          Services:
                        </td>
                        <td>Wifi, Television, Bathroom,...</td>
                      </tr>
                    </tbody>
                  </table>
                  <p
                    className={
                      styles.wrapper_content_roomsSection_content_block_box_info_text_textP
                    }
                  >
                    Motorhome or Trailer that is the question for you. Here are
                    some of the advantages and disadvantages of both, so you
                    will be confident when purchasing an RV. When comparing Rvs,
                    a motorhome or a travel trailer, should you buy a motorhome
                    or fifth wheeler? The advantages and disadvantages of both
                    are studied so that you can make your choice wisely when
                    purchasing an RV. Possessing a motorhome or fifth wheel is
                    an achievement of a lifetime. It can be similar to
                    sojourning with your residence as you search the various
                    sites of our great land, America.
                  </p>
                  <p
                    className={
                      styles.wrapper_content_roomsSection_content_block_box_info_text_textP2
                    }
                  >
                    The two commonly known recreational vehicle classes are the
                    motorized and towable. Towable rvs are the travel trailers
                    and the fifth wheel. The rv travel trailer or fifth wheel
                    has the attraction of getting towed by a pickup or a car,
                    thus giving the adaptability of possessing transportation
                    for you when you are parked at your campsite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
