'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { EllipsisVertical, Disc3, PlusIcon, AudioLines, Heart } from 'lucide-react'
import { likeCurrentSong } from '@/actions/like-song'
import { unlikeCurrentSong } from '@/actions/like-song'
import { addSong } from '@/actions/addsongplaylist'
import { toast } from 'sonner'
import CreatePlaylist from '@/components/create-playlist'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSidebar } from '@/store/use-sidebar'
export const SongCard = ({ index, song, playlists }) => {
    const [isLiked, setIsLiked] = useState(song.isliked)
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const albumid = currentUrl.split('/').pop();
    const { collapsed } = useSidebar(state => state)
    const like = async () => {
        e.stopPropagation();
        const val = await likeCurrentSong(song.id, albumid)
        if (val) {
            toast.success("Added to liked song!")
            setIsLiked(true)
        }
        else {
            toast.error("Something went wrong!")
        }
    }
    const unlike = async (e) => {
        e.stopPropagation();
        const val = await unlikeCurrentSong(song.id, albumid)
        if (val) {
            toast.success("Removed from liked song!")
            setIsLiked(false)
        }
        else {
            toast.error("Something went wrong!")
        }
    }
    const addSongInPlaylist = async (playlist, songId) => {
        const val = await addSong(playlist, songId)
        if (val) {
            toast.success(`Song added in ${playlist.playlistName}`)
        }
        else {
            toast.error("Something went wrong!")
        }
    }
    return (
        <div className='flex items-center'>
            <div className='w-[30px] text-[#A7A7A7]'>{index}</div>
            <div className='w-full flex gap-2 '>
                <div className='w-auto'>
                    <div className='w-10 h-10 lg:h-14 lg:w-14 relative'>
                        <Image src={song.imgUrl} layout="fill"
                            objectFit="cover" alt="lunatic" className='transition-all shadow-lg shadow-black rounded-md ' />
                    </div>

                </div>
                <div className='flex flex-col justify-start w-full'>
                    <div className='lg:text-[17px]'>

                        {song.songName}
                    </div>
                    <div className='text-[#A7A7A7]  text-[13px] lg:text-[15px] font-normal'>
                        {song.artist}
                    </div>
                </div>
                <div className='w-[50px] flex items-center cursor-pointer'>
                    <Heart className='' size={17} color={isLiked ? "red" : "white"} onClick={isLiked ? unlike : like} fill={isLiked ? "red" : ""} />
                </div>


            </div>
            {!collapsed &&
                <div className='w-[250px] p-2'>
                    {song.album.albumName}
                </div>
            }
            <div className='w-[40px] p-1'>{song.likes}</div>
            <div className='w-[60px]'>{song.duration}</div>
            <div className='w-[10px]'>
                <DropdownMenu>
                    <DropdownMenuTrigger className='focus:border-0 active:border-0'><EllipsisVertical size={17} className='cursor-pointer' /></DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-sm bg-[#1e1e1e] border-0 shadow-black">
                        <DropdownMenuItem className="flex items-center cursor-pointer gap-2" onClick={unlike}>
                            <div className='p-1 rounded-full  cursor-pointer w-auto'>

                                <Disc3 size={17} className='' />
                            </div>
                            {
                                isLiked ? "Remove from Liked Songs" :
                                    "Save to Liked Songs"
                            }
                        </DropdownMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger className=' w-full'>
                                <DropdownMenuItem className="flex gap-2 cursor-pointer">
                                    <div className='p-1 rounded-full hover:bg-[#3a3838]  cursor-pointer w-auto'>
                                        <PlusIcon size={17} className='' />
                                    </div>
                                    Add to your playlists
                                </DropdownMenuItem>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="rounded-sm bg-[#1e1e1e] border-0 shadow-black">

                                <CreatePlaylist />

                                <DropdownMenuSeparator />
                                {playlists.map(playlist =>
                                    <DropdownMenuItem className="flex gap-2 cursor-pointer" key={playlist.id} onClick={() => addSongInPlaylist(playlist, song.id)}>
                                        <div className='p-1 rounded-full hover:bg-[#3a3838]  cursor-pointer w-auto'>
                                            <AudioLines size={17} className='' />
                                        </div>

                                        {playlist.playlistName}
                                    </DropdownMenuItem>)}

                            </DropdownMenuContent>


                        </DropdownMenu>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}
