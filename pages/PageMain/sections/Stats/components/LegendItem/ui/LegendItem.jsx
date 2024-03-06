import cx from 'classnames';
import styles from './LegendItem.module.scss'

export const LegendItem = ({ color, text, value }) => {
  return (
    <div class={cx(styles.legendItem)}>
      <span style={`background-color: ${color}`}></span>
      <p>{value}% {text}</p>
    </div>
  )
}