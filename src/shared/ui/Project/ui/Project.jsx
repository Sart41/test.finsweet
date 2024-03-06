import cx from 'classnames';
import styles from './Project.module.scss'
import { Button } from '/src/shared/ui/buttons/Button'


export const Project = ({ imgUrl, title, text }) => {
  return (
    <article class={cx(styles.root)} style={`--bgImage: url('${imgUrl}')`}>
      <div class={cx(styles.inner)}>
        <h4 class={cx(styles.title)}>{title}</h4>
        <div class={cx(styles.description)}>
          <p>{text}</p>
        </div>
        <Button
          text='See more'
          mode='secondary'
        />
      </div>
    </article>
  )
}