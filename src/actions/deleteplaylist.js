'use server'

import { deletePlaylists } from "@/lib/playlist-service";
import { revalidatePath } from "next/cache";
export const deletePlaylistInDatabase = async (playlistId) => {
    const playlist = await deletePlaylists(playlistId);
    revalidatePath('/')
    revalidatePath('/user/*')

}