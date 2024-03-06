import { Menu } from '../../Menu'
import { Button } from '../../buttons/Button'
import { ButtonBurger } from '../../buttons/ButtonBurger'

import styles from './Nav.module.scss'
import cx from 'classnames'

export const Nav = () => {
  return (
    <nav class={cx(styles.nav)}>
      <Menu />
      <Button
        mode="dark"
        text='Donate'
        className="headerBtn"
      />
      <ButtonBurger />
    </nav>
  )
}