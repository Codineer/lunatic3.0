"use server"
import { getLikedSongsFromDataBase } from "@/lib/like-service"
export const getLikedSongs = async () => {
    const songs = await getLikedSongsFromDataBase()

    return songs
}