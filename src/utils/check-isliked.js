import { isLikedSong } from "@/lib/like-service";

export const checkIslikedSong = async (songs) => {
    for (const song of songs) {
        try {
            song['isliked'] = await isLikedSong(song.id)
        } catch (error) {
            song["isliked"] = false
            console.error('Error', error);
        }
    }
    return songs
}
