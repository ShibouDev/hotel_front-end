import styles from './room.module.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const Room: React.FunctionComponent = () => {
  const [rooms, setRoom] = useState([])
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3231/rooms`)
      .then((res) => {
        if (res.status === 200) {
          setRoom(res.data.rooms)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_content}>
        <div className={styles.wrapper_content_block}>
          <div className={styles.wrapper_content_block_items}>
            <div className={styles.wrapper_content_block_items_item}>
              {/* проверка на пустоту массива */}
              {rooms.length !== 0 ? (
                // разбираем массив для получение каждого элемента массива
                rooms.map((el) => (
                  <div className={styles.wrapper_content_block_items_item_bg}>
                    <div
                      className={
                        styles.wrapper_content_block_items_item_bg_text
                      }
                    >
                      {/* Выводим название комнаты из элемента массива */}
                      <h3>{el.name}</h3>
                      <h2>
                        {/* Выводим цену комнаты из элемента массива */}
                        {el.cost} $<span>/Pernight</span>
                      </h2>
                    </div>
                  </div>
                ))
              ) : (
                <div>Свободных комнат нет</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
//
