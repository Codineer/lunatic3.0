import { db } from "./db";
import { getSelf } from "./auth-service";

export const isLikedSong = async (songId) => {
    const user = await getSelf()
    const likedSong = await db.likedSong.findUnique(
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
        return true
    }
    return false
}

export const isLikedAlbum = async (albumId) => {
    const user = await getSelf()
    const likedAlbum = await db.likedAlbum.findUnique(
        {
            where: {
                userId_albumId: {
                    userId: user.id,
                    albumId: albumId
                }

            }

        }
    )
    if (likedAlbum) {
        return true
    }
    return false
}

export const isLikedPlaylist = async (playlistId) => {
    const user = await getSelf()
    const likedPlaylist = await db.likedPlaylist.findUnique(
        {
            where: {
                userId_playlistId: {
                    userId: user.id,
                    playlistId: playlistId
                }

            }

        }
    )
    if (likedPlaylist) {
        return true
    }

    return false
}



export const likeSong = async (songId) => {
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
        if (song) {
            return false
        }
        const likedSong = await db.likedSong.create(
            {
                data: {
                    userId: user.id,
                    songId: songId,
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
                            increment: 1
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
export const likeAlbum = async (albumId) => {
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
        if (album) {
            return false
        }
        const likedAlbum = await db.likedAlbum.create(
            {
                data: {
                    userId: user.id,
                    albumId: albumId,
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
                            increment: 1
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


export const likePlaylist = async (playlistId) => {
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
        if (playlist) {
            return false
        }
        const likedPlaylist = await db.likedPlaylist.create(
            {
                data: {
                    userId: user.id,
                    playlistId
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
                            increment: 1
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






export const getLikedSongsFromDataBase = async () => {
    try {
        const user = await getSelf()
        const songs = await db.likedSong.findMany(
            {
                where: {
                    userId: user.id,
                },
                include: {
                    song: {
                        include: {
                            album: true
                        }
                    }
                }
            }
        )
        return songs
    }
    catch (error) {
        console.log(error)
        return []
    }
}