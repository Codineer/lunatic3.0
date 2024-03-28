"use client"
import { LibraryBig, Plus } from 'lucide-react';
import { useSidebar } from '@/store/use-sidebar';
import { cn } from '@/lib/utils';
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Hint from '@/components/hint';

const BottomSection = () => {
  const { collapsed } = useSidebar(state => state)
  const [curentList, setcurrentList] = useState(1)
  return (
    <div className='pt-4'>
      <div className='flex flex-col gap-3'>
        <div className={cn('flex gap-2 justify-center lg:justify-start w-full')}>
          <LibraryBig size={30} strokeWidth={2} />
          {!collapsed &&
            <div className='text-[20px] font-medium flex justify-between w-full items-center'>
              <div>Your Library</div>
              <Hint content={"Create new playlist"}>
                <Plus className='cursor-pointer' />
              </Hint>

            </div>}
        </div>
        {!collapsed && <div className='flex gap-2'>
          <Hint content={"Liked Songs"}>
            <Button onClick={() => { setcurrentList(1) }} variant="outline" size="sm" className="rounded-full">Songs</Button>
          </Hint>
          <Hint content={"Liked Playlists"}>
            <Button onClick={() => { setcurrentList(2) }} variant="outline" size="sm" className="rounded-full">Playlists</Button>
          </Hint>
          <Hint content={"Liked Albums"}>
            <Button onClick={() => { setcurrentList(3) }} variant="outline" size="sm" className="rounded-full">Albums</Button>
          </Hint>

        </div>
        }

      </div>
      <div className='overflow-auto w-auto'>

      </div>
    </div>
  )
}

export default BottomSection