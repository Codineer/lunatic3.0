import React from 'react'
import { useSidebar } from '@/store/use-sidebar'
import { useEffect, useState } from 'react'
import { getUserAndLikedPlaylists } from '@/actions/get-userandlikedplaylists-for-sidebar'
import Playlistcard from './playlist-card'

export const LikedSidebarPlaylist = () => {
    const [userPlaylists, setUserPlaylists] = useState([])
    const [likedPlaylists, setLikedPlaylists] = useState([])
    const collapsed = useSidebar(state => state.collapsed)
    const retreivePlaylists = async () => {
        const [userPlaylists, likedPlaylists] = await getUserAndLikedPlaylists()
        setUserPlaylists(userPlaylists)
        setLikedPlaylists(likedPlaylists)

    }
    useEffect(() => {
        retreivePlaylists()
    }, []);

    return (

        <div>
            {!collapsed && userPlaylists.length > 0 && <h1 className='pb-2 text-xl font-medium'>Your Playlists</h1>}
            <div>
                {userPlaylists.map(playlist => <Playlistcard key={playlist.id} playlist={playlist} />)}
            </div>





        </div>

    )
}


