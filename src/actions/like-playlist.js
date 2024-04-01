"use server"
import { likePlaylist } from "@/lib/like-service"
import { revalidatePath } from "next/cache"
import { unlikePlaylist } from "@/lib/unlike-service"

export const likeCurrentPlaylist = async (playlistId, playlistname) => {
    const val = await likePlaylist(playlistId)
    if (val) {
        revalidatePath(`/playlist/${playlistname}`)

    }

    return val
}
export const unlikeCurrentPlaylist = async (playlistId, playlistname) => {
    const val = await unlikePlaylist(playlistId)
    if (val) {
        revalidatePath(`/playlist/${playlistname}`)

    }

    return val
}