import cx from 'classnames'
import styles from './Footer.module.scss'
import imgUrl from '/images/icons/logo-white.svg'
import { Input } from '../../../shared/ui/input'
import { ButtonSubmit } from '../../../shared/ui/buttons/ButtonSubmit/ui/ButtonSubmit'

export const Footer = () => {
  return (
    <section class={cx(styles.footer)}>
      <div class="__container">
        <div class={cx(styles.inner)}>
          <a class={cx(styles.logo)} href="/">
            <img src={imgUrl} alt="logo" />
          </a>
          <nav>
            <div class={cx(styles.navItem)}>
              <span>Our team</span>
              <ul>
                <li><a href="#!">About us</a></li>
                <li><a href="#!">Team</a></li>
                <li><a href="#!">What we do</a></li>
                <li><a href="#!">Contact</a></li>
              </ul>
            </div>
            <div class={cx(styles.navItem)}>
              <span>More</span>
              <ul>
                <li><a href="#!">Projects</a></li>
                <li><a href="#!">Events</a></li>
                <li><a href="#!">Donate</a></li>
                <li><a href="#!">Blog</a></li>
              </ul>
            </div>
            <div class={cx(styles.navItem)}>
              <span>Connect</span>
              <ul>
                <li><a href="#!">Facebook</a></li>
                <li><a href="#!">Instagram</a></li>
                <li><a href="#!">Twitter</a></li>
                <li><a href="#!">Linkdin </a></li>
              </ul>
            </div>
          </nav>
          <form action="#">
            <h3 class={cx(styles.h3, 'h3')}>Subscribe to get latest updates</h3>
            <div class={cx(styles.formItem)}>
              <Input />
              <ButtonSubmit text="Subscribe" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
