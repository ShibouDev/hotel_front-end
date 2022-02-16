import styles from './room.module.scss'

export const Room: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_content}>
        <div className={styles.wrapper_content_block}>
          <div className={styles.wrapper_content_block_items}>
            <div className={styles.wrapper_content_block_items_item}>
              <div className={styles.wrapper_content_block_items_item_bg}>
                <div
                  className={styles.wrapper_content_block_items_item_bg_text}
                >
                  <h3>Double Room</h3>
                  <h2>
                    199$
                    <span>/Pernight</span>
                  </h2>
                </div>
              </div>
              <div className={styles.wrapper_content_block_items_item_bg}>
                <div
                  className={styles.wrapper_content_block_items_item_bg_text}
                >
                  <h3>Double Room</h3>
                  <h2>
                    199$
                    <span>/Pernight</span>
                  </h2>
                </div>
              </div>
              <div className={styles.wrapper_content_block_items_item_bg}>
                <div
                  className={styles.wrapper_content_block_items_item_bg_text}
                >
                  <h3>Double Room</h3>
                  <h2>
                    199$
                    <span>/Pernight</span>
                  </h2>
                </div>
              </div>
              <div className={styles.wrapper_content_block_items_item_bg}>
                <div
                  className={styles.wrapper_content_block_items_item_bg_text}
                >
                  <h3>Double Room</h3>
                  <h2>
                    199$
                    <span>/Pernight</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
