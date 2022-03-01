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
          <div className={styles.wrapper_content_text_title}>Услуги</div>
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
                  <h4>План путешествия</h4>
                  <p>
                    Мы готовы помочь вам в составлении плана вашего путешествия. Множество экскурсий, которые принесут вам незабываемые впечатления.
                  </p>
                </div>
                <div
                  className={styles.wrapper_content_box_services_block_contents}
                >
                  <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>
                  <h4>Питание</h4>
                  <p>
                    6-ти разовое питание никогда не оставит вас голодным. Любая еда на ваш вкус.
                  </p>
                </div>

                <div
                  className={styles.wrapper_content_box_services_block_contents}
                >
                  <FontAwesomeIcon icon={faBabyCarriage}></FontAwesomeIcon>
                  <h4>Присмотр за ребенком</h4>
                  <p>
                    Мы всегда сможем присмотреть за вашим ребенком. Детская игровая комната не даст вашему ребенку заскучать, а проффесиональные няни всегда смогут позабоиться о вашем ребенке.
                  </p>
                </div>
                <div
                  className={styles.wrapper_content_box_services_block_contents}
                >
                  <FontAwesomeIcon icon={faSoap}></FontAwesomeIcon>
                  <h4>Водные процедуры</h4>
                  <p>
                    В нашем отеле вы найдете лучшие водные процедуры: баня, хаммам, джакузи, 8 бассеинов по всей территории отеля.
                  </p>
                </div>
                <div
                  className={styles.wrapper_content_box_services_block_contents}
                >
                  <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                  <h4>Личный досуг</h4>
                  <p>
                    У нас предусмотрены комнаты для личного досуга, бизнесс встреч, а так же комната где можно отдохнуть от шума и движения.
                  </p>
                </div>
                <div
                  className={styles.wrapper_content_box_services_block_contents}
                >
                  <FontAwesomeIcon icon={faChampagneGlasses}></FontAwesomeIcon>
                  <h4>Бар & Алкоголь </h4>
                  <p>
                    Бар расположен возле бассеина. В баре вы сможете найти алкоголь на свой вкус. Бармены сделают вам любой коктель который вы попросите.
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
