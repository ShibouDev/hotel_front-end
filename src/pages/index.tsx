import { HeaderContainers } from '@containers/header/Header'
import { FooterContainers } from '@containers/footer/Footer'
import fontAwesomeLib from './core/common/icon-library';

/**
 * Homepage
 */
const HomePage: React.FC = () => {
  return (
    <>
      <HeaderContainers />
      <FooterContainers />
    </>
  )
}

export default HomePage
