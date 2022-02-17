import { LoginContainers } from '@containers/login/Login'
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
      <LoginContainers />
    </>
  )
}

export default HomePage
