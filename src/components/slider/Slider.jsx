import styles from './slider.module.scss'
import background from '../../common/img/background-1.jpg'
import Logo from '../../common/img/logoWhite.jpg'

export const Slider = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_content}>
        <div className={styles.wrapper_content_background}>
          <img src={background} />
          <div className={styles.wrapper_content_background_text}>
            <div className={styles.wrapper_content_background_text_block}>
              <div
                className={styles.wrapper_content_background_text_block_textAll}
              >
                <div
                  className={
                    styles.wrapper_content_background_text_block_textAll_title
                  }
                >
                  <p>Sona A Luxury Hotel</p>
                </div>
                <div
                  className={
                    styles.wrapper_content_background_text_block_textAll_desc
                  }
                >
                  <p>
                    Лучший отель для самого запоминающегося путешествия.
                    <p> Sona A Luxury Hotel - любовь которую вы заслужили.</p>
                  </p>
                </div>
                <div
                  className={
                    styles.wrapper_content_background_text_block_textAll_button
                  }
                >
                  <a href="#whatWeDo">Узнать сейчас</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Slider