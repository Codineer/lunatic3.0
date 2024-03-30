import { AlbumCards } from './album-cards'
import { getAllAlbums } from '@/lib/albums-service'
const Albums = async () => {
  const allAlbums = await getAllAlbums()
  return (
    <>
      <h1 className='text-2xl font-semibold p-2'>All Albums</h1>
      <AlbumCards albums={allAlbums} />
    </>
  )
}

export default Albums