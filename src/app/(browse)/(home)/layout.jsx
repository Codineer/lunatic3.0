import React from 'react'
import Sidebar from './_components/sidebar'
import Navbar from './_components/navbar'
import { Playbar } from '@/components/playbar'
import { Suspense } from 'react'
import { ChildrenSkeleton } from '@/components/children-skeleton'
import { UserItemSkeleton } from '@/components/sidebar-skeleton'
import { ScrollArea } from '@/components/ui/scroll-area'

const HomeLayout = ({ children }) => {
  return (
    <>
      <div className='w-screen h-screen p-2 flex gap-2 bg-black overflow-y-hidden ' >
        <Suspense fallback={<UserItemSkeleton />}>
          <Sidebar />

        </Suspense>
        <div className='w-full bg-[#121212]'>
          <Navbar>
          </Navbar>

          <Suspense fallback={<ChildrenSkeleton />}>
            <ScrollArea className="w-full h-[700px] lg:[900px]">
              {children}

            </ScrollArea>

          </Suspense>




        </div>

      </div>
      <Playbar />

    </>
  )
}

export default HomeLayout
