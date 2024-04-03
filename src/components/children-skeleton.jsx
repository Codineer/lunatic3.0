import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

export const ChildrenSkeleton = () => {
    return (
        <div className='m-4 flex flex-col gap-3 '>

            <Skeleton className="w-[full] h-[80px] rounded-full" />
            <Skeleton className="w-[full] h-[80px] rounded-full" />
            <Skeleton className="w-[full] h-[80px] rounded-full" />
            <Skeleton className="w-[full] h-[80px] rounded-full" />
            <Skeleton className="w-[full] h-[80px] rounded-full" />



        </div>
    )
}
