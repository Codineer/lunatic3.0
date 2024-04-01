"use server"
import { likeSong } from "@/lib/like-service"
import { unlikeSong } from "@/lib/unlike-service"
import { revalidatePath } from "next/cache"


export const likeCurrentSong = async (songId, albumId) => {
    const val = await likeSong(songId)
    if (val) {
        revalidatePath(`/album/${albumId}`)
        revalidatePath(`/likedsongs`)
    }

    return val
}

export const unlikeCurrentSong = async (songId, albumId) => {
    const val = await unlikeSong(songId)
    if (val) {
        revalidatePath(`/album/${albumId}`)
        revalidatePath(`/likedsongs`)

    }

    return val
}

