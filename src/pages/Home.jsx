import React from 'react'
import Navbar from '../components/Navbar'
import Space from '../components/Space'

const Home = () => {
  return (
    <div className='bg-[url("/background-home-mobile.jpg")] sm:bg-[url("/background-home-tablet.jpg")] lg:bg-[url("/background-home-desktop.jpg")] bg-cover bg-center'>
      <Navbar />
      <Space />
    </div>
  )
}

export default Home
