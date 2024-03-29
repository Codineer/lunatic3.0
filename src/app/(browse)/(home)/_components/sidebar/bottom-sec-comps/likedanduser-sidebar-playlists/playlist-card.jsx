import Image from 'next/image'
import React from 'react'
import { useSidebar } from '@/store/use-sidebar'

const Playlistcard = ({ playlist }) => {
    const collapsed = useSidebar(state => state.collapsed)
    return (

        <div className="flex items-center bg-[#1e1e1e] rounded-sm shadow-md p-[2px] mb-4">

            <div className="flex-shrink-0 mr-4">
                {/* <img src={playlist.image} alt={playlist.name} className="w-24 h-24 rounded-md object-cover" /> */}
                {playlist.coverImg ? <Image src={playlist.coverImg} alt="Lunatic" height="40" width="40" className=' cursor-pointer' /> : <Image src="/images/playlist-cover.jpg" alt="Lunatic" height="40" width="40" className='cursor-pointer' />
                }
            </div>
            {!collapsed &&
                <div>
                    <h3 className="text-md font-medium">{playlist.playlistName}</h3>
                    <p className="text-gray-600">Owner: {playlist.owner.userName}</p>
                </div>
            }
        </div>
    )
}

export default Playlistcard