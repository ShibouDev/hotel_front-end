import { HeaderContainers } from '@containers/header/Header'
import { TermsContainers } from '@containers/terms/Terms'
import { FooterContainers } from '@containers/footer/Footer'

/**
 * Homepage
 */
const HomePage: React.FC = () => {
  return (
    <>
      <HeaderContainers />
      <TermsContainers />
      <FooterContainers />
    </>
  )
}

export default HomePage
