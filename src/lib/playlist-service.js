import { db } from "./db";
import { getSelf } from "./auth-service";
import { cache } from 'react'
export const createPlaylistInDatabase = async (name) => {
    const self = await getSelf()
    const existingPlaylist = await db.playlist.findUnique({
        where: {
            playlistName: name
        }
    })
    if (existingPlaylist) {
        throw new Error('Already Blocked')
    }
    const playlist = await db.playlist.create({
        data: {
            ownerId: self.id,
            playlistName: name
        }
    })
    if (!playlist) {
        throw new Error("something went wring while playlist creation")
    }
    return playlist
}
export const getUserPlaylistsFromDatabase = cache(async () => {
    const self = await getSelf()
    const usersPlaylists = await db.playlist.findMany({
        where: {
            ownerId: self.id
        },
        include: {
            owner: true
        }
    })
    return usersPlaylists
})

export const getLikedPlaylistsFromDatabase = async () => {
    const self = await getSelf()
    const likedPlaylists = await db.likedPlaylist.findMany({
        where: {
            userId: self.id
        },
        include: {
            user: true
        }
    })

    return likedPlaylists
}


