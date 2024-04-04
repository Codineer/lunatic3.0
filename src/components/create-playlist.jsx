'use client'
import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTransition } from 'react'
import { createPlaylist } from '@/actions/create-playlist'
import { toast } from 'sonner'
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
const CreatePlaylist = ({ padding = 1 }) => {
    const [data, setData] = useState("")
    const [isPending, startTransition] = useTransition();
    const createPlaylistOnClick = () => {
        startTransition(async () => {
            try {
                if (data.includes(" ")) {
                    toast.message("spaces not allowed")
                    return
                }
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
        <>
            <Dialog>
                <DialogTrigger>

                    <DropdownMenuLabel className="flex gap-2 cursor-pointer pr-4 items-center">
                        <div className={cn(" rounded-full  cursor-pointer w-auto", `p-${padding}`)}>

                            <Plus size={17} className='' />
                        </div>
                        Create Playlist
                    </DropdownMenuLabel>

                </DialogTrigger>
                <DialogContent>

                    <DialogTitle>Create your playlist!</DialogTitle>

                    <div className='flex flex-col gap-3'>
                        <Input type="text" value={data} placeholder="Playlist name" onChange={e => setData(e.currentTarget.value)} />
                        <Button disabled={isPending}
                            size="sm"
                            onClick={createPlaylistOnClick} >Create Playlist</Button>
                    </div>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default CreatePlaylist
