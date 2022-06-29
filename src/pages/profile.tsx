import { HeaderContainers } from '@containers/header/Header'
import { ProfileContainers } from '@containers/profile/Profile'
import { FooterContainers } from '@containers/footer/Footer'

/**
 * Homepage
 */
const HomePage: React.FC = () => {
  return (
    <>
      <HeaderContainers />
      <ProfileContainers />
      <FooterContainers />
    </>
  )
}

export default HomePage
