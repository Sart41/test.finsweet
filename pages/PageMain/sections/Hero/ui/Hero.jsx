import cx from 'classnames'
import styles from './Hero.module.scss'
import { Button } from '../../../../../src/shared/ui/buttons/Button'
import { ButtonPlay } from '../../../../../src/shared/ui/buttons/ButtonPlay';

export const Hero = () => {
  return (
    <section class={cx(styles.hero)}>
      <div class={cx('__container')}>
        <div class={cx(styles.content)}>
          <div class={cx(styles.title)}>
            <h1 class={styles.h1}>Save the environment today for a better tomorrow</h1>
          </div>
          <div class={cx(styles.actions)}>
            <Button
              text='What we do'
              mode='secondary'
            />
            <ButtonPlay />
          </div>
          <div class={cx(styles.info)}>
            <div class={cx(styles.infoLeft)}>
              <span>23.800</span> trees planted
            </div>
            <div class={cx(styles.infoCenter)}></div>
            <div class={cx(styles.infoRight)}>
              <span>5840</span> donations collected
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}