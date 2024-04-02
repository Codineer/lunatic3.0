import React from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DialogDescription } from '@/components/ui/dialog';
import { create } from '@/actions/create';
import { toast } from 'sonner';
import { useTransition } from 'react';
export const DialogDesc = () => {

    const [isPending, startTransition] = useTransition();

    return (
        <DialogDescription className="flex justify-between my-3">
            {/* <div className='relative w-28 h-28 lg:size-48'>
                <Image src={Img} layout="fill"
                    objectFit="cover" alt="lunatic" className='transition-all shadow-lg shadow-black rounded-md ' />
            </div> */}

            <form action={async (formData) => {
                startTransition(async () => {
                    const imgUrl = await create(formData, window.location.pathname)
                    if (imgUrl) {
                        toast.success("New Cover Page Updated")
                        return
                    }
                    toast.error("something went wrong")

                })
            }
            } className="flex flex-col gap-2 w-full">
                <Input name="image" type='file' className="cursor-pointer" />
                <Button disabled={isPending} type="submit">Upload</Button>
            </form>

        </DialogDescription>
    )
}
