import styles from './PageMain.module.scss'
import { Button } from '../../../src/shared/ui/buttons/Button'
import { Header } from '../../../src/widgets/Header'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { What } from '../sections/What/ui/What'
import { Projects } from '../sections/Projects'
import { Stats } from '../sections/Stats'
import { Cta } from '../../../src/widgets/CTA/ui/CTA'
import { ReadOurNews } from '../../../src/widgets/ReadOurNews/ui/ReadOurNews'
import { Events } from '../../../src/widgets/Events/ui/Events'
import { Footer } from '../../../src/widgets/Footer/ui/Footer'






export const PageMain = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <What />
      <Projects />
      <Stats />
      <Cta />
      <ReadOurNews />
      <Events />
      <Footer />
    </div>

  )
}