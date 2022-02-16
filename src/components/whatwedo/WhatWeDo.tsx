import styles from './whatwedo.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faBabyCarriage } from '@fortawesome/free-solid-svg-icons'
import { faSoap } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'

export const WhatWeDo: React.FunctionComponent = () => {
  return (
    <div id="whatWeDo" className={styles.wrapper}>
      <div className={styles.wrapper_separator}></div>
      <div className={styles.wrapper_content}>
        <div className={styles.wrapper_content_text}>
          <div className={styles.wrapper_content_text_title}>
            Что мы делаем?
          </div>
          <div className={styles.wrapper_content_text_headerText}>
            Откройте для себя наши услуги
          </div>
          <div className={styles.wrapper_content_box}>
            <div className={styles.wrapper_content_box_services}>
              <div className={styles.wrapper_content_box_services_block}>
                <div
                  className={styles.wrapper_content_box_services_block_contents}
                >
                  <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                  <h4>Travel Plan</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
                <div
                  className={styles.wrapper_content_box_services_block_contents}
                >
                  <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>
                  <h4>Catering Service</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
                <div
                  className={styles.wrapper_content_box_services_block_contents}
                >
                  <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>
                  <h4>Catering Service</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
                <div
                  className={styles.wrapper_content_box_services_block_contents}
                >
                  <FontAwesomeIcon icon={faBabyCarriage}></FontAwesomeIcon>
                  <h4>Babysitting</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
                <div
                  className={styles.wrapper_content_box_services_block_contents}
                >
                  <FontAwesomeIcon icon={faSoap}></FontAwesomeIcon>
                  <h4>Laundry</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
                <div
                  className={styles.wrapper_content_box_services_block_contents}
                >
                  <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                  <h4>Hire Driver</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
                <div
                  className={styles.wrapper_content_box_services_block_contents}
                >
                  <FontAwesomeIcon icon={faChampagneGlasses}></FontAwesomeIcon>
                  <h4>Bar & Drink </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
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
