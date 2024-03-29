import { db } from "./db";
export const getAllAlbums = async () => {
    const Albums = await db.album.findMany({

    })
    return Albums
}