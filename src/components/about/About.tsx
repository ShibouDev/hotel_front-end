import styles from './about.module.scss'
import image1 from '@common/img/image1.webp'
import image2 from '@common/img/image2.webp'

export const About: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_content}>
        <div className={styles.wrapper_content_text}>
          <div className={styles.wrapper_content_text_title}>О нас</div>
          <div className={styles.wrapper_content_text_headerText}>
            <p>США</p> <p>Отель в Лос-Анджелесе</p>
          </div>
          <div className={styles.wrapper_content_text_desc}>
            <p>
              Sona A Luxury Hotel - это отель премиум класса. Мы предоставляем
              возможность выбрать комнату, чтобы ваши впечатления от отдыха были
              самыми яркими. Выбирайте дату которая вам удобна, а все остальное
              мы сделаем за вас.
            </p>
            <p>
              Когда когда дело доходит до бронирования идеального отеля, жилья
              для отпуска, курорта, апартаментов, гостевого дома или дома на
              дереве, мы поможем вам.
            </p>
          </div>
          <div className={styles.wrapper_content_text_button}>
            <a href="aboutUs">
              <p>Читать далее</p>
            </a>
          </div>
        </div>
        <div className={styles.wrapper_content_image}>
          <div className={styles.wrapper_content_image_imageOne}>
            <img src={image1.src}></img>
          </div>
          <div className={styles.wrapper_content_image_imageTwo}>
            <img src={image2.src}></img>
          </div>
        </div>
      </div>
    </div>
  )
}
