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
        throw new Error('Already created')
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
            user: true,
            playlist: true
        }
    })

    return likedPlaylists
}



export const addSongInPlaylist = async (playlist, songId) => {
    try {
        const user = await getSelf()
        if (playlist.ownerId !== user.id) {
            return false
        }
        const song = await db.playlistSong.findUnique(
            {
                where: {
                    playlistId_songId: {
                        playlistId: playlist.id,
                        songId: songId
                    }
                }
            }
        )

        if (song) {
            return false
        }
        const playlistSong = await db.playlistSong.create(
            {
                data: {
                    playlistId: playlist.id,
                    songId: songId
                }
            }
        )
        return true
    }
    catch (error) {
        console.log(error)
        return false
    }
}

export const getPlaylistByName = async (playlistName) => {
    const playlist = await db.playlist.findUnique(
        {
            where: {

                playlistName: playlistName
            },
            include: {
                owner: true
            }
        }
    )
    return playlist
}

export const getSongsfromPlaylist = async (playlistId) => {
    const songs = await db.playlistSong.findMany(
        {
            where: { playlistId: playlistId },
            select: {
                song: {
                    include: {
                        album: true
                    }
                }
            }

        },
    )
    return songs
}

export const getTopPlaylists = async () => {
    const topFiveSongs = await db.playlist.findMany(
        {
            take: 5, // Limit the result to the first five songs
            orderBy: {
                likes: 'desc'
            },
        }
    )
    return topFiveSongs
}
export const deletePlaylists = async (playlistId) => {
    const playlist = await db.playlist.delete({

        where: {
            id: playlistId
        }
    }
    )
    return playlist
}
