import cx from 'classnames';
import styles from './input.module.scss'

export const Input = ({ id, label, name }) => {
  return (
    <div class={cx(styles.formItem)}>
      <label for={id}>{label}</label>
      <input type="email" id={id} name={name} />
    </div>
  )
}