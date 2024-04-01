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
                    <Link href={`/user/${User.externalUserId}`}>
                        <DropdownMenuLabel className="cursor-pointer">
                            Profile
                        </DropdownMenuLabel>
                    </Link>
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
                    <Link href={`/user/${User.externalUserId}`}>
                        <DropdownMenuItem className="cursor-pointer"><AudioLines size={17} className='mr-2' />Your Playlists</DropdownMenuItem>
                    </Link>
                    <Link href={"/likedsongs"}>
                        <DropdownMenuItem className="cursor-pointer"><Disc3 size={17} className='mr-2' />Liked Songs</DropdownMenuItem>
                    </Link>
                    <CreatePlaylist padding={0} />

                </DropdownMenuContent>
            </DropdownMenu >

        </>
    )
}

export default Menu
