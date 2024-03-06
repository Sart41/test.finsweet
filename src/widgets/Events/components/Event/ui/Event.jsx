import cx from 'classnames';
import styles from './Event.module.scss'
// import getData from '../model/getDate.js'

import { EventButton } from '../../EventButton/ui/EventButton';

export const Event = (props) => {
  const { date, text } = props
  const [day, month, year = new Date().getFullYear()] = date.split('.');
  const dateObj = new Date(`${year} ${month} ${day} 12:00:00 UTC`)
  const formatedDate = dateObj.toISOString().split('T')[0]
  const monthStr = dateObj.toLocaleString('en', { month: 'short' })

  return (
    <div class={cx(styles.root)}>
      <div class={cx(styles.inner)}>
        <time datetime={`${formatedDate}`}>{day} <span>{monthStr}</span></time>
        <div class={cx(styles.body)}>
          <div class={cx(styles.title)}> <span>next events</span></div>
          <div class={cx(styles.description)}>{text}</div>
        </div>
        <EventButton />
      </div>
    </div>
  )
}