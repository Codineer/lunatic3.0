'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Circle, Play, Heart, Plus } from 'lucide-react';
import { likeCurrentPlaylist, unlikeCurrentPlaylist } from '@/actions/like-playlist';
import { toast } from 'sonner';
import { DialogDesc } from './dialog-desc';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export const Header = ({ playlist, length, isliked }) => {

    const [isLiked, setIsLiked] = useState(isliked)
    const like = () => {
        likeCurrentPlaylist(playlist.id, playlist.playlistName).then(val => val ? (toast.success("Added to liked Playlists!"), setIsLiked(true)) : (toast.error("Something went wrong!")))
    }
    const unlike = () => {
        unlikeCurrentPlaylist(playlist.id, playlist.playlistName).then(val => val ? (toast.success("removed from liked Playlists!"), setIsLiked(false)) : toast.error("Something went wrong!"))
    }
    return (
        <>

            <div className='flex m-4 gap-4'>
                <div className='w-auto'>
                    <div className='w-32 h-32 lg:h-48 lg:w-48   relative'>
                        <Dialog>
                            <DialogTrigger>
                                <div className='absolute top-2 left-2 z-10 p-2 hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer'>
                                    <Plus size={25} strokeWidth={2} />

                                </div>

                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className="pb-4">Upload Cover Image </DialogTitle>
                                    <DialogDesc />
                                </DialogHeader>
                            </DialogContent>

                        </Dialog>
                        <Image src={'/images/playlistcoverimg.png'} layout="fill"
                            objectFit="cover" alt="lunatic" className='transition-all shadow-lg shadow-black rounded-md ' />
                    </div>

                </div>
                <div className='flex flex-col justify-end'>
                    <div className=''>
                        Playlist
                    </div>
                    <div className='text-[48px]'>
                        {playlist.playlistName}
                    </div>
                    <div className='flex items-center gap-2 '>
                        {playlist.owner.userName.slice(0, 1).toUpperCase() + playlist.owner.userName.slice(1)}<Circle size={5} strokeWidth={50} className='rounded-full' />{length}{length > 1 ? " songs" : " song"}<Circle size={5} strokeWidth={50} className='rounded-full' />
                        {playlist.likes} likes
                    </div>
                </div>

            </div >
            <div className='flex gap-3 items-center   mx-4' >

                <div className="right-4 rounded-full bg-white p-3  border-white cursor-pointer"  >
                    <Play color='black' size={30} strokeWidth={1.5} fill="black" />
                </div>

                <Heart size={25} strokeWidth={1.5} className='cursor-pointer' color={isLiked ? "red" : "white"} onClick={isLiked ? unlike : like} fill={isLiked ? "red" : ""} />

            </div>
        </>
    )
}
