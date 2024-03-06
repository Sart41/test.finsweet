import { Nav } from '../../../shared/ui/Nav'
import { Logo } from '../../../shared/ui/logo'
import styles from './Header.module.scss'
import cx from 'classnames'


export const Header = () => {
  return (
    <header class={cx(styles.header)}>
      <div class={cx('__container', styles.header)}>
        <Logo />
        <Nav />
      </div>
    </header>
  )
}