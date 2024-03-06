import cx from 'classnames'
import styles from './Button.module.scss'


export const Button = ({ text, mode, className }) => {
  return (
    <button
      class={cx(styles.button, styles[mode], styles[className])}
      type="button">{text}
    </button>
  )
}