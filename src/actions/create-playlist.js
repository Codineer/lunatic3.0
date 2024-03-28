"use server"
import { createPlaylistInDatabase } from "@/lib/playlist-service"
import { revalidatePath } from "next/cache"

export const createPlaylist = async (name) => {
    const playlist = await createPlaylistInDatabase(name)
    revalidatePath('/')
    return playlist
}