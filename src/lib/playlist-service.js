import { db } from "./db";
import { getSelf } from "./auth-service";
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