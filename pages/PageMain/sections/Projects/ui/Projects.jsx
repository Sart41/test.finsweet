import cx from 'classnames'
import styles from './Projects.module.scss'
import { Project } from '../../../../../src/shared/ui/Project/ui/Project'
import imgUrl from '/images/project/project-1.jpg'
import imgUrl2 from '/images/project/project-2.jpg'
import imgUrl3 from '/images/project/project-3.jpg'


export const Projects = () => {
  return (
    <section class={cx(styles.projects)}>
      <div class='__container'>
        <div class={cx(styles.inner)}>
          <h2 class={cx(styles.h2, 'h2')}>
            <span class={cx('line')}></span>
            Projects we have done
          </h2>
          <h3 class={cx('h3', styles.h3)}>We are Creating sustainable society, for everyone and forever.</h3>
          <ul class={cx(styles.list)}>
            <li>
              <Project
                imgUrl={imgUrl}
                title='Mission 40K: Tree plantation'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
              />
            </li>
            <li>
              <Project
                imgUrl={imgUrl2}
                title='Weekly cleanliness program in city'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
              />
            </li>
            <li>
              <Project
                imgUrl={imgUrl3}
                title='Wildlife safety program 2021'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}