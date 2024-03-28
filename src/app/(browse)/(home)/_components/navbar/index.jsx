import React from 'react'
import { UserButton } from '@clerk/nextjs'
const Navbar = () => {
    return (
        <div className='bg-transparent flex p-4 justify-between'>
            <div>
                content
            </div>
            <UserButton afterSignOutUrl="/sign-in" />
        </div>
    )
}

export default Navbar
