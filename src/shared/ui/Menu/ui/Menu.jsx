import cx from 'classnames'
import styles from './Menu.module.scss'

export const Menu = () => {
  return (
    <ul class={cx(styles.menu)} id='headerMenu'>
      <li>
        <a class={cx(styles.link)} href="/">Home</a>
      </li>
      <li>
        <a class={cx(styles.link)} href="/pages/PageAbout">About us</a>
      </li>
      <li>
        <a class={cx(styles.link)} href="/pages/PageWhatWeDo">What We Do</a>
      </li>
      <li>
        <a class={cx(styles.link)} href="/pages/PageMedia">Media</a>
      </li>
      <li>
        <a class={cx(styles.link)} href="/pages/PageContact">Contact</a>
      </li>
    </ul>
  )
}

export const toggledShowMenu = () => {
  const menu = document.querySelector('#headerMenu');
  menu.classList.toggle(`${styles.isActive}`)
}