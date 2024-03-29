import React from 'react'
import { UserButton } from '@clerk/nextjs'
import Menu from './menu-component';
import PreviousButton from './previous-button';
const Navbar = () => {

    return (
        <div className='bg-transparent flex p-4 justify-between'>
            <div className='flex gap-2 items-center'>
                <Menu />
                <PreviousButton />
            </div>
            <UserButton afterSignOutUrl="/sign-in" />
        </div>
    )
}

export default Navbar
