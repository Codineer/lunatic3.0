import { AlbumCards } from "../_components/album-cards"
import { getlikedAlbums } from '@/lib/albums-service'
const Albums = async () => {
    const likedAlbums = await getlikedAlbums()
    return (
        <>
            <div className='absolute w-full h-full top-0 bg-gradient-to-b from-gray-900 to-black  '>

                <h1 className='text-2xl font-semibold p-2'>Liked Albums</h1>
                <AlbumCards albums={likedAlbums.map((element) => element.album)} />
            </div>
        </>
    )
}

export default Albums