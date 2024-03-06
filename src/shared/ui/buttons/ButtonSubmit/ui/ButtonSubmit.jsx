import cx from 'classnames';
import styles from './ButtonSubmit.module.scss'

export const ButtonSubmit = ({ text }) => {
  return (
    <button class={cx(styles.root)} type="submit">{text}</button>
  )
}