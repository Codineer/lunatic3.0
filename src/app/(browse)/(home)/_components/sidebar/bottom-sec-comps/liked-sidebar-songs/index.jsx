import React from 'react'
import { useSidebar } from '@/store/use-sidebar'
import { useEffect, useState } from 'react'
import { Songcard } from './song-card'
import { getLikedSongs } from '@/actions/get-likedsongs-for-sidebar'
import { useCurrentSong } from '@/store/use-current-song'
import { useCurrentSongObject } from '@/store/use-current-songList'
export const LikedSidebarSongs = () => {
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
    const [likedSongs, setLikedSongs] = useState([])
    const collapsed = useSidebar(state => state.collapsed)
    const retreiveSongs = async () => {
        const likedSongs = (await getLikedSongs()).map(entry => entry.song)
        setLikedSongs(likedSongs)

    }
    useEffect(() => {
        retreiveSongs()
    }, []);

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




