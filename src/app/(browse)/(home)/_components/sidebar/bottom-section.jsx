"use client"
import { LibraryBig, Plus } from 'lucide-react';
import { useSidebar } from '@/store/use-sidebar';
import { cn } from '@/lib/utils';
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import PopOverContent from "./bottom-sec-comps/pop-over-content"
import { LikedSidebarSongs } from './bottom-sec-comps/liked-sidebar-songs';
import { LikedSidebarPlaylist } from './bottom-sec-comps/likedanduser-sidebar-playlists';
import Hint from '@/components/hint';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from '@/components/ui/scroll-area'

const BottomSection = ({ ranlist }) => {
  const { collapsed } = useSidebar(state => state)
  const [currentList, setcurrentList] = useState(1)
  return (
    <div className='pt-4'>
      <div className='flex flex-col gap-3'>
        <div className={cn('flex gap-2 justify-center lg:justify-start w-full')}>
          <LibraryBig size={30} strokeWidth={2} className='cursor-pointer' onClick={() => { setcurrentList(1) }} />
          {!collapsed &&
            <div className='text-[20px] font-medium flex justify-between w-full items-center'>
              <div>Your Library</div>
              <Popover><PopoverTrigger>
                <Hint content={"Create new playlist"}>
                  <Plus className='cursor-pointer hover:bg-[#1e1e1e] rounded-full p-1' size={30} />
                </Hint>
              </PopoverTrigger>
                <PopoverContent><PopOverContent /></PopoverContent>
              </Popover>

            </div>}
        </div>
        {!collapsed && <div className='flex gap-2'>
          <Hint content={"Liked Songs"}>
            <Button onClick={() => { setcurrentList(1) }} variant="outline" size="sm" className={cn("rounded-full", currentList == 1 && "bg-[#1e1e1e]")}>Songs</Button>
          </Hint>
          <Hint content={"User Playlists"}>
            <Button onClick={() => { setcurrentList(2) }} variant="outline" size="sm" className={cn("rounded-full", currentList == 2 && "bg-[#1e1e1e]")}>Playlists</Button>
          </Hint>
          {/* <Hint content={"Liked Albums"}>
            <Button onClick={() => { setcurrentList(3) }} variant="outline" size="sm" className={cn("rounded-full", currentList == 3 && "bg-[#1e1e1e]")}>Albums</Button>
          </Hint> */}

        </div>
        }

      </div>
      <ScrollArea className="my-4 h-96 w-full rounded-md border-0">

        {currentList === 1 && <LikedSidebarSongs likedSongs={ranlist[0]} />}
        {currentList === 2 && <LikedSidebarPlaylist userPlaylists={ranlist[1]} />}

      </ScrollArea>
    </div>
  )
}

export default BottomSection
