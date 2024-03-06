import cx from 'classnames';
import styles from './Stats.module.scss'
import { LegendItem } from '../components/LegendItem/ui/LegendItem';
import logoUrl from '/images/icons/logo-white.svg'
import { data } from '../../Stats/'

export const Stats = () => {
  return (
    <section class={cx(styles.stats)}>
      <div class='__container'>
        <div class={cx(styles.inner)}>
          <div class={cx(styles.body)}>
            <h2 class={cx('sr-only')}>Statistics</h2>
            <h3 class={cx(styles.h3, 'h3')}>How we spend your donations and where it goes</h3>
            <div class={cx(styles.description)}>
              <p>We understand that when you make a  donation, you want to know exactly where your money is going and we pledge to be transparent.</p>
            </div>
            <ul class={cx(styles.legend)}>
              {data.map(row => {
                return (
                  <li>
                    <LegendItem
                      color={row.color}
                      value={row.value}
                      text={row.text}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
          <div class={cx(styles.graph)}>
            <canvas id='homeChart' width="375" height="375"></canvas>
            <img src={logoUrl} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}