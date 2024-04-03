import { Skeleton } from "./ui/skeleton"
export const UserItemSkeleton = () => {
    return (
        <div className='flex flex-col gap-3 '>

            <Skeleton className="lg:w-[400px] w-70px h-[80px] rounded-full" />
            <Skeleton className="lg:w-[400px] w-70px h-[80px] rounded-full" />
            <Skeleton className="lg:w-[400px] w-70px h-[80px] rounded-full" />
            <Skeleton className="lg:w-[400px] w-70px h-[80px] rounded-full" />
            <Skeleton className="lg:w-[400px] w-70px h-[80px] rounded-full" />



        </div>



    )

}