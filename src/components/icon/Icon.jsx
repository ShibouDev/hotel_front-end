import * as React from 'react'
import * as icons from './icons'




/**
 * Icon
 */
export const Icon = ({ name, className }) => {
  const { viewBox, id } = icons[name]
  return (
    // <span className={`${styles.icon} ${styles[`icon--${size}`]}`}>
    <span className={`${className}`}>
      <svg viewBox={viewBox}>
        <use xlinkHref={`#${id}`} href={`#${id}`} />
      </svg>
    </span>
  )
}
export default Icon
