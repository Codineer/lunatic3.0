import React from 'react'
import { fetchAndUpdateDurations } from '@/utils/fetch-update-durations'
import { checkIslikedSong } from '@/utils/check-isliked'
import { getUserPlaylistsFromDatabase, getPlaylistByName, getSongsfromPlaylist } from '@/lib/playlist-service'
import { isLikedPlaylist } from '@/lib/like-service'
import { Songs } from './_components/songs'
import { Header } from './_components/header'
import { getSelf } from '@/lib/auth-service'
import { NotExist } from './_components/not-exist'
const Playlist = async ({ params }) => {
    const user = await getSelf()

    const playlist = await getPlaylistByName(params.playlist)
    if (!playlist) {
        console.log(playlist)
        return <NotExist />
    }
    const playListSongs = await getSongsfromPlaylist(playlist.id)
    const isCreator = playlist.ownerId === user.id

    const songs = await checkIslikedSong(await fetchAndUpdateDurations(playListSongs.map(element => element.song)))
    const playlists = (await getUserPlaylistsFromDatabase()).filter(playlist => playlist.playlistName !== params.playlist)
    const islikedPlaylist = await isLikedPlaylist(playlist.id)
    return (
        <div>
            <Header playlist={playlist} length={songs.length} isliked={islikedPlaylist} songs={songs} isCreator={isCreator} />
            <Songs songs={songs} playlists={playlists} playlist={playlist} />
        </div>
    )
}

export default Playlist
