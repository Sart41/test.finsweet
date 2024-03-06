import styles from './Logo.module.scss'
import img1xUrl from '/images/icons/logo.svg'

export const Logo = () => {
  return (
    <div class={styles.logo}>
      <img src={img1xUrl}
        alt="logo"
        width={130}
        height={27}
      />
    </div>
  )
}