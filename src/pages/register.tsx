import { RegisterContainers } from '@containers/register/Register'
import { useEffect } from 'react'
import router from 'next/router'
/**
 * Homepage
 */
const HomePage: React.FC = () => {
  useEffect(() => {
    window.localStorage.getItem('token') && router.push('/profile')
  }, [])
  return (
    <>
      <RegisterContainers />
    </>
  )
}

export default HomePage
