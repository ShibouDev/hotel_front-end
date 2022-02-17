import { HeaderContainers } from '@containers/header/Header'
import { RoomInfoContainers } from '@containers/roomInfo/RoomInfo'
import { FooterContainers } from '@containers/footer/Footer'

/**
 * Homepage
 */
const HomePage: React.FC = () => {
  return (
    <>
      <HeaderContainers />
      <RoomInfoContainers />
      <FooterContainers />
    </>
  )
}

export default HomePage
