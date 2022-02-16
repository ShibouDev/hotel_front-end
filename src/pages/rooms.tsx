import { HeaderContainers } from '@containers/header/Header'
import { RoomsContainers } from '@containers/rooms/Rooms'
import { FooterContainers } from '@containers/footer/Footer'

/**
 * Homepage
 */
const HomePage: React.FC = () => {
  return (
    <>
      <HeaderContainers />
      <RoomsContainers />
      <FooterContainers />
    </>
  )
}

export default HomePage
