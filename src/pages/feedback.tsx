import { HeaderContainers } from '@containers/header/Header'
import { FeedbackContainers } from '@containers/feedback/Feedback'
import { FooterContainers } from '@containers/footer/Footer'

/**
 * Homepage
 */
const HomePage: React.FC = () => {
  return (
    <>
      <HeaderContainers />
      <FeedbackContainers />
      <FooterContainers />
    </>
  )
}

export default HomePage
