import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.svg'

export const Header = () => {
  return (
    <div className='flex justify-between px-5 py-3 shadow-sm'>
      <div>
      <Image src={Logo} alt='logo' width={200} height={200}/>
      </div>
      <ul className='flex gap-8 items-center text-[#546D72]'>
        <li className='text-[18px] hover:text-[#1C2B30] transition-all duration-500 ease-in-out hover:font-bold cursor-pointer'>Home</li>
        <li className='text-[18px] hover:text-[#1C2B30] transition-all duration-500 ease-in-out hover:font-bold cursor-pointer'>About Us</li>
        <li className='text-[18px] hover:text-[#1C2B30] transition-all duration-500 ease-in-out hover:font-bold cursor-pointer'>Contact Us</li>
      </ul>
    </div>
  )
}
