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