'use client'
import React, { useEffect, useRef } from 'react'
import './playbar.css'
import { SkipForward } from 'lucide-react'
import { SkipBack } from 'lucide-react'
import { useCurrentSong } from '@/store/use-current-song'
import { useCurrentSongObject } from '@/store/use-current-songList'
import Image from 'next/image'
export const Playbar = () => {
    const { currentSong, setCurrentSong } = useCurrentSong(state => state)
    const { currentSongObject } = useCurrentSongObject(state => state)
    useEffect(() => {
        // console.log(currentSong)
        audioRef.current.play()
    }, [currentSong])
    useEffect(() => {
        // console.log(currentSongObject)
    }, [currentSongObject])

    const audioRef = useRef()
    const playNextSong = () => {
        currentSongObject.list.forEach((song, index) => {
            if (currentSong.id === song.id) {
                if (currentSongObject.list[index + 1]) {
                    setCurrentSong(currentSongObject.list[index + 1])
                    return
                }
                else {
                    setCurrentSong(currentSongObject.list[0])
                    return
                }
            }
        });

    }
    const playPreviousSong = () => {
        currentSongObject.list.forEach((song, index) => {
            if (currentSong.id === song.id) {

                if (currentSongObject.list[index - 1]) {
                    setCurrentSong(currentSongObject.list[index - 1])
                    return
                }
                else {
                    setCurrentSong(currentSongObject.list[currentSongObject.list.length - 1])
                    return
                }
            }
        })
    }
    return (
        <div className='w-full  bottom-0 p-2 flex justify-center bg-[#1D1B1B] items-center z-20 absolute'>
            {currentSong.imgUrl &&
                <div className='w-24 h-24 lg:h-48 lg:w-48  absolute bottom-[110%] left-2 z-50'>

                    <Image src={currentSong.imgUrl} layout="fill"
                        objectFit="cover" alt="lunatic" className='transition-all shadow-lg shadow-black rounded-md ' />
                </div>
            }
            <SkipBack fill='white' onClick={playPreviousSong} className='cursor-pointer' />
            <audio ref={audioRef} onEnded={playNextSong} src={currentSong.songUrl} controls controlsList="nodownload" className="w-[75%]" >
                {/* <source src={currentSong} type="audio/mpeg" /> */}
                Your browser does not support the audio element.
            </audio>
            <SkipForward fill='white' onClick={playNextSong} className='cursor-pointer' />
        </div>
    )
}
