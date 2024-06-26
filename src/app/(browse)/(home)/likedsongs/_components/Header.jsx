'use client'
import React from 'react'
import Image from 'next/image'
import { Play, Circle } from 'lucide-react';
import { useCurrentSong } from '@/store/use-current-song';
import { useCurrentSongObject } from '@/store/use-current-songList';

export const Header = ({ username, length, songs }) => {
    const { currentSong, setCurrentSong } = useCurrentSong(state => state)
    const { currentSongObject, setCurrentSongObject } = useCurrentSongObject(state => state)
    const playAllSongs = () => {
        // if (currentSong.id === song.id) {
        //     return
        // }
        if (currentSongObject.id !== "liked_song123") {
            setCurrentSongObject({ id: "liked_song123", list: songs })
            setCurrentSong(songs[0])
            return
        }

    }
    return (
        <>

            <div className='flex m-4 gap-4'>
                <div className='w-auto'>
                    <div className='w-32 h-32 lg:h-48 lg:w-48   relative'>

                        <Image src={'/images/likedsongs.jpg'} layout="fill"
                            objectFit="cover" alt="lunatic" className='transition-all shadow-lg shadow-black rounded-md ' />
                    </div>

                </div>
                <div className='flex flex-col justify-end'>
                    <div className=''>
                        Playlist
                    </div>
                    <div className='text-[24px] font-semibold lg:text-[48px]'>
                        Liked Songs
                    </div>
                    <div className='flex items-center gap-2 '>
                        {username.slice(0, 1).toUpperCase() + username.slice(1)}<Circle size={5} strokeWidth={50} className='rounded-full' />
                        {length}{length > 1 ? " songs" : " song"}

                    </div>
                </div>

            </div>
            <div className='flex gap-3 items-center   mx-4' >

                <div className="right-4 rounded-full bg-white p-3  border-white cursor-pointer" onClick={playAllSongs} >
                    <Play color='black' size={30} strokeWidth={1.5} fill="black" />
                </div>

            </div>
        </>
    )
}
