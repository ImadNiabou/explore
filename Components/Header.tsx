import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className='flex justify-between px-5 py-3 shadow-sm'>
      <Link href="/">
      <Image src={Logo} alt='logo' width={130} height={200}/>
      </Link>
      <ul className='flex gap-8 items-center text-[#02356B]'>
        <li className='text-[18px] hover:text-[#02356B] transition-all duration-500 ease-in-out hover:font-bold cursor-pointer'>Home</li>
        <li className='text-[18px] hover:text-[#02356B] transition-all duration-500 ease-in-out hover:font-bold cursor-pointer'>About</li>
        <li className='text-[18px] hover:text-[#02356B] transition-all duration-500 ease-in-out hover:font-bold cursor-pointer'>Contact</li>
      </ul>
    </div>
  )
}
