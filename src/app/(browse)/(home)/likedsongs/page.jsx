import React from 'react'
import { Header } from './_components/Header'
import { Songs } from './_components/songs'
import { currentUser } from '@clerk/nextjs'
import { getUserPlaylistsFromDatabase } from '@/lib/playlist-service'
import {
    getLikedSongsFromDataBase
} from '@/lib/like-service'
import { fetchAndUpdateDurations } from '@/utils/fetch-update-durations'
import { Suspense } from 'react'
import { ChildrenSkeleton } from '@/components/children-skeleton'
const LikedSongs = async () => {
    const user = await currentUser()
    const LikedSongs = await getLikedSongsFromDataBase()
    const songs = await fetchAndUpdateDurations(LikedSongs.map(element => element.song))
    const playlists = await getUserPlaylistsFromDatabase()
    return (
        <div>
            <Suspense fallback={<ChildrenSkeleton />}>
                <Header username={user.username} length={songs.length} songs={songs} />
                <Songs songs={songs} playlists={playlists} />

            </Suspense>
        </div>
    )
}

export default LikedSongs
