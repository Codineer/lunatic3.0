import axios from 'axios'
import * as mm from 'music-metadata'
const timeformat = (num) => {
    const min = Math.floor(num / 60)
    const sec = Math.floor(num) % 60
    return `${min}:${sec > 0 ? sec > 9 ? sec : "0" + sec : '00'}`
}

export const fetchAndUpdateDurations = async (songs) => {
    for (const song of songs) {
        try {
            const response = await axios.get(song.songUrl, { responseType: 'arraybuffer' });
            const metadata = await mm.parseBuffer(response.data, 'audio/mpeg');
            const { duration: songDuration } = metadata.format;
            song['duration'] = timeformat(songDuration);
        } catch (error) {
            console.error('Error fetching song duration:', error);
        }
    }
    return songs
};
