"use server"
import { createPlaylistInDatabase } from "@/lib/playlist-service"
import { revalidatePath } from "next/cache"

export const createPlaylist = async (name) => {
    if (name.includes(" ")) {
        alert("no spaces allowed")
        return false
    }
    const playlist = await createPlaylistInDatabase(name)
    revalidatePath('/')
    revalidatePath('/albums/*')
    revalidatePath('/user/*')
    return playlist
}