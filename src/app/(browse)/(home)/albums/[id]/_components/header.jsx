'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Circle, Play, Heart } from 'lucide-react';
import { likeCurrentAlbum, unlikeCurrentAlbum } from '@/actions/like-album'
import { toast } from 'sonner';
import { useCurrentSong } from '@/store/use-current-song';
import { useCurrentSongObject } from '@/store/use-current-songList';
export const Header = ({ album, length, isliked, songs }) => {
    const [isLiked, setIsLiked] = useState(isliked)
    const { currentSong, setCurrentSong } = useCurrentSong(state => state)
    const { currentSongObject, setCurrentSongObject } = useCurrentSongObject(state => state)
    const like = () => {
        likeCurrentAlbum(album.id).then(val => val ? (toast.success("Added to liked albums!"), setIsLiked(true)) : toast.error("Something went wrong!"))

    }
    const unlike = () => {
        unlikeCurrentAlbum(album.id).then(val => val ? (toast.success("removed from liked albums!"), setIsLiked(false)) : toast.error("Something went wrong!"))

    }
    const playAllSongs = () => {
        // if (currentSong.id === song.id) {
        //     return
        // }
        if (currentSongObject.id !== album.id) {
            setCurrentSongObject({ id: album.id, list: songs })
            setCurrentSong(songs[0])
            return
        }

    }
    return (
        <>

            <div className='flex m-4 gap-4'>
                <div className='w-auto'>
                    <div className='w-32 h-32 lg:h-48 lg:w-48   relative'>

                        <Image src={album.imgUrl} layout="fill"
                            objectFit="cover" alt="lunatic" className='transition-all shadow-lg shadow-black rounded-md ' />
                    </div>

                </div>
                <div className='flex flex-col justify-end'>
                    <div className=''>
                        Album
                    </div>
                    <div className='text-[48px]'>
                        {album.albumName}
                    </div>
                    <div className='flex items-center gap-2 '>
                        {length}{length > 1 ? " songs" : " song"}<Circle size={5} strokeWidth={50} className='rounded-full' />
                        {album.likes} likes
                    </div>
                </div>

            </div>
            <div className='flex gap-3 items-center   mx-4' >

                <div className="right-4 rounded-full bg-white p-3  border-white cursor-pointer" onClick={playAllSongs} >
                    <Play color='black' size={30} strokeWidth={1.5} fill="black" />
                </div>

                <Heart size={25} strokeWidth={1.5} className='cursor-pointer' color={isLiked ? "red" : "white"} onClick={isLiked ? unlike : like} fill={isLiked ? "red" : ""} />

            </div>
        </>
    )
}
