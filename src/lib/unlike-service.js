import { db } from "./db";
import { getSelf } from "./auth-service";

export const unlikeSong = async (songId) => {
    try {

        const user = await getSelf()
        const song = await db.likedSong.findUnique(
            {
                where: {
                    userId_songId: {
                        userId: user.id,
                        songId: songId
                    }

                }

            }
        )
        if (!song) {
            return false
        }
        const likedSong = await db.likedSong.delete(
            {
                where: {
                    userId_songId: {
                        userId: user.id,
                        songId: songId
                    }

                }
            }
        )
        if (likedSong) {
            const song = await db.song.update(
                {
                    where: {
                        id: songId
                    },
                    data: {
                        likes: {
                            decrement: 1
                        }
                    }
                }
            )

        }
        return true

    }
    catch (error) {
        console.log(error)
        return false
    }
}

export const unlikeAlbum = async (albumId) => {
    try {

        const user = await getSelf()
        const album = await db.likedAlbum.findUnique(
            {
                where: {
                    userId_albumId: {
                        userId: user.id,
                        albumId: albumId
                    }

                }

            }
        )
        if (!album) {
            return false
        }
        const likedAlbum = await db.likedAlbum.delete(
            {
                where: {
                    userId_albumId: {
                        userId: user.id,
                        albumId: albumId,
                    }

                }
            }
        )
        if (likedAlbum) {
            const album = await db.album.update(
                {
                    where: {
                        id: albumId
                    },
                    data: {
                        likes: {
                            decrement: 1
                        }
                    }
                }
            )

        }
        return true

    }
    catch (error) {
        console.log(error)
        return false
    }
}




export const unlikePlaylist = async (playlistId) => {
    try {

        const user = await getSelf()
        const playlist = await db.likedPlaylist.findUnique(
            {
                where: {
                    userId_playlistId: {
                        userId: user.id,
                        playlistId
                    }

                }

            }
        )
        if (!playlist) {
            return false
        }
        const likedPlaylist = await db.likedPlaylist.delete(
            {
                where: {
                    userId_playlistId: {
                        userId: user.id,
                        playlistId
                    }

                }
            }
        )
        if (likedPlaylist) {
            const playlist = await db.playlist.update(
                {
                    where: {
                        id: playlistId
                    },
                    data: {
                        likes: {
                            decrement: 1
                        }
                    }
                }
            )

        }
        return true

    }
    catch (error) {
        console.log(error)
        return false
    }
}



