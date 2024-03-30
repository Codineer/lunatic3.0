'use client'
import React from 'react'
import Image from 'next/image'
import { Circle } from 'lucide-react';

export const Header = ({ album, length }) => {

    return (
        <div className='flex m-4 gap-4'>
            <div className='w-auto'>
                <div className='w-32 h-32 lg:h-48 lg:w-48   relative'>

                    <Image src={album.imgUrl} layout="fill"
                        objectFit="cover" alt="lunatic" className='transition-all shadow-lg shadow-black rounded-md ' />
                </div>

            </div>
            <div className='flex flex-col justify-end'>
                <div className=''>
                    Album
                </div>
                <div className='text-[48px]'>
                    {album.albumName}
                </div>
                <div className='flex items-center gap-2 '>
                    {length}{length > 1 ? " songs" : " song"}<Circle size={5} strokeWidth={50} className='rounded-full' />
                    {album.likes} likes
                </div>
            </div>
        </div>
    )
}
