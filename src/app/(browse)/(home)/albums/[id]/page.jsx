import React from 'react'
import { Header } from './_components/header'
import { Songs } from './_components/songs'
import { getSongsInAlbum, getAlbumByAlbumId } from '@/lib/albums-service'
const Album = async ({ params }) => {
  const album = await getAlbumByAlbumId(params.id)
  const albumsSongs = await getSongsInAlbum(params.id)
  return (
    <div>
      <Header album={album} length={albumsSongs.length} />
      <Songs songs={albumsSongs} />
    </div>
  )
}

export default Album
