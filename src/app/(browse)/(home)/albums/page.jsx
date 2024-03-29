import { AlbumCards } from './album-cards'
import { getAllAlbums } from '@/lib/albums-service'
const Album = async () => {
  const allAlbums = await getAllAlbums()
  console.log(allAlbums)
  return (
    <>
      <h1 className='text-2xl font-semibold p-2'>All Albums</h1>
      <AlbumCards albums={allAlbums} />
    </>
  )
}

export default Album