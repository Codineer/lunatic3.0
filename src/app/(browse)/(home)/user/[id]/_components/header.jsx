'use client'
import React from 'react'
import Image from 'next/image'
import { Play, Circle } from 'lucide-react';


export const Header = ({ img, username, length }) => {

    return (
        <>

            <div className='flex m-4 gap-4 '>
                <div className='w-auto'>
                    <div className='w-32 h-32 lg:h-48 lg:w-48   relative'>

                        <Image src={img} layout="fill"
                            objectFit="cover" alt="lunatic" className=' transition-all shadow-lg shadow-black rounded-full ' />
                    </div>

                </div>
                <div className='flex flex-col justify-center'>
                    <div className=''>
                        Profile
                    </div>
                    <div className='text-[34px] font-bold lg:text-[48px]'>
                        {username}
                    </div>
                    <div className='flex items-center gap-2 flex-wrap'>

                        <Circle size={5} strokeWidth={50} className='rounded-full' />
                        <div>
                            {length}{length > 1 ? " public playlists" : " public playlist"}

                        </div>

                    </div>
                </div>

            </div>
            <div className='flex gap-3 items-center   mx-4' >


            </div>
        </>
    )
}
