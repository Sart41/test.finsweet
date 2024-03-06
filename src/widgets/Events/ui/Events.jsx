import cx from 'classnames';
import styles from './Events.module.scss'
import { data } from '../config/data.js'
import { Event } from '../components/Event/ui/Event';

export const Events = () => {
  return (
    <section class={cx(styles.root)}>
      <div class='__container'>
        <header>
          <h2 class={cx(styles.title)}>Our Events</h2>
        </header>
        <ul>
          {data.map(row => {
            return (
              <li>
                <Event date={row.date} text={row.text} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}