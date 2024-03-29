import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTransition } from 'react'
import { createPlaylist } from '@/actions/create-playlist'
import { toast } from 'sonner'
const PopOverContent = () => {
    const [data, setData] = useState("")
    const [isPending, startTransition] = useTransition();
    const createPlaylistOnClick = () => {
        startTransition(async () => {
            try {
                if (!data) {
                    return
                }
                const playlist = await createPlaylist(data)
                toast.success(`Playlist ${playlist.playlistName} Created!`)
            } catch {
                toast.error("Something Went Wrong")

            }
        })
    }
    return (
        <div className='flex flex-col gap-3'>
            <Input type="text" value={data} placeholder="Playlist name" onChange={e => setData(e.currentTarget.value)} />
            <Button disabled={isPending}
                size="sm"
                onClick={createPlaylistOnClick} >Create Playlist</Button>
        </div>
    )
}

export default PopOverContent
