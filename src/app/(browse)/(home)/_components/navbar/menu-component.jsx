import React from 'react'
import { EllipsisIcon, ListMusic, AudioLines, Disc3, Library, Plus } from 'lucide-react';
import Link from 'next/link';
import { getSelf } from '@/lib/auth-service';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import CreatePlaylist from '@/components/create-playlist';
const Menu = async () => {
    const User = await getSelf()
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className='focus:border-0 active:border-0'><EllipsisIcon size={30} /></DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-sm bg-[#1e1e1e] border-0 shadow-black">
                    <DropdownMenuLabel className="cursor-pointer">
                        <Link href={`/user/${User.userName}`}>
                            Profile
                        </Link>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href={"/albums"}>
                        <DropdownMenuItem className="cursor-pointer">
                            <Library size={17} className='mr-2' />

                            All Albums
                        </DropdownMenuItem>
                    </Link>
                    <Link href={'/likedalbums'}>
                        <DropdownMenuItem className="cursor-pointer" ><ListMusic size={17} className='mr-2' />Liked Albums</DropdownMenuItem>

                    </Link>

                    <DropdownMenuItem className="cursor-pointer"><AudioLines size={17} className='mr-2' />Your Playlists</DropdownMenuItem>
                    <Link href={"/likedsongs"}>
                        <DropdownMenuItem className="cursor-pointer"><Disc3 size={17} className='mr-2' />Liked Songs</DropdownMenuItem>
                    </Link>
                    <CreatePlaylist padding={0} />

                </DropdownMenuContent>
            </DropdownMenu>

        </>
    )
}

export default Menu
