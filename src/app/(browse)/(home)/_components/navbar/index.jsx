import React from 'react'
import { UserButton } from '@clerk/nextjs'
import Menu from './menu-component';
import PreviousButton from './previous-button';
import { currentUser } from '@clerk/nextjs';

const Navbar = async () => {
    const user = await currentUser()
    return (
        <div className='bg-transparent flex p-4 justify-between'>
            <div className='flex gap-2 items-center'>
                <Menu />
                <PreviousButton />
            </div>
            <div className='flex gap-4 items-center'>
                <div className='text-[15px] lg:text-[20px] font-semibold'>
                    Welcome,
                    {user.username.slice(0, 1).toUpperCase() + user.username.slice(1)}
                </div>

                <UserButton afterSignOutUrl="/sign-in" />

            </div>
        </div>
    )
}

export default Navbar
