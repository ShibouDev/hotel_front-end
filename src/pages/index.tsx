import { HeaderContainers } from '@containers/header/Header'
import { SliderContainers } from '@containers/slider/Slider'
import { AboutContainers } from '@containers/about/About'
import { WhatWeDoContainers } from '@containers/whatwedo/WhatWeDo'
import { RoomContainers } from '@containers/room/Room'
import { FooterContainers } from '@containers/footer/Footer'

/**
 * Homepage
 */
const HomePage: React.FC = () => {
  return (
    <>
      <HeaderContainers />
      <SliderContainers />
      <AboutContainers />
      <WhatWeDoContainers />
      <RoomContainers />
      <FooterContainers />
    </>
  )
}

export default HomePage
