'use client'
import React from 'react'
import { Heart, Clock, Hash } from 'lucide-react'
import { SongCard } from './song-card'
import { useCurrentSong } from '@/store/use-current-song'
import { useCurrentSongObject } from '@/store/use-current-songList'
export const Songs = ({ songs, playlists }) => {
    const { currentSong, setCurrentSong } = useCurrentSong(state => state)
    const { currentSongObject, setCurrentSongObject } = useCurrentSongObject(state => state)
    const changeCurrentSongobject = (song) => {
        if (currentSong.id === song.id) {
            return
        }
        if (currentSongObject.id !== song.albumId) {
            setCurrentSongObject({ id: song.albumId, list: songs })
            setCurrentSong(song)
            return
        }
        if (currentSongObject.id === song.albumId) {
            setCurrentSong(song)
        }
    }
    return (

        <div className='m-4'>
            <div className="w-full text-[#A7A7A7]  text-[15px] font-light flex items-center py-3" style={{ borderBottom: "1px inset rgba(255, 255, 255, 0.15)", fontWeight: "400" }}>
                <div className='w-[30px]'><Hash size={15} /></div>
                <div className='w-full'>Title</div>
                <div className='w-[40px]'><Heart size={15} /></div>
                <div className='w-[60px]'><Clock size={15} /></div>
                <div className='w-[10px]'></div>
            </div>
            <div className='mt-3 flex flex-col gap-2'>
                {songs.map((song, index) => {
                    return <div key={song.id} onClick={() => changeCurrentSongobject(song)} className='cursor-pointer'>
                        <SongCard index={index + 1} song={song} playlists={playlists} />
                    </div>
                })}
            </div>
        </div>
    )
}
