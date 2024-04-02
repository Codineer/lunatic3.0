import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

export const ChildrenSkeleton = () => {
    return (
        <div className='m-4'><Skeleton className="w-[100px] h-[20px] rounded-full" /></div>
    )
}
