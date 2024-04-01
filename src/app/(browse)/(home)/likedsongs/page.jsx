import React from 'react'
import { Header } from './_components/Header'
import { Songs } from './_components/songs'
import { currentUser } from '@clerk/nextjs'
import { getUserPlaylistsFromDatabase } from '@/lib/playlist-service'
import {
    getLikedSongsFromDataBase
} from '@/lib/like-service'
import { fetchAndUpdateDurations } from '@/utils/fetch-update-durations'
const LikedSongs = async () => {
    const user = await currentUser()
    const LikedSongs = await getLikedSongsFromDataBase()
    const songs = await fetchAndUpdateDurations(LikedSongs.map(element => element.song))
    const playlists = await getUserPlaylistsFromDatabase()
    return (
        <div>
            <Header username={user.username} length={songs.length} />
            <Songs songs={songs} playlists={playlists} />
        </div>
    )
}

export default LikedSongs
