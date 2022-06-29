import { HeaderContainers } from '@containers/header/Header'
import { AboutUsContainers } from '@containers/aboutus/AboutUs'
import { FooterContainers } from '@containers/footer/Footer'

/**
 * Homepage
 */
const HomePage: React.FC = () => {
  return (
    <>
      <HeaderContainers />
      <AboutUsContainers />
      <FooterContainers />
    </>
  )
}

export default HomePage
