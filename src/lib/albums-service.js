import { getSelf } from "./auth-service";
import { db } from "./db";
export const getAllAlbums = async () => {
    const Albums = await db.album.findMany({

    })
    return Albums
}

export const getAlbumByAlbumId = async (id) => {
    const Album = await db.album.findUnique({
        where: {
            id: id
        }
    })
    return Album
}
export const getSongsInAlbum = async (id) => {
    const songs = await db.song.findMany({
        where: {
            albumId: id
        }
    })
    return songs
}

export const getlikedAlbums = async () => {
    const user = await getSelf()
    const Albums = await db.likedAlbum.findMany({
        where: {
            userId: user.id
        },
        include: {
            album: true
        }
    })
    return Albums
}

export const getTopAlbums = async () => {
    const topFiveSongs = await db.album.findMany(
        {
            take: 5, // Limit the result to the first five songs
            orderBy: {
                likes: 'desc'
            },
        }
    )
    return topFiveSongs
}