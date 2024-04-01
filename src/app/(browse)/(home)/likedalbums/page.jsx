import { AlbumCards } from "../_components/album-cards"
import { getlikedAlbums } from '@/lib/albums-service'
const Albums = async () => {
    const likedAlbums = await getlikedAlbums()
    return (
        <>
            <h1 className='text-2xl font-semibold p-2'>Liked Albums</h1>
            <AlbumCards albums={likedAlbums.map((element) => element.album)} />
        </>
    )
}

export default Albums