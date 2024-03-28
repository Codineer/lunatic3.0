import React from 'react'
import { UserButton } from '@clerk/nextjs'
import Sidebar from './_components/sidebar'
const HomeLayout = ({ children }) => {
  return (
    <div className='w-screen h-screen flex p-2 gap-2 bg-black'>
        <Sidebar />
        <div className='w-full bg-[#121212]'>
        { children }
        <UserButton  afterSignOutUrl="/sign-in"/>
        </div>
    </div>
  )
}

export default HomeLayout
