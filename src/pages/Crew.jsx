import React from 'react'
import Navbar from '../components/Navbar'
import MeetCrew from '../components/MeetCrew'

const Crew = () => {
  return (
    <div className='bg-[url("/background-crew-mobile.jpg")] sm:bg-[url("/background-crew-tablet.jpg")] lg:bg-[url("/background-crew-desktop.jpg")] bg-cover bg-center'>
      <Navbar />
      <MeetCrew />
    </div>
  )
}

export default Crew
