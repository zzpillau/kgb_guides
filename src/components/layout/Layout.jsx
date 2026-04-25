import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './Footer.jsx'
import Header from './Header.jsx'

const Layout = () => {
  useEffect(() => {
    const header = document.querySelector('header')

    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 10)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
