'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export const AlbumCards = ({ albums }) => {
    console.log(albums)
    return (

        <div className='flex flex-wrap gap-2 justify-center'>
            {albums.map((album) => (
                <Link href={`/albums/${album.id}`}>
                    <div className="w-auto rounded-lg bg-[#1e1e1e] p-2 flex flex-col gap-2">
                        <Image src={album.imgUrl} alt="Gamehub" height="120" width="120" className='mb-3 cursor-pointer rounded-md' />
                        <p className="text-white text-center text-lg font-semibold">{album.albumName}</p>
                    </div>
                </Link>
            ))}
        </div>

    )
}


