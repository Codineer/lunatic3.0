import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className=' flex justify-between text-white h-auto p-4 absolute top-0 w-screen bg-transparent'>
      <Image src="/images/logo.png" alt="Lunatic" height="120" width="120" />
    </div>
  )
}

export default Navbar
