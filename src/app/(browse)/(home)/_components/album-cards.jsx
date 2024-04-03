'use client'
import React, { useState } from 'react'
import { Play } from 'lucide-react';
import './_stylesheets/hover-effect.css'
import Link from 'next/link'
import Image from 'next/image'
export const AlbumCards = ({ albums }) => {
    const [hovered, setHovered] = useState(null)
    return (

        <div className='flex flex-wrap gap-2 justify-start pl-2 sm:pl-2 lg:gap-7 lg:p-3'>
            {albums.map((album, index) => (
                <Link href={`/albums/${album.id}`} key={album.id}>
                    <div className="parent relative w-auto rounded-lg bg-[#1e1e1e] p-2 flex flex-col gap-2 hover:bg-[#272727] transition-all cursor-pointer" onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)}>
                        {hovered === index &&
                            <div className="child absolute z-50 bottom-[60px] right-4 rounded-full bg-[#21201e] p-2 transition-all border border-white"  >
                                <Play color='white' size={15} strokeWidth={2} className='child transition-all duration-1000' />
                            </div>
                        }
                        <Image src={album.imgUrl} alt="lunatic" height="120" width="120" className='transition-all child mb-1 cursor-pointer rounded-md duration-150' />
                        <p className="text-white text-center text-lg font-semibold">{album.albumName}</p>
                    </div>
                </Link>
            ))
            }
        </div >

    )
}

