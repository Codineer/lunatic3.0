import React from 'react'
import { AlignLeft } from 'lucide-react';
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
const Menu = async () => {
    const User = await getSelf()
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger><AlignLeft size={30} /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>
                        <Link href={`/user/${User.userName}`}>
                            Profile
                        </Link>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href={"/albums"}>
                            All Albums
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Liked Albums</DropdownMenuItem>

                    <DropdownMenuItem>Your Playlists</DropdownMenuItem>
                    <DropdownMenuItem>Liked Songs</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </>
    )
}

export default Menu
