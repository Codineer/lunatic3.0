'use client'
import { cn } from "@/lib/utils"
import { useSidebar } from "@/store/use-sidebar.js"
import { UserButton } from "@clerk/nextjs"
import { useMediaQuery } from "@uidotdev/usehooks"
import { useEffect } from "react"
export const Wrapper = ({ children }) => {
    const {
        collapsed,
        onCollapse,
        onExpand } = useSidebar(state => state)
    const matches = useMediaQuery("(max-width: 1023.9px)")
    useEffect(() => {
        if (matches) {
            console.log(collapsed)
            onCollapse();
        }
        else {
            onExpand()
        }
    }, [matches])
    return (
        <div className={cn('rounded-md pt-4 px-2 lg:p-4 w-[70px] lg:w-[400px] bg-[#121212]')}>
            {children}
        </div>
    )
}