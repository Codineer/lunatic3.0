import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getTopPlaylists } from '@/lib/playlist-service'
import { getTopAlbums } from '@/lib/albums-service'
import Link from 'next/link'
import Image from 'next/image'
const Home = async () => {
  const topPlaylists = await getTopPlaylists()
  const topAlbums = await getTopAlbums()

  return (

    <div className='p-4 text-[30px] font-semibold bg-gradient-to-b from-zinc-800 to-black'>
      Popular Albums
      <div className='p-10'>
        <Carousel className="w-[185px] md:w-[385px] lg:w-[1000px]">
          <CarouselContent>
            {/* <AlbumCards albums={topAlbums} /> */}
            {topAlbums.map((album, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                <div className="p-1 ">
                  <Link href={`/albums/${album.id}`}>
                    <div className="relative rounded-lg bg-[#1e1e1e] p-2 flex flex-col gap-2 hover:bg-[#272727] transition-all cursor-pointer">
                      <div className='w-40 h-40 relative'>

                        <Image src={album.imgUrl} layout="fill"
                          objectFit="cover" alt="lunatic" className='transition-all child mb-1 cursor-pointer rounded-md duration-150' />
                      </div>

                      <p className="text-white text-center text-lg font-semibold">{album.albumName}</p>
                    </div>

                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div>
        Popular Playlists
        <div className='p-10'>
          <Carousel className="w-[185px] md:w-[385px] lg:w-[1000px]">
            <CarouselContent>
              {/* <AlbumCards albums={topAlbums} /> */}
              {topPlaylists.map((playlist, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                  <div className="p-1 ">
                    <Link href={`/playlist/${playlist.playlistName}`}>
                      <div className="relative rounded-lg bg-[#1e1e1e] p-2 flex flex-col gap-2 hover:bg-[#272727] transition-all cursor-pointer">
                        <div className='w-40 h-40 relative'>

                          <Image src={playlist.coverImg ? playlist.coverImg : '/images/playlistcoverimg.png'} layout="fill"
                            objectFit="cover" alt="lunatic" className='transition-all child mb-1 cursor-pointer rounded-md duration-150' />
                        </div>

                        <p className="text-white text-center text-lg font-semibold">{playlist.playlistName}</p>
                      </div>

                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div >

  )
}

export default Home
