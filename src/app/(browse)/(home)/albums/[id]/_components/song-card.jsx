import React from 'react'
import Image from 'next/image'
export const SongCard = ({ index, song, duration }) => {
    return (
        <div className='flex items-center'>
            <div className='w-[30px] text-[#A7A7A7]'>{index}</div>
            <div className='w-full flex gap-2 '>
                <div className='w-auto'>
                    <div className='w-10 h-10 lg:h-14 lg:w-14 relative'>
                        <Image src={song.imgUrl} layout="fill"
                            objectFit="cover" alt="lunatic" className='transition-all shadow-lg shadow-black rounded-md ' />
                    </div>

                </div>
                <div className='flex flex-col justify-start'>
                    <div className='lg:text-[17px]'>

                        {song.songName}
                    </div>
                    <div className='text-[#A7A7A7]  text-[13px] lg:text-[15px] font-normal'>
                        {song.artist}
                    </div>
                </div>
            </div>
            <div className='w-[40px]'>{song.likes}</div>
            <div className='w-[60px]'>{duration}</div>
        </div>
    )
}
