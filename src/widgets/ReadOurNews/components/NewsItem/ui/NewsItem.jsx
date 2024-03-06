import cx from 'classnames';
import styles from './NewsItem.module.scss'

export const NewsItem = ({ data }) => {
  const { title, imgUrl, alt, text } = data
  return (
    <article class={cx(styles.root)}>
      <picture>
        <source srcset={`${imgUrl}.jpg, ${imgUrl}@2x.jpg 2x`} />
        <img
          src={imgUrl}
          alt={alt}
          width={320}
          height={192}
        />
      </picture>
      <h4 class={cx(styles.title)}>{title}</h4>
      <div class={cx(styles.description)}><p>{text}</p></div>
    </article>
  )
}