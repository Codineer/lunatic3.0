import React from 'react'
import { Play, Heart, Clock, Hash } from 'lucide-react'
import axios from 'axios'
import * as mm from 'music-metadata'
import { SongCard } from './song-card'
export const Songs = ({ songs }) => {
    const timeformat = (num) => {
        const min = Math.floor(num / 60)
        const sec = Math.floor(num) % 60
        return `${min}:${sec > 0 ? sec > 9 ? sec : "0" + sec : '00'}`
    }
    return (

        <div className='m-4'>
            <div className='flex gap-3 items-center p-2' >

                <div className="right-4 rounded-full bg-white p-3  border-white cursor-pointer"  >
                    <Play color='black' size={30} strokeWidth={1.5} fill="black" />
                </div>
                <Heart size={25} strokeWidth={1.5} className='cursor-pointer' />
            </div>

            <div className="w-full text-[#A7A7A7]  text-[15px] font-light flex items-center py-3" style={{ borderBottom: "1px inset rgba(255, 255, 255, 0.15)", fontWeight: "400" }}>
                <div className='w-[30px]'><Hash size={15} /></div>
                <div className='w-full'>Title</div>
                <div className='w-[40px]'><Heart size={15} /></div>
                <div className='w-[60px]'><Clock size={15} /></div>
            </div>
            <div className='mt-3'>
                {songs.map(async (song, index) => {
                    const response = await axios.get(song.songUrl, { responseType: 'arraybuffer' });
                    // Parse metadata
                    const metadata = await mm.parseBuffer(response.data, 'audio/mpeg');
                    // Extract duration from metadata
                    const { duration: songDuration } = metadata.format;
                    return <SongCard key={song.id} index={index + 1} song={song} duration={timeformat(songDuration)} />
                })}
            </div>
        </div>
    )
}
