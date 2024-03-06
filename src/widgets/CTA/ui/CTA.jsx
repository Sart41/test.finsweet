import cx from 'classnames';
import styles from './CTA.module.scss'
import imgUrl from '/images/cta/cta.jpg'
import img2xUrl from '/images/cta/cta@2x.jpg'
import { Button } from '../../../shared/ui/buttons/Button';

export const Cta = () => {
  return (
    <section class={cx(styles.cta)}>
      <div class='__container'>
        <div class={cx(styles.inner)} style={`--bgImg: url(${imgUrl})`}>
          <h2 class="sr-only">CTA</h2>
          <h3 class={cx(styles.h3, 'h3')}>You can contribute to make the environment greener!</h3>
          <div class={cx(styles.actions)}>
            <Button
              mode='primary'
              text='Join as a volunteer'
            />
            <Button
              mode='secondary'
              text='Donate'
            />
          </div>
        </div>
      </div>
    </section >
  )
}