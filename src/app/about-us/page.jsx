import React from 'react'
import AboutUs from '../Component/AboutUs'
import Vnavbar from '../Component/Vnavbar'
import Navbar from '../Component/Navbar'

const Page = () => {
  return (
    <div>
        <div className="flex flex-col min-h-screen font-mono">
      <Navbar />
      <div className="flex flex-1 md:pl-64">
        <div className="hidden md:block">
          <Vnavbar />
        </div>

        <AboutUs />
        </div>
        </div>
    </div>
  )
}

export default Page