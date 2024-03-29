import React from 'react'
import Sidebar from './_components/sidebar'
import Navbar from './_components/navbar'
const HomeLayout = ({ children }) => {
  return (
    <div className='w-screen h-screen flex p-2 gap-2 bg-black'>
      <Sidebar />
      <div className='w-full bg-[#121212]'>
        <Navbar>
        </Navbar>

        {children}
      </div>
    </div>
  )
}

export default HomeLayout
