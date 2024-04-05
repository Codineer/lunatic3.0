import React from 'react'
import { useSidebar } from '@/store/use-sidebar'
import Playlistcard from './playlist-card'
import Link from 'next/link'

export const LikedSidebarPlaylist = ({ userPlaylists }) => {

    const collapsed = useSidebar(state => state.collapsed)

    return (

        <div>
            {!collapsed && userPlaylists.length > 0 && <h1 className='pb-2 text-xl font-medium'>Your Playlists</h1>}
            <div>

                {userPlaylists.map(playlist =>
                    <Link href={`/playlist/${playlist.playlistName}`} key={playlist.id} >

                        <Playlistcard playlist={playlist} />
                    </Link>)}


            </div>





        </div>

    )
}


