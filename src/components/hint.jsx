import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const Hint = ({ children, content }) => {
    return (
        <>
            <TooltipProvider>
                <Tooltip delayDuration={100} >
                    <TooltipTrigger asChild>{children}</TooltipTrigger>
                    <TooltipContent className="border-0 bg-white text-black">
                        <p className='font-semibold'>{content}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    )
}

export default Hint
