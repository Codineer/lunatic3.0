"use server"
import { likeAlbum } from "@/lib/like-service"
import { revalidatePath } from "next/cache"
import { unlikeAlbum } from "@/lib/unlike-service"

export const likeCurrentAlbum = async (albumId) => {
    const val = await likeAlbum(albumId)
    if (val) {
        revalidatePath(`/album/${albumId}`)

    }

    return val
}
export const unlikeCurrentAlbum = async (albumId) => {
    const val = await unlikeAlbum(albumId)
    if (val) {
        revalidatePath(`/album/${albumId}`)

    }

    return val
}