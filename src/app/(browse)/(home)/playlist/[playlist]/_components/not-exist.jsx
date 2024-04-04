'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
export const NotExist = () => {
    const router = useRouter()
    return (
        <div className='p-2'>Playlist doesnt exists.It might have been deleted by owner
            <div className='pt-2'>
                <Button onClick={() => router.push('/')}>Go to Home Page</Button>

            </div>
        </div>
    )
}
