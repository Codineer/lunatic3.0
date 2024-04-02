import React from 'react'
import Sidebar from './_components/sidebar'
import Navbar from './_components/navbar'
import { Playbar } from '@/components/playbar'
import { Suspense } from 'react'
import { ChildrenSkeleton } from '@/components/children-skeleton'
const HomeLayout = ({ children }) => {
  return (
    <>
      <div className='w-screen h-screen p-2 flex gap-2 bg-black overflow-y-hidden ' >

        <Sidebar />
        <div className='w-full bg-[#121212]'>
          <Navbar>
          </Navbar>

          <Suspense fallback={<ChildrenSkeleton />}>
            {children}

          </Suspense>




        </div>

      </div>
      <Playbar />

    </>
  )
}

export default HomeLayout
