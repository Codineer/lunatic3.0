"use client"
import React from 'react'
import Link from 'next/link';
import { Home, Heart, Music } from 'lucide-react';
import { useSidebar } from '@/store/use-sidebar';
import { cn } from '@/lib/utils';
import Image from 'next/image';
const TopSection = () => {
  const { collapsed } = useSidebar(state => state)
  return (
    <>
      <div className={cn('flex flex-col pb-4 items-center lg:items-start')} style={{ borderBottom: '1px inset rgba(255, 255, 255, 0.15)' }}>
        {collapsed ?
          <Link href={"/"}>
            <Music size={30} strokeWidth={3} className='mb-2 cursor-pointer' />
          </Link>
          :
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="Gamehub" height="120" width="120" className='mb-3 cursor-pointer' />
          </Link>
        }
        <div className='flex gap-2 text-[17px] w-full p-3 font-medium hover:bg-[#1e1e1e] transition-all rounded-sm cursor-pointer'>

          <Link href={"/"}>
            <Home />
          </Link>
          {!collapsed && "Home"}
        </div>
        <div className='flex gap-2 text-[17px] w-full p-3 font-medium hover:bg-[#1e1e1e] transition-all rounded-sm cursor-pointer'>
          <Heart />
          {!collapsed && "Liked Songs"}
        </div>

      </div>

    </>
  )
}

export default TopSection
