import React from 'react'
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image'
export const DialogDesc = () => {
    const [Img, setImg] = useState('/images/plus.png')
    return (
        <DialogDescription className="flex justify-between my-3">
            {/* <div className='relative w-28 h-28 lg:size-48'>
                <Image src={Img} layout="fill"
                    objectFit="cover" alt="lunatic" className='transition-all shadow-lg shadow-black rounded-md ' />
            </div> */}

            <form onSubmit={async (e) => {
                e.preventDefault();
                const formdata = new FormData(e.currentTarget);
                const formData = new FormData()

                if (!['image/jpeg', 'image/png', 'image/webp', 'image/jpg'].includes(formdata.get('file').type)) {
                    toast.error("Upload image files only")
                    return
                };
                formData.append('file', formdata.get("file"))
                formData.append('upload_preset', 'playlistcover')
                const data = await fetch('https://res.cloudinary.com/v1_1/dkezztley/image/upload',
                    {
                        method: 'POST',
                        body: formData,
                        mode: 'no-cors'
                    }
                )

                console.log('data', data)


            }} className="flex flex-col gap-2 w-full">
                <Input name="file" type='file' className="cursor-pointer" />
                <Button type="submit">Upload</Button>
            </form>

        </DialogDescription>
    )
}
