"use server"

import { getLikedPlaylistsFromDatabase, getUserPlaylistsFromDatabase } from "@/lib/playlist-service"

export const getUserAndLikedPlaylists = async () => {
    const userPlaylist = await getUserPlaylistsFromDatabase()
    const likedPlaylist = await getLikedPlaylistsFromDatabase()

    return [userPlaylist, likedPlaylist]
}