import cx from 'classnames'
import styles from './About.module.scss'
import imgUrl from '/images/about/about-1.jpg'
import img2xUrl from '/images/about/about-1@2x.jpg'
import { Button } from '../../../../../src/shared/ui/buttons/Button'
import { Supporters } from '../../../../../src/shared/ui/Supporters/ui/Supporters'


export const About = () => {
  return (
    <section class={cx(styles.root)}>
      <div class={"__container"}>
        <div class={styles.inner}>
          <div class={styles.content}>
            <h2 class={cx(styles.h2, 'h2')}>
              <span class='line'></span>
              Know About us
            </h2>
            <div class={cx(styles.body)}>
              <h3 class={cx(styles.h3, 'h3')}>We help nature smile and survive everywhere</h3>
              <div class={styles.description}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <p>‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
              <Button
                mode='primary'
                text="Learn more"
              />
            </div>
          </div>
          <picture>
            <source srcset={`${imgUrl}, ${img2xUrl} 2x`} />
            <img src={imgUrl} alt="children in a park"
              width={480}
              height={579}
            />
          </picture>
        </div>
        <Supporters />
      </div>
    </section>
  )
}