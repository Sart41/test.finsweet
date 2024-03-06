import cx from 'classnames';
import styles from './ReadOurNews.module.scss'
import { data } from '../../ReadOurNews/'
import { NewsItem } from '../components/NewsItem/ui/NewsItem';


export const ReadOurNews = () => {
  return (
    <section class={cx(styles.root)}>
      <div class='__container'>
        <header>
          <h2 class={cx(styles.title)}>Read Our News</h2>
        </header>
        <ul class={cx(styles.news)}>
          {data.map(row => {
            return (
              <li>
                <NewsItem data={row} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}