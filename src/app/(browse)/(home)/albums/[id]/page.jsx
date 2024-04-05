import React from 'react'
import { Header } from './_components/header'
import { Songs } from './_components/songs'
import { fetchAndUpdateDurations } from '@/utils/fetch-update-durations'
import { checkIslikedSong } from '@/utils/check-isliked'
import { getSongsInAlbum, getAlbumByAlbumId } from '@/lib/albums-service'
import { getUserPlaylistsFromDatabase } from '@/lib/playlist-service'
import { isLikedAlbum } from '@/lib/like-service'
const Album = async ({ params }) => {
  const album = await getAlbumByAlbumId(params.id)
  const albumsSongs = await getSongsInAlbum(params.id)
  const songs = await checkIslikedSong(await fetchAndUpdateDurations(albumsSongs))
  const playlists = await getUserPlaylistsFromDatabase()
  const islikedAlbum = await isLikedAlbum(params.id)
  return (
    <div className='absolute w-full h-full top-0 bg-gradient-to-b from-purple-950 to-black p-2 '>

      <Header album={album} length={songs.length} isliked={islikedAlbum} songs={songs} />
      <Songs songs={songs} playlists={playlists} />
    </div>
  )
}

export default Album
