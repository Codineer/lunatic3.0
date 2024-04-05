import React from 'react'
import { useSidebar } from '@/store/use-sidebar'
import { Songcard } from './song-card'
import { useCurrentSong } from '@/store/use-current-song'
import { useCurrentSongObject } from '@/store/use-current-songList'
export const LikedSidebarSongs = ({ likedSongs }) => {
    const { currentSong, setCurrentSong } = useCurrentSong(state => state)
    const { currentSongObject, setCurrentSongObject } = useCurrentSongObject(state => state)
    const changeCurrentSongobject = (song) => {
        if (currentSong.id === song.id) {
            return
        }
        if (currentSongObject.id !== "liked_song123") {
            setCurrentSongObject({ id: "liked_song123", list: likedSongs })
            setCurrentSong(song)
            return
        }
        if (currentSongObject.id === "liked_song123") {
            setCurrentSong(song)
        }
    }
    const collapsed = useSidebar(state => state.collapsed)


    return (

        <div>
            {!collapsed && likedSongs.length > 0 && <h1 className='pb-2 text-xl font-medium'>Liked Songs</h1>}
            {!collapsed && likedSongs.length == 0 && <h1 className='pb-2 text-xl font-medium'>No Liked Songs</h1>}
            <div>

                {likedSongs.map(song =>
                    <div key={song.id} onClick={() => changeCurrentSongobject(song)} className='cursor-pointer'>
                        <Songcard key={song.id} song={song} />
                    </div>
                )}
            </div>





        </div>

    )
}




