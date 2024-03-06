import { toggledShowMenu } from '../../../Menu'
import styles from './ButtonBurger.module.scss'

import cx from 'classnames'

export const ButtonBurger = () => {
  return (
    <button
      class={cx(styles.burger)}
      aria-label="Open menu"
      aria-expanded="false"
      id='burger'
      onClick={handleOnClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

  )
}

const handleOnClick = () => {
  const burger = document.querySelector('#burger');

  burger.classList.toggle(`${styles.active}`)
  toggledShowMenu()
}