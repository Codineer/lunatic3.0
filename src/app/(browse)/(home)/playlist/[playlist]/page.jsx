import React from 'react'
import { fetchAndUpdateDurations } from '@/utils/fetch-update-durations'
import { checkIslikedSong } from '@/utils/check-isliked'
import { getUserPlaylistsFromDatabase, getPlaylistByName, getSongsfromPlaylist } from '@/lib/playlist-service'
import { isLikedPlaylist } from '@/lib/like-service'
import { Songs } from './_components/songs'
import { Header } from './_components/header'
const Playlist = async ({ params }) => {
    const playlist = await getPlaylistByName(params.playlist)
    const playListSongs = await getSongsfromPlaylist(playlist.id)
    const songs = await checkIslikedSong(await fetchAndUpdateDurations(playListSongs.map(element => element.song)))
    const playlists = (await getUserPlaylistsFromDatabase()).filter(playlist => playlist.playlistName !== params.playlist)
    const islikedPlaylist = await isLikedPlaylist(playlist.id)
    return (
        <div>
            <Header playlist={playlist} length={songs.length} isliked={islikedPlaylist} />
            <Songs songs={songs} playlists={playlists} />
        </div>
    )
}

export default Playlist
