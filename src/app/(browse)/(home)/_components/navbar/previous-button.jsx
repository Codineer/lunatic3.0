"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Hint from '@/components/hint';
const PreviousButton = () => {
    const router = useRouter()
    return (
        <div>
            <Hint content="Back">
                <ArrowLeft className='hover:bg-[#1e1e1e] p-1 rounded-full cursor-pointer' size={35} onClick={() => {
                    router.back()
                }

                } />
            </Hint>
        </div>
    )
}

export default PreviousButton
