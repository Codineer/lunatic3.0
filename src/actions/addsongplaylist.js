'use server'
import { revalidatePath } from "next/cache"
import { addSongInPlaylist } from "@/lib/playlist-service"

export const addSong = async (playlist, songId) => {
    const val = await addSongInPlaylist(playlist, songId)
    if (val) {
        revalidatePath(`/playlist/${playlist.id}`)
    }
    return val
} 