"use client"
import { IconMenu2, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import React, { useState } from 'react'

export const NavbarComponent = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='w-full h-20 bg-[#866b4f] flex justify-center'>
        <div className='w-11/12 md:w-11/12 flex justify-between items-center'>
          <Link href='/' className='text-white font-bold text-xl fade-in-left'>HISTOMAP</Link>
          <div className='items-center fade-in-right hidden md:flex'>
            <Link href='/map' className='mr-14 text-white text-lg transition-all hover:opacity-70'>Map</Link>
            <Link href='/about' className='mr-14 text-white text-lg transition-all hover:opacity-70'>About Us</Link>
            <Link href='/contact' className='text-white text-lg transition-all hover:opacity-70'>Contact</Link>
          </div>
          <IconMenu2 size={36} color='white' className='flex md:hidden fade-in-left' onClick={() => setIsOpen(true)} />
        </div>
      </div>
      <div className={`absolute ${isOpen ? 'flex' : 'hidden'} flex-col h-screen w-full bg-black/80 top-0 z-50`}>
        <div className='flex p-5'>
          <IconX size={36} color='white' onClick={() => setIsOpen(false)} />
        </div>
        <div className='flex flex-col gap-8'>
          <Link href='/map' className='w-full text-center text-white text-xl transition-all hover:opacity-70'>Map</Link>
          <Link href='/about' className='w-full text-center text-white text-xl transition-all hover:opacity-70'>About Us</Link>
          <Link href='/contact' className='w-full text-white text-center text-xl transition-all hover:opacity-70'>Contact</Link>
        </div>
      </div>
    </>
  )
}
