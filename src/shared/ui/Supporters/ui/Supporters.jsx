import cx from 'classnames'
import styles from './Supporters.module.scss'
import logo1 from '/images/logos/logo-1.svg'
import logo2 from '/images/logos/logo-2.svg'
import logo3 from '/images/logos/logo-3.svg'
import logo4 from '/images/logos/logo-4.svg'
import logo5 from '/images/logos/logo-5.svg'
import logo6 from '/images/logos/logo-6.svg'

export const Supporters = () => {
  return (
    <div class={cx(styles.root)}>
      <header>
        <span>our Supporters</span>
      </header>
      <ul class={cx(styles.list)}>
        <li class={cx(styles.item)}>
          <img src={logo1} alt="logoipsum" />
        </li>
        <li class={cx(styles.item)}>
          <img src={logo2} alt="logoipsum" />
        </li>
        <li class={cx(styles.item)}>
          <img src={logo3} alt="logoipsum" />
        </li>
        <li class={cx(styles.item)}>
          <img src={logo4} alt="logoipsum" />
        </li>
        <li class={cx(styles.item)}>
          <img src={logo5} alt="logoipsum" />
        </li>
        <li class={cx(styles.item)}>
          <img src={logo6} alt="logoipsum" />
        </li>
      </ul>
    </div>
  )
}