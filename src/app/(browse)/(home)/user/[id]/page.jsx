import React from 'react'
import { Header } from './_components/header'
import { ScrollArea } from '@/components/ui/scroll-area'
import { clerkClient } from '@clerk/nextjs'
import { getLikedPlaylistsFromDatabase, getUserPlaylistsFromDatabase } from '@/lib/playlist-service'
import { UserPlaylists } from './_components/user-playlists'
import { LikedPlaylists } from './_components/liked-playlists'
const page = async ({ params }) => {
    const user = await clerkClient.users.getUser(params.id)
    const userPlaylists = await getUserPlaylistsFromDatabase()
    const likedPlaylists = await getLikedPlaylistsFromDatabase()
    return (
        <div className='flex flex-col h-full'>
            <Header img={user.imageUrl} username={user.username} length={userPlaylists.length} />
            <ScrollArea className="h-[60%]" >

                <UserPlaylists playlists={userPlaylists} />
                <LikedPlaylists playlists={likedPlaylists} />

            </ScrollArea>
        </div>
    )
}

export default page
